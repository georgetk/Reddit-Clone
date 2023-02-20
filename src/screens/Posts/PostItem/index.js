import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Pressable} from 'react-native';
import {CustomText} from '../../../components';
import {commonStyles, SCREEN_NAMES} from '../../../constants';
import RenderMedia from '../RenderMedia';
import styles from './styles';

const PostItem = ({data, index, videoRef}) => {
  const navigation = useNavigation();

  const handleOnPress = useCallback(data => {
    navigation.navigate(SCREEN_NAMES.COMMENTS, {
      title: data?.title,
      subreddit: data?.subreddit_name_prefixed,
      postId: data?.id,
    });
  }, []);

  return (
    <Pressable
      key={data?.id}
      style={styles.pressable}
      onPress={() => handleOnPress(data)}>
      <CustomText string={data.title} style={commonStyles.bold20} />
      <RenderMedia data={data} index={index} videoRef={videoRef} />
    </Pressable>
  );
};

const PostItemMemoized = PostItem;

export default PostItemMemoized;
