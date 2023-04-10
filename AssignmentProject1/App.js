/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {View,Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BudgetList from './components/BudgetList';
import AddBudget from './components/AddBudget';




const Stack=createNativeStackNavigator();

const App=()=>{
  
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name='Home' component={AddBudget}/>
      <Stack.Screen name='Budget' component={BudgetList}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}



export default App;
