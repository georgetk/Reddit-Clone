import React, {memo} from 'react';
import {View} from 'react-native';
import {CustomText} from '../../../components';
import styles from './styles';

const CommentItem = ({item}) => (
  <View style={styles.itemContainer}>
    <CustomText string={item?.data?.body} />
  </View>
);

export const CommentItemMemoized = memo(CommentItem);
