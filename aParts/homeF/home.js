import React from 'react';
import {AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class home extends React.Component {
  render() {
    return (
      <View>
        <Text>Home</Text>
    
      </View>
    );
  }
}


AppRegistry.registerComponent('home', ()=>home);