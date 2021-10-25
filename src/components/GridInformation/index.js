import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import {
  //   CLR_BLUE,
  //   CLR_WHITE,
  //   CLR_ORANGE_C01,
  //   CLR_RED_C01,
  //   colorEmphasis,
  CLR_BLACK_02,
} from '../../constants/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: CLR_BLACK_02,
  },
});

export const GridInformation = ({props, onPressBack}) => {
  const {handlerAddTodo} = props;
  return (
    <View style={styles.container}>
      <Text>GridInformation</Text>
      <Button title="goBack" onPress={onPressBack} />
      <Button title="addTitle" onPress={handlerAddTodo} />
    </View>
  );
};
