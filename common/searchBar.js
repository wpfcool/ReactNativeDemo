import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity
} from 'react-native';

export  class SearchBar extends Component{

    render(){
      return (
        <View style = {styles.container}>
          <View style = {styles.inputContainer}>
            <TextInput style = {styles.input} />
          </View>

          <TouchableOpacity style = {styles.btn} {...this.props}>

            <Text style = {styles.search}>搜索</Text>

          </TouchableOpacity>

        </View>


      );
    }
}

let styles = StyleSheet.create({

  container:{
    flexDirection:"row",
    justifyContent:"flex-end",
    alignItems:"center",
    height:44,
    marginTop:10
  },
  inputContainer:{
    flex:1,
    marginLeft:5
  },
  input:{
      flex:1,
      height:44,
      borderWidth:1,
      borderRadius:4,
      borderColor:'#ccc',
      paddingLeft:5
  },
  btn:{
    width:55,
    height:44,
    marginLeft:5,
    marginRight:5,
    borderRadius:4,
    justifyContent:'center',
    alignItems:'center'
  },
  search:{
    flex:1,
    fontSize:15,
    fontWeight:"bold",
    color:"#fff",
    textAlign:'center',
    lineHeight:44
  }

});


// module.exports = SearchBar;
