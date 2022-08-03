import * as React from 'react';
import { Button } from 'react-native-paper';

const BotonEnviar = () => (
  <Button mode="contained-tonal" onPress={() => console.log('Pressed')}>
    Continue
  </Button>
);

export default BotonEnviar;