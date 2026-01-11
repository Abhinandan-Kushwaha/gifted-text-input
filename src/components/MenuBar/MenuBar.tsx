import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { PaletteIcon } from '../Icons/PaletteIcon';
import { TextAlignType } from '../../types';
import { RulerIcon } from '../Icons/RulerIcon';

interface TopRightCornerCrossProps {
  onFontPress: () => void;
  paddingHorizontal: number;
  size?: number;
  opacity?: number;
  color: string;
  backgroundColor: string;
  setBackgroundColor: (color: string) => void;
  isBold: boolean;
  isItalic: boolean;
  isUnderline: boolean;
  isStrikeThrough: boolean;

  setIsBold: (v: boolean) => void;
  setIsItalic: (v: boolean) => void;
  setIsUnderline: (v: boolean) => void;
  setIsStrikeThrough: (v: boolean) => void;
  isFontOptionsOpen: boolean;
  setIsFontOptionsOpen: (v: boolean) => void;
  isRulerOptionsOpen: boolean;
  setIsRulerOptionsOpen: (v: boolean) => void;
  isColorBoxOpen: boolean;
  setIsColorBoxOpen: (v: boolean) => void;
  isBackgroundColorBoxOpen: boolean;
  setIsBackgroundColorBoxOpen: (v: boolean) => void;
  align: TextAlignType;
  setAlign: (align: TextAlignType) => void;
}

