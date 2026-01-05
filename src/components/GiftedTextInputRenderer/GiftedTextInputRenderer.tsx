import { TextInput, Text, View, Modal, Pressable } from 'react-native';
import { FloatingBox } from '../FloatingBox/FloatingBox';
import { TextAlignType, IGiftedTextInputRendererProps } from '../../types';

export const GiftedTextInputRenderer = (
  props: IGiftedTextInputRendererProps,
) => {
  const {
    textInputRef,
    text,
    setText,
    color,
    setColor,
    backgroundColor,
    setBackgroundColor,
    font,
    setFont,
    align,
    setAlign,
    fontSize,
    setFontSize,
    isBold,
    setIsBold,
    isItalic,
    setIsItalic,
    isUnderline,
    setIsUnderline,
    isStrikeThrough,
    setIsStrikeThrough,
    isFormattingBoxVisible,
    setIsFormattingBoxVisible,
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
    onBlur,
  } = props;

  const selection = { start: text.length, end: text.length }; // to disable caret movement

  const handleChangeText = (val: string) => {
    props.onChangeText?.(val);
    setText(val);
  };

  const onCancel = () => setIsFormattingBoxVisible(false);

  return (
    <>
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
          onLongPress={() => {
            setIsFormattingBoxVisible(!isFormattingBoxVisible);
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

      <Modal
        visible={isFormattingBoxVisible}
        transparent
        animationType="fade"
        onRequestClose={onCancel} // Android back button
      >
        {/* Backdrop */}
        <Pressable
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.3)',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onPress={onCancel}
        >
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
        </Pressable>
      </Modal>
    </>
  );
};
