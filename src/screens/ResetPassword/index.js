import React from 'react';
import {View, StyleSheet, TextInput, Button} from 'react-native';
import {useInput} from '@hooks';
import {CLR_BLACK_02, CLR_GREY} from '@constants';
// import {useActions} from '@hooks';
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
});

export const ResetPassword = ({navigation}) => {
  // const {handlerUserToken} = useActions();
  const email = useInput('', 'email');
  return (
    <View style={styles.container}>
      <View>
        <LogoTitle props={{height: 130, marginBottom: 200}} />
      </View>

      <TextInput {...email} style={styles.input} />
      <Button
        // onPress={() => {
        //   handlerUserToken(true);
        // }}
        onPress={() => {}}
        title="Reset Password"
      />
    </View>
  );
};
