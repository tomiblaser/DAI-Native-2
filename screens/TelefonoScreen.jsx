import { View, Alert } from "react-native";
import React, { useState, useEffect } from 'react';
import { Vibrar } from '../components/Vibrar';
import { TextInput, Button } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TelefonoScreen({ navigation }) {

    const [telefono, setTelefono] = useState()

    const ConfigTelefono = async (e) => {
        if (!telefono) {
            Vibrar()
            Alert.alert("Ingrese el numero")
        }
        else {
            await AsyncStorage.setItem('emergencyNumber', telefono)
            const prueba =  await AsyncStorage.getItem('emergencyNumber')
            Alert.alert("Se guardo en el storage")
        }
    }

    return (

        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#3052a1', justifyContent: 'center' }}>
            <Button mode="outlined" onPress={()=>{navigation.navigate("HomeScreen")}} style={{backgroundColor:'yellow', marginTop:30}}>Volver</Button>
            <TextInput
                style={{width:300}}
                mode='outlined'
                keyboardType='numeric'
                label="Numero de Emergencia"
                placeholder='Ingrese su nuevo Número de emergencia'
                onChangeText={(telefono) => setTelefono(telefono)}
                value={telefono}
            />
            <Button mode="outlined" style={{ backgroundColor: 'yellow', marginBottom: 20 }} onPress={() => { ConfigTelefono() }}>Confirmar</Button>
        </View>
    )
}