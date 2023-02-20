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
import {AppHeader, CustomList, CustomText, Loader} from '../../components';
import styles from './styles';
import PostItemMemoized from './PostItem';

const PostsScreen = ({navigation, route}) => {
  const {selectedSubreddit} = route.params;

console.log('selectedSubreddit ',selectedSubreddit);

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
    console.log('posts ', posts);
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

  const onViewableItemsChanged = useCallback(({viewableItems, changed}) => {
    const uniqueKeys = new Set(viewableItems.map(item => item.key));

    const combinedItems = [
      ...viewableItems,
      ...changed.filter(item => !uniqueKeys.has(item.key)),
    ];

    combinedItems.forEach(item => {
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
        <CustomList
          data={posts}
          renderItem={({item, index}) => (
            <PostItemMemoized data={item.data} index={index} videoRef={videoRef} />
          )}
          viewabilityConfig={{
            itemVisiblePercentThreshold: 50,
          }}
          onViewableItemsChanged={onViewableItemsChanged}
        />
      ) : null}
    </View>
  );
};

export default PostsScreen;
