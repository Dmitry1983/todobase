import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import {CLR_BLUE, CLR_BLACK_02} from '@constants';

const DIA = 50;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 25,
    right: 25,
    width: DIA,
    height: DIA,
    borderRadius: DIA / 2,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: CLR_BLUE,
    backgroundColor: CLR_BLACK_02,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export const FlyButton = ({onPress}) => {
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={onPress}>
        <FontAwesomeIcon icon={faPlus} color={CLR_BLUE} size={14} />
      </TouchableOpacity>
    </View>
  );
};
