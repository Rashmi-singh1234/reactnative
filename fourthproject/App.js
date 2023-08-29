/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, Text, View ,Image,Button, ScrollView} from 'react-native'
import Header from './components/Header';
import Product from './components/Product';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserList from './components/UserList';
import ProductWrapper from './components/ProductWrapper';

const Stack=createNativeStackNavigator();
const App=()=>{
 return(
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={ProductWrapper}/>
      <Stack.Screen name='User' component={UserList}/>
    </Stack.Navigator>
  </NavigationContainer>
 )
  
};


export default App;
