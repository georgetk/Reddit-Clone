import {StyleSheet} from 'react-native';
import {appColors} from '../../theme';

const styles = StyleSheet.create({
  defaultTextStyle: {
    color: appColors.white,
  },
  pressable: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: appColors.opacityAdjusted,
  },
  sheetContainer: {backgroundColor: appColors.black, padding: 15},
});

export default styles;
