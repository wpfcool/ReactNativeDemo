import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';


export class BookItem extends Component{

    //
  render(){
    var book = this.props.book;
    return(
        //  <Text  style={styles.item}>{this.props.book.title}</Text>
        <TouchableOpacity onPress = {this.props.onPressClick}>
          <View style = {styles.container}>
              <View style = {styles.imageContainer}>

                  <Image source = {{uri:book.image}}
                  style = {{width:100,height:100}} />
              </View>

              <View style = {styles.rightContainer}>
                <Text>{book.title}</Text>
                <Text>作者:{book.author}</Text>
                <Text>价格: {book.price}</Text>
                <Text>出版社: {book.publisher}</Text>
                <Text>页数: {book.pages}页</Text>
                <Text>页数: {book.pages}页</Text>
              </View>

          </View>
        </TouchableOpacity>




    );
  }

}
const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    margin:10,
    // height:120,
    // alignItems:'center',
  //  justifyContent:'center',

  },
  imageContainer:{
    // margin:10,
    //  width:100,
    // height:100,
    alignItems:'center',
    justifyContent:'center',
    // backgroundColor:'red'
  },
  rightContainer:{
    flex:1,
    // margin:10,
    backgroundColor:'cyan'
  },
  item: {
    padding: 10,
    fontSize: 18,
    // height: 50,
    color:'red'
  },
});
