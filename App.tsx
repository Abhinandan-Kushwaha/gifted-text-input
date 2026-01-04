import React from 'react';
import { View } from 'react-native';
import { GiftedTextInput } from './src/GiftedTextInput';

// A simple demo of the library-

function App() {
  return (
    <View style={{ flex: 1, backgroundColor: '#dee', padding: 40 }}>
      <GiftedTextInput
        fontSize={16}
        padding={4}
        paddingHorizontal={12}
        placeholder="Enter here"
        borderWidth={1}
        borderColor="green"
        borderTopLeftRadius={10}
        borderBottomRightRadius={10}
      />
    </View>
  );
}

export default App;
