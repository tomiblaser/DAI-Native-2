import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from "react-native"
import { Button, Card } from 'react-native-paper';
import { useContextState } from '../contextState'
import CardFlat from '../components/CardFlat';


export default function MenuScreen({ navigation }) {

    const { contextState, setContextState } = useContextState();

    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#e66465' }}>
            <Button mode="outlined" style={{ backgroundColor: 'white', marginTop: 20, marginBottom: 20 }} onPress={() => navigation.navigate("HomeScreen")}>Back</Button>

            {
                contextState.menu.arrayPlatos.length == 0
                    ?
                    <>
                        <Text>Aquí se verán los platos que agregues</Text>

                    </>
                    :
                    <>
                        <Card style={{ width: 300, marginBottom: 20 }}>
                            <Card.Content>
                                <Text>Precio total: {contextState.menu.precioTotal}</Text>
                                <Text>Promedio Healthscore: {contextState.menu.promedioHealthScore}</Text>
                                <Text>Platos Normales: {contextState.menu.platoNormales}</Text>
                                <Text>Precio total: {contextState.menu.platoVeganos}</Text>
                            </Card.Content>
                        </Card>
                    </>
            }
            <FlatList
                keyExtractor={(item) => item.title}
                data={contextState.menu.arrayPlatos}
                renderItem={({ item }) => (

                    <CardFlat title={item.title}
                        image={item.image}
                        id={item.id} />
                )
                }
            />

        </View>
    )
}