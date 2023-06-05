import { onAuthStateChanged, signOut } from 'firebase/auth'
import { createContext, useEffect, useState } from 'react'

import React from 'react'
import { auth } from '../firebase/config'

export const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(
    () =>
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setIsLoading(false)
          setUser({
            email: user.email,
            uid: user.uid,
          })
        } else {
          setIsLoading(false)
        }
      }),
    [auth]
  )

  const handleLogOut = () => {
    signOut(auth)
    setUser(null)
  }

  const handleUser = (user) => {
    setUser(user)
  }

  return (
    <UserContext.Provider value={{ user, handleUser, handleLogOut, isLoading }}>
      {children}
    </UserContext.Provider>
  )
}

export const useUserContext = () => useContext(UserContext)
