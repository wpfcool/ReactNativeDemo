import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';

import {NativeModules}from 'react-native';
var Util = require('./common/Util');
var DouBan_APIS = require('./common/service');


 // var MapView = require('./mapView');

import {BookItem} from './BookItem';
import {BookDetail} from './BookDetail';
import MapView from './mapView';




export class BookList extends Component{

  constructor(props){
    super(props);
    this.state = {
      data:[]
    };

  }

  getRequest(){


    var CalendarManager = NativeModules.CalendarManager;
    CalendarManager.addEvent('Birthday Party', '4 Privet Drive, Surrey');

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

gotoMap=()=>{
  this.props.navigator.push({
     component:MapView
  });
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

      <View style = {{flex:1}}>

<TouchableOpacity onPress= {this.gotoMap}>
  <Text style = {{marginTop:64,height:20,backgroundColor:'red'}}> 点击进入地图</Text>
</TouchableOpacity>

        <FlatList style = {styles.container,{flex:1}}
          data = {this.state.data}
            renderItem = {this._renderItem}
            ItemSeparatorComponent ={this._separator}
                >
          </FlatList>
      </View>


    );
  }
}
const styles = StyleSheet.create({
  container: {
   flex: 1,


  },
  item: {
    padding: 10,
    fontSize: 18,
    // height: 50,
    color:'red'
  },
});
