import React from 'react';
import {SafeAreaView, StyleSheet, StatusBar} from 'react-native';
import SwipeableFlatList from 'react-native-swipeable-list';
import {
  QuickItem,
  FlyButton,
  RenderLoader,
  Item,
  ItemSeparator,
  ListHeaderComponent,
} from '@components';
import {useActions} from '@hooks';
import {extractItemKey} from '@utils';
import {CLR_BLACK_02} from '@constants';

const styles = StyleSheet.create({
  container: {
    backgroundColor: CLR_BLACK_02,
    flex: 1,
  },

  contentContainerStyle: {
    flexGrow: 1,
    backgroundColor: CLR_BLACK_02,
  },
});

export const Swipe = ({navigation}) => {
  const {handlerRemoveTodos, data, settings} = useActions();
  const {isComplited} = settings;
  // const {handlerRemoveTodos} = useActions();
  // const data = [];

  function isComplitedItem(item) {
    return item.completed === true;
  }

  const filterData = isComplited ? data.filter(isComplitedItem) : data;

  const handlerDetails = item => {
    navigation.navigate('Details', {
      id: item.id,
    });
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />

      <SafeAreaView style={styles.container}>
        {data.length === 0 ? (
          <RenderLoader />
        ) : (
          <SwipeableFlatList
            keyExtractor={extractItemKey}
            data={filterData}
            ListHeaderComponent={<ListHeaderComponent />}
            stickyHeaderIndices={[0]}
            renderItem={({item}) => {
              return <Item item={item} onPress={() => handlerDetails(item)} />;
            }}
            maxSwipeDistance={240}
            renderQuickActions={({index, item}) =>
              QuickItem(index, item, handlerRemoveTodos)
            }
            contentContainerStyle={styles.contentContainerStyle}
            shouldBounceOnMount={true}
            ItemSeparatorComponent={ItemSeparator}
          />
        )}
        <FlyButton onPress={() => navigation.navigate('Add')} />
      </SafeAreaView>
    </>
  );
};
