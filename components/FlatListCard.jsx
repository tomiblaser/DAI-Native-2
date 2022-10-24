import React from 'react';
import { View } from "react-native";
import { Card, Paragraph } from 'react-native-paper';

export default function FlatListCard(props) {

    return (
        <Card style={{ width: 300, marginBottom: 20 }}>
            <Card.Content>
                <Card.Paragraph>{props.nombre}{props.apellido}</Card.Paragraph>
                <Card.Paragraph>{props.numero}</Card.Paragraph>
            </Card.Content>
            <Card.Actions></Card.Actions>
        </Card>
    )
}