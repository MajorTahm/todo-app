import { useState } from "react";
import { ITask } from "../models/models";

export function useTasks() {

    const getLocalTasks = (): ITask[] | [] => {
        const localTasks: string | null = localStorage.getItem('tasks');
        return localTasks === null? 
        [] :
        JSON.parse(localTasks)
    }

    const [tasks, setTasks] = useState<ITask[]>(getLocalTasks)

    const addTask = (newTask: ITask) => {
        setTasks(prevTasks => [...prevTasks, newTask])
    }

    const completeTask = (task: ITask) => {
        setTasks(prev => 
            prev.map(oldTask => 
                oldTask.id === task.id ? 
                {...oldTask, isComplete: !oldTask.isComplete} : 
                {...oldTask} 
            )
        )       
    }

    const deleteTask = (task: ITask) => {
        setTasks(prev => 
            prev.filter(oldTask =>
                oldTask.id === task.id ?
                false :
                true)
        )
    }

    const clearCompleted = () => {
        setTasks(prev => prev.filter(item => !item.isComplete))
    }

    return { tasks, setTasks, addTask, deleteTask, completeTask, clearCompleted }
}

