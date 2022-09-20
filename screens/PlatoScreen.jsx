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
                console.log("error")

                Alert.alert("Datos incorrectos")
            });
    }

    const agregarMenu = (vegano, precioPlato, healthScorePlato) => {
        let platosNormales = 0;
        let platosVeganos = 0;
        let HealthTotal = contextState.menu.healthScoreAcumulativo + healthScorePlato

        switch (vegano) {
            case true:
                platosVeganos = 1
                break;
            case false:
                platosNormales = 1
        }



        if (platosVeganos == 1 && contextState.menu.platoVeganos == 2) {
            Alert.alert("No se pueden agregar mas platos veganos")
            console.log("No se pueden agregar mas platos veganos")
        } else if (platosNormales == 1 && contextState.menu.platoNormales == 2) {
            Alert.alert("No se pueden agregar mas platos normales")
            console.log("No se pueden agregar mas platos normales")
        } else {
            setContextState({
                type: ActionTypes.setMenu,
                value: {
                    platoNoVeganos: (contextState.menu.platoNormales + platosNormales),
                    platoVeganos: (contextState.menu.platoVeganos + platosVeganos),
                    precioMenu: (contextState.menu.precioMenu + precioPlato),

                    healthScoreAcumulativo: (contextState.menu.healthScoreAcumulativo + healthScorePlato),
                    promedioHealthScore: (HealthTotal / (contextState.menu.cantidadPlatos + 1)),

                    cantidadPlatos: (contextState.menu.cantidadPlatos + 1),

                    arrayPlatos: [...contextState.menu.arrayPlatos, informacion]
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
                
            </Card>
        </View>
    )
}