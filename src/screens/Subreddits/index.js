import React, {useCallback, useEffect} from 'react';
import {Pressable, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CustomList, Loader} from '../../components';
import {SCREEN_NAMES} from '../../constants';
import {subRedditsRequest} from '../../redux/actions';
import {appColors} from '../../theme';

const SubredditsScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const {subReddits, loading} = useSelector(state => state.subReddits);

  useEffect(() => {
    dispatch(subRedditsRequest());
  }, []);

  const renderItem = useCallback(
    item => (
      <Pressable
        hitSlop={70}
        style={{backgroundColor: appColors.opacityAdjusted, padding: 20}}
        onPress={() =>
          navigation.navigate(SCREEN_NAMES.POSTS, {
            selectedSubreddit: item?.item?.data?.display_name_prefixed,
          })
        }>
        <Text
          style={{
            fontSize: 16,
            color: appColors.blue,
            textAlign: 'center',
          }}>
          {item?.item.data?.display_name_prefixed}
        </Text>
      </Pressable>
    ),
    [],
  );

  return (
    <View style={{flex: 1, backgroundColor: appColors.white}}>
      <Text
        style={{
          fontSize: 16,
          color: appColors.black,
          textAlign: 'center',
          marginBottom: 10,
          fontWeight: 'bold',
        }}>
        Subscribed subreddits
      </Text>
      {loading ? (
        <Loader />
      ) : (
        <CustomList data={subReddits} renderItem={renderItem} />
      )}
    </View>
  );
};

export default SubredditsScreen;
