var { requireNativeComponent } = require('react-native');

var RNTMap = requireNativeComponent('RNTMap', MapView);
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,

} from 'react-native';





// //
export default class MapView extends Component{

  render(){
    return(

       <RNTMap  {...this.props} style = {{backgroundColor:'red',flex:1}} />
    //  <Text></Text>

    );
  }

}
