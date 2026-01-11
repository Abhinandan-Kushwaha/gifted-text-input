import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { colorCodes } from './colorCodes';
import React from 'react';
import { DiagonalLine } from '../Icons/DiagonalLine';

interface ColorGridProps {
  setColor?: (c: string) => void;
  selectedColor: string;
  // selectedPos: number[];
  // setSelectedPos: (pos: number[]) => void;
  applyColor?: (color: string) => void;
}

const isLightColor = (r: number, c: number) => {
  if (r == 0 && c < 4) return true;
  if (r > 6) return true;
  if (c > 0 && c < 6 && r > 4) return true;
  return false;
};

export const ColorGrid = React.memo((props: ColorGridProps) => {
  const { selectedColor, applyColor } = props;

  const selectedRow: number = Math.max(
    0,
    colorCodes.findIndex(item => item.includes(selectedColor)),
  );
  const selectedCol =
    colorCodes[selectedRow]?.findIndex(val => val === selectedColor) ?? 0;

  const onPress = (color: string, r: number, c: number) => {
    console.log(color, r, c);
    // setSelectedPos([r, c]);
    const selectedColor = colorCodes[r][c];

    applyColor?.(selectedColor);
  };
  return (
    <>
      <View style={[styles.row, styles.alignCenter]}>
        <Text style={styles.colorCodeText}>{selectedColor}</Text>
        <View
          style={[
            styles.singleBox,
            styles.border,
            { backgroundColor: selectedColor },
          ]}
        />
      </View>
      <View style={[styles.container, styles.border]}>
        {colorCodes.map((row, r) => {
          return (
            <View style={styles.row} key={row[0] + '' + r}>
              {row.map((color, c) => {
                return (
                  <TouchableOpacity
                    key={row[r] + '' + c}
                    activeOpacity={0.8}
                    onPress={() => onPress(color, r, c)}
                    style={[
                      selectedRow === r && selectedCol === c
                        ? isLightColor(r, c)
                          ? styles.selectedBoxLight
                          : styles.selectedBox
                        : styles.box,
                      { backgroundColor: color },
                    ]}
                  >
                    {color === 'transparent' ? (
                      <DiagonalLine color="lightgray" />
                    ) : null}
                  </TouchableOpacity>
                );
              })}
            </View>
          );
        })}
      </View>
    </>
  );
});

const styles = StyleSheet.create({
  border: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'lightgray',
    borderRadius: 6,
  },
  container: {
    marginBottom: 20,
    overflow: 'hidden',
    width: 325, // 36 * 9 + 1
    alignSelf: 'center',
  },
  colorCodeText: {
    color: 'gray',
    fontSize: 8,
    marginVertical: 4,
  },
  row: { flexDirection: 'row' },
  alignCenter: { alignItems: 'center' },
  box: { height: 36, width: 36 },
  selectedBox: { height: 36, width: 36, borderWidth: 2, borderColor: '#eee' },
  selectedBoxLight: {
    height: 36,
    width: 36,
    borderWidth: 2,
    borderColor: '#111',
  },
  singleBox: {
    height: 12,
    width: 12,
    marginLeft: 2,
  },
});
