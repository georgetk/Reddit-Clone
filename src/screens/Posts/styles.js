import {StyleSheet} from 'react-native';
import {appColors} from '../../theme';

const styles = StyleSheet.create({
  sortTypeText: {
    color: appColors.blue,
  },
  pressable: {
    borderColor: appColors.blue,
    padding: 5,
    borderWidth: 1,
    alignSelf: 'flex-start',
    marginBottom: 10,
    marginTop: 20,
  },
});

export default styles;
