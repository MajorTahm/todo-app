import React, { useState } from 'react';

function useModal() {

    const [modalState, setModalState] = useState(false)

    const openModal = () => setModalState(true)
    const closeModal = () => setModalState(false)
 
    return { modalState, openModal, closeModal };
}

export default useModal;