import axios from 'axios';
import { Vibrar } from '../components/Vibrar';
import { Alert } from 'react-native';

export async function  WeatherEndPoint(ubi) {
    const baseUrl='http://api.weatherapi.com/v1';
    const ApiKey = "d0423e38d44cfce117895650f7e65fd3";
    let location = ubi;
    
    return axios.get(`${baseUrl}/current.json?key=${ApiKey}&q=${location}`)
        .then((response) => {
            console.log(response.data);
            return response.data;
        })
        .catch((error) => {
            Vibrar()
            Alert.alert("Ha habido un error con la API del clima")
            console.log(error);
        })
}