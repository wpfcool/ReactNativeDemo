import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions
} from 'react-native';


var Util = {

  windowsSize:{
    width:Dimensions.get("window").width,
    height:Dimensions.get("window").height
  },
  getRequest(url,successBlock,failBlock){
    fetch(url)
    .then((response) =>response.json())
    .then((responseData) =>successBlock(responseData))
    .catch((error) => failBlock(error))
  }





}

module.exports = Util;
