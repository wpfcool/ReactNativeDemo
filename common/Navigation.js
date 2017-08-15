import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  NavigatorIOS
} from 'react-native';


export class Navigation extends Component{


  render(){

    var rootRoute = {
      component:this.props.component,
      title:this.props.title
    }

    return(
       <NavigatorIOS
         initialRoute = {rootRoute}
         style = {{flex:1}}
       />
    );
  }

}
