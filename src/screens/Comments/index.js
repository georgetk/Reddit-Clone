import React, {useCallback, useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppHeader, CustomList, Loader} from '../../components';
import {commentsRequest} from '../../redux/actions';
import {appColors} from '../../theme';

const CommentsScreen = ({navigation, route}) => {
  const {title, subreddit, postId} = route.params;

  const dispatch = useDispatch();

  const {comments, loading} = useSelector(state => state.comments);

  useEffect(() => {
    if (subreddit && postId) {
      dispatch(commentsRequest(subreddit, postId));
    }
  }, [subreddit, postId]);

  const renderItem = useCallback(
    ({item}) => (
      <View style={{backgroundColor: appColors.opacityAdjusted, padding: 10}}>
        <Text style={{fontSize: 16}}>{item?.data?.body}</Text>
      </View>
    ),
    [],
  );

  return (
    <View style={{flex: 1, backgroundColor: appColors.white}}>
      <AppHeader onPress={() => navigation.goBack()} />
      <Text
        style={{
          fontWeight: 'bold',
          fontSize: 16,
          marginBottom: 20,
          marginTop: 20,
        }}>
        {title}
      </Text>

      {loading ? <Loader /> : null}

      {comments?.length > 0 ? (
        <CustomList data={comments} renderItem={renderItem} />
      ) : null}
    </View>
  );
};

export default CommentsScreen;
