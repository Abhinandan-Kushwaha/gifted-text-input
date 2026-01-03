import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { fontSizes } from '../../constants/fontSizes';

interface IFontProps {
  fontSize: number;
  setFontSize: (fontSize: number) => void;
}

export const FontSizeGrid = (props: IFontProps) => {
  const { fontSize, setFontSize } = props;
  return (
    <View style={styles.marginTop20}>
      <Text style={styles.textSizeLabel}>Text Size:</Text>
      <View style={[styles.container, styles.border]}>
        {fontSizes.map(item => {
          return (
            <TouchableOpacity
              key={item.label}
              style={[
                styles.fontTextContainer,
                item.value === fontSize && styles.selected,
              ]}
              onPress={() => {
                setFontSize(item.value);
              }}
            >
              <Text style={styles.fontText}>{item.label}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  marginTop20: {
    marginTop: 20,
  },
  border: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'gray',
    borderRadius: 6,
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
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
  },
});
