import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Switch, Button, } from 'react-native';
var S = require('./aParts/style');
import Home from './aParts/homeF/home';
import About from './aParts/aboutF/about';
import Projects from './aParts/projectsF/projects';
import {createStackNavigator} from 'react-navigation';

class AlphaPage extends React.Component {
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
        
       <Button
        title="My Projects"
        onPress={() => this.props.navigation.navigate('Projects')}
        />
        <Button
        title="Resume"
        onPress={() => this.props.navigation.navigate('About')}
        />
        </ScrollView>
      </View>
    );
  }
}
class ProjectsPage extends React.Component{
    render(){
        return(
        <View> 
        <ScrollView style={S.scrollView}>
         <Projects/>
         <Button
         title="Resume"
         onPress={() => this.props.navigation.navigate('About')}/>
         <Button
         title= "Go to Intro"
         onPress={() => this.props.navigation.navigate('Alpha')}/>
         </ScrollView>   
        </View>
        );
    }
}
class AboutPage extends React.Component{
    render(){
        return(
        <View>
        <ScrollView style ={S.scrollView}>    
            <About/>
         <Button
         title="My Projects"
         onPress={() => this.props.navigation.navigate('Projects')}/>
         <Button
         title="Go to Intro"
         onPress={()=> this.props.navigation.navigate('Alpha')}/>
         </ScrollView>
        </View>
        );
    }
}


const RootStack = createStackNavigator(
    {
    Alpha: AlphaPage,
    Projects: ProjectsPage,
    About: AboutPage,
    },
    {
      initalRouteName:'Alpha',  
    },
);

export default class app extends React.Component{
    render(){
        return <RootStack />;
    }
}
