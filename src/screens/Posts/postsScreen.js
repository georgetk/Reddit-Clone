import React, {useCallback, useEffect, useRef, useState} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import Video from 'react-native-video';
import {useDispatch, useSelector} from 'react-redux';
import {subRedditsRequest} from '../../redux/actions';
import {postsRequest} from '../../redux/actions/postsActions';
import {appColors} from '../../theme';

const PostsScreen = () => {
  const dispatch = useDispatch();

  const {subReddits} = useSelector(state => state.subReddits);
  const {posts} = useSelector(state => state.posts);

  const [focusedVideos, setFocusedVideos] = useState([]);

  const activeVideosRef = useRef([]);

  useEffect(() => {
    console.log('currently activeVideosRef.current ', activeVideosRef.current);
  }, [activeVideosRef.current]);

  useEffect(() => {
    dispatch(subRedditsRequest());
  }, []);

  useEffect(() => {
    if (subReddits?.[0]?.data?.display_name_prefixed?.length > 0) {
      dispatch(postsRequest(subReddits?.[0]?.data?.display_name_prefixed));
    }
  }, [subReddits]);

  const renderMedia = useCallback((type, data) => {
    if (type === 'image') {
      return (
        <Image
          key={data?.id}
          style={{height: 320, width: '100%'}}
          source={{uri: data.url}}
        />
      );
    } else if (type === 'hosted:video') {
      console.log(
        'is paused ',
        data?.id,
        ' ',
        !activeVideosRef.current.includes(data?.id),
      );
      return (
        <Video
          repeat
          key={data?.id}
          source={{uri: data.media.reddit_video.fallback_url}}
          style={{height: 320, width: '100%'}}
          paused={!activeVideosRef.current.includes(data?.id)}
        />
      );
    }
    return;
  }, []);

  const renderItem = useCallback(({item}) => {
    const {data} = item;
    return (
      <View
        key={data?.id}
        style={{
          backgroundColor: 'rgba(0,0,0,0.2)',
          width: '100%',
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>{data.title}</Text>
        {renderMedia(data.post_hint, data)}
      </View>
    );
  }, []);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 90,
    minimumViewTime: 0,
  };

  const onViewableItemsChanged = useCallback(({viewableItems, changed}) => {
    //  console.log('Visible items are', viewableItems);
    //  console.log('Changed in this iteration', changed);
    const viewableItemsUniqueKeys = [];
    viewableItems.forEach(item => {
      if (item?.item?.data?.post_hint === 'hosted:video') {
        viewableItemsUniqueKeys.push(item?.item?.data?.id);
      }
    });
    console.log('viewableItemsUniqueKeys ', viewableItemsUniqueKeys);

    if (viewableItemsUniqueKeys?.length > 0) {
      activeVideosRef.current = [...viewableItemsUniqueKeys];
      setFocusedVideos(...viewableItemsUniqueKeys);
    } else {
      activeVideosRef.current = [];

      setFocusedVideos([]);
    }
  }, []);

  return (
    <View style={{backgroundColor: appColors.white}}>
      {posts?.length > 0 ? (
        <FlatList
          viewabilityConfig={viewabilityConfig}
          onViewableItemsChanged={onViewableItemsChanged}
          data={posts}
          renderItem={renderItem}
          keyExtractor={item => item?.data?.id}
          ItemSeparatorComponent={() => <View style={{height: 50}} />}
        />
      ) : null}
    </View>
  );
};

export default PostsScreen;
