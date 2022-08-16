import React, { useState, useEffect, useContext } from 'react';
import { View, Alert, FlatList } from "react-native"
import { Searchbar } from 'react-native-paper';
import { PlatosClient } from '../services/PlatosClient';
import { searchEntry } from '../services/PlatosService';
import PlatoCard from '../components/PlatoCard';

export default function HomeScreen({ navigation }) {

    const [searchState, setSearchState] = useState({
        search: ''
    });

    const onPressSearch = async (e) => {

        let largo = searchState.search.length

        if (!searchState.search) {

            console.log("Ingrese algo para continuar con la busqueda")
            Alert.alert("Ingrese algo para continuar con la busqueda")

        } else if (largo < 3) {
            console.log("Ingrese al menos 3 letras en la barra de búsqueda para buscar platos.")
            Alert.alert("Ingrese al menos 3 letras en la barra de búsqueda para buscar platos.")
        } else {

            await searchEntry(searchState.search).then((response) => {
                console.log(response)
            })
                .catch(() => {

                    console.log("No se han encontrado coincidencias con su busqueda")
                    Alert.alert("No se han encontrado coincidencias con su busqueda")
                });
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#e66465' }}>
            <Searchbar
                style={{ marginTop: 10 }}
                value={searchState.search}
                placeholder="Search"
                onChangeText={text => setSearchState({ ...searchState, search: text })}
                iconColor="red"
                onIconPress={onPressSearch}
            />
        </View>
    )
}