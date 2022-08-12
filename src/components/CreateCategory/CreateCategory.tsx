import React, { useContext, useState } from 'react';
import { AppContext } from '../../context/appContext';

function CreateCategory() {

    const [inputData, setInputData] = useState('')
    const { addFilter, closeModal, error } = useContext(AppContext)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputData(event.target.value)
    }

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault()

        addFilter(inputData)
        closeModal()
    }

    return (
        <>
            <form 
                className='flex w-full relative max-w-xl'
                onSubmit={handleSubmit}
            >
                <input 
                    type="text" 
                    name="badge"
                    id="whatever" 
                    placeholder='Enter Category Name'
                    onChange={handleChange}
                    value={inputData}
                    className="bg-[#E1DEDE] rounded-md px-4 py-2 w-full text-3xl"
                    />
                <button 
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                >
                    add
                </button>
            </form>
        </>
    );
}

export default CreateCategory;