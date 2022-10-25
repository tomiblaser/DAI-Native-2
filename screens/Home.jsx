import React from 'react';
import { View } from "react-native";
import { Button } from 'react-native-paper';
import { Vibrar } from '../components/Vibrar';

export default function HomeScreen({ navigation }) {

    return (
        
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#3052a1', justifyContent: 'center' }}>
            <Button mode="outlined" onPress={()=>{navigation.navigate("ContactosScreen")}} style={{backgroundColor:'yellow', marginBottom:20}}>Ver contactos</Button>
            <Button mode="outlined" onPress={()=>{Vibrar()}} style={{backgroundColor:'yellow', marginBottom:20}}>Vibrar</Button>
            <Button mode="outlined" style={{backgroundColor:'yellow', marginBottom:20}}>Menu</Button>
            <Button mode="outlined" style={{backgroundColor:'yellow', marginBottom:20}}>Menu</Button>
            <Button mode="outlined" style={{backgroundColor:'yellow', marginBottom:20}}>Menu</Button>
        </View>
    )
}