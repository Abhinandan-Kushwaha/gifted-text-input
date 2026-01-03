import { useState } from 'react';
import { TextInput, Text, StyleSheet, View } from 'react-native';
import { FloatingBox } from './components/FloatingBox/FloatingBox';

type TextAlignType =
  | 'left'
  | 'auto'
  | 'right'
  | 'center'
  | 'justify'
  | undefined;

interface IGiftedTextInputProps {
  fontSize?: number;
  color?: string;
  backgroundColor?: string;
  padding?: number;
  paddingHorizontal?: number;
  paddingVertical?: number;
  paddingTop?: number;
  paddingLeft?: number;
  paddingBottom?: number;
  paddingRight?: number;
  borderWidth?: number;
  borderTopWidth?: number;
  borderBottomWidth?: number;
  borderLeftWidth?: number;
  borderRightWidth?: number;
  borderColor?: string;
  borderTopColor?: string;
  borderBottomColor?: string;
  borderLeftColor?: string;
  borderRightColor?: string;
  borderRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  placeholder?: string;
  placeholderTextColor?: string;
}

const GiftedTextInput = (props: IGiftedTextInputProps) => {
  const {
    fontSize: propsFontSize = 12,
    color: propsColor = 'black',
    backgroundColor: propsBackgroundColor = 'transparent',
    padding,
    paddingVertical,
    paddingHorizontal,
    paddingTop,
    paddingLeft,
    paddingBottom,
    paddingRight,
    borderWidth,
    borderTopWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderRightWidth,
    borderColor,
    borderTopColor,
    borderBottomColor,
    borderLeftColor,
    borderRightColor,
    borderRadius,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    placeholder = '',
    placeholderTextColor = 'gray',
  } = props;
  const [text, setText] = useState('');
  const [color, setColor] = useState(propsColor);
  const [backgroundColor, setBackgroundColor] = useState(propsBackgroundColor);
  const [font, setFont] = useState('');
  const [align, setAlign] = useState('left');
  const [fontSize, setFontSize] = useState(propsFontSize);
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isStrikeThrough, setIsStrikeThrough] = useState(false);
  const selection = { start: text.length, end: text.length }; // to disable caret movement
  const handleChangeText = (val: string) => {
    setText(val);
  };
  const [isFormattingBoxVisible, setIsFormattingBoxVisible] = useState(false);
  const onCancel = () => setIsFormattingBoxVisible(false);
  return (
    <>
      <View>
        <TextInput
          autoFocus
          multiline
          onChangeText={handleChangeText}
          style={{ position: 'absolute', fontSize, opacity: 0 }}
          selection={selection}
          onSelectionChange={() => {}}
          selectionColor={'transparent'} // to hide selector
        />
        <Text
          onLongPress={() => {
            setIsFormattingBoxVisible(v => !v);
          }}
          style={{
            backgroundColor,
            position: 'absolute',
            color: text ? color : placeholderTextColor,
            fontSize,
            fontWeight: isBold ? 'bold' : 'normal',
            fontStyle: isItalic ? 'italic' : 'normal',
            fontFamily: font,
            textAlign: align as TextAlignType,
            textDecorationLine:
              isUnderline && isStrikeThrough
                ? 'underline line-through'
                : isUnderline
                ? 'underline'
                : isStrikeThrough
                ? 'line-through'
                : 'none',
            paddingLeft: paddingLeft ?? paddingHorizontal ?? padding ?? 0,
            paddingRight: paddingRight ?? paddingHorizontal ?? padding ?? 0,
            paddingTop: paddingTop ?? paddingVertical ?? padding ?? 0,
            paddingBottom: paddingBottom ?? paddingVertical ?? padding ?? 0,
            borderTopWidth: borderTopWidth ?? borderWidth ?? 0,
            borderBottomWidth: borderBottomWidth ?? borderWidth ?? 0,
            borderLeftWidth: borderLeftWidth ?? borderWidth ?? 0,
            borderRightWidth: borderRightWidth ?? borderWidth ?? 0,
            borderTopColor: borderTopColor ?? borderColor ?? '',
            borderBottomColor: borderBottomColor ?? borderColor ?? '',
            borderLeftColor: borderLeftColor ?? borderColor ?? '',
            borderRightColor: borderRightColor ?? borderColor ?? '',
            borderTopLeftRadius: borderTopLeftRadius ?? borderRadius ?? 0,
            borderTopRightRadius: borderTopRightRadius ?? borderRadius ?? 0,
            borderBottomLeftRadius: borderBottomLeftRadius ?? borderRadius ?? 0,
            borderBottomRightRadius:
              borderBottomRightRadius ?? borderRadius ?? 0,
          }}
        >
          {text || placeholder}
        </Text>
      </View>
      {isFormattingBoxVisible && (
        <FloatingBox
          onCancel={onCancel}
          color={color}
          setColor={setColor}
          backgroundColor={backgroundColor}
          setBackgroundColor={setBackgroundColor}
          font={font}
          setFont={setFont}
          fontSize={fontSize}
          setFontSize={setFontSize}
          align={align}
          setAlign={setAlign}
          isBold={isBold}
          isItalic={isItalic}
          isUnderline={isUnderline}
          isStrikeThrough={isStrikeThrough}
          setIsBold={setIsBold}
          setIsItalic={setIsItalic}
          setIsUnderline={setIsUnderline}
          setIsStrikeThrough={setIsStrikeThrough}
        />
      )}
    </>
  );
};

export default GiftedTextInput;
