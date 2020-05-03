import React from 'react';
import { Animated, View } from 'react-native';

import { SkeletonProps } from './types';
import { useStyles } from './hooks';

const Types = {
  TEXT: 'text',
  CIRCLE: 'circle',
  RECT: 'rect',
};

const Skeleton: React.FC<SkeletonProps> = ({
  children,
  loading,
  type = 'text',
  color = '#9ec0c4',
  width,
  widthVariance = 20,
  height,
  heightVariance = 0,
  lines = 1,
  pulseSpeed = 1000,
  textVerticalPadding = 2,
  textBorderRadius = 4,
}) => {
  const [childLayout, setChildLayout] = React.useState({
    height: 0,
    width: 0,
    x: 0,
    y: 0,
  });

  const [fadeAnim] = React.useState(new Animated.Value(1));
  React.useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(fadeAnim, {
          toValue: 0.6,
          duration: pulseSpeed,
        }),
        Animated.timing(fadeAnim, {
          toValue: 1,
          duration: pulseSpeed,
        }),
      ])
    ).start();
  }, [fadeAnim, loading, pulseSpeed]);

  const childrenArray = React.Children.toArray(children);
  const child: any =
    childrenArray.length > 0 ? childrenArray[0] : <React.Fragment />;

  const styles = useStyles({
    color,
    loading,
    textBorderRadius,
    textVerticalPadding,
  });

  return (
    <View style={styles.container}>
      {React.cloneElement(child, {
        onLayout: (event: any) => setChildLayout(event.nativeEvent.layout),
        style: [child.props.style, { opacity: loading ? 0 : 1 }],
      })}
      <View style={styles.skeletonContainer}>
        {new Array(lines).fill(0).map((_, index) => {
          let calculatedWidth = calculateVariance(
            width || childLayout.width,
            widthVariance
          );
          let calculatedHeight = calculateVariance(
            height || childLayout.height,
            heightVariance
          );
          calculatedHeight /= lines;
          if (type === Types.TEXT) calculatedHeight -= textVerticalPadding * 2;

          return (
            <Animated.View
              key={index}
              style={[
                styles.base,
                type === Types.TEXT && styles.text,
                type === Types.RECT && styles.rect,
                type === Types.CIRCLE && styles.circle,
                {
                  opacity: loading ? fadeAnim : 0,
                  width: calculatedWidth,
                  height: calculatedHeight,
                },
              ]}
            />
          );
        })}
      </View>
    </View>
  );
};

const calculateVariance = (size: number, variance: number) => {
  return size - size * (Math.random() * (variance / 100.0));
};

export default Skeleton;
