import React,{useState}from 'react';
import { View ,Text,SectionList,Button, TextInput} from 'react-native';
const Login=(props)=>{
    const [name,setName]=useState("");
    const age=29;
    return(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:23}}>Login screen</Text>
        <TextInput style={{fontSize:20,borderColor:'#000',borderwidth:2}}onChangeText={(text)=>setName(text)} 
        placeholder='enter name'></TextInput>
        <Button title='Go to Home Page' 
        onPress={()=>props.navigation.navigate("Home",{name,age})}/>
    </View>)
}

export default Login;
   
  