import React from 'react';
import {AppRegistry, StyleSheet, Text, View } from 'react-native';
var S = require('../style.js');
export default class Home extends React.Component {
  render() {
    return (
      <View>
        <Text style={S.heading}>Intro</Text>
        <Text style ={S.cText}>
        Kansas City born and raised. This is where I have spent most of my days. Ok, enough of that before I commit copyright infringement (again).      
        I have a decent knowledge of my home town and am always eager to learn and experience more. In fact, I thrive on them; things that I have never done before, even if I feel a bit intimidated. 
        I am a sociable person, a bit stand-offish, mom always told me that I really do live to the sound of my own drum. If there is one thing I can guarantee you about myself, is that I am unforgettable.    
        </Text>
      </View>
    );
  }
}


AppRegistry.registerComponent('Home', ()=>Home);