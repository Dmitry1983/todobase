import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Alert} from 'react-native';

const darkColors = {
  background: '#121212',
  primary: '#ffffff',
  primary2: '#3700b3',
  secondary: '#03DAC6',
  onBackground: '#FFFFFF',
  error: 'red',
};

const colorEmphasis = {
  high: 1,
  medium: 0.6,
  disabled: 0.38,
};

export const QuickItem = (index, qaItem, handlerRemoveTodo) => {
  const deleteItem = itemId => {
    console.log('Item : ', itemId);
    Alert.alert(
      'DELET ALERT',
      "Not gonna Archive it. We're actually are gonna just delete it.",
      [
        {
          text: 'Just delete it?',
          onPress: () => handlerRemoveTodo(itemId),
          // onPress: () => remove(itemId),
          style: 'destructive',
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
    );
  };

  const archiveItem = itemId => {
    Alert.alert(
      'DISHONESTY ALERT',
      "Not gonna Archive it. We're actually are gonna just delete it.",
      [
        {
          text: 'Just delete it?',
          onPress: () => deleteItem(itemId),
          style: 'destructive',
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
    );
  };

  const snoozeItem = itemId => {
    Alert.alert(
      'DISHONESTY ALERT',
      "Not gonna Snooze it. We're actually are gonna just delete it.",
      [
        {
          text: 'Just delete it?',
          onPress: () => deleteItem(itemId),
          style: 'destructive',
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
      ],
    );
  };

  return (
    <View style={styles.qaContainer}>
      <View style={[styles.button]}>
        <TouchableOpacity
          onPress={() => archiveItem(qaItem.id)}
          style={[styles.button1]}>
          <Text style={[styles.buttonText, styles.button1Text]}>Archive</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.button]}>
        <TouchableOpacity
          onPress={() => snoozeItem(qaItem.id)}
          style={[styles.button1]}>
          <Text style={[styles.buttonText, styles.button2Text]}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={[styles.button]}>
        <TouchableOpacity
          onPress={() => deleteItem(qaItem.id)}
          style={[styles.button1]}>
          <Text style={[styles.buttonText, styles.button3Text]}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  qaContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    //backgroundColor: 'white',
  },
  button: {
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1: {
    width: 60,
    height: 60,
    borderRadius: 30,
    // backgroundColor: 'black',
    borderColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    fontWeight: '300',
    opacity: colorEmphasis.high,
  },
  button1Text: {
    // color: darkColors.primary,
    color: '#5CCCCC',
  },
  button2Text: {
    color: '#67E667',
  },
  button3Text: {
    color: '#FF7373',
  },
  contentContainerStyle: {
    flexGrow: 1,
    backgroundColor: darkColors.backgroundColor,
  },
});
