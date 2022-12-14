import React from 'react';
import { View } from "react-native";
import { Button } from 'react-native-paper';
import { Vibrar } from '../components/Vibrar';

export default function HomeScreen({ navigation }) {

    return (
        
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#3052a1', justifyContent: 'center' }}>
            <Button mode="outlined" onPress={()=>{navigation.navigate("ContactosScreen")}} style={{backgroundColor:'yellow', marginBottom:20}}>Ver contactos</Button>
            <Button mode="outlined" onPress={()=>{Vibrar()}} style={{backgroundColor:'yellow', marginBottom:20}}>Vibrar</Button>
            <Button mode="outlined" onPress={()=>{navigation.navigate("TelefonoScreen")}} style={{backgroundColor:'yellow', marginBottom:20}}>Configurar telefono de emergencia</Button>
            <Button mode="outlined" onPress={()=>{navigation.navigate("HoraClima")}} style={{backgroundColor:'yellow', marginBottom:20}}>Hora y Temperatura</Button>
            <Button mode="outlined" onPress={()=>{navigation.navigate("QRScanner")}} style={{backgroundColor:'yellow', marginBottom:20}}>Escanear QR</Button>
        </View>
    )
}