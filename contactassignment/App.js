import { createDrawerNavigator } from '@react-navigation/drawer';
import MyContacts from './components/MyContacts';
import Profile from './components/Profile';
const Drawer = createDrawerNavigator();
import { NavigationContainer } from '@react-navigation/native';
import AddContact from './components/AddContact';
import SearchApi from './components/SearchApi';

const App=()=> {
  return (
    <NavigationContainer>
    <Drawer.Navigator initialRouteName='MyContacts'>
      <Drawer.Screen name="MyContacts" component={MyContacts} />
      <Drawer.Screen name="Profile" component={Profile} />
      <Drawer.Screen name="AddContact" component={AddContact} />
      <Drawer.Screen name="SearchApi" component={SearchApi} />
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default App;