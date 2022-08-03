import * as React from 'react';
import {View, Text} from 'react-native';
import InputNombre from '../components/InputMail';
import InputApellido from '../components/InputPassword';
import BotonEnviar from '../components/BotonEnviar';

export default function ProfileScreen({navigation}) {
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent:'center', backgroundColor:'#e66465'}}>
            <View style={{alignItems: 'center', justifyContent:'center', width:'75%', backgroundColor:'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20,}}> 
                <Text>{"\n"}</Text>
                <InputNombre/>
                <InputApellido/>    
                <BotonEnviar/>
                <Text>{"\n"}</Text>
            </View>   
        </View>
    )
}