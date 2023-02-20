import React, {createRef, useCallback, useEffect, useRef} from 'react';
import {Pressable, View} from 'react-native';
import {SheetManager} from 'react-native-actions-sheet';
import {useDispatch, useSelector} from 'react-redux';
import {ACTION_SHEET} from '../../components/PostFiltersActionSheet/sheets';
import {commonStyles, SORT_TYPE_KEYS} from '../../constants';
import {postsRequest} from '../../redux/actions';
import {
  postsSortPeriodChange,
  postsSortTypeChange,
} from '../../redux/actions/postsActions';
import {sortPeriodData, sortTypeData} from './data';
import {AppHeader, CustomText, Loader} from '../../components';
import PostList from '../../components/PostList';
import styles from './styles';

const PostsScreen = ({navigation, route}) => {
  const {selectedSubreddit} = route.params;

  const dispatch = useDispatch();

  const {
    posts,
    selectedSort,
    selectedSortPeriodKey,
    selectedSortPeriodValue,
    loading,
  } = useSelector(state => state.posts);

  const videoRef = useRef([]);

  useEffect(() => {
    if (selectedSubreddit?.length > 0) {
      dispatch(
        postsRequest(selectedSubreddit, selectedSort, selectedSortPeriodKey),
      );
    }
  }, [selectedSubreddit, selectedSort, selectedSortPeriodKey]);

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

  const sortLabel =
    selectedSort === SORT_TYPE_KEYS.TOP ||
    selectedSort === SORT_TYPE_KEYS.CONTROVERSIAL
      ? `${selectedSort} ${selectedSortPeriodValue}`
      : selectedSort;

  return (
    <View style={commonStyles.whiteContainer}>
      <AppHeader navigation={navigation} />

      <Pressable style={styles.pressable} onPress={handleSortButtonClick}>
        <CustomText
          string={`${sortLabel.toUpperCase()} POSTS`}
          style={styles.sortTypeText}
        />
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
