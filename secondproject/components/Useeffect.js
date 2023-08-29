import React,{useEffect, useState}from 'react';
import { View ,Text,Button} from 'react-native';

const UseEffect=()=>{
    const [count,setCount]=useState(0);
    const [data,setData]=useState(100);
    const [show,setShow]=useState(false);
    /*useEffect(()=>{
        console.warn(count);
        //console.warn("hello")
    },[count]);
    useEffect(()=>{
        console.warn("call");
        //console.warn("hello")
    },[data]);*/
    
    return(
      <View>
        <Text style={{fontSize:30}}>{data}
            LifeCycle with use effect{count}</Text>
        <Button title='updateCount' onPress={()=>setCount(count+1)}/>
        <Button title='updateData' onPress={()=>setData(data+1)}/>
        <Text style={{fontSize:30}}>show hide cOMPONENT</Text>
        <Button title='Hide component' onPress={()=>setShow(true)}/>
        {
            show?<User/>:null
        }
        <Button title='Toggle component' onPress={()=>setShow(!show)}/>
        {
            show?<User/>:null
        }

      </View>
     );
   };

   const User=()=>{
    return(
        <View>
            <Text style={{fontSize:30}}>User cOMPONENT</Text>
        </View>
    )
   }
   
   
export default UseEffect;