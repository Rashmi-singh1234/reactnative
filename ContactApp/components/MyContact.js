
import React,{useState,useEffect}from 'react';
import { View ,Text,StyleSheet,TouchableHighlight,
    FlatList,PermissionsAndroid, TouchableOpacity,Touchable} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Contacts from 'react-native-contacts';
import {useIsFocused} from '@react-navigation/native';
import ContactCard from './ContactCard';

const MyContact=({navigation})=>{

    const isFocused=useIsFocused();
    const [myContacts,setMyContacts]=useState([]);

    useEffect(()=>{
      getAllContacts();
    },[isFocused]);

      const getAllContacts= async ()=>{
            const permission=await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS
            );
            if(permission === 'granted'){
                const contacts=await Contacts.getAll();
                console.log(contacts);
                setMyContacts(contacts);
            }
    }
    return(
      <View style={styles.container}>
        <Ionicons name='add-circle'
        size={62} color='green' style={styles.addIcon}
        onPress={()=>navigation.navigate('CreateContact')}/>
        <FlatList
          data={myContacts}
          keyExtractor={(item)=>item.recordID}
          renderItem={({item})=>(
            <TouchableOpacity onPress={()=>navigation.navigate('Profile',
            {contactInfo:{id:item.recordID}})}>
                <ContactCard contactInfo={item}/>
            </TouchableOpacity>
          )}
        />
      </View>
     );
   };
   
   const styles=StyleSheet.create({
    
   })
export default MyContact;
