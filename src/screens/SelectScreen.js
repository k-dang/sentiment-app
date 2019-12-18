import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ButtonList from '../components/ButtonList';

const SelectScreen = () => {
  const companies = ['Tesla', 'Microsoft', 'Apple', 'Disney'];

  return (
    <>
      <View style={styles.header}>
        <Text style={styles.titleText}>Check Sentiments</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <ButtonList titles={companies} />
      </View>
    </>
  );
};

const leftPadding = 24;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: '#586BA4',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingLeft: leftPadding,
    justifyContent: 'center'
  },
  titleText: {
    color: 'white',
    fontSize: 35
  },
  buttonsContainer: {
    backgroundColor: 'white',
    flex: 3,
    paddingTop: 15,
    paddingLeft: leftPadding,
    paddingRight: leftPadding,
    justifyContent: 'center'
  }
});

SelectScreen.navigationOptions = {
  header: null
};

export default SelectScreen;
