import { StyleSheet } from 'react-native';

import { StyleProps } from './types';

export const useStyles = ({
  loading,
  color,
  textVerticalPadding,
  textBorderRadius,
}: StyleProps) => {
  return StyleSheet.create({
    container: { position: 'relative' },
    skeletonContainer: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    base: {
      backgroundColor: color,
      opacity: loading ? 100 : 0,
    },
    text: {
      marginTop: textVerticalPadding,
      marginBottom: textVerticalPadding,
      borderRadius: textBorderRadius,
    },
    rect: {},
    circle: {
      borderRadius: 1000,
    },
  });
};
