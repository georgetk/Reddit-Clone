import React from 'react';
import {Image} from 'react-native';

const CustomImage = ({id, url}) => (
  <Image key={id} style={{height: 320, width: '100%'}} source={{uri: url}} />
);

export default CustomImage;
