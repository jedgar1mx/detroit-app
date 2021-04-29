import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/Header';
import Geocoder from './components/Geocoder';

export default function App() {
  return (
    <View style={styles.container}>
      <Header></Header>
      <Geocoder></Geocoder>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
