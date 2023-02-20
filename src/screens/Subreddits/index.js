import React, {useEffect} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {CustomList, CustomText, Loader} from '../../components';
import {commonStyles} from '../../constants';
import {subRedditsRequest} from '../../redux/actions';
import styles from './styles';
import {SubredditItemMemoized} from './SubredditItem';

const SubredditsScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const {subReddits, loading} = useSelector(state => state.subReddits);

  useEffect(() => {
    dispatch(subRedditsRequest());
  }, []);

  return (
    <View style={commonStyles.whiteContainer}>
      <CustomText
        string={'Subscribed subreddits'}
        style={[commonStyles.bold20, styles.headerText]}
      />

      {loading ? <Loader /> : null}

      {subReddits?.length > 0 ? (
        <CustomList
          data={subReddits}
          renderItem={item => (
            <SubredditItemMemoized item={item} navigation={navigation} />
          )}
        />
      ) : null}
    </View>
  );
};

export default SubredditsScreen;
