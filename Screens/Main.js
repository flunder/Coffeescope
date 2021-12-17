import React, { useRef } from 'react';
import { TextInput, View } from 'react-native';
import { Wheel } from '../Components/Wheel';
import { Colors } from '../theme';

function Main(props) {
  const selectedRef = useRef();

  return (
    <View style={{ flex: 1, backgroundColor: Colors.primary, paddingTop: 50, alignItems: 'center' }}>
      <TextInput ref={selectedRef} value="xxx" />
      <Wheel
        selectedRef={selectedRef}
      />
    </View>
  )
}

export default Main;