import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {AppHeader, CustomList, CustomText, Loader} from '../../components';
import {commonStyles} from '../../constants';
import {commentsRequest} from '../../redux/actions';
import {CommentItemMemoized} from './CommentItem';
import styles from './styles';

const CommentsScreen = ({navigation, route}) => {
  const {title, subreddit, postId} = route.params;

  const dispatch = useDispatch();

  const {comments, loading} = useSelector(state => state.comments);

  useEffect(() => {
    if (subreddit && postId) {
      dispatch(commentsRequest(subreddit, postId));
    }
  }, [subreddit, postId]);

  return (
    <View style={commonStyles.whiteContainer}>
      <AppHeader navigation={navigation} />
      <CustomText
        string={title}
        style={[commonStyles.bold20, styles.titleText]}
      />

      {loading ? <Loader /> : null}

      {comments?.length > 0 ? (
        <CustomList
          data={comments}
          renderItem={({item}) => <CommentItemMemoized item={item} />}
        />
      ) : null}
    </View>
  );
};

export default CommentsScreen;
