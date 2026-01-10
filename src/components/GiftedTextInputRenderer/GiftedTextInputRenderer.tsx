import { TextInput, Text, View } from 'react-native';
import { TextAlignType, IGiftedTextInputRendererProps } from '../../types';

export const GiftedTextInputRenderer = (
  props: IGiftedTextInputRendererProps,
) => {
  const {
    textInputRef,
    text,
    setText,
    color,
    font,
    backgroundColor,
    align,
    fontSize,
    isBold,
    isItalic,
    isUnderline,
    isStrikeThrough,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingBottom,
    borderTopWidth,
    borderBottomWidth,
    borderLeftWidth,
    borderRightWidth,
    borderTopColor,
    borderBottomColor,
    borderLeftColor,
    borderRightColor,
    borderTopLeftRadius,
    borderTopRightRadius,
    borderBottomLeftRadius,
    borderBottomRightRadius,
    placeholder,
    placeholderTextColor,
    autoFocus,
    onLongPress,
    onBlur,
  } = props;

  const selection = { start: text.length, end: text.length }; // to disable caret movement

  const handleChangeText = (val: string) => {
    props.onChangeText?.(val);
    setText(val);
  };

  return (
    <View>
      <TextInput
        ref={textInputRef}
        value={text}
        autoFocus={autoFocus}
        multiline
        onChangeText={handleChangeText}
        onBlur={onBlur}
        style={{ position: 'absolute', fontSize, opacity: 0 }}
        selection={selection}
        onSelectionChange={() => {}}
        selectionColor={'transparent'} // to hide selector
      />
      <Text
        onPress={() => {
          textInputRef.current?.focus();
        }}
        onLongPress={onLongPress}
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
          paddingLeft,
          paddingRight,
          paddingTop,
          paddingBottom,
          borderTopWidth,
          borderBottomWidth,
          borderLeftWidth,
          borderRightWidth,
          borderTopColor,
          borderBottomColor,
          borderLeftColor,
          borderRightColor,
          borderTopLeftRadius,
          borderTopRightRadius,
          borderBottomLeftRadius,
          borderBottomRightRadius,
        }}
      >
        {text || placeholder}
      </Text>
    </View>
  );
};
