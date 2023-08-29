import React, { useEffect, useState,useSelector } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux';
const Header = () => {
  
  const cartData=useSelector((state)=>state.reducer);
  const [cartItems,setCartItems]=useState(0);
  
  useEffect(()=>{
     setCartItems(cartData.length);
  },[cartData])
  return (
    <View styles={styles.container}>
      <Text style={{fontSize:30,textAlign:'right'
    ,padding:10,backgroundColor:'blue'}}>{cartItems}</Text>
    </View>
  );
}
const styles=StyleSheet.create({
  container:{
    flex:1
  }
})

export default Header;