import React from 'react';
import FastImage from 'react-native-fast-image';
import {commonStyles} from '../../constants';

const CustomImage = ({id, url}) => (
  <FastImage
    key={id}
    style={commonStyles.mediaContainer}
    source={{
      uri: url,
    }}
  />
);

export default CustomImage;
