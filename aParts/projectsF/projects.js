import React from 'react';
import {AppRegistry, StyleSheet, Text, View } from 'react-native';

export default class projects extends React.Component {
  render() {
    return (
      <View>
        <Text>My Projects</Text>
      </View>
    );
  }
}
AppRegistry.registerComponent('projects',()=> projects);