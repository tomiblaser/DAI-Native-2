import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import ProfileScreen from '../screens/ProfileScreen'
import HomeScreen from '../screens/Home';
import PlatoScreen from '../screens/PlatoScreen';

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
            name='ProfileScreen'
            component={ ProfileScreen }
        />
        <Stack.Screen 
            name='HomeScreen'>
                {(props) => <HomeScreen {...props}
            />}
            </Stack.Screen>

         <Stack.Screen 
            name='PlatoScreen'>
                {(props) => <PlatoScreen {...props}
            />}
        </Stack.Screen>
        
         
    </Stack.Navigator>
</NavigationContainer>

)}

export default MainStack