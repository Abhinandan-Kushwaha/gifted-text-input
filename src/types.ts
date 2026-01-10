import { RefObject } from 'react';
import { TextInput } from 'react-native';
import { GiftedTextInputState } from './store/store';

export type GiftedTextInputHandle = {
  getState: () => GiftedTextInputState;
  focus?: () => void;
};

export type TextAlignType =
  | 'left'
  | 'auto'
  | 'right'
  | 'center'
  | 'justify'
  | undefined;

export interface IGiftedTextInputProps {
  ref?: RefObject<TextInput | null>;
  value?: string;
  onChangeText?: (v: string) => void;
  onLongPress?: () => void;
  onBlur?: () => void;
  autoFocus?: boolean;
  fontSize?: number;
  color?: string;
  backgroundColor?: string;
  align?: TextAlignType;
  font?: string;
  isBold?: boolean;
  isItalic?: boolean;
  isUnderline?: boolean;
  isStrikeThrough?: boolean;
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

export interface IGiftedTextInputRendererProps {
  /** reducer state */
  state: GiftedTextInputState;

  /** refs */
  textInputRef: React.RefObject<TextInput | null>;

  /** derived + passthrough props */
  text: string;
  value: string;
  color: string;
  backgroundColor: string;
  font: string;
  align: TextAlignType;
  fontSize: number;
  isBold: boolean;
  isItalic: boolean;
  isUnderline: boolean;
  isStrikeThrough: boolean;

  paddingLeft: number;
  paddingRight: number;
  paddingTop: number;
  paddingBottom: number;

  borderTopWidth: number;
  borderBottomWidth: number;
  borderLeftWidth: number;
  borderRightWidth: number;

  borderTopColor: string;
  borderBottomColor: string;
  borderLeftColor: string;
  borderRightColor: string;

  borderTopLeftRadius: number;
  borderTopRightRadius: number;
  borderBottomLeftRadius: number;
  borderBottomRightRadius: number;

  placeholder: string;
  placeholderTextColor: string;
  autoFocus: boolean;

  /** handlers */
  onLongPress?: () => void;
  onBlur?: () => void;

  /** actions */
  setText: (val: string) => void;
  setColor: (val: string) => void;
  setBackgroundColor: (val: string) => void;
  setFont: (val: string) => void;
  setAlign: (val: TextAlignType) => void;
  setFontSize: (val: number) => void;
  setIsBold: () => void;
  setIsItalic: () => void;
  setIsUnderline: () => void;
  setIsStrikeThrough: () => void;
  onChangeText?: (val: string) => void;
}
