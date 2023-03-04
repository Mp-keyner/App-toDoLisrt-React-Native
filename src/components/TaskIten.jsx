import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

const TaskIten = ({ task, onPress }) => {

    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={onPress}
            />
            <Text style={styles.text}>{task}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#121212',
        borderRadius: 10,
        padding: 10,
        flexDirection: 'row',
        // marginVertical: 5,
    },
    button: {
        backgroundColor: 'white',
        height: 30,
        width: 30,
        borderRadius: 15
    },
    text: {
        color: 'white',
        marginLeft: 10
    }
})

export default TaskIten


