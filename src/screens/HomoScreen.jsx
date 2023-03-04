import { StyleSheet, View, Text, Dimensions, TouchableOpacity, TextInput, FlatList } from 'react-native'
import React, { useState } from 'react'
import TaskIten from '../components/TaskIten'


const screensHeigth = Dimensions.get("screen").height

export const HomoScreen = () => {

    const [addNew, setAddNew] = useState(false)
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState(['Programar App to do'])

    const addTask = () => {
        setTasks(currentTasks => [...currentTasks, task])
        setTask('')
        setAddNew(false)
    }

    return (
        <View style={{ marginHorizontal: 10 }}>

            {
                addNew && (
                    <View>
                        <TextInput
                            style={styles.input}
                            placeholder='Agregar nueva tarea...'
                            value={task}
                            onChangeText={setTask}
                        />
                        <View style={{ marginVertical: 10, flexDirection: 'row' }}>
                            <TouchableOpacity
                                style={[styles.button, styles.accepButton]}
                                onPress={() => addTask()}
                            >
                                <Text style={styles.buttonText}>Agregar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.button, styles.cancelButton]}
                                onPress={() => {
                                    setAddNew(false)
                                    setTask('')
                                }}
                            >
                                <Text
                                    style={styles.buttonText}
                                >Cancelar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )
            }

            <View>
                <FlatList
                    data={tasks}
                    keyExtractor={(item) => item}
                    renderItem={({ item, index }) => <TaskIten task={item} index={index} />}
                />
            </View>



            <View style={styles.addButtonLocator}>
                <TouchableOpacity
                    style={styles.addButton}
                    onPress={() => {
                        console.log("recibido")
                        setAddNew(true)
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