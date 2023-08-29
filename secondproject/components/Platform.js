import React,{useState}from 'react';
import {webView} from 'react-native-webview'; 
import { View ,Text,Button, StyleSheet,Platform} from 'react-native';
//platform not modal
const Platforms=()=>{
 
    return(
      
      <View style={styles.main}>
        <Text style={{fontSize:30}}>Platform: {Platform.OS}</Text>
        {
          Platform.OS=='android'?
          <View style={{backgroundColor:'red',height:100,width:100}}></View>:
          <View style={{backgroundColor:'green',height:100,width:100}}></View>

        }
          <Text style={styles.text}>Hello</Text>
      
      </View>
      
      //<WebView source={{uri:"www.google.com"}}/>
     );
   };
   
   const styles=StyleSheet.create({
   text:{
    color:Platform.OS=="android"?"orange":"blue",
    fontSize:56
   }
   })
   
export default Platforms;