import React from 'react';
import {Pressable, Text, View} from 'react-native';
import {appColors} from '../../theme';

const AppHeader = ({onPress}) => (
  <View>
    <Pressable hitSlop={70} onPress={onPress}>
      <Text style={{fontSize: 16, color: appColors.blue}}>Back</Text>
    </Pressable>
  </View>
);

export default AppHeader;
