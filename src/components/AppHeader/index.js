import React, {useCallback} from 'react';
import {Pressable} from 'react-native';
import CustomText from '../CustomText';
import styles from './styles';

const AppHeader = ({navigation}) => {
  const handleBackPress = useCallback(() => navigation.goBack(), []);

  return (
    <Pressable hitSlop={70} onPress={handleBackPress}>
      <CustomText string={'Back'} style={styles.defaultStyle} />
    </Pressable>
  );
};

export default AppHeader;
