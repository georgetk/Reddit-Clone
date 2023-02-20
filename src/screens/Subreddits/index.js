import React, {useCallback, useEffect} from 'react';
import {Pressable, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CustomList, CustomText, Loader} from '../../components';
import {commonStyles, SCREEN_NAMES} from '../../constants';
import {subRedditsRequest} from '../../redux/actions';
import styles from './styles';

const SubredditsScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const {subReddits, loading} = useSelector(state => state.subReddits);

  useEffect(() => {
    dispatch(subRedditsRequest());
  }, []);

  const handlePress = useCallback(
    item =>
      navigation.navigate(SCREEN_NAMES.POSTS, {
        selectedSubreddit: item?.item?.data?.display_name_prefixed,
      }),
    [],
  );

  const renderItem = useCallback(
    item => (
      <Pressable
        hitSlop={70}
        style={styles.pressable}
        onPress={() => handlePress(item)}>
        <CustomText
          string={item?.item.data?.display_name_prefixed}
          style={styles.subredditName}
        />
      </Pressable>
    ),
    [],
  );

  return (
    <View style={commonStyles.whiteContainer}>
      <CustomText
        string={'Subscribed subreddits'}
        style={[commonStyles.bold20, styles.headerText]}
      />

      {loading ? (
        <Loader />
      ) : (
        <CustomList data={subReddits} renderItem={renderItem} />
      )}
    </View>
  );
};

export default SubredditsScreen;
