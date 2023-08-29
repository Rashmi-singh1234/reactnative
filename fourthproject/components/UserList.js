import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';
const UserList = () => {
  
  
  return (
    <View styles={styles.container}>
      <Text style={{fontSize:30,textAlign:'right'
    ,padding:10,backgroundColor:'blue'}}>User List Screen</Text>
    </View>
  );
}
const styles=StyleSheet.create({
  container:{
    flex:1
  }
})

export default UserList;