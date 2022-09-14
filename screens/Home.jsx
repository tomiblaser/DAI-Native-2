import React, { useState, useEffect, useContext } from 'react';
import { View, Alert, FlatList } from "react-native"
import { Searchbar } from 'react-native-paper';
import { PlatosClient } from '../services/PlatosClient';
import { searchEntry } from '../services/PlatosService';
import CardFlat from '../components/CardFlat';

export default function HomeScreen({ navigation }) {

    const [searchState, setSearchState] = useState({
        search: ''
    });

    const [plato, setPlato] = useState({
        arrayPLatos:[]
        });

    const onPressSearch = async (text) => {

        let largo = text.length

        if (!text) {

            console.log("Ingrese algo para continuar con la busqueda")
            Alert.alert("Ingrese algo para continuar con la busqueda")

        } else if (largo < 3) {
            console.log("Ingrese al menos 3 letras en la barra de búsqueda para buscar platos.")
            Alert.alert("Ingrese al menos 3 letras en la barra de búsqueda para buscar platos.")
        } else {

            await searchEntry(text).then((response) => {
                console.log(response)
                setPlato({arrayPLatos: response})
            })
                .catch(() => {
                    console.log("No se han encontrado coincidencias con su busqueda")
                    Alert.alert("No se han encontrado coincidencias con su busqueda")
                });
        }
    }

    const renderItem = ({ item }) => (
        <CardFlat 
        title={item.title}
        image={item.image} />
      );

    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#e66465' }}>
            <Searchbar
                style={{ marginTop: 10, marginBottom:20 }}
                placeholder="Search"
                onChangeText={text => onPressSearch(text)}
                iconColor="red"
            />

        <FlatList
            data={plato.arrayPLatos}
            renderItem={renderItem}
            keyExtractor={item => item.title}
        />
        </View>
    )
}