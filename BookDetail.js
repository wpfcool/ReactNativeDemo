import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from 'react-native';

import {BookItem}from './BookItem';
var Util = require('./common/Util');
var DouBan_APIS = require('./common/service');
export class BookDetail extends React.Component{

  constructor(props){
    super(props);

    this.state = {
        bookData:{}
    }
  }

getData(){

   Util.getRequest(DouBan_APIS.book_detail_id + this.props.book_id,(responseData)=>{
    this.setState({
      bookData:responseData
    });


   },(error)=>{

   });

}
componentDidMount(){
  this.getData();
}

  render(){
    return(
      <ScrollView>

        <BookItem book = {this.state.bookData}></BookItem>
        <View>
            <Text style = {[styles.text]}>图书简介</Text>
            <Text style = {styles.content}>{this.state.bookData.summary}</Text>
        </View>

        <View>
          <Text style = {[styles.text]}>作者简介</Text>
          <Text style = {styles.content}>{this.state.bookData.author_intro}</Text>
        </View>

      </ScrollView>

    );
  }

}


let styles = StyleSheet.create({
  text:{
    fontSize:18,
    marginTop:10,
    marginBottom:10
  },
  content:{
    fontSize:15
  }

});
