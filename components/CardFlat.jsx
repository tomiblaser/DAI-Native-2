import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

const CardFlat = (props) => (
    <TouchableOpacity><Card style={{width:300, marginBottom:20}}>
        <Card.Content>
          <Title>{props.title}</Title>
        </Card.Content>
        <Card.Cover source={{ uri: props.image }}/>
    </Card></TouchableOpacity>
);

export default CardFlat;