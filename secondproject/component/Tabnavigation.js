import React,{useState}from 'react';
import { View ,Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const TabNavigation=()=>{
    const Tab = createBottomTabNavigator();
    return(
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name='Login' component={Login}/>
          <Tab.Screen name='SignUp' component={SignUp}/>
        </Tab.Navigator>
      </NavigationContainer>
     );
   };

const Login=()=>{
    return<View>
        <Text>Login</Text>
    </View>
}

const SignUp=()=>{
    return<View>
        <Text>SignUp</Text>
    </View>
}
   
export default TabNavigation;