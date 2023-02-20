import React, {memo, useCallback} from 'react';
import {Pressable} from 'react-native';
import {CustomText} from '../../../components';
import {SCREEN_NAMES} from '../../../constants';
import styles from './styles';

const SubredditItem = ({item, navigation}) => {
  const handlePress = useCallback(
    item =>
      navigation.navigate(SCREEN_NAMES.POSTS, {
        selectedSubreddit: item?.item?.data?.url,
      }),
    [],
  );

  return (
    <Pressable style={styles.pressable} onPress={() => handlePress(item)}>
      <CustomText
        string={item?.item.data?.display_name_prefixed}
        style={styles.subredditName}
      />
    </Pressable>
  );
};

export const SubredditItemMemoized = memo(SubredditItem);
