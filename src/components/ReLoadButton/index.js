import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faUndo} from '@fortawesome/free-solid-svg-icons';
import {CLR_BLUE} from '@constants';

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 20,
    width: 20,
  },
});

export const ReLoadButton = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <FontAwesomeIcon icon={faUndo} color={CLR_BLUE} size={16} />
      </TouchableOpacity>
    </View>
  );
};
