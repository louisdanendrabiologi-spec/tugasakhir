import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext()

export function AppProvider({ children }) {
  const [user, setUser] = useState(null)
  const [page, setPage] = useState('home')
  const [notifications, setNotifications] = useState([])

  const login = (name) => {
    const newUser = {
      name,
      points: 0,
      avatar: '🦁',
      badges: [],
      streak: 0,
    }
    setUser(newUser)
  }

  const logout = () => setUser(null)

  const addPoints = (pts) => {
    if (!user) return
    const updated = { ...user, points: user.points + pts }
    setUser(updated)

    addNotification(`+${pts} poin didapat!`)
  }

  const addNotification = (msg) => {
    const n = { id: Date.now(), msg }
    setNotifications(prev => [...prev, n])

    setTimeout(() => {
      setNotifications(prev => prev.filter(x => x.id !== n.id))
    }, 3000)
  }

  return (
    <AppContext.Provider value={{
      user,
      page,
      setPage,
      login,
      logout,
      addPoints,
      notifications
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
