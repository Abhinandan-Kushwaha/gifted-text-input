import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface INumbersProps {
  type: string;
  nums: number[];
  onPress: (n: number) => void;
  selectedVal: number;
}

export const Numbers = (props: INumbersProps) => {
  const { type, nums, onPress, selectedVal } = props;
  return (
    <View style={styles.container}>
      {nums.map(num => {
        return (
          <TouchableOpacity
            key={type + '.' + num}
            onPress={() => onPress(num)}
            style={[
              styles.numberButton,
              num === selectedVal && styles.selected,
            ]}
          >
            <Text>{num}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  numberButton: {
    padding: 4,
    borderRadius: 4,
    borderWidth: StyleSheet.hairlineWidth,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: '#eee',
  },
});
