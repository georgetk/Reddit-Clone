import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  loader: {
    justifyContent: 'center',
    alignItems: 'center',
    ...StyleSheet.absoluteFill,
    position: 'absolute',
    zIndex: 10,
  },
});

export default styles;
