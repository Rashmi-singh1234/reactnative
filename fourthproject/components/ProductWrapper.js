import React from 'react';
import { StyleSheet, Text, View ,Image,Button, ScrollView} from 'react-native'
import Header from './Header';
import Product from './Product';
const ProductWrapper = ({navigation}) => {
  
  
    const products=[
      {
        name:'Samsung mobile',
        color:'white',
        price:30000,
        image:'https://images.pcworld.com/news/graphics/171622-rogue_original.jpg',
      },
      {
        name:'Realme8',
        color:'grey',
        price:45678,
        image:'https://images.pcworld.com/news/graphics/171622-rogue_original.jpg',
      },
      {
        name:'iphone 14',
        color:'red',
        price:300000,
        image:'https://images.pcworld.com/news/graphics/171622-rogue_original.jpg',
      },
    ]
    return (
      <View styles={styles.container}>
        <Button title='Go to user list' onPress={()=>navigation.navigate("User")
    }/>
        <Header/>
        <ScrollView>
        {
          products.map((item)=>
           <Product item={item}/>
          )
        }
        </ScrollView>
        
  
      </View>
    );
    }

    const styles=StyleSheet.create({
        container:{
          flex:1
        }
      })
      
      export default ProductWrapper;