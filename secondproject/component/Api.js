import { getActionFromState } from '@react-navigation/native';
import React,{useState,useEffect}from 'react';
import { View ,Text,ScrollView, FlatList} from 'react-native';

const Api=()=>{
    const [data,setData]=useState([]);
    const getAPIData=async ()=>{
        //api call
        const url="https://jsonplaceholder.typicode.com/posts";
        let result=await fetch(url);
        result=await result.json();
        setData(result);
    }
    useEffect(()=>{
        getAPIData();
    },[]);
    return(
     <View>
        <Text style={{fontSize:20}}>flatlist with api data</Text>
        {
            data.length?
            <FlatList
                data={data}
                renderItem={({item})=><View style={{borderBottomColor:"orange",
                borderBottomWidth:20,borderWidth:1,margin:10}}>
                    <Text style={{fontSize:24}}>{item.id}</Text>
                    <Text style={{fontSize:18}}>
                        title:{item.title}</Text>
                    <Text style={{fontSize:18}}>{item.body}</Text>
                    </View>}
            />
            :null
        }
     </View>
    );
    /*
    const [data,setData]=useState([]);
    const getAPIData=async ()=>{
        //api call
        const url="https://jsonplaceholder.typicode.com/posts";
        let result=await fetch(url);
        result=await result.json();
        setData(result);
    }
    useEffect(()=>{
        getAPIData();
    },[]);
    return(
      <ScrollView>
        <Text style={{fontSize:30}}>API call</Text>
        {
            data.length?
            data.map((item)=>
                <View style={{padding:10,borderBottomColor:"#ccc"}}>
                    <Text style={{fontSize:20}}>id:{item.id}</Text>
                    <Text style={{fontSize:20}}>title:{item.title}</Text>
                    <Text style={{fontSize:20}}>body:{item.body}</Text>
                </View>
            )
            :null
        }
      </ScrollView>
     );
     */
   };
   
   
export default Api;