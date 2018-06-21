import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Home from './aParts/homeF/home';
import About from './aParts/aboutF/about';
import Projects from './aParts/projectsF/projects';

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Home/>
        <About/>
        <Projects/>
      </View>
    );
  }
}

