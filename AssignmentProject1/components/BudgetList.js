import React,{useState,useEffect}from 'react';
import { View ,Text,ScrollView,StyleSheet} from 'react-native';
import { useSelector } from 'react-redux';
const BudgetList=()=>{
    const data=useSelector((state)=>state.reducer);
    const [name,setName]=useState('');
    const [actualAmount,setActualAmount]=useState('');
    const [plannedAmount,setplannedAmount]=useState('');
    useEffect(()=>{
      setName(data.name);
      setActualAmount(data.actualAmount);
      setplannedAmount(data.plannedAmount);
   },[data])
    //const data=props;
  
    return(
      
        <ScrollView style={styles.container}>
            <Text style={styles.heading}>Budget Entry List Screen
            </Text>
            <View style={styles.dataWrapper}>
                <View style={{flex:1}}>
                <Text>Name</Text>
                </View>
                <View style={{flex:1.5}}>
                <Text>Actual Amount</Text>
                </View>
                <View style={{flex:2}}>
                <Text>Planned Amount</Text>
                </View>
                
            </View>
           {
            data.length?
            data.map((item)=>
            <View style={styles.dataWrapper}>
                <View style={{flex:1}}>
                <Text>{item.name}</Text>
                </View>
                <View style={{flex:1}}>
                <Text>{item.actualAmount}</Text>
                </View>
                <View style={{flex:1}}>
                <Text>{item.plannedAmount}</Text>
                </View>
                </View>)
    
            :null
           }
        </ScrollView>
     );
   };
   const styles=StyleSheet.create({
    heading:{
      fontSize:30,
      textAlign:'center',
      textDecorationColor:'green',
      color:'orange',
      fontWeight:'bold',
      margin:20,
      padding:10
  },
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
   
   
export default BudgetList;