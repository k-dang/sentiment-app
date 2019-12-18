import React, { useEffect, useContext } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import Chart from '../components/Chart';
import Table from '../components/Table';
import { Context as SentimentsContext } from '../context/SentimentsContext';

const CompanyScreen = ({ navigation }) => {
  const companyName = navigation.getParam('companyName');
  const { state, getSentimentsWeek, getSentimentsAverage } = useContext(
    SentimentsContext
  );
  const sentiment = state.sentiments[companyName];
  const average =
    state.sentimentsAverage[companyName] != undefined
      ? state.sentimentsAverage[companyName].toFixed(4)
      : '...';
  useEffect(() => {
    if (!sentiment) {
      getSentimentsWeek(companyName);
      getSentimentsAverage(companyName);
    }
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{companyName}</Text>
        <Text style={styles.stitle}>{average}</Text>
      </View>
      <Text style={styles.subtitle}>past 7 days</Text>
      {sentiment != null ? (
        <Chart data={sentiment} />
      ) : (
        <View style={styles.chartPlaceHolder}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      )}
      <Table data={sentiment} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 12,
    paddingLeft: 24,
    paddingRight: 24
  },
  header: {
    // borderWidth: 1,
    flexDirection: 'row'
  },
  title: {
    fontSize: 36
  },
  stitle: {
    paddingLeft: 10,
    paddingBottom: 5,
    color: '#A9A9A9',
    alignSelf: 'flex-end'
  },
  subtitle: {
    color: '#A9A9A9',
    fontSize: 18
  },
  chartPlaceHolder: {
    height: 200,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default CompanyScreen;
