import React, {useState, useEffect, useContext} from 'react';
import {View, Text, TextInput, StyleSheet, Alert} from 'react-native';
import { loginEntry } from '../services/LogInService';
import { Button } from 'react-native-paper';



export default function ProfileScreen({navigation}) {

    const [userState, setUserState] = useState({
        email: '',
        password: '',
      });
    
      const onPressLogIn = async (e) => {
        
        if (!userState.email || !userState.password){
          
          console.log("Faltan datos. Por favor, agreguelos para continuar.")
          Alert.alert("Faltan datos. Por favor, agreguelos para continuar.")
        } else {
          
          await loginEntry(userState).then(() => {
            console.log("Sesión iniciada correctamente")
            navigation.navigate("HomeScreen")
          })
          .catch(() => {
            
            console.log("Email o contrasena incorrecta")
            Alert.alert("Email o contrasena incorrecta")
          });
        }
      }

    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent:'center', backgroundColor:'#e66465'}}>
            <View style={{alignItems: 'center', justifyContent:'center', width:'75%', backgroundColor:'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20,}}>
                
                <Text>{"\n"}</Text>
                
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    value={userState.email}
                    onChangeText={text => setUserState({...userState, email: text}) }
                />
                
                <TextInput
                    style={styles.input}
                    placeholder="Password"
                    value={userState.password}
                    onChangeText={text => setUserState({...userState, password: text})}
                />
                
                <Button mode="contained-tonal" onPress={onPressLogIn}>
                    Continue
                </Button>

                <Text>{"\n"}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});