import React from 'react';
import {ActivityIndicator, View, StyleSheet} from 'react-native';
import {appColors} from '../../theme';

const Loader = () => (
  <View
    style={{
      justifyContent: 'center',
      alignItems: 'center',
      ...StyleSheet.absoluteFill,
      position: 'absolute',
      zIndex: 10,
    }}>
    <ActivityIndicator size={'large'} color={appColors.blue} />
  </View>
);
export default Loader;
