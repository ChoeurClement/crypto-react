import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { CryptoList } from './app/views/CryptoList';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { CryptoDetail } from './app/views/CryptoDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
  <NavigationContainer> 
    <Stack.Navigator initialRouteName="CryptoList">
      <Stack.Screen name="CryptoList" component={CryptoList} />
      <Stack.Screen name="CryptoDetail" component={CryptoDetail} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
