import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Pressable} from 'react-native';
import {commonStyles, SCREEN_NAMES} from '../../constants';
import CustomImage from '../CustomImage';
import CustomList from '../CustomList';
import CustomText from '../CustomText';
import CustomVideo from '../CustomVideo';
import styles from './styles';

const PostList = ({posts, onViewableItemsChanged, videoRef}) => {
  const navigation = useNavigation();

  const renderMedia = useCallback((type, data, index) => {
    if (type === 'hosted:video') {
      return (
        <CustomVideo
          id={data?.id}
          url={data?.media?.reddit_video?.fallback_url}
          isPaused={index !== 0}
          ref={videoRef[data?.id]}
        />
      );
    } else if (
      type === 'image' ||
      (data?.thumbnail !== 'self' && data?.thumbnail?.length > 0)
    ) {
      return (
        <CustomImage
          id={data?.id}
          url={type === 'image' ? data.url : data?.thumbnail}
        />
      );
    }
    return;
  }, []);

  const handleOnPress = useCallback(data => {
    navigation.navigate(SCREEN_NAMES.COMMENTS, {
      title: data?.title,
      subreddit: data?.subreddit_name_prefixed,
      postId: data?.id,
    });
  }, []);

  const renderItem = useCallback(({item, index}) => {
    const {data} = item;

    return (
      <Pressable
        key={data?.id}
        style={styles.pressable}
        onPress={() => handleOnPress(data)}>
        <CustomText string={data.title} style={commonStyles.bold20} />
        {renderMedia(data.post_hint, data, index)}
      </Pressable>
    );
  }, []);

  return (
    <CustomList
      data={posts}
      renderItem={renderItem}
      viewabilityConfig={{
        itemVisiblePercentThreshold: 50,
      }}
      onViewableItemsChanged={onViewableItemsChanged}
    />
  );
};

export default React.memo(PostList);
