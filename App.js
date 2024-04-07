import React, { useState } from "react";

import { View,Text, Button, TextInput, StyleSheet, ScrollView, FlatList  } from "react-native";


export default function App() {

  const [name , setName] = useState('')

  const User = [
    {
      id : 1,
      name : 'ram',
      age : 25
    },{
      id : 2,
      name : 'rams',
      age : 25
    },{
      id : 3,
      name : 'har9',
      age : 25
    },{
      id : 4,
      name : 'radfm',
      age : 25
    },{
      id : 5,
      name : 'sdf',
      age : 25
    },{
      id : 6,
      name : 'erte',
      age : 25
    },{
      id : 7,
      name : 'bfgd',
      age : 25
    },{
      id : 8,
      name : 't4t4t',
      age : 25
    },{
      id : 9,
      name : 'hhfsf',
      age : 25
    }, {
      id : 1,
      name : 'ram',
      age : 25
    },{
      id : 2,
      name : 'rams',
      age : 25
    },{
      id : 3,
      name : 'har9',
      age : 25
    },{
      id : 4,
      name : 'radfm',
      age : 25
    },{
      id : 5,
      name : 'sdf',
      age : 25
    },{
      id : 6,
      name : 'erte',
      age : 25
    },{
      id : 7,
      name : 'bfgd',
      age : 25
    },{
      id : 8,
      name : 't4t4t',
      age : 25
    },{
      id : 9,
      name : 'hhfsf',
      age : 25
    }, {
      id : 1,
      name : 'ram',
      age : 25
    },{
      id : 2,
      name : 'rams',
      age : 25
    },{
      id : 3,
      name : 'har9',
      age : 25
    },{
      id : 4,
      name : 'radfm',
      age : 25
    },{
      id : 5,
      name : 'sdf',
      age : 25
    },{
      id : 6,
      name : 'erte',
      age : 25
    },{
      id : 7,
      name : 'bfgd',
      age : 25
    },{
      id : 8,
      name : 't4t4t',
      age : 25
    },{
      id : 9,
      name : 'hhfsf',
      age : 25
    },
  ]

  return(
  <View style={{marginTop: 70}}>
   

    <FlatList

      data = {User}

      renderItem = {({item})=> <UserReturnData item={item} />}

    />
  </View>
  );
}


const UserReturnData = (props)=>{
  const item = props.item
  return(
    <View>
      <Text>id : {item.id}</Text>
      <Text>Name : {item.name}</Text>
      <Text>age : {item.age}</Text>
      <Text></Text>
    </View>
  )
}


const styless = StyleSheet.create({
  text : {
    color : 'red',
    fontSize : 30,
    color : 'white',
    backgroundColor : 'blue',
    padding : 25,
    width : 120,
    margin : 5,
    textAlignVertical : 'center',
    textAlign : 'center'
  },
  inputText :{
    color : 'red',
    fontSize : 20,
    width : 200,
    borderColor : 'black',
    borderWidth : 2,
    borderRadius : 4,
    marginTop : 5
  }
 
})


