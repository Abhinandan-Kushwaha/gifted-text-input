import { TextAlignType } from "../types";

export type GiftedTextInputAction =
  | { type: 'SET_TEXT'; payload: string }
  | { type: 'SET_COLOR'; payload: string }
  | { type: 'SET_BACKGROUND_COLOR'; payload: string }
  | { type: 'SET_FONT'; payload: string }
  | { type: 'SET_ALIGN'; payload: TextAlignType }
  | { type: 'SET_FONT_SIZE'; payload: number }
  | { type: 'TOGGLE_BOLD' }
  | { type: 'TOGGLE_ITALIC' }
  | { type: 'TOGGLE_UNDERLINE' }
  | { type: 'TOGGLE_STRIKE' }
  | { type: 'SET_IS_FORMATTING_BOX_VISIBLE', payload: boolean }
  | { type: 'SET_PADDING_HORIZONTAL'; payload: number }
  | { type: 'SET_PADDING_VERTICAL'; payload: number }
  | { type: 'SET_BORDER_RADIUS'; payload: number }
  | { type: 'SET_IS_FONT_OPTIONS_OPEN', payload: boolean }
  | { type: 'SET_IS_COLOR_BOX_OPEN', payload: boolean }
  | { type: 'SET_IS_BACKGROUND_COLOR_BOX_OPEN', payload: boolean }
  | { type: 'SET_IS_RULER_OPTIONS_OPEN', payload: boolean }