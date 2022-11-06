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
                Vibrar()
                Alert.alert(mensajeError)
                return;
            } else {
                let coordenadas = await Location.getCurrentPositionAsync({});
                setUbicacion(coordenadas);
                WeatherEndPoint(coordenadas).then((data) => {
                    setClima(data)
                })
                    .catch((err) => {
                        Vibrar()
                        Alert.alert('Error con la API')
                        throw err
                    });
            }
            }

        )();
    }, []);


    const [Clima, setClima] = useState({})

    return (

        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#3052a1', justifyContent: 'center' }}>
            <Text style={{ color: 'white' }}>
                {hora}
            </Text>
            <Text style={{ color: 'white' }}> Usted se encuentra en {Clima?.location?.region} y la temperatura es de {Clima?.current?.temp_c}°</Text>
        </View>
    )
}