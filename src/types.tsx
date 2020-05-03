import React from 'react';

export type SkeletonProps = {
  children?: React.ReactNode;
  type?: 'text' | 'circle' | 'rect';
  loading: boolean;
  color?: string;
  width?: number;
  widthVariance?: number;
  height?: number;
  heightVariance?: number;
  pulseSpeed?: number;
  lines?: number;
  textVerticalPadding?: number;
  textBorderRadius?: number;
};

export type StyleProps = {
  loading: boolean;
  color: string;
  textVerticalPadding: number;
  textBorderRadius: number;
};
