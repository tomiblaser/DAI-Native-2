import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainContainer from './Navigation/MainContainer.js';

export default function App() {
  return(
    <SafeAreaProvider><MainContainer/></SafeAreaProvider>
  );
}


