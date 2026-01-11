import React, { useRef, useState } from 'react';
import { StyleSheet, PanResponder, Animated, Dimensions } from 'react-native';
import { ColorGrid } from '../SimpleColorPicker/SimpleColorPicker';
import { TopRightCornerCross } from '../TopRightCornerCross/TopRightCornerCross';
import { MenuBar } from '../MenuBar/MenuBar';
import { FontsGrid } from '../Grid/FontsGrid';
import { FontSizeGrid } from '../Grid/FontSizeGrid';
import { TextAlignType } from '../../types';
import { RulersGrid } from '../Grid/RulersGrid';

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
  paddingHorizontal: number;
  paddingVertical: number;
  borderRadius: number;

  setPaddingHorizontal: (p: number) => void;
  setPaddingVertical: (p: number) => void;
  setBorderRadius: (r: number) => void;
  setIsBold: (v: boolean) => void;
  setIsItalic: (v: boolean) => void;
  setIsUnderline: (v: boolean) => void;
  setIsStrikeThrough: (v: boolean) => void;
  isFontOptionsOpen: boolean;
  isColorBoxOpen: boolean;
  isBackgroundColorBoxOpen: boolean;
  isRulerOptionsOpen: boolean;
  setIsFontOptionsOpen: (v: boolean) => void;
  setIsColorBoxOpen: (v: boolean) => void;
  setIsBackgroundColorBoxOpen: (v: boolean) => void;
  setIsRulerOptionsOpen: (v: boolean) => void;
};

export const FloatingToolBox: React.FC<FloatingBoxProps> = ({
  initialX = 4,
  initialY = 20,
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
  paddingHorizontal,
  paddingVertical,
  borderRadius,
  setPaddingHorizontal,
  setPaddingVertical,
  setBorderRadius,
  isFontOptionsOpen,
  isColorBoxOpen,
  isBackgroundColorBoxOpen,
  isRulerOptionsOpen,
  setIsFontOptionsOpen,
  setIsColorBoxOpen,
  setIsBackgroundColorBoxOpen,
  setIsRulerOptionsOpen,
}) => {
  const translateX = useRef(new Animated.Value(initialX)).current;
  const translateY = useRef(new Animated.Value(initialY)).current;

  const lastOffset = useRef({ x: initialX, y: initialY });

  const [size, setSize] = useState({ width: 0, height: 0 });

  // const [isFontOptionsOpen, setIsFontOptionsOpen] = useState(false);
  // const [isColorBoxOpen, setIsColorBoxOpen] = useState(false);
  // const [isBackgroundColorBoxOpen, setIsBackgroundColorBoxOpen] =
  //   useState(false);
  // const [isRulerOptionsOpen, setIsRulerOptionsOpen] = useState(false);

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
  // const [selectedPos, setSelectedPos] = useState([0, 8]);

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
        isFontOptionsOpen={isFontOptionsOpen}
        setIsFontOptionsOpen={setIsFontOptionsOpen}
        isRulerOptionsOpen={isRulerOptionsOpen}
        setIsRulerOptionsOpen={setIsRulerOptionsOpen}
        isColorBoxOpen={isColorBoxOpen}
        setIsColorBoxOpen={setIsColorBoxOpen}
        isBackgroundColorBoxOpen={isBackgroundColorBoxOpen}
        setIsBackgroundColorBoxOpen={setIsBackgroundColorBoxOpen}
        align={align}
        setAlign={setAlign}
        backgroundColor={backgroundColor}
        setBackgroundColor={setBackgroundColor}
      />
      {isFontOptionsOpen && <FontsGrid font={font} setFont={setFont} />}
      {isColorBoxOpen ? (
        <ColorGrid
          // selectedPos={selectedPos}
          // setSelectedPos={setSelectedPos}
          selectedColor={color}
          applyColor={setColor}
        />
      ) : isBackgroundColorBoxOpen ? (
        <ColorGrid
          // selectedPos={selectedPos}
          // setSelectedPos={setSelectedPos}
          selectedColor={backgroundColor}
          applyColor={setBackgroundColor}
        />
      ) : isRulerOptionsOpen ? (
        <RulersGrid
          horizontalPadding={paddingHorizontal ?? 0}
          setHorizontalPadding={setPaddingHorizontal}
          verticalPadding={paddingVertical ?? 0}
          setVerticalPadding={setPaddingVertical}
          borderRadius={borderRadius ?? 0}
          setBorderRadius={setBorderRadius}
        />
      ) : (
        <FontSizeGrid fontSize={fontSize} setFontSize={setFontSize} />
      )}
      <TopRightCornerCross
        onPress={onCancel}
        top={-16}
        right={-8}
        paddingHorizontal={7}
      />
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  toolbar: {
    position: 'absolute',
    // flexDirection: 'row',
    paddingHorizontal: 8,
    paddingVertical: 12,
    // borderRadius: 999,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#ccc',
    minWidth: 360,
    maxWidth: SCREEN_WIDTH - 16,

    // elevation / shadow
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
  },
});
