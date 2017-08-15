import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';

import {Icon} from './left_icon';

export class Header extends Component{
  render(){


      //获取对象  backName  barTitle

      var headerContent = this.props.initObj;

      return(

        <View style ={styles.header}>

          <TouchableOpacity style ={styles.leftBtn} onPress = {this.pop}>
            <Icon/>
            <Text style = {styles.btn_text}>{headerContent.backName}</Text>
          </TouchableOpacity>



            <View style = {styles.title_container}>
              <Text style = {styles.title} >{headerContent.barTitle}</Text>
            </View>
        </View>

      );
  }



  pop(){
    this.props.navigator.pop();
  }

}


let styles = StyleSheet.create({
  header:{
    height:64,
    backgroundColor:'#3497FF',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:"center"
  },
  leftBtn:{
    marginTop:20,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  btn_text:{
    color:'#fff',
    fontSize:17,
    fontWeight:'bold'
  },
  title_container:{
    marginTop:20,
    flexDirection:'row',
    flex:1,
      justifyContent:"center",
     alignItems:'center',
    marginRight:10
  },
  title:{
    color:'#fff',
    fontSize:18,
    fontWeight:"bold",
    lineHeight:18,

    // width:200
  }

});
