import React from 'react';
import {AppRegistry, StyleSheet, Text, View, TextInput, Button, } from 'react-native';
var S = require('../style.js');
export default class Projects extends React.Component {
  render() {
    return (
      <View>
        <Text style ={S.heading}>My Projects and other stuff</Text>
         
      </View>
    );
  }
}
AppRegistry.registerComponent('Projects',()=> Projects);