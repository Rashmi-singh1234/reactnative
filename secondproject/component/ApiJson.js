import React,{useState,useEffect}from 'react';
import { View ,Text,Button} from 'react-native';

const ApiJson=()=>{
    //const [data,setData]=useState([]);
   /*
    const getAPIData=async ()=>{
        //api call
        const url="http://10.0.2.2:3000/users";
        let result=await fetch(url);
        result=await result.json();
        setData(result);
    }*/
    
    const saveAPIData=async ()=>{
        const data={
            name:"Sam",
            age:34,
            email:"sam@test.com"
        }
        //api call
        const url="http://10.0.2.2:3000/users";
        let result=await fetch(url,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(data)
        })
        result=await result.json();
        console.warn(result);
        //setData(result);
    }
    /*useEffect(()=>{
        getAPIData();
    },[]);*/
    return(
      /*
      <View>
        <Text style={{fontSize:30}}>call jsonserver api
        </Text>
        {
            
                data.length?
                    data.map((item)=><View style={{borderBottomColor:"orange",
                    borderWidth:1,margin:5}}>
                        <Text style={{fontSize:24}}>{item.id}</Text>
                        <Text style={{fontSize:18}}>
                            name:{item.name}</Text>
                        <Text style={{fontSize:18}}>{item.email}</Text>
                        </View>)
            
                :null
            
        }
      </View>
      */
      <View>
            <Text>POST API CALL</Text>
            <Button title='Save data' onPress={saveAPIData}/>
      </View>
     );
   };
   
   
export default ApiJson;