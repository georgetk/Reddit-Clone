import React, {useCallback} from 'react';
import {Pressable} from 'react-native';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import CustomText from '../CustomText';
import styles from './styles';

export const PostsSortActionSheet = ({sheetId, payload}) => {
  const handlePress = useCallback(
    item =>
      SheetManager.hide(sheetId, {
        payload: item,
      }),
    [],
  );

  return (
    <ActionSheet id={sheetId} containerStyle={styles.sheetContainer}>
      {payload.map((item, index) => (
        <Pressable
          style={styles.pressable}
          key={index.toString()}
          onPress={() => handlePress(item)}>
          <CustomText string={item.value} style={styles.defaultTextStyle} />
        </Pressable>
      ))}
    </ActionSheet>
  );
};

export default PostsSortActionSheet;
