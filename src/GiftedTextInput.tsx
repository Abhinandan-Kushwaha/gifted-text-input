import { forwardRef, useImperativeHandle } from 'react';
import { GiftedTextInputHandle, IGiftedTextInputProps } from './types';
import { useGiftedTextInput } from './hooks';
import { GiftedTextInputRenderer } from './components/GiftedTextInputRenderer/GiftedTextInputRenderer';

export const GiftedTextInput = forwardRef<
  GiftedTextInputHandle,
  IGiftedTextInputProps
>((props, ref) => {
  const gifted = useGiftedTextInput(props);

  useImperativeHandle(ref, () => ({
    getState: () => gifted.state,
    focus: () => gifted.textInputRef.current?.focus(),
  }));

  return <GiftedTextInputRenderer {...gifted} {...props} />;
});
