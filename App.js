import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SelectScreen from './src/screens/SelectScreen';
import CompanyScreen from './src/screens/CompanyScreen';
import StartScreen from './src/screens/StartScreen';
import { Provider as SentimentsProvider } from './src/context/SentimentsContext';

const navigator = createStackNavigator(
  {
    Start: StartScreen,
    Select: SelectScreen,
    Company: CompanyScreen
  },
  {
    initialRouteName: 'Select'
    // headerMode: 'none'
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <SentimentsProvider>
      <App />
    </SentimentsProvider>
  );
};
