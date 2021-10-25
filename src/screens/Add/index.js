import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';
import {CLR_BLACK_02, CLR_WHITE_01} from '@constants';
import {useActions} from '@hooks';
import {generateUUID} from '@utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CLR_BLACK_02,
  },
  text: {
    color: CLR_WHITE_01,
    width: '90%',
    height: 35,
    padding: 5,
    backgroundColor: 'grey',
    borderRadius: 5,
    marginBottom: 10,
  },
  textMultiline: {
    height: 200,
  },
});

export const Add = ({navigation}) => {
  const {handlerAddTodo} = useActions();

  //const [newId] = useState(data.length + 1);
  const [newId] = useState(generateUUID());
  const [newUserId, setNewUserId] = useState(0);
  const [newTitle, setNewTitle] = useState('Hello world, add state redux');

  console.log('UUID : ', generateUUID());

  const handlerSave = () => {
    handlerAddTodo(newId, newUserId, newTitle, false);
    handlerGoBack();
  };

  const handlerGoBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="ID"
        style={styles.text}
        value={newId.toString()}
      />
      <TextInput
        placeholder="USER ID"
        style={styles.text}
        value={newUserId.toString()}
        onChangeText={setNewUserId}
      />
      <TextInput
        placeholder="TODO Title"
        style={[styles.text, styles.textMultiline]}
        value={newTitle}
        onChangeText={setNewTitle}
        multiline
        textAlignVertical
        scrollEnabled
      />
      <Button title="Save" onPress={() => handlerSave()} />
    </View>
  );
};
