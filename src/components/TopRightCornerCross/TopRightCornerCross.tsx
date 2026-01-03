import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface TopRightCornerCrossProps {
  onPress: () => void;
  top: number;
  right: number;
  paddingHorizontal: number;
  size?: number;
  opacity?: number;
}

export const TopRightCornerCross = (props: TopRightCornerCrossProps) => {
  const { onPress, top, right, paddingHorizontal, opacity = 1 } = props;
  return (
    <TouchableOpacity
      style={{ position: 'absolute', right, top, opacity }}
      onPress={onPress}
    >
      <Text
        style={[styles.cancelButton, { paddingHorizontal }]}
      >
        X
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  cancelButton: {
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    color: '#ee8888',
    fontSize: 14,
    fontWeight: 'bold',
    paddingVertical: 2
  },
});
