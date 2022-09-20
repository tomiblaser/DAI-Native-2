import React from 'react';
import { View } from "react-native"
import { Button } from 'react-native-paper';

export default function MenuScreen({ navigation }) { 

    return (
        <View style={{ flex: 1, alignItems: 'center', backgroundColor: '#e66465' }}>
            <Button mode="outlined" style={{backgroundColor:'white', marginTop:20, marginBottom:20}} onPress={()=>navigation.navigate("HomeScreen")}>Back</Button>

        
            
       
        </View>
    )
}