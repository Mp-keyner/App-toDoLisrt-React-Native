import { StyleSheet, View, Text, Dimensions, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import TaskIten from '../components/TaskIten'
import ListHeader from '../components/ListHeader'
import useTask from '../hooks/useTask'
import Lista from '../components/Lista'
import Vacio from '../components/Vacio'


const screensHeigth = Dimensions.get("screen").height

export const HomoScreen = () => {

    const { addTask, deleteTask, task, tasks, editTask, addNew, updateNew, setTasks } = useTask()

    return (
        <View style={{ marginHorizontal: 10 }}>

            {
                addNew && (
                    <Lista task={task} editTask={editTask} addTask={addTask} updateNew={updateNew} setTasks={setTasks} />
                )
            }
            <View>
                <FlatList
                    ListEmptyComponent={
                        <Vacio />
                    }
                    data={tasks}
                    keyExtractor={(item) => item}
                    renderItem={({ item, index }) => <TaskIten task={item} onPress={() => deleteTask(index)} />}
                    ListHeaderComponent={() => <ListHeader />}
                    ItemSeparatorComponent={() => <View style={{ marginVertical: 5 }} />}
                />
            </View>



            <View style={styles.addButtonLocator}>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => {
                        console.log("recibido")
                        updateNew(true)
                    }}
                >
                    <Text style={styles.addButtonText} >+</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    cancelButton: {
        backgroundColor: 'red',
    },
    accepButton: {
        backgroundColor: 'green',
        marginRight: 10
    },
    buttonText: {
        fontSize: 15,
        color: 'white'
    },
    button: {
        padding: 10,
        borderRadius: 10,
        alignSelf: 'flex-start',
    },
    addButton: {
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,

        height: 70,
        width: 70,
        backgroundColor: 950
    },
    addButtonText: {
        color: 'white',
        fontSize: 25,
    },
    addButtonLocator: {
        position: 'absolute',
        right: 5,
        top: screensHeigth - 160
    },
    input: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#dedede',
        borderRadius: 10,
    }




});