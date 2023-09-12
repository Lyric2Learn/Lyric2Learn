import { StyleSheet } from 'react-native';
import NavigationScreen from './NavigationPage/NavigationScreen';
import React from 'react'

export default function App() {

  return <NavigationScreen />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
