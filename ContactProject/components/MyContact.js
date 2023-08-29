
import React,{useState,useEffect}from 'react';
import { View ,Text,StyleSheet,TouchableHighlight,
    FlatList,PermissionsAndroid, TouchableOpacity,Touchable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Contacts from 'react-native-contacts';
import {useIsFocused} from '@react-navigation/native';
import ContactCard from './ContactCard';

const MyContact=({navigation})=>{

  
    return(
      <View style={styles.container}>
        <Text>My contacts</Text>
      </View>
     );
   };
   
   const styles=StyleSheet.create({
    
   })
export default MyContact;
