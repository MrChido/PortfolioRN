import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Switch, } from 'react-native';
var S = require('./aParts/style');
import Home from './aParts/homeF/home';
import About from './aParts/aboutF/about';
import Projects from './aParts/projectsF/projects';

export default class App extends React.Component {
 constructor(){
     super();
     this.state={
         meHiddenHead: true
     }
 }
    
    render() {
    let meHiddenHead = this.state.meHiddenHead;
    let img = <Text></Text>;
    if(!meHiddenHead){
        img = <Text></Text>;
    }else{
        img =<Image style ={S.image} source ={require('./graphics/mehead.jpg')}/>;
    }
    return (
      <View>
      <ScrollView style ={S.scrollView}>
        <View style={S.imageC}>
        {img}
        <Switch onValueChange={(value) => this.setState({meHiddenHead: value})} value ={this.state.meHiddenHead}/>       
        </View>       
        <Text style = {S.meMe}> Caleb Campbell</Text>
        <Home/>
        <About/>
        <Projects/>
        </ScrollView>
      </View>
    );
  }
}

