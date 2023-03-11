import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'


const Vacio = () => {
    return (
        <View style={styles.container}>

            <Image
                source={require('./lupa.jpg')}
                style={styles.imagen}
            />
            <Text style={styles.text}>No tienes tareas guardadas..</Text>
        </View>
    )
}

export default Vacio


const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'blue',
        alignItems: 'center',
        marginTop: 250
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    imagen: {
        width: 100,
        height: 100
    },
})