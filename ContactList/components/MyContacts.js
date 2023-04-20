import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
  Image,
  Switch,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useIsFocused, useNavigation} from '@react-navigation/native';
import {openDatabase} from 'react-native-sqlite-storage';
import SearchApi from './SearchApi';
let db = openDatabase({name: 'UserDatabase3.db'});

const MyContacts = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    getData();
  }, [isFocused]);

  const getData = () => {
    db.transaction(tx => {
      tx.executeSql('SELECT * FROM table_user', [], (tx, results) => {
        var temp = [];
        for (let i = 0; i < results.rows.length; ++i)
          temp.push(results.rows.item(i));
        setUserList(temp);
      });
    });
  };
  let deleteUser = id => {
    db.transaction(tx => {
      tx.executeSql(
        'DELETE FROM  table_user where user_id=?',
        [id],
        (tx, results) => {
          console.log('Results', results.rowsAffected);
          if (results.rowsAffected > 0) {
            Alert.alert(
              'Success',
              'User deleted successfully',
              [
                {
                  text: 'Ok',
                  onPress: () => {
                    getData();
                  },
                },
              ],
              {cancelable: false},
            );
          } else {
            alert('Please insert a valid User Id');
          }
        },
      );
    });
  };
  return (
    <View style={styles.container}>
      <SearchApi />
      <FlatList
        data={userList}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity style={styles.userItem}>
              <View style={{flex: 1, flexDirection: 'row'}}>
                <View style={{flex: 3}}>
                  <Text
                    style={styles.itemText}
                    onPress={() => {
                      navigation.navigate('Profile', {
                        data: {
                          id: item.user_id,
                          name: item.name,
                          phonenumber: item.phonenumber,
                          email: item.email,
                          address: item.address,
                        },
                      });
                    }}>
                    {item.name}
                  </Text>
                  <Text style={styles.itemText}>{item.phonenumber}</Text>
                </View>
                <View style={{flex: 1}}>
                  <Image
                    source={require('./images/profile.png')}
                    style={styles.icons}
                  />
                </View>
              </View>
              <View style={styles.belowView}>
                <TouchableOpacity
                  onPress={() => {
                    navigation.navigate('EditContact', {
                      data: {
                        name: item.name,
                        phonenumber: item.phonenumber,
                        email: item.email,
                        address: item.address,
                        id: item.user_id,
                      },
                    });
                  }}>
                  <Image
                    source={require('./images/edit.png')}
                    style={styles.icons}
                  />
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    deleteUser(item.user_id);
                  }}>
                  <Image
                    source={require('./images/delete.png')}
                    style={styles.icons}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />

      <TouchableOpacity
        style={styles.addNewBtn}
        onPress={() => {
          navigation.navigate('AddContact');
        }}>
        <Text style={styles.btnText}>Add New User</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  addNewBtn: {
    backgroundColor: 'purple',
    width: 150,
    height: 50,
    borderRadius: 20,
    position: 'absolute',
    bottom: 20,
    right: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: '#fff',
    fontSize: 18,
  },
  userItem: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 10,
    //flexDirection: 'row',
  },
  itemText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
  },
  belowView: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginTop: 20,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    height: 50,
  },
  icons: {
    width: 24,
    height: 24,
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
});

export default MyContacts;
