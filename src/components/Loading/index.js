import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {CLR_BLUE, CLR_BLACK_02} from '@constants';

const styles = StyleSheet.create({
  conteiner: {
    height: '100%',
    justifyContent: 'center',
    backgroundColor: CLR_BLACK_02,
  },
});

export default ({loading}) => {
  return loading ? <SpinnerLoading style={styles.conteiner} /> : null;
};

const SpinnerLoading = () => (
  <View>
    <ActivityIndicator size="large" color={CLR_BLUE} />
  </View>
);
