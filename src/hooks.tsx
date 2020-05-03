import React from 'react';

import { StyleProps } from './types';

export const useStyles = ({
  loading,
  color,
  textVerticalPadding,
  textBorderRadius,
}: StyleProps) => {
  return React.useMemo(
    () => ({
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
    }),
    [color, loading, textBorderRadius, textVerticalPadding]
  );
};
