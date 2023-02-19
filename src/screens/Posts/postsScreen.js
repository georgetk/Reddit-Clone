import React, {createRef, useCallback, useEffect, useRef} from 'react';
import {Pressable, Text, View} from 'react-native';
import {SheetManager} from 'react-native-actions-sheet';
import {useDispatch, useSelector} from 'react-redux';
import {ACTION_SHEET} from '../../components/PostFiltersActionSheet/sheets';
import {SORT_TYPE_KEYS} from '../../constants';
import {postsRequest, subRedditsRequest} from '../../redux/actions';
import {
  postsSortPeriodChange,
  postsSortTypeChange,
} from '../../redux/actions/postsActions';
import {appColors} from '../../theme';
import {sortPeriodData, sortTypeData} from './data';
import {Loader} from '../../components';
import PostList from '../../components/PostList';

const PostsScreen = () => {
  const dispatch = useDispatch();

  const {subReddits} = useSelector(state => state.subReddits);
  const {
    posts,
    selectedSort,
    selectedSortPeriodKey,
    selectedSortPeriodValue,
    loading,
  } = useSelector(state => state.posts);

  const videoRef = useRef([]);

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
    posts.forEach(item => {
      if (item?.data?.post_hint === 'hosted:video') {
        videoRef[item?.data?.id] = createRef();
      }
    });
  }, [posts]);

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

  const onViewableItemsChanged = useCallback(({changed}) => {
    changed.forEach(item => {
      const videoItem = videoRef[item.key];
      if (
        videoItem?.current &&
        item?.item?.data?.post_hint === 'hosted:video'
      ) {
        if (item.isViewable) {
          videoItem?.current?.play();
        } else {
          videoItem?.current?.pause();
        }
      }
    });
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
      {loading ? <Loader /> : null}
      {posts?.length > 0 ? (
        <PostList
          posts={posts}
          onViewableItemsChanged={onViewableItemsChanged}
          videoRef={videoRef}
        />
      ) : null}
    </View>
  );
};

export default PostsScreen;
