import React, {useCallback, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppHeader} from '../../components';
import {commentsRequest} from '../../redux/actions';
import {appColors} from '../../theme';

const CommentsScreen = ({navigation, route}) => {
  const {title, subreddit, postId} = route.params;

  const dispatch = useDispatch();

  const {comments} = useSelector(state => state.comments);

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

      {comments?.length > 0 ? (
        <FlatList
          data={comments}
          renderItem={renderItem}
          keyExtractor={item => item?.data?.id}
          ItemSeparatorComponent={() => <View style={{height: 10}} />}
        />
      ) : null}
    </View>
  );
};

export default CommentsScreen;
