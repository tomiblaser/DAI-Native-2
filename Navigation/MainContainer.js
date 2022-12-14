import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/Home';
import ContactosScreen from '../screens/ContactosScreen';
import TelefonoScreen from '../screens/TelefonoScreen';
import QRScanner from '../screens/QRScanner';
import HoraClima from '../screens/HoraClima';

const Stack = createNativeStackNavigator()

const MainStack =()=>{
  
return(
<NavigationContainer>
    <Stack.Navigator
    screenOptions={{
        headerShown:false
    }
    }>
        <Stack.Screen
            name='HomeScreen'
            component={ HomeScreen }
        />
        <Stack.Screen
            name='ContactosScreen'
            component={ ContactosScreen }
        />
        <Stack.Screen
            name='TelefonoScreen'
            component={ TelefonoScreen }
        />
        <Stack.Screen
            name='HoraClima'
            component={ HoraClima }
        />
        <Stack.Screen
            name='QRScanner'
            component={ QRScanner }
        />
         
    </Stack.Navigator>
</NavigationContainer>

)}

export default MainStack