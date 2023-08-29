
import React,{useState}from 'react';

import { FlatList, View ,Text, StyleSheet,ScrollView} from 'react-native';
const User=()=>{
 const users=[
  {id:1,name:"Vaibhav",email:"abc@gmail.com"},
  {id:2,name:"Rashmi",email:"def@gmail.com"},
  {id:3,name:"Raj",email:"ghi@gmail.com"},
  
 ]
 return(

  <View>
    <Text style={{fontSize:27}}>Component in loop with FlatList</Text>
    <FlatList
       data={users}
       renderItem={({item})=><UserData item={item}/>}
    />
  </View>
  );
};

const UserData=(props)=>{
  const item=props.item;
  return(
    <View style={styles.box}>
        <Text style={styles.item}>{item.name}</Text>
        <Text style={styles.item}>{item.email}</Text>
        </View>
  )
}
const styles=StyleSheet.create({
  item:{
    fontSize:24,
    color:'orange',
    flex:1,
    margin:2,
    textAlign:'center'
  },
  box:{
    flexDirection:'row',
    borderWidth:2,
    borderColor:'orange',
    marginBottom:10
  }
})

export default User;
