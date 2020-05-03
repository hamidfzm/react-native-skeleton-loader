import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: { position: 'relative' },
  skeletonContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  circle: {
    borderRadius: 1000,
  },
});

export default styles;
