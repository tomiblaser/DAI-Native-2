import React from 'react';
import { View, Text } from "react-native";

export default function FlatListCard({contactos}){
    return (
        <View style={{justifyContent: 'center', alignItems:'center'}}>
            <View style={{ marginTop: 20, marginBottom: 20 }}>
                <Text>{contactos?.firstName} {contactos?.lastName}</Text>
                <Text>{contactos?.phoneNumbers && contactos?.phoneNumbers.map(phone=><Text key={phone.id}>{phone?.number}</Text>)}</Text>
            </View>
        </View>
    )
}
    
