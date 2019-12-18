import React from 'react';
import { View, Text, StyleSheet, FlatList, SafeAreaView } from 'react-native';

const Table = ({ data }) => {
  const colorText = value => {
    if (value == 0) {
      return styles.greyText;
    }
    return value > 0 ? styles.greenText : styles.redText;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>stats</Text>
      <FlatList
        data={data}
        keyExtractor={item => item.date}
        renderItem={({ item }) => {
          return (
            <View style={styles.row}>
              <View style={styles.dateLabel}>
                <Text style={colorText(item.sentiment)}>{item.date}</Text>
              </View>
              <Text style={colorText(item.sentiment)}>
                {item.sentiment.toFixed(4)}
              </Text>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // borderWidth: 1
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  title: {
    fontSize: 18,
    textDecorationLine: 'underline'
  },
  dateLabel: {
    paddingRight: 25
  },
  greenText: {
    color: '#83E8BA'
  },
  redText: {
    color: '#F76C5E'
  },
  greyText: {
    color: '#C0C0C0'
  }
});

export default Table;
