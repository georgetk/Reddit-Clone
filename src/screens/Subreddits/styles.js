import {StyleSheet} from 'react-native';
import {appColors} from '../../theme';

const styles = StyleSheet.create({
  headerText: {textAlign: 'center', marginBottom: 10},
  subredditName: {
    color: appColors.blue,
    textAlign: 'center',
  },
  pressable: {backgroundColor: appColors.opacityAdjusted, padding: 20},
});

export default styles;
