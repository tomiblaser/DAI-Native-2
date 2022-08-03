import React, {useState, useEffect, useContext} from 'react';
import {View, Text} from 'react-native';
import { Input } from "@rneui/base";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { loginEntry } from '../services/LogInService';
import { Button } from 'react-native-paper';



export default function ProfileScreen({navigation}) {

    const [userState, setUserState] = useState({
        email: '',
        password: '',
      });
    
      const onPressLogIn = async (e) => {
        
        if (!userState.email|| !userState.password){
          
          console.log("Faltan datos. Por favor, agreguelos para continuar.")
        } else {
          
          await loginEntry(userState).then(() => {
            console.log("Sesión iniciada correctamente")
            
          })
          .catch(() => {
            
            console.log("Email o contrasena incorrecta")
          });
        }
      }

    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent:'center', backgroundColor:'#e66465'}}>
            <View style={{alignItems: 'center', justifyContent:'center', width:'75%', backgroundColor:'white', borderTopLeftRadius: 20, borderTopRightRadius: 20, borderBottomLeftRadius: 20, borderBottomRightRadius: 20,}}>
                
                <Text>{"\n"}</Text>
                
                <Input
                    disabledInputStyle={{ background: "#ddd" }}
                    leftIcon={<Icon name="email-outline" size={20} />}
                    label="Email"
                    value={userState.email}
                    onChangeText={text => setUserState({...userState, email: text}) }
                />
                
                <Input
                    disabledInputStyle={{ background: "#ddd" }}
                    leftIcon={<Icon name="key-outline" size={20} />}
                    label="Password"
                    secureTextEntry={true}
                    value={userState.password}
                    onChangeText={text => setUserState({...userState, password: text})}
                />
                
                <Button mode="contained-tonal" onPress={() => {onPressLogIn}}>
                    Continue
                </Button>

                <Text>{"\n"}</Text>
            </View>
        </View>
    )
}