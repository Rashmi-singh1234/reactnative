import React,{useState}from 'react';
import { View ,Text, TouchableHighlight, StyleSheet} from 'react-native';

const ResponsiveLayout=()=>{
 
    return(
      /*
      <View style={{flex:1}}>
        
        <View style={{backgroundColor:'yellow',flex:2,flexDirection:'row'}}>
        <View style={{backgroundColor:'red',flex:1}}>
        <Text style={{fontSize:30}}>Responsive UI with flex</Text>
        </View>
        <Text style={{fontSize:30}}>Responsive UI with flex</Text>
        </View>
        <View style={{backgroundColor:'red',flex:1}}>
        <Text style={{fontSize:30}}>Responsive UI with flex</Text>
        </View>
        <View style={{backgroundColor:'blue',flex:1}}>
        <Text style={{fontSize:30}}>Responsive UI with flex</Text>
        </View>
      </View>
      */
      <View style={styles.main}>
        <Text style={{fontSize:30}}>Button styling</Text>
        <TouchableHighlight>
            <Text style={styles.button}>Button</Text>
        </TouchableHighlight>
        <TouchableHighlight>
            <Text style={[styles.button,styles.success]}>Submit</Text>
        </TouchableHighlight>
        <TouchableHighlight>
            <Text style={[styles.button,styles.primary]}>Save</Text>
        </TouchableHighlight>
      </View>
     );
   };
  
   const styles=StyleSheet.create({
    main:{
        flex:1
    },
    button:{
        backgroundColor:'#bbb',
        color:"#fff",
        textAlign:'center',
        fontSize:24,
        padding:10,
        margin:10,
        borderRadius:8,
        shadowColor:'red',
        elevation:10,
        shadowOpacity:.5
    },
    success:{
       backgroundColor:'green'
    },
    primary:{
        backgroundColor:'blue'
     }
   })
   
export default ResponsiveLayout;