import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {appColors} from '../../theme';
import styles from './styles';

const Loader = () => (
  <View style={styles.loader}>
    <ActivityIndicator size={'large'} color={appColors.blue} />
  </View>
);
export default Loader;
