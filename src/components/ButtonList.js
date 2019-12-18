import React from 'react';
import { View, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import Button from '../components/Button';
import { withNavigation } from 'react-navigation';

const ButtonList = ({ titles, navigation }) => {
  const loaded = true;

  return (
    <>
      {loaded ? (
        <FlatList
          horizontal={false}
          numColumns={2}
          data={titles}
          keyExtractor={(item, i) => i.toString()}
          renderItem={({ item }) => {
            return (
              <View style={styles.button}>
                <Button
                  title={item}
                  onPress={() => {
                    navigation.navigate('Company', { companyName: item });
                  }}
                />
              </View>
            );
          }}
        />
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    marginBottom: 10,
    marginRight: 20
  }
});

export default withNavigation(ButtonList);
