import React,{useState}from 'react';

import { FlatList, View ,Text, StyleSheet,ScrollView} from 'react-native';
const List=()=>{
    const users=[
     {id:1,name:"Vaibhav"},
     {id:2,name:"Rashmi"},
     {id:3,name:"Raj"},
     
    ]
    return(
   
     <View>
       <Text style={{fontSize:31}}>List with map function</Text>
       <ScrollView style={{marginBottom:50}}>
       {
         users.map((item)=><Text style={styles.item}>{item.name}</Text>)
       }
       </ScrollView>
     </View>
     /*
     <View>
       <Text style={{fontSize:31}}>List with flat list Component</Text>
       <FlatList
       data={users}
       renderItem={({item})=><Text style={styles.item}>{item.name}</Text>}
       keyExtractor={item=>item.id}
       />
     </View>
     */
     );
   };
   const styles=StyleSheet.create({
     item:{
       fontSize:24,
       padding:10,
       color:'#fff',
       backgroundColor:'blue',
       borderColor:'black',
       borderWidth:1,
       margin:10
     }
   })
   
   export default List;