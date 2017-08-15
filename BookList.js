import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList
} from 'react-native';


var Util = require('./common/Util');
var DouBan_APIS = require('./common/service');

import {BookItem} from './BookItem';
import {BookDetail} from './BookDetail';


export class BookList extends Component{

  constructor(props){
    super(props);
    this.state = {
      data:[]
    };

  }

  getRequest(){

    Util.getRequest(DouBan_APIS.book_search + "?count=20&q=React",(responseData)=>{

      if(!responseData.books || responseData.books.length == 0){
      }

      let dataBlob = [];
      for(var book in responseData.books){
        dataBlob.push({
          key:book,
          value:responseData.books[book]

        });
      }

      this.setState({
        data:dataBlob
      });

    },(error)=>{
      // alert(error);
    });


  }
  //
pressClick=(bookId)=>{


    this.props.navigator.push(
      {
        component:BookDetail,
        title:"详情",
        passProps:{
           book_id:bookId
        }
      }




    );

}
  componentDidMount(){
    this.getRequest();
  }
  _separator = () => {
       return (<View style={{ height: 1, backgroundColor: '#E8E8E8' }}/>);
   }
   _renderItem = ({item})=>{

     return (<BookItem book ={item.value} onPressClick = {this.pressClick.bind(this,item.value.id)}></BookItem>)
   }

  render(){
    return(
        <FlatList style = {styles.container}
          data = {this.state.data}
            renderItem = {this._renderItem}
            ItemSeparatorComponent ={this._separator}
                >
          </FlatList>
    );
  }
}
const styles = StyleSheet.create({
  container: {
   flex: 1,
   marginTop: 10

  },
  item: {
    padding: 10,
    fontSize: 18,
    // height: 50,
    color:'red'
  },
});
