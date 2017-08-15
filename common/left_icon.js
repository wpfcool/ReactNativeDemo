import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';


export class Icon extends Component{

  render(){
    return(
      <View>
        <View style = {styles.go}></View>

      </View>
    );
  }

}


let styles = StyleSheet.create({
  go:{
    width:15,
    height:15,
    borderLeftWidth:2,
    borderBottomWidth:2,
    borderColor:"#fff",
    marginLeft:10,
    transform:[{rotate:"45deg"}]
  }

});
