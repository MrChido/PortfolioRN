import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, } from 'react-native';
var S = require('./aParts/style');
import Home from './aParts/homeF/home';
import About from './aParts/aboutF/about';
import Projects from './aParts/projectsF/projects';

export default class App extends React.Component {
  render() {
    return (
      <View>
      <ScrollView style ={S.scrollView}>
        <View style={S.imageC}>   <Image style ={S.image} source ={require('./graphics/mehead.jpg')}/> </View>
          
        <Text style = {S.meMe}> Caleb Campbell</Text>
        <Home/>
        <About/>
        <Projects/>
        </ScrollView>
      </View>
    );
  }
}

