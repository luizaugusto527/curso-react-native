import React, { Component } from "react";
import {View, FlatList,ActivityIndicator} from 'react-native'

import api from './src/services/api'
import Filmes from "./src/services/Filmes"

export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filmes: [],
      loading:true

    }

  }
  async componentDidMount(){
    const response = await api.get('r-api/?api=filmes')
    this.setState({
      filmes: response.data,
      loading:false
    })
  }
  render() {
    if (this.state.loading) {
      return (
        <View style={{alignItems:'center',justifyContent:'center',flex:1}}>
          <ActivityIndicator color= "#09A6FF" size={50}></ActivityIndicator>
        </View>
      )
    }else{
      return (
        <View style={{marginTop:50}}>
        <FlatList data={this.state.filmes} keyExtractor={item => item.id.toString()}
         renderItem={({item}) => <Filmes data= {item}/>}>
        </FlatList>
      </View>
      )

    }
  }

}