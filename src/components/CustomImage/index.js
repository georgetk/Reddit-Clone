import React from 'react';
import FastImage from 'react-native-fast-image';

const CustomImage = ({id, url}) => (
  <FastImage
    key={id}
    style={{height: 320, width: '100%'}}
    source={{
      uri: url,
    }}
  />
);

export default CustomImage;
