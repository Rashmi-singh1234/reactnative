import React,{useRef, useState}from 'react';
import { View ,Text,Button, TextInput, StyleSheet} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
let db = openDatabase({name: 'UserDatabase2.db'});

const SearchApi=()=>{
    const input=useRef();
    const [data,setData]=useState([]);
    
    const searchUser= () => {
        db.transaction(tx => {
          tx.executeSql('SELECT * FROM table_user where name=?',[text], (tx, results) => {
            var temp = [];
            for (let i = 0; i < results.rows.length; ++i)
              temp.push(results.rows.item(i));
            setData(temp);
          });
        });
      };
    return(
      
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