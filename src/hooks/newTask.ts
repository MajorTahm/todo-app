import { nanoid } from 'nanoid';
import React, { ChangeEvent, useEffect, useState } from 'react';
import { ITask } from '../models/models';

export function useTask() {

    const [newTask, setNewTask] = useState<ITask>({
        id: nanoid(),
        description: '',
        isComplete: false,
    })

    function changeHandler(event: ChangeEvent<HTMLInputElement>) {
        setNewTask(prev => ({
            ...prev,
            description: event.target.value,
            })
        )
        console.log(`Current task description is now ${newTask.description}`)
    }

    return { newTask, changeHandler, setNewTask };
}