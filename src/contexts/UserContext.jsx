import { createContext, useState } from 'react'

import React from 'react'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState(null)

    const handleUser = (user) => {
        setUser(user)
    }

    return (
        <UserContext.Provider value={{ user, handleUser }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUserContext = () => useContext(UserContext)