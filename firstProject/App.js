/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState} from 'react';
import {
  Text,
  View,Button,StyleSheet
} from 'react-native';
import Exstyles from './style';
const App=()=>{
  
  return (
   <View>
     <Text style={{fontSize:30,color:'red'}}>React Native Styling</Text>

     <Text style={Exstyles.textbox}>React Native Styling 2</Text>
   </View>
  );
}

/*
const App=()=>{
  let data=100;
  const [name,setName]=useState("Bruce")
  return (
   <View>
     <Text style={{fontSize:30}}>Hello React Native{data}</Text>
     <Button title='Update Props' onPress={()=>setName("Peter")}/>
     <User name={name} age={67}/>
   </View>
  );
}
/*
import CompanyData from './components/CompanyData';
let age=39;
var email="abc@gmail.com";
const App=()=>{
  let data=100;
  const [name,setName]=useState("Rashmi");
  const fruit=(val)=>{
    console.warn(val+' '+data)
  }
  let yourname="Anil";
  let dataa="mishti";
  function testName(){
    setName("Vaibhav Sharma")
    dataa="mishh";
  }
  return (
   <View>
     <Text style={{fontSize:30}}>Hello React Native{data}</Text>
     <CompanyData/>
     <Button title='Press here'></Button>
     <Text style={{fontSize:30}}>{email}</Text>
     <Text style={{fontSize:20}}>{name}</Text>
     <Text style={{fontSize:20}}>{dataa}</Text>
     <Button title='Update Name' onPress={testName}/>
     <User yourname={yourname}/>
     <Button title='on submit' onPress={()=>fruit("Hello")} color={'red'}/>
   </View>
  );
}
const User=(props)=>{
  return(
    <View style={{backgroundColor:'green',padding:5}}>
      <Text style={{fontSize:30}}>Name:{props.name}</Text>
      <Text style={{fontSize:30}}>Age:{props.age}</Text>
    </View>
  )
}
*/
export default App;
