
import React,{useState}from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const Form=()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [display,setDisplay]=useState(false);
  
    const resetFormData=()=>{
      setDisplay(false);
      setName("");
      setEmail("");
      setPassword("");
    }
    return (
      <View>
        <Text style={{fontSize:30}}>Simple form in react native</Text>
        <TextInput style={styles.textInput} placeholder='Enter User Name'
        onChangeText={(text)=>setName(text)} value={name}/>
        <TextInput style={styles.textInput} placeholder='Enter User Email'
        onChangeText={(text)=>setEmail(text)} value={email}/>
        <TextInput style={styles.textInput} placeholder='Enter User Password'
        secureTextEntry={true} onChangeText={(text)=>setPassword(text)} 
        value={password}/>
        <View style={{marginBottom:10}}>
        <Button color='green' title='Submit Details' 
        onPress={()=>setDisplay(true)}/>
        </View>
        <Button title='Clear' onPress={resetFormData}/>
        <View>
          {
            display?<View>
              <Text style={{fontsize:15}}>User Name is :{name}</Text>
              <Text style={{fontsize:15}}>User Email is :{email}</Text>
              <Text style={{fontsize:15}}>User Password is :{password}</Text>
            </View>:null
          }
        </View>
      </View>
      );
    }
    const styles=StyleSheet.create({
      textInput:{fontsize:18,color:'blue',borderWidth:2,borderColor:'blue',margin:10}
    })
    export default Form;