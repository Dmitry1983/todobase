import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';
import {CLR_BLACK_02, CLR_WHITE, colorEmphasis} from '@constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: CLR_BLACK_02,
  },
  item: {
    backgroundColor: CLR_BLACK_02,
    height: 80,
    flexDirection: 'row',
    padding: 10,
  },
  messageContainer: {
    backgroundColor: CLR_BLACK_02,
    maxWidth: 300,
  },
  name: {
    fontSize: 16,
    color: CLR_WHITE,
    opacity: colorEmphasis.high,
    fontWeight: '600',
  },
  subject: {
    fontSize: 14,
    color: CLR_WHITE,
    fontWeight: '300',
  },
  text: {
    fontSize: 10,
    color: CLR_WHITE,
    opacity: colorEmphasis.medium,
  },
  avatar: {
    width: 30,
    height: 30,
    opacity: colorEmphasis.high,
    borderColor: 'white',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 5,
    marginRight: 10,
    alignSelf: 'center',
  },
});

export const Item = ({item, onPress}) => {
  return (
    <View styles={styles.container}>
      <Pressable onPress={onPress}>
        <View style={styles.item}>
          <View style={styles.avatar} />
          <View style={styles.messageContainer}>
            <Text style={styles.name} numberOfLines={1}>
              {item.id}
            </Text>
            <Text style={styles.subject} numberOfLines={1}>
              Title: {item.title}
            </Text>
            <Text style={styles.text} numberOfLines={2}>
              {item.title}
            </Text>
          </View>
        </View>
        <View />
      </Pressable>
    </View>
  );
};
