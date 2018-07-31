import React from 'react';
import {AppRegistry, StyleSheet, Text, View, Linking, TextInput, Button, } from 'react-native';
var S = require('../style.js');
export default class Projects extends React.Component {
  render() {
    return (
      <View>
        <Text style={S.lesserH}>My projects</Text>
        <Text style={S.pLink}
        onPress={()=>Linking.openURL('http://omegamannt.deviantart.com')}>My Deviant Art page</Text>
        <Text style={S.pLink}
        onPress={()=>Linking.openURL('http://github.com/mrchido')}>My GitHub page</Text>
        <Text style={S.pLink}
        onPress={()=>Linking.openURL('https://bit.ly/2LDnuvr')}>My Youtube channel</Text>
      </View>
    );
  }
}
AppRegistry.registerComponent('Projects',()=> Projects);