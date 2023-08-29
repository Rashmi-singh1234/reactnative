
import React,{useState}from 'react';
import {SectionList, View ,Text,Button} from 'react-native';
const Section=(props)=>{
 const users=[
  {
    id:1,
    name:'Anil',
    data:["PHP","React js","Angular"]
  },
  {
    id:2,
    name:'vaibhav',
    data:["java","React js","Angular"]
  },
 ]
 return(
   <View>
    <Text style={{fontSize:30}}>Section List</Text>
    <SectionList
      sections={users}
      renderItem={({item})=><Text style={{fontSize:20,marginLeft:20}}>{item}</Text>}
      renderSectionHeader={
        ({section:{name}})=>(
          <Text style={{fontSize:25,color:'red'}}>{name}</Text>
        )
      }
    />
    <Button title='go to platform page' onPress={props.Navigation.navigate("platform")}/>
   </View>
  );
};


export default Section;
