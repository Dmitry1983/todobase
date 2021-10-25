import React from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  Button,
  TouchableOpacity,
  Text,
} from 'react-native';
import {useInput, useActions} from '@hooks';
import {CLR_BLACK_02, CLR_GREY, CLR_BLUE} from '@constants';
import {LogoTitle} from '@components';

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
});

export const SignUp = ({navigation}) => {
  // const {handlerUserToken} = useActions();
  const username = useInput('', 'username');
  const password = useInput('', 'password');
  // const handlerGoBack = () => {
  //   navigation.goBack();
  // };
  return (
    <View style={styles.container}>
      <View>
        <LogoTitle props={{height: 130, marginBottom: 200}} />
      </View>

      <TextInput {...username} style={styles.input} />
      <TextInput {...password} style={styles.input} secureTextEntry />
      <Button
        // onPress={() => {
        //   handlerUserToken(true);
        // }}
        onPress={() => {}}
        title="Sign Up"
      />
      <TouchableOpacity onPress={() => navigation.navigate('ResetPassword')}>
        <Text style={styles.link}>Forget Password</Text>
      </TouchableOpacity>
    </View>
  );
};
