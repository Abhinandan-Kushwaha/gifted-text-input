import React from 'react';
import { View, StyleSheet } from 'react-native';

export function PaletteIcon({ size = 64, color = '#000' }) {
  const s = size;

  return (
    <View
      style={[
        styles.palette,
        {
          width: s,
          height: s,
          borderRadius: s / 2,
          backgroundColor: color,
        },
      ]}
    >
      {/* holes */}
      <View style={[styles.dot, { top: s * 0.22, left: s * 0.28 }]} />
      <View style={[styles.dot, { top: s * 0.42, left: s * 0.18 }]} />
      <View style={[styles.dot, { top: s * 0.22, left: s * 0.52 }]} />

      {/* thumb cut */}
      <View
        style={[
          styles.cut,
          {
            width: s * 0.35,
            height: s * 0.35,
            bottom: -s * 0.05,
            right: -s * 0.05,
            borderRadius: s * 0.2,
            backgroundColor: '#fff',
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  palette: {
    position: 'relative',
    overflow: 'hidden',
  },
  dot: {
    position: 'absolute',
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: '#fff',
  },
  cut: {
    position: 'absolute',
  },
});