export const MenuBar = (props: TopRightCornerCrossProps) => {
  const {
    onFontPress,
    paddingHorizontal,
    opacity = 1,
    color,
    isBold,
    isItalic,
    isUnderline,
    isStrikeThrough,
    setIsBold,
    setIsItalic,
    setIsUnderline,
    setIsStrikeThrough,
    isFontOptionsOpen,
    setIsFontOptionsOpen,
    isRulerOptionsOpen,
    setIsRulerOptionsOpen,
    isColorBoxOpen,
    setIsColorBoxOpen,
    isBackgroundColorBoxOpen,
    setIsBackgroundColorBoxOpen,
    align,
    setAlign,
    backgroundColor,
  } = props;

  const AlignLeft = () => (
    <TouchableOpacity
      style={styles.alignIcon}
      onPress={() => setAlign('center')}
    >
      <View style={[styles.bar, { width: 26, top: 4 }]} />
      <View style={[styles.bar, { width: 18, top: 10 }]} />
      <View style={[styles.bar, { width: 10, top: 16 }]} />
    </TouchableOpacity>
  );
  const AlignCenter = () => (
    <TouchableOpacity
      style={styles.alignIcon}
      onPress={() => setAlign('right')}
    >
      <View style={[styles.bar, { width: 26, top: 4, left: 0 }]} />
      <View style={[styles.bar, { width: 18, top: 10, left: 4 }]} />
      <View style={[styles.bar, { width: 10, top: 16, left: 8 }]} />
    </TouchableOpacity>
  );
  const AlignRight = () => (
    <TouchableOpacity style={styles.alignIcon} onPress={() => setAlign('left')}>
      <View style={[styles.bar, { width: 26, top: 4, right: 0 }]} />
      <View style={[styles.bar, { width: 18, top: 10, right: 0 }]} />
      <View style={[styles.bar, { width: 10, top: 16, right: 0 }]} />
    </TouchableOpacity>
  );

  const closeColorBoxes = () => {
    setIsColorBoxOpen(false);
    setIsBackgroundColorBoxOpen(false);
  };

  const handleFontPress = () => {
    setIsFontOptionsOpen(!isFontOptionsOpen);
    setIsRulerOptionsOpen(false);
    closeColorBoxes();
  };
  const handleColorBoxPress = () => {
    setIsColorBoxOpen(!isColorBoxOpen);
    setIsFontOptionsOpen(false);
    setIsBackgroundColorBoxOpen(false);
  };
  const handleBackgroundColorBoxPress = () => {
    setIsBackgroundColorBoxOpen(!isBackgroundColorBoxOpen);
    setIsColorBoxOpen(false);
    setIsFontOptionsOpen(false);
  };
  const onBoldPress = () => {
    setIsBold(!isBold);
  };
  const onItalicPress = () => {
    setIsItalic(!isItalic);
  };
  const onUnderLinePress = () => {
    setIsUnderline(!isUnderline);
  };
  const onStrikeThroughPress = () => {
    setIsStrikeThrough(!isStrikeThrough);
  };
  const handleRulerPress = () => {
    setIsRulerOptionsOpen(!isRulerOptionsOpen);
    setIsFontOptionsOpen(false);
    closeColorBoxes();
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        hitSlop={12}
        onPress={handleFontPress}
        style={[styles.button, isFontOptionsOpen && styles.selected]}
      >
        <Text style={styles.buttonText}>Aa</Text>
      </TouchableOpacity>
      <TouchableOpacity
        hitSlop={12}
        onPress={handleColorBoxPress}
        style={[styles.button, isColorBoxOpen && styles.selected]}
      >
        <PaletteIcon size={26} color={color} />
      </TouchableOpacity>
      <TouchableOpacity
        hitSlop={12}
        onPress={onBoldPress}
        style={[styles.button, isBold && styles.selected]}
      >
        <Text style={styles.buttonTextBold}>B</Text>
      </TouchableOpacity>

      <TouchableOpacity
        hitSlop={12}
        onPress={onItalicPress}
        style={[styles.button, isItalic && styles.selected]}
      >
        <Text style={styles.buttonTextItalic}>I</Text>
      </TouchableOpacity>
      <TouchableOpacity
        hitSlop={12}
        onPress={onUnderLinePress}
        style={[styles.button, isUnderline && styles.selected]}
      >
        <Text style={styles.buttonTextUnderline}>U</Text>
      </TouchableOpacity>
      <TouchableOpacity
        hitSlop={12}
        onPress={onStrikeThroughPress}
        style={[styles.button, isStrikeThrough && styles.selected]}
      >
        <Text style={styles.buttonTextStrike}>S</Text>
      </TouchableOpacity>
      <TouchableOpacity
        hitSlop={12}
        onPress={onFontPress}
        style={[styles.button, { marginHorizontal: 1 }]}
      >
        {align === 'left' ? (
          <AlignLeft />
        ) : align === 'center' ? (
          <AlignCenter />
        ) : align === 'right' ? (
          <AlignRight />
        ) : null}
      </TouchableOpacity>
      <TouchableOpacity
        hitSlop={12}
        onPress={handleBackgroundColorBoxPress}
        style={[
          styles.button,
          isBackgroundColorBoxOpen && { ...styles.selected, backgroundColor },
        ]}
      >
        <Text style={[styles.buttonText, { color, backgroundColor }]}>A</Text>
      </TouchableOpacity>
      <TouchableOpacity
        hitSlop={12}
        onPress={handleRulerPress}
        style={[styles.button, isRulerOptionsOpen && styles.selected]}
      >
        <RulerIcon />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // paddingHorizontal: 4,
    backgroundColor: '#f8f8f8',
    height: 40,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    height: 36,
    width: 36,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 2,
  },
  bar: {
    position: 'absolute',
    height: 3,
    borderRadius: 2,
    backgroundColor: 'black',
    marginBottom: 4,
  },
  buttonText: { fontSize: 18, paddingHorizontal: 4 },
  buttonTextBold: { fontSize: 22, fontWeight: 'bold' },
  buttonTextItalic: { fontSize: 22, fontStyle: 'italic', fontFamily: 'serif' },
  buttonTextUnderline: { fontSize: 22, textDecorationLine: 'underline' },
  buttonTextStrike: {
    fontSize: 28,
    textDecorationLine: 'line-through',
    fontFamily: 'courier',
  },
  alignIcon: { height: 30, width: 30 },
  selected: {
    backgroundColor: '#eee',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
  },
});
