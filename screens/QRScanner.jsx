import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert, Image } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { Vibrar } from '../components/Vibrar';
import { qrImage } from '../assets/QR.png'

export default function QRScanner({ navigation }) {
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        const getBarCodeScannerPermissions = async () => {
            const { status } = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        };

        getBarCodeScannerPermissions();
    }, []);

    const handleBarCodeScanned = ({ type, data }) => {
        setScanned(true);
        alert(`${data}`);
    };

    if (hasPermission === null) {
        <Text>Pidiendo acceso a camara</Text>;
    }
    if (hasPermission === false) {
        Vibrar()
        Alert.alert("Otorgue el permiso de camara para continuar")
    }

    return (
        <View style={styles.container}>
            
            <Image style={styles.imagen}
                source={require('../assets/QR.png')}
            />
            <Button onPress={()=>{navigation.navigate("HomeScreen")}} title={'Volver'}/>
            <BarCodeScanner
                onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                style={styles.qrscanner}
            />
            {scanned && <Button title={'Escanear otro QR'} onPress={() => setScanned(false)} />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        backgroundColor: '#3052a1'
    },
    imagen: {
        marginBottom: 500,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 95,
        marginTop: 30
    },
    qrscanner: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        marginTop: 250
    }
});