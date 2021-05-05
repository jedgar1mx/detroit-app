import React, { useState } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native';
import Btn from './Btn';

export default function StartScreen(props) {
  const {
      firstUse: [firstUse, setFirstUse]
  } = {
      firstUse: useState(),
      ...(props.state || {})
  };

  const onPress = () => {setFirstUse(false)};
  return (
      <View style={styles.container}>
          <Image
          source={{
              uri: 'https://detroitatwork.com/sites/detroitatwork/files/2021-03/rocket_foc_wfh_1.png'
          }}
          style={styles.hero}
          />
          <View style={styles.intro}>
              <Text style={styles.introTitle}>Welcome to the City of Detroit App</Text>
              <Text>Let's get started in getting you setup.</Text>
              <Btn
                title="New Start"
                btnType="btnFirst"
                btnTypeText="btnFirstText"
                onPress={onPress}
                accessibilityLabel="Let's get started"
              ></Btn>
          </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  hero:{
    width: '100%', 
    height: 300,
  },
  intro: {
    position: 'relative',
    top: -10,
    backgroundColor: '#fff',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    padding: 5
  },
  introTitle:{
    color: '#fff',
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold'
  }
});