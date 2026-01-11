import { View, StyleSheet } from 'react-native';

export const RulerIcon = ({
  width = 32,
  height = 12,
  color = '#000',
  tickCount = 5,
}) => {
  return (
    <View
      style={[
        styles.container,
        { width, height, borderColor: color },
      ]}
    >
      {Array.from({ length: tickCount }).map((_, i) => {
        const isMajor = i % 2 === 0;
        return (
          <View
            key={i}
            style={{
              width: 2,
              height: isMajor ? height * 0.5 : height * 0.3,
              backgroundColor: color,
              marginHorizontal: width / (tickCount * 6),
            }}
          />
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'flex-start',
    paddingHorizontal: 3,
    transform: [{rotate:'-45deg'}]
  },
});