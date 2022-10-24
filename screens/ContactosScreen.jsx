import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Alert } from 'react-native';
import * as Contacts from 'expo-contacts';
import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import FlatListCard from '../components/FlatListCard';

export default function ContactosScreen({navigation}) {
  
    const [contactos, setContactos] = useState()

    useEffect(()=>{
        (async ()=>{
            const {status} = await Contacts.requestPermissionsAsync(); 
            if(status === 'granted'){
                const {data} = await Contacts.getContactsAsync({
                    fields: [Contacts.Fields.Name, Contacts.Fields.LastName, Contacts.Fields.PhoneNumbers],
                });
                setContactos(data)
                if(data.length > 0) {
                    const contact = data[0]
                }
            }
            else{
                Alert.alert("Por favor, dar acceso a los contactos")
                navigation.navigate("HomeScreen")
            }    
    })();
},[]);

  const renderItem = ({ contactos }) => (
    <FlatListCard
    nombre={contactos.firstName}
    apellido={contactos.lastName}
    numero={contactos.phoneNumbers} />
  );

  return (
    <FlatList
            data={contactos}
            renderItem={}
            keyExtractor={item => item.id}
        />
  );
}