import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import HomeScreen from '../screens/Home';
import ContactosScreen from '../screens/ContactosScreen';

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
         
    </Stack.Navigator>
</NavigationContainer>

)}

export default MainStack