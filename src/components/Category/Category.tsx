import React, { useContext } from 'react';
import { AppContext } from '../../context/appContext';
import { ITask } from '../../models/models';
import Task from '../Task/Task';

interface ICategoryProps {
    name: string
}

function Category({ name }: ICategoryProps) {

    const { filter, setNewTask, newTask, setFilter } = useContext(AppContext)

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const something = name
        setFilter(name)
        if (
            something !== 'All Tasks' && 
            something !== 'Active' && 
            something !== 'Completed'
        ) {setNewTask((task: ITask) => ({...task, badge: something}))}
        else setNewTask((task: ITask) => ({...task, badge: undefined}))
        console.log(newTask)
    }

    return (
        <button 
            className="mb-7"
            onClick={handleClick}
        >
            { name }
        </button>
        
    );
}

export default Category;