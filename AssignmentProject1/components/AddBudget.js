import React,{useState}from 'react';
import { View ,Text,TextInput,Button,TouchableHighlight, StyleSheet} from 'react-native';
import { useDispatch,useSelector} from 'react-redux';
import {addToList} from './Redux/action';
const AddBudget=(props)=>{
    const [name,setName]=useState();
    const [actualAmount,setActualAmount]=useState();
    const [plannedAmount,setplannedAmount]=useState();
    const[show,setShow]=useState(false);
    const dispatch=useDispatch();

    const handleaddToList=()=>{
       const data={name,actualAmount,plannedAmount};
       dispatch(addToList(data));
       setName('');
       setActualAmount('');
       setplannedAmount(' ');
       setShow(true);
    }

    const close=()=>{
      setShow(false);
    }
    return(
      <View>
        <Text style={styles.container}>Budget Entry Screen
        </Text>
        <Text style={styles.main}>Name of the item:</Text>
        <TextInput style={styles.input} value={name}
         onChangeText={(text)=>setName(text)}
         placeholder='Enter name'/>
    
        <Text style={styles.main}>Actual amount of the Item:</Text>
        <TextInput style={styles.input} onChangeText={(text)=>setActualAmount(text)}
        placeholder='Enter Actual amount ' value={actualAmount}>
        </TextInput>
        
        <Text style={styles.main}> Planned amount of the item:</Text>
        <TextInput style={styles.input} 
        placeholder='Enter Planned Amount' value={plannedAmount} onChangeText={(text)=>setplannedAmount(text)}>
        </TextInput>
        <TouchableHighlight>
            <Text style={[styles.button,styles.primary]} onPress={handleaddToList}>Save</Text>
        </TouchableHighlight>
        <TouchableHighlight>
            <Text style={[styles.button,styles.success]} onPress={()=>props.navigation.navigate('Budget')}>Show Budget List</Text>
        </TouchableHighlight>
      </View>
     );
   };

const styles=StyleSheet.create({
    container:{
        fontSize:30,
        textAlign:'center',
        textDecorationColor:'green',
        color:'orange',
        fontWeight:'bold',
        margin:20,
        padding:10
    },
    input:{
        borderColor:'skyblue',
        borderWidth:2,
        margin:10
     },
     errorText:{
      color:'red'
  },
   main:{
    textAlign:'center',
    fontSize:20
   },
   button:{
    backgroundColor:'#bbb',
    color:"#fff",
    textAlign:'center',
    fontSize:20,
    padding:10,
    margin:10,
    borderRadius:8,
    
},
success:{
  backgroundColor:'magenta'
},
primary:{
   backgroundColor:'blue'
}
})
   
export default AddBudget;