import {StyleSheet} from 'react-native';
import {appColors} from '../theme';

const commonStyles = StyleSheet.create({
  bold20: {fontSize: 20, fontWeight: 'bold'},
  whiteContainer: {backgroundColor: appColors.white, flex: 1},
  mediaContainer: {height: 320, width: '100%'},
});

export default commonStyles;
