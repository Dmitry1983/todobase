import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  Text,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {useInput, useFirestore} from '@hooks';
import {CLR_BLACK_02, CLR_GREY, CLR_BLUE} from '@constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: CLR_BLACK_02,
  },
  input: {
    color: CLR_BLACK_02,
    width: '80%',
    height: 36,
    paddingHorizontal: 18,
    backgroundColor: CLR_GREY,
    borderRadius: 18,
    marginBottom: 20,
    textAlign: 'center',
  },
  link: {
    color: CLR_BLUE,
  },
  title: {
    color: CLR_BLUE,
    marginBottom: 100,
  },
  status: {
    color: CLR_GREY,
    marginTop: 100,
  },
  button: {
    marginVertical: 1,
  },
  text: {
    color: CLR_GREY,
    margin: 5,
  },
  item: {flexDirection: 'row', height: 30},
});

export const SignInFB = () => {
  const username = useInput('123@gmail.com', 'username');
  const password = useInput('123123', 'password');

  const {
    error,
    signIn,
    signOut,
    signUp,
    dataShot,
    setData,
    getData,
    toggleComplete,
    removeData,
    getSnapshort,
    loading,
  } = useFirestore();

  return (
    <View style={styles.container}>
      <TextInput {...username} style={styles.input} />
      <TextInput {...password} style={styles.input} secureTextEntry />
      <Button
        onPress={() => {
          signUp(username.value, password.value);
        }}
        title="Sign Up"
      />
      <View style={styles.button} />
      <Button
        onPress={() => {
          signIn(username.value, password.value);
        }}
        title="Sign In"
      />
      <View style={styles.button} />
      <Button
        onPress={() => {
          signOut();
        }}
        title="Sign Out"
      />
      <View style={styles.button} />
      <Button
        onPress={() => {
          getData();
        }}
        title="Read data"
      />
      <View style={styles.button} />
      <Button
        onPress={() => {
          setData();
        }}
        title="Add data"
      />
      <View style={styles.button} />
      <Button
        onPress={() => {
          toggleComplete(true);
        }}
        title="Toggle Data"
      />
      <View style={styles.button} />
      <Button
        onPress={() => {
          removeData();
        }}
        title="Remove Data"
      />
      <View style={styles.button} />
      <Button
        onPress={() => {
          getSnapshort();
        }}
        title="getSnapshort"
      />
      {!loading ? (
        <FlatList
          keyExtractor={dataShot.id}
          data={dataShot}
          renderItem={({item}) => {
            return (
              <TouchableOpacity
                style={styles.item}
                onLongPress={() => {
                  removeData(item.id);
                }}
                onPress={() => {
                  toggleComplete(item.id, item.complete);
                }}>
                {/* <Text style={styles.text}>{item.num}</Text> */}
                <Text style={styles.text}>{item.title}</Text>
                <Text style={styles.text}>{item.article}</Text>
                <Text style={styles.text}>{item.complete ? '+' : '-'}</Text>
              </TouchableOpacity>
            );
          }}
        />
      ) : (
        <ActivityIndicator />
      )}

      <Text style={styles.status}>{error}</Text>
    </View>
  );
};
