import { StyleSheet, View } from 'react-native';

export const DiagonalLine = ({
  size = 30,
  color = '#000',
  thickness = 2,
}) => {
  return (
    <View
      style={{
        width: size + 4,
        height: size + 4,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: StyleSheet.hairlineWidth,
        borderColor: 'lightgray',
      }}
    >
      <View
        style={{
          width: size * 1.4, // √2 ≈ 1.414 to cover corners
          height: thickness,
          backgroundColor: color,
          transform: [{ rotate: '45deg' }],
        }}
      />
    </View>
  );
};