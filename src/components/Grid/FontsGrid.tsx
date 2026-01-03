import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { fonts } from '../../constants/fonts';

interface IFontProps {
  font: string;
  setFont: (font: string) => void;
}

export const FontsGrid = (props: IFontProps) => {
  const { font, setFont } = props;
  return (
    <View style={[styles.container, styles.border]}>
      {fonts.map(item => {
        return (
          <TouchableOpacity
            key={item}
            style={[styles.fontTextContainer, item === font && styles.selected]}
            onPress={() => {
              setFont(item);
            }}
          >
            <Text style={[styles.fontText, { fontFamily: item }]}>{item}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
const styles = StyleSheet.create({
  border: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'gray',
    borderRadius: 6,
  },
  container: {
    marginTop: 20,
    paddingBottom: 10,
    overflow: 'hidden',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fontTextContainer: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 10,
    marginVertical: 4,
  },
  fontText: {
    fontSize: 18,
  },
  selected: {
    backgroundColor: '#eee',
    borderWidth: StyleSheet.hairlineWidth,
    borderRadius: 4,
  },
});
