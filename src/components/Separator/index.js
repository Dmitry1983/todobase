import React from 'react';
import {View, StyleSheet} from 'react-native';
import {windowWidthPadding, PADDING} from '@constants';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    height: StyleSheet.hairlineWidth,
    borderColor: 'white',
    width: windowWidthPadding,
    marginLeft: PADDING,
  },
});

export const Separator = () => {
  return <View style={styles.container} />;
};
