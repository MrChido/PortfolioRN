import React from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, } from 'react-native';
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
        img =<Image style ={S.image6S} source= {require('../../graphics/Six-Sigma2.jpg')}/>;
        <Text style={S.cText}>Excelent pattern recogniton skills</Text>
        <Text style ={S.schoolin}>Academic Achievements</Text>
        <Text style={{fontWeight:'bold'}}>University of Central Missouri   Warrensburg, Missouri, July 2018</Text>
        <Text>Modern Application Development Certificate</Text>
        <Text style={S.cText}>Through this coursework I learned how to code HTML5, CSS, Javascript and React Native ( which I have been using to generate this app)</Text>
        <Text style={{fontWeight:'bold'}}>Metropolitan Community College of Kansas City   Kansas City, Missouri, 2009</Text>
        <Text>Six Sigma Green Belt Certification</Text>
        <Text style={S.cText}> A suite of Lean Manufacturing and Quality Controll processes designed to improve workplace performances</Text>
        <Text style={S.heading}>Recent Employment</Text>
        <Text style={{fontWeight:'bold'}}>Express Professionals: Valet, Kansas City International Airport, April 2018-Present</Text>
        <Text sytle={S.workH}>      Drive customer vehicles between storage location and airport terminal, with upmost care.</Text>
        <Text style={{fontWeight:'bold'}}>Staffmark: Agency Associate, Kansas City, Missouri, August 2017 - Feb 2018</Text>
        <Text sytle={S.workH}>      Contract employee completing a variety of task as requested including processing orders for customers and rack construction</Text>
        <Text style={{fontWeight:'bold'}}>Adecco Contract Employee, Kansas City, Missouri, March 2017 - August 2017</Text>
        <Text sytle={S.workH}>      Assignments included: perform PIT operations in receiving department; assist AP teachers from around the nation grade student workbooks; and prepare shipments to return to vendors</Text>
        <Text style={{fontWeight:'bold'}}>Ford Motor Company: Assembly, Kansas City, Missouri, March 2016 - December 2016</Text>
        <Text sytle={S.workH}>      Added and/or modified parts onto units coming down the assembly line; performed cleaning duties</Text>
        <Text style={{fontWeight:'bold'}}>Staffmark/OHL: Forklift Operator, August 2012 - March 2016</Text>
        <Text sytle={S.workH}>      Utilized a sit-down PIT to move product to and from locations within the warehouse; driver check-in / check-out duties and lead-type duties</Text>
      </View>
    );
  }
}

AppRegistry.registerComponent('About', ()=> About);