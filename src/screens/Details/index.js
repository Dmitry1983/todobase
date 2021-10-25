import React from 'react';
import {View, Text, StyleSheet, Button, TextInput, Switch} from 'react-native';
import {useActions} from '@hooks';
// import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
// import {faCoffee, faPlus, faUndo} from '@fortawesome/free-solid-svg-icons';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  textColor: {
    color: 'white',
  },
  input: {
    width: 200,
    height: 30,
    color: 'black',
    backgroundColor: 'darkgrey',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginVertical: 10,
  },
});

export const Details = ({route, navigation}) => {
  const {handlerRemoveTodos, handlerToggleTodo, handlerEditTodo, data} =
    useActions();
  const idRoute = route.params.id;
  console.log('idRoute :', idRoute);
  const item = data.find(i => i.id === idRoute);
  const {id, userId, title, completed} = item;

  const handlerGoBack = () => {
    navigation.goBack();
  };

  const handlerRemove = ide => {
    handlerGoBack();
    handlerRemoveTodos(ide);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.textColor}>Details</Text>
      <TextInput style={styles.input} value={id.toString()} />
      <TextInput style={styles.input} value={userId.toString()} />
      <TextInput
        style={styles.input}
        value={title}
        onChangeText={text => handlerEditTodo(id, text)}
      />
      <Switch value={completed} onValueChange={() => handlerToggleTodo(id)} />
      <Button title="Go back" onPress={() => handlerGoBack()} />
      <Button title="Save" onPress={() => navigation.goBack()} />
      <Button title="Remove" onPress={() => handlerRemove(id)} />
      {/* <FontAwesomeIcon icon={faCoffee} color={'white'} />
      <FontAwesomeIcon
        icon={faPlus}
        color={'white'}
        size={16}
        onPress={() => console.log('press')}
        secondaryOpacity={0.4}
      />
      <FontAwesomeIcon
        icon={faUndo}
        color={'white'}
        size={32}
        onPress={() => console.log('press')}
        secondaryOpacity={0.4}
      /> */}
    </View>
  );
};
