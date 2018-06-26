import React from 'react';
import {AppRegistry, StyleSheet, Text, View, TextInput, Button, } from 'react-native';
var S = require('../style.js');
export default class Projects extends React.Component {
  render() {
    return (
      <View>
        <Text style ={S.heading}>My Projects and other stuff</Text>
            <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            placeholder= ' Enter Name'
            onChangeText={(text) => this.setState({text})}
            />

    <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            placeholder= ' Email Address'
            onChangeText={(text) => this.setState({text})}
            />

    <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            placeholder= ' Contact Number'
            onChangeText={(text) => this.setState({text})}
            />
    <Button
    //onPress={submition}
    title='Submit'
    color= 'rgb(95,158,160)'
    accesibilityLabel='Submit input' />
      </View>
    );
  }
}
AppRegistry.registerComponent('Projects',()=> Projects);