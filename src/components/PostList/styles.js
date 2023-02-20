import {StyleSheet} from 'react-native';
import {appColors} from '../../theme';

const styles = StyleSheet.create({
  pressable: {
    backgroundColor: appColors.opacityAdjusted,
    padding: 10,
    width: '100%',
    borderWidth: 1,
    borderColor: appColors.blue,
  },
});

export default styles;
