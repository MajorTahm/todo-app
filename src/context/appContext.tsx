import { nanoid } from 'nanoid';
import React, { createContext, useEffect } from 'react';
import useError from '../hooks/error';
import { useFilter } from '../hooks/filter';
import useModal from '../hooks/modal';
import { useTask } from '../hooks/newTask';
import { useTasks } from '../hooks/tasks';
import { IAppContext } from '../models/models';



export const AppContext = createContext<IAppContext>({
    tasks: [],
    modalState: false,
    newTask: {
        id: '',
        description: '',
        isComplete: false
    },
    FILTER_MAP: [{filterName: 'All Tasks'}, {filterName: 'Active'}, {filterName: 'Completed'}],
    error: '',
    filter: 'All',
    closeModal: () => {},
    openModal: () => {},
    changeHandler: () => {},
    submitTaskHandler: () => {},
    addTask: () => {},
    deleteTask: () => {},
    completeTask: () => {},
    addFilter: () => {},
    setError: () => {},
    setFilter: () => {},
    setNewTask: () => {},
    clearCompleted: () => {},
})

export const AppState = ({children}: {children: React.ReactNode}) => {

    const { modalState, closeModal, openModal } = useModal()
    const { tasks, setTasks, addTask, deleteTask, completeTask, clearCompleted } = useTasks()
    const { filter, FILTER_MAP, addFilter, setFilter } = useFilter()
    const { newTask, setNewTask, changeHandler } = useTask()
    const { error, setError } = useError()

    function submitTaskHandler(event: React.FormEvent<HTMLElement>) {
        event.preventDefault()

        if (newTask.description.trim().length === 0) {
            setError('Please enter a task')
            return
        }

        setTasks(prev => [...prev, newTask])

        setNewTask({
            id: nanoid(),
            description: '',
            isComplete: false,
        })
        setError('')
    }

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    useEffect(() => {
        localStorage.setItem('filterMap', JSON.stringify(FILTER_MAP))

    }, [FILTER_MAP])

    return (
        <AppContext.Provider value={{
            tasks,
            modalState, 
            newTask,
            FILTER_MAP,
            error,
            filter,
            openModal,
            closeModal, 
            changeHandler, 
            submitTaskHandler, 
            addTask, 
            deleteTask, 
            completeTask,
            addFilter,
            setError,
            setFilter,
            setNewTask,
            clearCompleted,

        }}>
            { children }
        </AppContext.Provider>
    );
}