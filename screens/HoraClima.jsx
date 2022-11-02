import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

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

    return (

        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#3052a1', justifyContent: 'center' }}>
            <Text style={{ color: 'white' }}>
                {hora}
            </Text>
        </View>
    )
}