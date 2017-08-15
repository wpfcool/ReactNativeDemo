import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  WebView
} from 'react-native';

 import {Header} from './Header';

export class CustomWebView extends Component{

  render(){

    return(

      <View style = {{backgroundColor:'white' ,flex:1,flexDirection:'column'}}>

          <Header navigator = {this.props.navigator}
           initObj = {{
             backName:this.props.backName,
             barTitle: this.props.title
           }}/>
          <WebView
            startInLoadingState = {true}
             source ={{url:this.props.url}}
          />
      </View>

    );

  }

}
