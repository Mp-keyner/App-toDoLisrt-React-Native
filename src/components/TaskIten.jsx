import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const TaskIten = ({ task, item }) => {
    return (
        <View style={styles.container}>
            <View style={styles.button} />
            <Text>{task}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'blue'
    },
    button: {
        backgroundColor: 'white',
        height: 30,
        width: 30,
        borderRadius: 20
    },
    text: {

    }
})

export default TaskIten


