import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Button,
  TouchableOpacity,
  Image,
  TextInput,
  StyleSheet,
} from 'react-native';
import {openDatabase} from 'react-native-sqlite-storage';
let db = openDatabase({name: 'UserDatabase3.db'});
import {useNavigation} from '@react-navigation/native';
const SearchApi = () => {
  const input = useRef();
  const [data, setData] = useState([]);
  const navigation = useNavigation();

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

  const searchUser = props => {
    db.transaction(tx => {
      tx.executeSql(
        'SELECT * FROM table_user where name or phonenumber=?',
        [props],
        (tx, results) => {
          var temp = [];

          for (let i = 0; i < results.rows.length; ++i)
            temp.push(results.rows.item(i));
          setData(temp);
        },
      );
    });
  };
  return (
    <View>
      <TextInput
        style={{
          borderColor: 'skyblue',
          borderWidth: 1,
          margin: 15,
          fontSize: 20,
        }}
        placeholder={'search'}
        onChangeText={text => searchUser(text)}></TextInput>
      {data.length ? (
        /*data.map(item => (
           
            <View
              style={{
                padding: 10,
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={{fontSize: 20}}>{item.name}</Text>
              <Text style={{fontSize: 20}}>{item.email}</Text>
            </View>
          ))*/
        <FlatList
          data={data}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity
                style={styles.userItem}
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
                <View style={{flex: 1, flexDirection: 'row'}}>
                  <View style={{flex: 2}}>
                    <Text style={styles.itemText}>{item.name}</Text>
                    <Text style={styles.itemText}>{item.phonenumber}</Text>
                  </View>
                  <View style={{flex: 1}}></View>
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
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  /*container:{
            flex:1,
            padding:16
        },*/
  input: {
    borderColor: 'skyblue',
    borderWidth: '2',
    margin: 10,
  },
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

export default SearchApi;
