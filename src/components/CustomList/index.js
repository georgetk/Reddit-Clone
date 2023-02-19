import React from 'react';
import {FlatList} from 'react-native';
import ListSeparator from '../ListSeparator';

const CustomList = ({data, renderItem, ...balanceProps}) => (
  <FlatList
    data={data}
    renderItem={renderItem}
    keyExtractor={item => item?.data?.id}
    ItemSeparatorComponent={() => <ListSeparator />}
    {...balanceProps}
  />
);

export default CustomList;
