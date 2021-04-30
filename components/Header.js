import React from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.container}>
        <Image
          source={{
            uri: 'https://detroitmi.gov/themes/custom/detroitmi/logo-white.png',
          }}
          style={styles.logo}
        />
        <View style={styles.title}>
            <Text style={styles.titleText}>City of Detroit App</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: 'flex-start',
  },
  logo:{
    width: 55, 
    height: 70
  },
  title: {
    flex: 1,
    justifyContent: 'center',
  },
  titleText:{
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});