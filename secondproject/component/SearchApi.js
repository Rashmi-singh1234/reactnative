import React,{useRef, useState}from 'react';
import { View ,Text,Button, TextInput, StyleSheet} from 'react-native';

const SearchApi=()=>{
    const input=useRef();
    /*const [data,setData]=useState([]);
    
    const searchUser=async (text)=>{
    const url=`http://10.0.2.2:3000/users?q=${text}`;
        let result=await fetch(url);
        result=await result.json();
        if(result){
            setData(result)
        }   
    }*/
    const updateInput=()=>{
        input.current.focus();
        input.current.setNativeProps({
            fontSize:24,
            color:'blue'
        })
    }
    return(
      <View style={styles.container}>
        <TextInput ref={input} style={styles.input} placeholder='Enter name'/>
        <TextInput style={styles.input} placeholder='Enter password'/>
        <Button title='Update Input' onPress={updateInput}/>

      </View>
      /*
      <View style={{flex:1}}>
        <TextInput style={{borderColor:"skyblue",borderWidth:1,
        margin:15,fontSize:20}} placeholder={"search"}
        onChangeText={(text)=>searchUser(text)}></TextInput>
        {
        data.length?
            data.map((item)=>
                <View style={{padding:10,flexDirection:'row',
                justifyContent:'space-between'}}>
                    <Text style={{fontSize:20}}>{item.name}</Text>
                    <Text style={{fontSize:20}}>{item.email}</Text>
                </View>)
    
            :null
           }
        <Text style={{fontSize:30}}>Search with API</Text>
      </View>
      */
     );
   };
   const styles=StyleSheet.create(
    {
        container:{
            flex:1,
            padding:16
        },
        input:{
           borderColor:'skyblue',
           borderWidth:'2',
           margin:10
        }
    }
   );
   
export default SearchApi;