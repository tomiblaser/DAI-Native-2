import React from 'react';
import { View, Text } from "react-native";

const FlatListCard = (props) => {
    return (
        <View style={{justifyContent: 'center', alignItems:'center'}}><View style={{ marginTop: 20, marginBottom: 20 }}>
                <Text>{props.nombre}{props.apellido}</Text>
                <Text>props.numero</Text>
        </View></View>
    )
}

export default FlatListCard