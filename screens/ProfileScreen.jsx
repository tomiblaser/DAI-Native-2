import * as React from 'react';
import {View} from 'react-native';
import BotonEnviar from '../components/BotonEnviar';
import InputUser from '../components/input';

export default function ProfileScreen({navigation}) {
    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent:'center', backgroundColor:'#41AC92'}}>
            <View style={{alignItems: 'center', justifyContent:'center', width:'75%', backgroundColor:'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20,}}>
                <InputUser/>
                <BotonEnviar/>
            </View>
        </View>
    )
}