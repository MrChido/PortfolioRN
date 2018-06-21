import React from 'react';
import {AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class about extends React.Component {
  render() {
    return (
      <View>
        <Text>about me</Text>
        
      </View>
    );
  }
}

AppRegistry.registerComponent('about', ()=> about);