import axios from 'axios';
import { Vibrar } from '../components/Vibrar';
import { Alert } from 'react-native';

export async function  WeatherEndPoint(ubi) {
    const baseUrl='http://api.weatherapi.com/v1';
    const ApiKey = "b8f50a0571674e8b99b181446220611";
    let location = ubi;
    console.log(location)
    
    return axios.get(`http://api.weatherapi.com/v1/current.json?key=b8f50a0571674e8b99b181446220611&q=-34.6018807,-58.4356863`)
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