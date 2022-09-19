import React, { useState, useEffect, useContext } from 'react';
import { View, Alert } from "react-native"
import { Card, Title, Paragraph, Button } from 'react-native-paper';
import { ActionTypes, useContextState } from '../contextState'
import { getFoodInfo } from '../services/PlatosService';



export default function PlatoScreen({ navigation, route }) {

    const idFood = route.params.idPlato
    const image = route.params.foodImage
    const title = route.params.foodTitle

    const { contextState, setContextState } = useContextState()
    const [informacion, setInformacion] = useState([])
    console.log("ACA", idFood)
    const [loadState, setLoaded] = useState(false)

    const foodInfo = async (e) => {
        await getFoodInfo(idFood).then((response) => {
            setInformacion(response)

        })
            .catch(() => {
                console.log("noooo")

                Alert.alert("Datos incorrectos")
            });
    }

    const agregarMenu = (vegano, precioPlato, healthScorePlato) => {
        let platosNormales = 0;
        let platosVeganos = 0;
        let HealthTotal = contextState.menu.healthScore + healthScorePlato
        console.log("hola gagaga", vegano)

        switch (vegano) {
            case true:
                platosVeganos = 1
                break;
            case false:
                platosNormales = 1
        }



        if (platosVeganos == 1 && contextState.menu.platoVeganos == 2) {
            Alert.alert("Llegaste al maximo de platos veganos")
            console.log("No se admiten mas platos veganos")
        } else if (platosNormales == 1 && contextState.menu.platoNormales == 2) {
            Alert.alert("Llegaste al maximo de platos NO veganos")
            console.log("No se admiten mas platos no veganos")
        } else {
            console.log("entro al context")
            setContextState({
                type: ActionTypes.setMenu,
                value: {
                    platoNoVeganos: (contextState.menu.platoNormales + platosNormales),
                    platoVeganos: (contextState.menu.platoVeganos + platosVeganos),
                    precioMenu: (contextState.menu.precioMenu + precioPlato),

                    healthScore: (contextState.menu.healthScore + healthScorePlato),
                    promedioHealthScore: (HealthTotal / (contextState.menu.cantidadPlatos + 1)),

                    cantidadPlatos: (contextState.menu.cantidadPlatos + 1),

                    listaPlatos: [...contextState.menu.listaPlatos, informacion]
                }
            })

            navigation.navigate('HomeScreen')
        }
    }

    useEffect(() => {
        (async () => {
            await foodInfo()
        })()
    }, [])


    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#e66465', justifyContent: 'center' }}>
            <Card mode='contained' style={{ width: 550, height: 350, marginBottom: 20 }}>
                <Card.Content>
                    <Title style={{ textAlign: 'center' }}>{title}</Title>
                </Card.Content>
                <Card.Cover source={{ uri: image }} />
                <Paragraph style={{ textAlign: 'center' }}>Precio: ${informacion.pricePerServing}</Paragraph>
                <Paragraph style={{ textAlign: 'center' }}>HealthScore: {informacion.healthScore}</Paragraph>
                <Paragraph style={{ textAlign: 'center' }}>Is vegan: {informacion.vegan ? 'Si' : 'No'}</Paragraph>
                <Button
                    mode="outlined"
                    onPress={(e) => agregarMenu(informacion.vegan, informacion.pricePerServing, informacion.healthScore)}>
                    Add to the menu
                </Button>
                <Button
                    mode="outlined"
                    onPress={navigation.navigate('HomeScreen')}>
                    Back
                </Button>
            </Card>
        </View>
    )
}