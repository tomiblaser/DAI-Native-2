import { StyleSheet, Text, View, SafeAreaView, ScrollView, FlatList, Alert } from 'react-native';
import * as Contacts from 'expo-contacts';
import { useEffect, useState } from 'react';
import FlatListCard from '../components/FlatListCard';
import { Vibrar } from '../components/Vibrar';
import { Button } from 'react-native-paper';

export default function ContactosScreen({navigation}) {
  
    const [contactos, setContactos] = useState([])

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
                Vibrar()
                Alert.alert("Por favor, dar acceso a los contactos")
                navigation.navigate("HomeScreen")
            }    
    })();
},[]);

  return ( 
    <View style={{justifyContent:'center', alignItems:'center'}}>
        <Button mode="outlined" onPress={()=>{navigation.navigate("HomeScreen")}} style={{backgroundColor:'yellow', marginTop:30}}>Volver</Button>
        <FlatList
            data={contactos}
            renderItem={({ item }) => <FlatListCard key={item.id} contactos={item}/>}
            keyExtractor={item => item.id}
        />
    </View>
  );
}