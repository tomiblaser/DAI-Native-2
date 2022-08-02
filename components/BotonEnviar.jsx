import * as React from 'react';
import { Button } from 'react-native-paper';

const BotonEnviar = () => (
  <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}>
    Continuar
  </Button>
);

export default BotonEnviar;