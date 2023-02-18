import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {subRedditsRequest} from '../../redux/actions';
import {postsRequest} from '../../redux/actions/postsActions';

const PostsScreen = () => {
  const dispatch = useDispatch();

  const {subReddits} = useSelector(state => state.subReddits);
  const {posts} = useSelector(state => state.posts);
  console.log('subReddits', subReddits);
  console.log('posts', posts);

  useEffect(() => {
    dispatch(subRedditsRequest());
  }, []);

  useEffect(() => {
    console.log(
      'subReddits?.[0]?.data?.display_name_prefixed ',
      subReddits?.[0]?.data?.display_name_prefixed,
    );
    if (subReddits?.[0]?.data?.display_name_prefixed?.length > 0) {
      dispatch(postsRequest(subReddits?.[0]?.data?.display_name_prefixed));
    }
  }, [subReddits]);

  return <View style={{flex: 1, backgroundColor: 'green'}} />;
};

export default PostsScreen;
