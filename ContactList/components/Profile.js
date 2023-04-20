/*import React from 'react';
import {View,Text} from 'react-native'
const Profile=()=>{
  
  return (
    <View>
      <Text>Contact Profile</Text>
    </View>
  );
}


export default Profile;
*/
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Dimensions,
  StatusBar,
  FlatList,
  Switch,
  TouchableOpacity,
  ActivityIndicator,
  Linking,
} from 'react-native';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {getColorByLetter} from '../utils';
import {openDatabase} from 'react-native-sqlite-storage';
import {useNavigation, useRoute} from '@react-navigation/native';
let db = openDatabase({name: 'UserDatabase3.db'});
export default function Profile() {
  const route = useRoute();
  const id = route.params.data.id;
  const name = route.params.data.name;
  const email = route.params.data.email;
  const phonenumber = route.params.data.phonenumber;
  const address = route.params.data.address;
  const userList = [name, phonenumber, email, address];
  const [isFavourite, setIsFavourite] = useState(false);
  const toggleValueChange = () =>
    setIsFavourite(previousState => !previousState);

  //console.warn(userList);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('./images/edit.png')}
        style={{...styles.backgroundImage, backgroundColor: 'orange'}}>
        <AntDesign
          name="delete"
          size={28}
          color="white"
          style={{
            position: 'absolute',
            top: StatusBar.currentHeight,
            right: 20,
          }}
        />
        <Text style={styles.mainText}>{name}</Text>
      </ImageBackground>
      <View>
        <Text style={styles.favourite}>Add to favourites</Text>
        <Text>
          <Switch
            trackColor={{false: '#767577', true: 'blue'}}
            thumbColor={isFavourite ? '#f5dd4b' : '#f4f3f4'}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleValueChange}
            value={isFavourite}
          />
        </Text>
      </View>
      <View style={{flex: 1, marginTop: 20}}>
        <FlatList
          data={userList}
          keyExtractor={item => userList}
          renderItem={({item}) => (
            <View style={styles.phonenNumberContainer}>
              <Text style={{fontSize: 18, marginLeft: 10}}>{item}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height / 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainText: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold',
  },
  phonenNumberContainer: {
    flex: 1,
    marginHorizontal: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    elevation: 3,
    paddingVertical: 15,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  favourite: {
    fontSize: 20,
    marginRight: 10,
    marginTop: 10,
  },
});
