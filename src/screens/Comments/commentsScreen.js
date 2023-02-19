import React, {useCallback, useEffect} from 'react';
import {FlatList, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {commentsRequest} from '../../redux/actions';
import {appColors} from '../../theme';

const CommentsScreen = ({route}) => {
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
      <View style={{backgroundColor: 'rgba(0,0,0,0.09)', padding: 10}}>
        <Text style={{fontSize: 16}}>{item?.data?.body}</Text>
      </View>
    ),
    [],
  );

  return (
    <View style={{flex: 1, backgroundColor: appColors.white}}>
      <Text style={{fontWeight: 'bold', fontSize: 16, marginBottom: 20}}>
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
