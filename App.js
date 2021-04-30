import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './components/Header';
import Geocoder from './components/Geocoder';
import StartScreen from './components/StartScreen';

export default function App() {
  const [firstUse, setFirstUse] = useState(true);

  return (
    <View style={styles.container}>
      {(firstUse) ? <StartScreen 
      state={{ firstUse: [firstUse, setFirstUse] }}
      ></StartScreen> : <Header></Header>}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000',
    width: '100%',
    height: '100%'
  },
});
