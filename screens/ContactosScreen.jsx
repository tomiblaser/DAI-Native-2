import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Alert } from 'react-native';
import * as Contacts from 'expo-contacts';
import { useEffect, useState } from 'react';
import FlatListCard from '../components/FlatListCard';
import { Vibrar } from '../components/Vibrar';

export default function ContactosScreen({navigation}) {
  
    const [contactos, setContactos] = useState([])

    useEffect(()=>{
        (async ()=>{
            const {status} = await Contacts.requestPermissionsAsync(); 
            if(status === 'granted'){
                const {data} = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.Name, Contacts.Fields.LastName, Contacts.Fields.PhoneNumbers],
                });
                console.log(data.length)
                setContactos(data)
                if(data.length > 0) {
                    const contact = data[0]
                }
            }
            else{
                Vibrar()
                Alert.alert("Por favor, dar acceso a los contactos")
                navigation.navigate("HomeScreen")
            }    
    })();
},[]);

  const renderItem = ({ item }) => (
    <FlatListCard
        nombre={item.firstName}
        apellido={item.lastName}
        numero={item.phoneNumbers} 
    />
  );

  return ( 
    <View style={{justifyContent:'center', alignItems:'center'}}>
        <FlatList
            data={contactos}
            renderItem={renderItem}
            keyExtractor={item => item.id}
        />
    </View>
  );
}