import React,{useState}from 'react';
import { View ,Text,SectionList,Button, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login ';

const Stack=createNativeStackNavigator();
const Stacknaigation=()=>{
    const btnAction=()=>{
        console.warn("btn pressed")
    }
    return(
      <NavigationContainer>
       <Stack.Navigator
          screenOptions={{
          headerStyle:{
            backgroundColor:'blue',
          },
            headerTitleStyle:{
                fontSize:10
            },
            headerTitleStyle:{
                backgroundColor:'blue',
            }
          }}>
           <Stack.Screen name='Login' component={Login} 
           options={{
            headerTitle:()=><Button onPress={btnAction} title='left'></Button>,
            headerRight:()=><Header/>,
          headerStyle:{
            backgroundColor:'yellow',
          },
            headerTitleStyle:{
                fontSize:20
            },
            headerTitleStyle:{
                backgroundColor:'blue',
            }
          }}/>
           <Stack.Screen name='Home' component={Home}/>
       </Stack.Navigator>
      </NavigationContainer>
     );
    };

const Header=()=>{
    return(<TextInput placeholder='name'/>)
}
const Home=(props)=>{
    //console.warn(props.route.params)
    const{name,age}=props.route.params;
    return(<View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <Text style={{fontSize:23}}>Home screen</Text>
        <Text style={{fontSize:23}}>Name:{name}</Text>
        <Text style={{fontSize:23}}>Age:{age}</Text>
    </View>)
}
 
export default Stacknaigation;