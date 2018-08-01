import React from 'react';
import {AppRegistry, StyleSheet, Text, View, Linking, TextInput, Button, } from 'react-native';
var S = require('../style.js');
export default class Projects extends React.Component {
  render() {
    return (
      <View>
        <Text style={S.heading}>My projects</Text>
        <Text> There is art in my blood, I am pretty sure I got that from my father. Unlike my father, I express my artistic side digitally.
          It has taken many forms over the years; It has gone from graphic arts to visual media and almost anything anyone can think of. Honestly, I think
          it skipped musically. I did try to play the clarinet back in the seventh grade; I am fairly certain I cannot keep time to save my life, musically.
          </Text>
        <Text style={S.lesserH}>Web sites to visit</Text>  
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