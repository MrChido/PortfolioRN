import React from 'react';
import {AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class Home extends React.Component {
  render() {
    return (
      <View>
        <Text>Home</Text>
    
      </View>
    );
  }
}


AppRegistry.registerComponent('Home', ()=>Home);