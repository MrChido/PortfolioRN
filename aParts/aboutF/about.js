import React from 'react';
import {AppRegistry, StyleSheet, Text, View } from 'react-native';
var S = require('../style.js');
export default class About extends React.Component {
  render() {
    return (
      <View>
        <Text style= {S.heading}>History</Text>
        <Text style = {S.cText}>Having held a wide variety of jobs, I have learned that I can do just about anything I put my mind to. I am highly adaptable, trainable, a good team member as well as knowing when to take the lead on group projects. I have a good attention to detail and I take my time to get things done right the first time, every time.
        </Text>
        <Text style={S.lesserH}>A sampling of the skills I have obtained over the  years
        </Text>
        <Text style={S.cText}>
        Six Sigma Green Belt trained
        </Text>
        <Text style ={S.cText}>
        Excelent pattern recogniton skills
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('About', ()=> About);