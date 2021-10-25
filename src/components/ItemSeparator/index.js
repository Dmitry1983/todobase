import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CLR_WHITE_01, colorEmphasis} from '@constants';

const styles = StyleSheet.create({
  itemSeparator: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: CLR_WHITE_01,
    opacity: colorEmphasis.medium,
  },
});

export const ItemSeparator = () => {
  return <View style={styles.itemSeparator} />;
};
