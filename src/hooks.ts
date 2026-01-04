import { useReducer, useRef } from 'react';
import { TextInput } from 'react-native';
import {
  IGiftedTextInputProps,
  IGiftedTextInputRendererProps,
  TextAlignType,
} from './types';
import { giftedTextInputReducer } from './store/store';

export const useGiftedTextInput = (
  props: IGiftedTextInputProps,
): IGiftedTextInputRendererProps => {
  const {
    ref,
    value = '',
    onBlur,
    autoFocus = false,
    fontSize = 12,
    color = 'black',
    backgroundColor = 'transparent',
    align = 'left',
    font = '',
    isBold = false,
    isItalic = false,
    isUnderline = false,
    isStrikeThrough = false,
    isFormattingBoxVisible = false,
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
    onChangeText,
  } = props;
  const textInputRef = ref ?? useRef<TextInput | null>(null);

  const [state, dispatch] = useReducer(giftedTextInputReducer, {
    text: value,
    value: value,
    color,
    backgroundColor,
    font,
    align,
    fontSize,
    isBold,
    isItalic,
    isUnderline,
    isStrikeThrough,
    isFormattingBoxVisible,
  });

  const properties = {
    textInputRef,
    ...state,
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
    borderBottomRightRadius: borderBottomRightRadius ?? borderRadius ?? 0,
    placeholder,
    placeholderTextColor,
    autoFocus,
  };

  const setText = (val: string) => {
    dispatch({ type: 'SET_TEXT', payload: val });
  };
  const setColor = (val: string) => {
    dispatch({ type: 'SET_COLOR', payload: val });
  };
  const setBackgroundColor = (val: string) => {
    dispatch({ type: 'SET_BACKGROUND_COLOR', payload: val });
  };
  const setFont = (val: string) => {
    dispatch({ type: 'SET_FONT', payload: val });
  };
  const setAlign = (val: TextAlignType) => {
    dispatch({ type: 'SET_ALIGN', payload: val });
  };
  const setFontSize = (val: number) => {
    dispatch({ type: 'SET_FONT_SIZE', payload: val });
  };
  const setIsBold = () => {
    dispatch({ type: 'TOGGLE_BOLD' });
  };
  const setIsItalic = () => {
    dispatch({ type: 'TOGGLE_ITALIC' });
  };
  const setIsUnderline = () => {
    dispatch({ type: 'TOGGLE_UNDERLINE' });
  };
  const setIsStrikeThrough = () => {
    dispatch({ type: 'TOGGLE_STRIKE' });
  };

  const setIsFormattingBoxVisible = (val: boolean) => {
    dispatch({ type: 'SET_IS_FORMATTING_BOX_VISIBLE', payload: val });
  };

  return {
    state,
    onBlur,
    ...properties,
    setText,
    setColor,
    setBackgroundColor,
    setFont,
    setAlign,
    setFontSize,
    setIsBold,
    setIsItalic,
    setIsUnderline,
    setIsStrikeThrough,
    setIsFormattingBoxVisible,
    onChangeText,
  };
};
