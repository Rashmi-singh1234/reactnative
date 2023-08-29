/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MyContact from './components/MyContact';
import CreateContact from './components/CreateContact';
import Profile from './components/Profile';

const stack=createStackNavigator();
const App=()=>{

  return (
    <NavigationContainer>
      <stack.Navigator initialRouteName='MyContact'>
        <stack.Screen name='MyContact' component={MyContact}/>
        
      </stack.Navigator>
    </NavigationContainer>
  );
}


export default App;