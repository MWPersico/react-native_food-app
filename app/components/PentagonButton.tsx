import React from 'react';
import { StyleSheet, View } from 'react-native';
import Svg, { Polygon } from 'react-native-svg';

interface PentagonButtonProps {
  size?: number;
  color?: string;
  backgroundColor?: string;
  children?: React.ReactNode;
}

export default function PentagonButton({ size = 64, color = '#FAC22D', backgroundColor = '#fff', children }: PentagonButtonProps) {
  // Calcula os pontos do pentágono
  const points = [
    [size / 2, 0],
    [size, size * 0.38],
    [size * 0.81, size],
    [size * 0.19, size],
    [0, size * 0.38],
  ]
    .map(point => point.join(','))
    .join(' ');

  return (
    <View style={{ width: size + 12, height: size + 12, alignItems: 'center', justifyContent: 'center' }}>
      <Svg width={size + 12} height={size + 12} style={StyleSheet.absoluteFill}>
        <Polygon points={points} fill={backgroundColor} />
      </Svg>
      <Svg width={size} height={size} style={{ position: 'absolute', top: 6, left: 6 }}>
        <Polygon points={points} fill={color} />
      </Svg>
      <View style={styles.iconContainer}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  iconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
