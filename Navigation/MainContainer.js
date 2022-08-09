import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import ProfileScreen from '../screens/ProfileScreen'
import HomeScreen from '../screens/Home';

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
            name='HomeScreen'
            component={ HomeScreen }
        />

        
         
    </Stack.Navigator>
</NavigationContainer>

)}

export default MainStack

const style = StyleSheet.create({
    buttonContainer:{
        backgroundColor: 'green',
        marginBottom: 10,
        paddingHorizontal:20,
        paddingHorizontal:10
    },
    buttonText:{
    color:'white'
    }
})