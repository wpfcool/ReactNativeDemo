/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';


//  var DouBan_APIS = require('./common/service')
//
// var Util = require("./common/Util");
//
import {Navigation} from './common/Navigation';
import {BookList} from './BookList';
export default class DouBanDemo extends Component {

  constructor(props){
    super(props);
    this.state = {
      selectedTab:"图书"
    };
  }
  render(){



     return(

       <TabBarIOS  unselectedTintColor="gray"
         tintColor="white"
         barTintColor="darkslateblue">

            <TabBarIOS.Item title = "图书" selected = {this.state.selectedTab === "图书"}
              onPress = {()=>{
                this.setState({
                  selectedTab:"图书"
                })
              }}
            >

              <Navigation  component = { BookList } title = "图书"/>

            </TabBarIOS.Item>


            <TabBarIOS.Item title = "电影" selected = {this.state.selectedTab === "电影"}
              onPress = {()=>{
                this.setState({
                  selectedTab:"电影"
                })
              }}
            >
              <View style = {{backgroundColor:'red',flex:1} }></View>


            </TabBarIOS.Item>
          </TabBarIOS>

    //  <View style = {{flex:1,backgroundColor:'red'}}>
    //    {/* <CustomWebView backName = "fdfd" title = "fdsf" url = "https://www.baidu.com"></CustomWebView> */}
    //  </View>
   );

  }




}



AppRegistry.registerComponent('DouBanDemo', () => DouBanDemo);
