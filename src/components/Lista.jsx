import { 
    View, 
    Text, 
    TextInput, 
    StyleSheet, 
    TouchableOpacity
} from 'react-native'
import React from 'react'

const Lista = ({ 
    task, 
    editTask, 
    addTask, 
    updateNew, 
    setTask, 
    setTasks
}) => {
    
    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='Agregar nueva tarea...'
                value={task}
                onChangeText={
                    (event) => {
                        editTask(event)
                    }
                }
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
                        updateNew(false)
                        editTask('')
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
    addButtonText: {
        color: 'white',
        fontSize: 25,
    },
    input: {
        marginTop: 20,
        padding: 10,
        backgroundColor: '#dedede',
        borderRadius: 10,
    }



})

export default Lista