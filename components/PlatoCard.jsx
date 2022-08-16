import * as React from 'react';
import { View, Image, Text, TouchableOpacity, FlatList } from 'react-native';

const Item = ({ image, title }) => (
  <View>
    <Image source={image}/>
    <Text>{title}</Text>
  </View>
);

const PlatoCard = (props) => {

  const {onPress, platos} = props

  return (
    <TouchableOpacity onPress={onPress}>
 
      <FlatList
        data={platos}
        renderItem={({ item }) => <Item image={item.image} title={item.title} />} 
        keyExtractor={item => item.id}
      />
      </TouchableOpacity>
  );
}

export default PlatoCard;