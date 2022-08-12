import React, { useContext } from 'react';
import { AppContext } from '../../context/appContext';
import ErrorMessage from '../ErrorMessage/ErrorMessage';

function CreateTaskForm() {

    const { submitTaskHandler, changeHandler, newTask, error } = useContext(AppContext)

    return (
        <>
            <form 
            className="flex w-full relative max-w-xl"
            onSubmit={submitTaskHandler}
            >
            <input
                className="bg-[#E1DEDE] rounded-md px-4 py-2 w-full text-3xl"
                type="text"
                name="description"
                onChange={changeHandler}
                value={newTask.description}
                placeholder="Add a new task" />
            <button 
                className="absolute right-4 top-1/2 -translate-y-1/2"
            >
                add
            </button>
            </form>
            {error && <ErrorMessage />}
        </>
    );
}

export default CreateTaskForm;