import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
  },
});

export const LogoTitle = ({props}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.container}
        {...props}
        source={require('../../assets/images/logo_mini.png')}
        resizeMode="contain"
      />
    </View>
  );
};
