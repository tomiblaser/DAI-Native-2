import axios from 'axios';
import { Vibrar } from '../components/Vibrar';
import { Alert } from 'react-native';

export async function  WeatherEndPoint(coordenadas) {
    const baseUrl='http://api.weatherapi.com/v1';
    const ApiKey = "b8f50a0571674e8b99b181446220611";
    let location = coordenadas;
    
    return axios.get(`${baseUrl}/current.json?key=${ApiKey}&q=${coordenadas.coords.latitude},${coordenadas.coords.longitude}`)
        .then((response) => {
            return response.data;
            
        })
        .catch((error) => {
            Vibrar()
            Alert.alert("Ha habido un error con la API del clima")
        })
}