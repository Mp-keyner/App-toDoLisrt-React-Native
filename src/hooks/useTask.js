import React, { useState } from 'react'

const useTask = () => {
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState(['Programar App to do', 'Arreglar Araña para el evento del 14'])
    const [addNew, setAddNew] = useState(false)

    const addTask = () => {
        setTasks(currentTasks => [...currentTasks, task])
        setTask('')
        setAddNew(false)
    }
    const deleteTask = (index) => {
        let temp = [...tasks]
        temp.splice(index, 1)
        setTasks(temp)
        console.log(temp)
    }
    const updateNew = (stado) => {
        setAddNew(stado)
    }

    const editTask = (text) => {
        setTask(text)
    }
    return {
        addTask,
        deleteTask,
        editTask,
        updateNew,
        addNew,
        task,
        tasks,
    }
}

export default useTask