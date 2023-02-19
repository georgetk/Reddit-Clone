import React from 'react';
import {Pressable, Text} from 'react-native';
import ActionSheet, {SheetManager} from 'react-native-actions-sheet';
import {appColors} from '../../theme';

export const PostSortPeriodActionSheet = ({sheetId, payload}) => (
  <ActionSheet
    id={sheetId}
    containerStyle={{backgroundColor: appColors.black, padding: 15}}>
    {payload.map((item, index) => (
      <Pressable
        style={{
          padding: 15,
          borderBottomWidth: 1,
          borderBottomColor: appColors.opacityAdjusted,
        }}
        key={index.toString()}
        onPress={() =>
          SheetManager.hide(sheetId, {
            payload: item,
          })
        }>
        <Text style={{color: appColors.white, fontSize: 16}}>{item.value}</Text>
      </Pressable>
    ))}
  </ActionSheet>
);

export default PostSortPeriodActionSheet;
