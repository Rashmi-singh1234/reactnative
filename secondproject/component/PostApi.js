import React,{useState,useEffect}from 'react';
import { View ,Text, TextInput,Modal, StyleSheet,Button,ScrollView} from 'react-native';

const FormData=()=>{
    const [data,setData]=useState([]);
    const[showModal,setShowModal]=useState(false);
    const[selectedUser,setSelectedUser]=useState(undefined);
    const getAPIData=async ()=>{
        //api call
        const url="http://10.0.2.2:3000/users";
        let result=await fetch(url);
        result=await result.json();
        if(result){
            setData(result);
        }
    }
    const deleteUser=async (id)=>{
        const url="http://10.0.2.2:3000/users";
        let result=await fetch(`${url}/${id}`,{
            method:"delete"
        })
        result=await result.json();
        if(result){
            console.warn("deleted");
            getAPIData();
        }
    }
    useEffect(()=>{
        getAPIData();
    },[]);

    const updateUser=(data)=>{
        setShowModal(true);
        setSelectedUser(data);
    }
    const UpdateModal=(props)=>{
        const [name,setName]=useState(undefined);
        const [email,setEmail]=useState(undefined);

        useEffect(()=>{
           if(props.selectedUser){
             setName(props.selectedUser.name);
             setEmail(props.selectedUser.email);
             //for age .toString()
           }
        },[props.selectedUser])
        
        const updatetheUser=async ()=>{
          //console.warn(name,email,props.selectedUser.id);
          const url="http://10.0.2.2:3000/users";
          const id=props.selectedUser.id;
          let result=await fetch(`${url}/${id}`,{
            method:"Put",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({name,email})
          });
          result=await result.json();
          props.getAPIData();
          props.setShowModal(false);
        }
        return(
            <View style={styles.centeredview}>
            <View style={styles.modalview}>
                <TextInput style={styles.input} value={name}
                onChangeText={(text)=>setName(text)}/>
                <TextInput style={styles.input} value={email}
                onChangeText={(text)=>setEmail(text)}/>
                <View style={{marginBottom:15}}>
                    <Button title='update'
                    onPress={updatetheUser}/>
                </View>
                <Button title='Close' 
                onPress={()=>props.setShowModal(false)}/>
            </View>
           </View>
        )
    }
    return(
        <ScrollView style={styles.container}>
            <View style={styles.dataWrapper}>
                <View style={{flex:1}}>
                <Text>ID</Text>
                </View>
                <View style={{flex:1.5}}>
                <Text>Name</Text>
                </View>
                <View style={{flex:2}}>
                <Text>Email</Text>
                </View>
                <View style={{flex:2}}>
                <Text>Operations</Text>
                </View>
            </View>
           {
            data.length?
            data.map((item)=>
            <View style={styles.dataWrapper}>
                <View style={{flex:1}}>
                <Text>{item.id}</Text>
                </View>
                <View style={{flex:1}}>
                <Text>{item.name}</Text>
                </View>
                <View style={{flex:1}}>
                <Text>{item.email}</Text>
                </View>
                <View style={{flex:1}}>
                <Button onPress={()=>updateUser(item)}title='Update'/>
                </View>
                <View style={{flex:1}}>
                <Button onPress={()=>deleteUser(item.id)}title='Delete'/>
                </View>
                </View>)
    
            :null
           }
           <Modal visible={showModal} transparent={true}>
            <UpdateModal setShowModal={setShowModal} selectedUser={selectedUser} getAPIData={getAPIData}/>
           </Modal>
        </ScrollView>
    )
    
    /*
    const [name,setName] =useState('');
    const [age,setAge] =useState('');
    const [email,setEmail] =useState('');
    const [nameError,setNameError] =useState(false);
    const [ageError,setAgeError] =useState(false);
    const [emailError,setEmailError] =useState(false);
    const saveData=async ()=>{
        if(!name){
            setNameError(true);
        }
        else{
            setNameError(false);
        }
        if(!age){
            setAgeError(true);
        }
        else{
            setAgeError(false);
        }
        if(!email){
            setEmailError(true);
        }
        else{
            setEmailError(false);
        }
        if(!name || !age ||!email){
            return false
        }
        const url="http://10.0.2.2:3000/users";
        let result=await fetch(url,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify({name,age,email})
        })
        result=await result.json();
        if(result){
            console.warn("Data added");
        }
    }
    
    return(
      <View>
        <Text style={{fontSize:30}}>
            POST api with input field data</Text>
        <TextInput style={styles.input} value={name}
         onChangeText={(text)=>setName(text)}
         placeholder='Enter name'/>
         {nameError?<Text style={styles.errorText}>
            Please enter Valid Name
         </Text>:null}
         <TextInput style={styles.input} value={age}
         onChangeText={(text)=>setAge(text)}
         placeholder='Enter Age'/>
         {ageError?<Text style={styles.errorText}>
            Please enter Valid Age
         </Text>:null}
         <TextInput style={styles.input} value={email}
         onChangeText={(text)=>setEmail(text)}
         placeholder='Enter Email'/>
         {emailError?<Text style={styles.errorText}>
            Please enter Valid Email
         </Text>:null}
        <Button title='Save Data' onPress={saveData}/>
      </View>
     );*/
   };


const styles=StyleSheet.create({

    input:{
        borderColor:'Skyblue',
        borderWidth:1,
        margin:20,
        borderColor:'blue',
        fontSize:20
    },
    errorText:{
        color:'red'
    },
    container:{
        flex:1}
    ,
    dataWrapper:{
        flex:1,
        flexDirection:'row',
        justifyContent:'space-around',
        backgroundColor:'orange',
        margin:5,
        padding:7
         
    },
    centeredview:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    modalview:{
        backgroundColor:'#fff',
        padding:60,
        borderRadius:10,
        shadowColor:'#000',
        shadowOpacity:0.70,
        elevation:5
    },
    input:{
     borderWidth:1,
     borderColor:'skyblue',
     width:300,
     marginBottom:10,
     fontSize:20
     
    }
})
   
export default FormData;