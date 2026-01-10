import React, { useRef, useState } from 'react';
import { StyleSheet, PanResponder, Animated, Dimensions } from 'react-native';
import { ColorGrid } from '../SimpleColorPicker/SimpleColorPicker';
import { TopRightCornerCross } from '../TopRightCornerCross/TopRightCornerCross';
import { MenuBar } from '../MenuBar/MenuBar';
import { FontsGrid } from '../Grid/FontsGrid';
import { FontSizeGrid } from '../Grid/FontSizeGrid';
import { TextAlignType } from '../../types';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

type FloatingBoxProps = {
  color: string;
  setColor: (color: string) => void;
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
  font: string;
  setFont: (font: string) => void;
  fontSize: number;
  setFontSize: (fontSize: number) => void;
  align: TextAlignType;
  setAlign: (align: TextAlignType) => void;
  onCancel: () => void;
  initialX?: number;
  initialY?: number;
  isBold: boolean;
  isItalic: boolean;
  isUnderline: boolean;
  isStrikeThrough: boolean;

  setIsBold: (v: boolean) => void;
  setIsItalic: (v: boolean) => void;
  setIsUnderline: (v: boolean) => void;
  setIsStrikeThrough: (v: boolean) => void;
};

export const FloatingToolBox: React.FC<FloatingBoxProps> = ({
  initialX = 20,
  initialY = 180,
  color,
  setColor,
  backgroundColor,
  setBackgroundColor,
  font,
  setFont,
  fontSize,
  setFontSize,
  align,
  setAlign,
  onCancel,
  isBold,
  isItalic,
  isUnderline,
  isStrikeThrough,
  setIsBold,
  setIsItalic,
  setIsUnderline,
  setIsStrikeThrough,
}) => {
  const translateX = useRef(new Animated.Value(initialX)).current;
  const translateY = useRef(new Animated.Value(initialY)).current;

  const lastOffset = useRef({ x: initialX, y: initialY });

  const [size, setSize] = useState({ width: 0, height: 0 });

  const [isFontFamilyOpen, setIsFontFamilyOpen] = useState(false);
  const [isColorBoxOpen, setIsColorBoxOpen] = useState(false);
  const [isBackgroundColorBoxOpen, setIsBackgroundColorBoxOpen] =
    useState(false);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => true,

      onPanResponderGrant: () => {
        translateX.stopAnimation(value => {
          lastOffset.current.x = value;
        });
        translateY.stopAnimation(value => {
          lastOffset.current.y = value;
        });
      },

      onPanResponderMove: (_, gesture) => {
        let nextX = lastOffset.current.x + gesture.dx;
        let nextY = lastOffset.current.y + gesture.dy;

        // Clamp horizontally
        if (size.width > 0) {
          nextX = Math.max(0, Math.min(nextX, SCREEN_WIDTH - size.width));
        }

        // Clamp vertically
        if (size.height > 0) {
          nextY = Math.max(0, Math.min(nextY, SCREEN_HEIGHT - size.height));
        }

        translateX.setValue(nextX);
        translateY.setValue(nextY);
      },

      onPanResponderRelease: () => {
        translateX.stopAnimation(x => {
          translateY.stopAnimation(y => {
            lastOffset.current = { x, y };
          });
        });
      },
    }),
  ).current;
  const [selectedPos, setSelectedPos] = useState([0, 8]);

  return (
    <Animated.View
      {...panResponder.panHandlers}
      onLayout={e => {
        const { width, height } = e.nativeEvent.layout;
        setSize({ width, height });
      }}
      style={[
        styles.toolbar,
        {
          transform: [{ translateX }, { translateY }],
        },
      ]}
    >
      <MenuBar
        onFontPress={() => {}}
        paddingHorizontal={8}
        color={color}
        isBold={isBold}
        isItalic={isItalic}
        isUnderline={isUnderline}
        isStrikeThrough={isStrikeThrough}
        setIsBold={setIsBold}
        setIsItalic={setIsItalic}
        setIsUnderline={setIsUnderline}
        setIsStrikeThrough={setIsStrikeThrough}
        isFontFamilyOpen={isFontFamilyOpen}
        setIsFontFamilyOpen={setIsFontFamilyOpen}
        isColorBoxOpen={isColorBoxOpen}
        setIsColorBoxOpen={setIsColorBoxOpen}
        isBackgroundColorBoxOpen={isBackgroundColorBoxOpen}
        setIsBackgroundColorBoxOpen={setIsBackgroundColorBoxOpen}
        align={align}
        setAlign={setAlign}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
      />
      {isFontFamilyOpen && <FontsGrid font={font} setFont={setFont} />}
      {isColorBoxOpen ? (
        <ColorGrid
          selectedPos={selectedPos}
          setSelectedPos={setSelectedPos}
          applyColor={setColor}
        />
      ) : isBackgroundColorBoxOpen ? (
        <ColorGrid
          selectedPos={selectedPos}
          setSelectedPos={setSelectedPos}
          applyColor={setBackgroundColor}
        />
      ) : (
        <FontSizeGrid fontSize={fontSize} setFontSize={setFontSize} />
      )}
      <TopRightCornerCross
        onPress={onCancel}
        top={-10}
        right={-12}
        paddingHorizontal={7}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    position: 'absolute',
    // flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 12,
    // borderRadius: 999,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    minWidth: 360,
    maxWidth: SCREEN_WIDTH - 40,

    // elevation / shadow
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
});
