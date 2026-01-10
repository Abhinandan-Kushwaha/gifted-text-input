import { Modal, Pressable } from 'react-native';

interface IFloatingBoxModalProps {
  isFormattingBoxVisible: boolean;
  onCancel: () => void;
  BoxComponent: any;
}

export const FloatingToolBoxModal = (props: IFloatingBoxModalProps) => {
  const { isFormattingBoxVisible, onCancel, BoxComponent } = props;
  return (
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
          backgroundColor: 'rgba(0,0,0,0.1)',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={onCancel}
      >
        <BoxComponent />
      </Pressable>
    </Modal>
  );
};
