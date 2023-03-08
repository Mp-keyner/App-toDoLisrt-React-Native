import { useState } from 'react'

const useTask = () => {
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState([' Programar App to do', 'Arreglar Araña para el evento del 14', 'resolver los problemas con la to do App'])
    const [addNew, setAddNew] = useState(false)

    const addTask = () => {
        setTasks(currentTasks => [...currentTasks, task])
        setTask('')
        setAddNew(false)
    }
    const deleteTask = (index) => {
        const quieroFiltrarEste = tasks.filter((task, i) =>  i !== index) 
        console.log(quieroFiltrarEste)
        // let temp = [...tasks]
        // temp.splice(index, 1)
        setTasks(quieroFiltrarEste )
        // console.log(temp)
    }

    const updateNew = (stado) => {
        setAddNew(stado)
    }

    const editTask = (text) => {
        setTask(text)
    }

    return {
        addNew,
        task,
        tasks,
        addTask,
        deleteTask,
        editTask,
        setTasks,
        updateNew
    }
}

export default useTask