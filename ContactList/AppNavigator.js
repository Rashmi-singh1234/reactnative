import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import MyContacts from './components/MyContacts';
import Profile from './components/Profile';
import EditContact from './components/EditContact';
import AddContact from './components/AddContact';
import Favourite from './components/Favourite';
import SearchApi from './components/SearchApi';
import {createDrawerNavigator} from '@react-navigation/drawer';
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="MyContacts">
        <Drawer.Screen
          component={MyContacts}
          name={'MyContacts'}
          options={{headerShown: true}}
        />
        <Drawer.Screen
          component={AddContact}
          name={'AddContact'}
          options={{headerShown: true}}
        />
        <Drawer.Screen
          component={Favourite}
          name={'Favourite Contacts'}
          options={{headerShown: true}}
        />
        <Drawer.Screen name="SearchApi" component={SearchApi} />
        <Drawer.Screen
          component={EditContact}
          name={'EditContact'}
          options={{
            headerShown: true,
            drawerItemStyle: {
              display: 'none',
            },
          }}
        />
        <Drawer.Screen
          component={Profile}
          name={'Profile'}
          options={{
            headerShown: true,
            drawerItemStyle: {
              display: 'none',
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
