import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import * as Location from 'expo-location'
import { WeatherEndPoint } from '../axios/WeatherEndPoint';
import { Alert } from 'react-native';
import { Vibrar } from '../components/Vibrar';

export default function HoraClima({ navigation }) {
    const [hora, setHora] = useState('');

    useEffect(() => {
        var hours = new Date().getHours();
        var min = new Date().getMinutes();
        var sec = new Date().getSeconds();
        setHora(
            hours + ':' + min + ':' + sec
        );
    }, []);

    const [ubicacion, setUbicacion] = useState('');
    const [mensajeError, setMensajeError] = useState('');

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setMensajeError('Por favor, otorgue el acceso a la ubicacion');
                return;
            }
            let coordenadas = await ubicacion.getCurrentPositionAsync({});
            setUbicacion(coordenadas);
        })();
    }, []);

    let posibleUbicacion = 'Aguarde por favor..';
    if (mensajeError) {
        Vibrar()
        Alert.alert(mensajeError)
    } else if (ubicacion) {
        posibleUbicacion = JSON.stringify(ubicacion);
    }

    const [Clima, setClima] = useState({})

    useEffect(async () => {
        const datos = await WeatherEndPoint(posibleUbicacion);
        setClima(datos);
    }, [])

    return (

        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#3052a1', justifyContent: 'center' }}>
            <Text style={{ color: 'white' }}>
                {hora}
            </Text>
            <Text style={{ color: 'white' }}> Usted se encuentra en {Clima?.ubicacion?.name} y la temperatura es de {Clima?.hora?.temp_c}°</Text>
        </View>
    )
}