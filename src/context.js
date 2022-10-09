import React, { useState, useContext, useEffect } from 'react'



const AppContext = React.createContext()

const AppProvider = ({ children }) => {
    
    const [isModalOpen, setIsModalOpen] = useState(false)

    const openModal = () => {
        setIsModalOpen(true)
        console.log('hello');
    }

    const closeModal = () => {
        setIsModalOpen(false)
    }


    return (
        <AppContext.Provider
            value={{
                isModalOpen,
                setIsModalOpen,
                closeModal,
                openModal
        }}
        
        >
            {children}
        
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppContext, AppProvider}