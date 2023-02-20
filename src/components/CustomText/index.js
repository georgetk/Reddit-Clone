import React from 'react';
import {Text} from 'react-native';
import styles from './styles';

const CustomText = ({string, style}) => (
  <Text style={[styles.defaultStyle, style]}>{string}</Text>
);

export default CustomText;
