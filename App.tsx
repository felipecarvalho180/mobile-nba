import 'react-native-gesture-handler';
import React from 'react';
import Route from './src/route';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Route />
    </>
  );
}
