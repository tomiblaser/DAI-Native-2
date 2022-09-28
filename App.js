import * as React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import MainStack from './Navigation/MainContainer.js';
import MainContainer from './Navigation/MainContainer.js';
import { ContextProvider } from './contextState.js';

export default function App() {
  return(
    <ContextProvider><MainStack/></ContextProvider>
  );
}


