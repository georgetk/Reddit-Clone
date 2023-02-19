import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {FlatList, Pressable, Text, View} from 'react-native';
import {SheetManager} from 'react-native-actions-sheet';
import {useDispatch, useSelector} from 'react-redux';
import {ACTION_SHEET} from '../../components/PostFiltersActionSheet/sheets';
import {SORT_TYPE_KEYS} from '../../constants';
import ScreenNames from '../../constants/screenNames';
import {postsRequest, subRedditsRequest} from '../../redux/actions';
import {
  postsSortPeriodChange,
  postsSortTypeChange,
} from '../../redux/actions/postsActions';
import {appColors} from '../../theme';
import {debounce} from '../../utils';
import {sortPeriodData, sortTypeData} from './data';
import {CustomImage, CustomVideo} from '../../components';

const PostsScreen = () => {
  const dispatch = useDispatch();

  const {subReddits} = useSelector(state => state.subReddits);
  const {posts, selectedSort, selectedSortPeriodKey, selectedSortPeriodValue} =
    useSelector(state => state.posts);

  const [focusedVideos, setFocusedVideos] = useState([]);

  const activeVideosRef = useRef([]);
  const navigation = useNavigation();

  // useEffect(() => {
  //   console.log('currently activeVideosRef.current ', activeVideosRef.current);
  // }, [activeVideosRef.current]);

  useEffect(() => {
    dispatch(subRedditsRequest());
  }, []);

  useEffect(() => {
    if (subReddits?.[0]?.data?.display_name_prefixed?.length > 0) {
      dispatch(
        postsRequest(
          subReddits?.[0]?.data?.display_name_prefixed,
          selectedSort,
          selectedSortPeriodKey,
        ),
      );
    }
  }, [subReddits, selectedSort, selectedSortPeriodKey]);

  useEffect(() => {
    console.log('posts ', posts);
  }, [posts]);

  const renderMedia = useCallback((type, data) => {
    if (type === 'image') {
      return <CustomImage id={data?.id} url={data.url} />;
    } else if (type === 'hosted:video') {
      // console.log(
      //   'is paused ',
      //   data?.id,
      //   ' ',
      //   !activeVideosRef.current.includes(data?.id),
      // );
      return (
        <CustomVideo
          id={data?.id}
          url={data.media.reddit_video.fallback_url}
          isPaused={!activeVideosRef.current.includes(data?.id)}
        />
      );
    }
    return;
  }, []);

  const renderItem = useCallback(({item}) => {
    const {data} = item;
    return (
      <Pressable
        key={data?.id}
        style={{
          backgroundColor: appColors.opacityAdjusted,
          padding: 10,
          width: '100%',
        }}
        onPress={() => {
          navigation.navigate(ScreenNames.COMMENTS, {
            title: data?.title,
            subreddit: data?.subreddit_name_prefixed,
            postId: data?.id,
          });
        }}>
        <Text style={{fontWeight: 'bold', fontSize: 16}}>{data.title}</Text>
        {renderMedia(data.post_hint, data)}
      </Pressable>
    );
  }, []);

  const onViewableItemsChanged = useCallback(
    debounce(({viewableItems}) => {
      //  console.log('Visible items are', viewableItems);
      //  console.log('Changed in this iteration', changed);
      const viewableItemsUniqueKeys = [];
      viewableItems.forEach(item => {
        if (item?.item?.data?.post_hint === 'hosted:video') {
          viewableItemsUniqueKeys.push(item?.item?.data?.id);
        }
      });
      //   console.log('viewableItemsUniqueKeys ', viewableItemsUniqueKeys);

      if (viewableItemsUniqueKeys?.length > 0) {
        activeVideosRef.current = [...viewableItemsUniqueKeys];
        setFocusedVideos(...viewableItemsUniqueKeys);
      } else {
        activeVideosRef.current = [];

        setFocusedVideos([]);
      }
    }),
    [],
  );

  const handleSortButtonClick = useCallback(async () => {
    const resultObj = await SheetManager.show(ACTION_SHEET.SORT_TYPE, {
      payload: sortTypeData,
    });
    dispatch(postsSortTypeChange(resultObj.key));

    if (
      resultObj.key === SORT_TYPE_KEYS.TOP ||
      resultObj.key === SORT_TYPE_KEYS.CONTROVERSIAL
    ) {
      const {key, value} = await SheetManager.show(ACTION_SHEET.SORT_PERIOD, {
        payload: sortPeriodData,
      });
      dispatch(
        postsSortPeriodChange({sortPeriodKey: key, sortPeriodValue: value}),
      );
    }
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: appColors.white}}>
      <Pressable
        style={{
          borderColor: appColors.blue,
          padding: 5,
          borderWidth: 1,
          alignSelf: 'flex-start',
          marginBottom: 10,
        }}
        onPress={handleSortButtonClick}>
        <Text style={{fontSize: 16, color: appColors.blue}}>
          {`${(
            selectedSort +
            (selectedSort === SORT_TYPE_KEYS.TOP ||
            selectedSort === SORT_TYPE_KEYS.CONTROVERSIAL
              ? ` ${selectedSortPeriodValue}`
              : '')
          )?.toUpperCase()} POSTS`}
        </Text>
      </Pressable>

      {posts?.length > 0 ? (
        <FlatList
          viewabilityConfig={{
            itemVisiblePercentThreshold: 50,
            minimumViewTime: 300,
          }}
          onViewableItemsChanged={onViewableItemsChanged}
          data={posts}
          renderItem={renderItem}
          keyExtractor={item => item?.data?.id}
          ItemSeparatorComponent={() => <View style={{height: 10}} />}
        />
      ) : null}
    </View>
  );
};

export default PostsScreen;
