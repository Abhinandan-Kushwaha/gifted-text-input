import { StyleSheet, Text, View } from 'react-native';
import { Numbers } from '../FloatingToolBox/Numbers';

interface IRulersProps {
  horizontalPadding: number;
  setHorizontalPadding: (p: number) => void;
  verticalPadding: number;
  setVerticalPadding: (p: number) => void;
  borderRadius: number;
  setBorderRadius: (p: number) => void;
}

const nums = [0, 2, 4, 6, 8, 12, 16, 24];

export const RulersGrid = (props: IRulersProps) => {
  const {
    horizontalPadding,
    verticalPadding,
    borderRadius,
    setHorizontalPadding,
    setVerticalPadding,
    setBorderRadius,
  } = props;
  return (
    <>
      <View style={styles.border}>
        <Text style={styles.labelText}>Horizontal padding</Text>
        <Numbers
          nums={nums}
          selectedVal={horizontalPadding}
          onPress={setHorizontalPadding}
          type='hp'
        />
      </View>
      <View style={styles.border}>
        <Text style={styles.labelText}>Vertical padding</Text>
        <Numbers
          nums={nums}
          selectedVal={verticalPadding}
          onPress={setVerticalPadding}
          type='vp'
        />
      </View>
      <View style={styles.border}>
        <Text style={styles.labelText}>Border radius</Text>
        <Numbers
          nums={nums}
          selectedVal={borderRadius}
          onPress={setBorderRadius}
          type='br'
        />
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  border: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'gray',
    borderRadius: 6,
    paddingVertical: 12,
    marginTop: 14,
  },
  labelText: {
    marginBottom: 4,
    marginLeft: 8,
  },
  container: {
    paddingBottom: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  textSizeLabel: {
    fontWeight: 'bold',
    color: 'gray',
    textAlign: 'center',
    marginBottom: 4,
  },
  fontTextContainer: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginHorizontal: 8,
    marginVertical: 4,
  },
  fontText: {
    fontSize: 12,
  },
  selected: {
    backgroundColor: '#eee',
  },
});
