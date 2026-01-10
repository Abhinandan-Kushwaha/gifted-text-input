import { TextAlignType } from '../types';
import { GiftedTextInputAction } from './actions';

export type GiftedTextInputState = {
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
};

export const giftedTextInputReducer = (
  state: GiftedTextInputState,
  action: GiftedTextInputAction,
): GiftedTextInputState => {
  switch (action.type) {
    case 'SET_TEXT':
      return { ...state, text: action.payload, value: action.payload };

    case 'SET_COLOR':
      return { ...state, color: action.payload };

    case 'SET_BACKGROUND_COLOR':
      return { ...state, backgroundColor: action.payload };

    case 'SET_FONT':
      return { ...state, font: action.payload };

    case 'SET_ALIGN':
      return { ...state, align: action.payload };

    case 'SET_FONT_SIZE':
      return { ...state, fontSize: action.payload };

    case 'TOGGLE_BOLD':
      return { ...state, isBold: !state.isBold };

    case 'TOGGLE_ITALIC':
      return { ...state, isItalic: !state.isItalic };

    case 'TOGGLE_UNDERLINE':
      return { ...state, isUnderline: !state.isUnderline };

    case 'TOGGLE_STRIKE':
      return { ...state, isStrikeThrough: !state.isStrikeThrough };

    default:
      return state;
  }
};
