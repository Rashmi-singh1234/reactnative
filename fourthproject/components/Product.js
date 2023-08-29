import React, { useEffect, useState} from 'react';
import { StyleSheet, Text, View ,Image,Button} from 'react-native';
import { useDispatch,useSelector} from 'react-redux';
import { addToCart ,RemoveToCart} from './Redux/action';

const Product = (props) => {
    
  const item=props.item;
  const dispatch=useDispatch();
  const cartItems=useSelector((state)=>state.reducer);
  const [isAdded,setIsAdded]=useState(false);
  const handleaddToCart=(item)=>{
      dispatch(addToCart(item));
  }
  const handleRemoveToCart=(item)=>{
    dispatch(RemoveToCart(item.name));
  }
  useEffect(()=>{
   let result=cartItems.filter((element)=>{
     return element.name === item.name
   });
   if(result.length){
    setIsAdded(true);
   }
   else{
    setIsAdded(false)
   }
  },[cartItems])
  return (
    <View style={{alignitems:'center',borderBottomColor:'orange',
    borderBottomWidth:2,padding:10}}>
          <Text style={{fontSize:24}}>{item.name}</Text>
          <Text style={{fontSize:24}}>{item.price}</Text>
          <Text style={{fontSize:24}}>{item.color}</Text>
          <Image style={{width:200,height:350}}
           source={{uri:item.image}}/>
           {
            isAdded?<Button title='Remove To Cart' 
            onPress={()=>handleRemoveToCart(item)}/>:
            <Button title='Add To Cart' 
          onPress={()=>handleaddToCart(item)}/>
           }
         </View>
  );
}
const styles=StyleSheet.create({
  container:{
    flex:1
  }
})

export default Product;