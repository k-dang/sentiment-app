import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#83E8BA',
    // backgroundColor: '#F76C5E',
    borderRadius: 20,
    paddingRight: 28,
    paddingLeft: 28,
    paddingTop: 12,
    paddingBottom: 12
  },
  title: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center'
  }
});

export default Button;
