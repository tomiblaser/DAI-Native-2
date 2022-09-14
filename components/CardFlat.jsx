import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Card, Title } from 'react-native-paper';



export default function CardFlat(props) {

  const navigation = useNavigation()

  return (
    <TouchableOpacity onPress={() => navigation.navigate("PlatoScreen")}>
      <Card style={{ width: 300, marginBottom: 20 }}>
        <Card.Content>
          <Title>{props.title}</Title>
        </Card.Content>
        <Card.Cover source={{ uri: props.image }} />
      </Card>
    </TouchableOpacity>
  )
}