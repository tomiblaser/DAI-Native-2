import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Card, Title, Button } from 'react-native-paper';
import { ActionTypes, useContextState } from '../contextState'


export default function CardFlat(props) {

  const navigation = useNavigation()


  const { contextState, setContextState } = useContextState()

  console.log("hola", contextState.menu.arrayPlatos)
  const validacion = contextState.menu.arrayPlatos.find((element) => element.id == props.id)


  const navegarInfo = async (e) => {

    navigation.navigate("PlatoScreen", { idPlato: props.id, foodImage: props.image, foodTitle: props.title })
  }


  const eliminarPlato = (id, image) => {
    let platosNormales = 0;
    let platosVeganos = 0;

    const newMenu = contextState.menu.listaPlatos.filter(word => word.id !== id)
    const platoEliminado = contextState.menu.listaPlatos.filter(word => word.id === id)


    let HealthTotal = contextState.menu.healthScore - platoEliminado[0].healthScore



    switch (platoEliminado[0].vegan) {
      case true:
        platosVeganos = 1
        break;
      case false:
        platosNormales = 1
    }

    setContextState({
      type: ActionTypes.setMenu,
      value: {
        platoNormales: (contextState.menu.platoNormales - platosNormales),
        platoVeganos: (contextState.menu.platoVeganos - platosVeganos),
        precioMenu: (contextState.menu.precioMenu - platoEliminado[0].pricePerServing),

        healthScore: (contextState.menu.healthScore - platoEliminado[0].healthScore),
        promedioHealthScore: (HealthTotal / (contextState.menu.cantidadPlatos - 1)),

        cantidadPlatos: (contextState.menu.cantidadPlatos - 1),
        arrayPlatos: newMenu

      }
    })


    navigation.navigate("Home")
  }





  return (
    <Card style={{ width: 300, marginBottom: 20 }}>
      <Card.Content>
        <Title>{props.title}</Title>
      </Card.Content>
      <Card.Cover source={{ uri: props.image }} />
      <Card.Actions>
        {!validacion ?
          <Button
            mode="outlined"
            onPress={navegarInfo}
          >More Information</Button>
          :
          <>
            <Button
              mode="outlined"
              onPress={(e) => {
                eliminarPlato(props.id, props.image)
              }}
            >Delete</Button>
          </>
        }
      </Card.Actions>
    </Card>
  )
}