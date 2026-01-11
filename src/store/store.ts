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
  paddingHorizontal: number;
  paddingVertical: number;
  paddingTop: number;
  paddingBottom: number;
  paddingLeft: number;
  paddingRight: number;
  borderRadius: number;
  borderTopLeftRadius: number;
  borderTopRightRadius: number;
  borderBottomLeftRadius: number;
  borderBottomRightRadius: number;
  isFontOptionsOpen: boolean;
  isColorBoxOpen: boolean;
  isBackgroundColorBoxOpen: boolean;
  isRulerOptionsOpen: boolean;
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

    case 'SET_PADDING_HORIZONTAL':
      return {
        ...state,
        paddingHorizontal: action.payload,
        paddingLeft: action.payload,
        paddingRight: action.payload,
      };
    case 'SET_PADDING_VERTICAL':
      return {
        ...state,
        paddingVertical: action.payload,
        paddingTop: action.payload,
        paddingBottom: action.payload,
      };
    case 'SET_BORDER_RADIUS':
      return {
        ...state,
        borderRadius: action.payload,
        borderTopLeftRadius: action.payload,
        borderTopRightRadius: action.payload,
        borderBottomLeftRadius: action.payload,
        borderBottomRightRadius: action.payload,
      };
    case 'SET_IS_FONT_OPTIONS_OPEN':
      return { ...state, isFontOptionsOpen: action.payload };

    case 'SET_IS_COLOR_BOX_OPEN':
      return { ...state, isColorBoxOpen: action.payload };

    case 'SET_IS_BACKGROUND_COLOR_BOX_OPEN':
      return { ...state, isBackgroundColorBoxOpen: action.payload };

    case 'SET_IS_RULER_OPTIONS_OPEN':
      return { ...state, isRulerOptionsOpen: action.payload };

    default:
      return state;
  }
};
