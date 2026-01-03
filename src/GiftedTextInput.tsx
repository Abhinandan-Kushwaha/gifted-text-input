import { useState } from 'react';
import { TextInput, Text } from 'react-native';
import { FloatingBox } from './components/FloatingBox/FloatingBox';

type TextAlignType =
  | 'left'
  | 'auto'
  | 'right'
  | 'center'
  | 'justify'
  | undefined;

const GiftedTextInput = () => {
  const [text, setText] = useState('');
  const [color, setColor] = useState('');
  const [backgroundColor, setBackgroundColor] = useState('transparent');
  const [font, setFont] = useState('');
  const [align, setAlign] = useState('left');
  const [fontSize, setFontSize] = useState(12);
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
          color,
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
        }}
      >
        {text}
      </Text>
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
