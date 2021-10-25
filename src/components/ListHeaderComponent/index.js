import React from 'react';
import {View, Text, StyleSheet, Switch} from 'react-native';
import {useActions} from '@hooks';
import {CLR_BLACK_02, CLR_WHITE_01, CLR_BLUE, CLR_GREY_02} from '@constants';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: CLR_BLACK_02,
  },
  title: {
    color: CLR_WHITE_01,
    marginHorizontal: 10,
  },
});

export const ListHeaderComponent = () => {
  const {handlerToggleCoplited, settings} = useActions();
  const {isComplited} = settings;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Complited</Text>
      <Switch
        trackColor={{false: CLR_GREY_02, true: CLR_BLUE}}
        // thumbColor={getSwitch ? '#f5dd4b' : '#f4f3f4'}
        //onValueChange={toggleSwitch}
        //value={getSwitch}
        onValueChange={() => handlerToggleCoplited(isComplited)}
        value={isComplited}
      />
    </View>
  );
};
