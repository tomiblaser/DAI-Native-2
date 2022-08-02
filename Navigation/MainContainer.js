import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons'

import ProfileScreen from '../screens/ProfileScreen'

const profileName = 'Profile';

const Tab = createBottomTabNavigator();

export default function MainContainer(){
        return(
            <NavigationContainer>
                <Tab.Navigator
                initialRouteName={profileName}
                screenOptions={({route}) =>({
                        tabBarIcon: ({focused, size}) => {
                            let iconName;
                            let rn= route.name;

                            if (rn === profileName){
                                iconName = focused ? 'person' : 'person-outline'
                            }

                            return <Ionicons name={iconName} size={size} />
                        },
                    })}
                    tabBarOptions={{
                        activeTintColor: '#30713a',
                        inactiveTintColor: 'grey',
                        labelStyle: {fontSize:10},                     
                    }}

                    >

                    <Tab.Screen name={profileName} component={ProfileScreen}/>

                </Tab.Navigator>
            </NavigationContainer>
        )
}