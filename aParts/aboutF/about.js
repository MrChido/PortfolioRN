import React from 'react';
import {AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class About extends React.Component {
  render() {
    return (
      <View>
        <Text>About Me</Text>
        
      </View>
    );
  }
}

AppRegistry.registerComponent('About', ()=> About);