import React, { createContext, useContext, useState } from 'react'

const AppContext = createContext(null)

const INITIAL_USERS = [
  { id: 1, name: 'Budi Santoso', email: 'budi@mail.com', password: '1234', avatar: '🦁', points: 2840, level: 'Olympiad', streak: 14, badges: ['🥇','🔥','⚡','📚'], joinDate: '2024-01' },
  { id: 2, name: 'Sari Dewi', email: 'sari@mail.com', password: '1234', avatar: '🦊', points: 2210, level: 'Advanced', streak: 7, badges: ['🥈','📚'], joinDate: '2024-02' },
  { id: 3, name: 'Ahmad Fauzi', email: 'ahmad@mail.com', password: '1234', avatar: '🐺', points: 1780, level: 'Advanced', streak: 3, badges: ['🥉'], joinDate: '2024-03' },
  { id: 4, name: 'Nisa Rahmah', email: 'nisa@mail.com', password: '1234', avatar: '🦋', points: 1340, level: 'Intermediate', streak: 5, badges: ['📚'], joinDate: '2024-03' },
  { id: 5, name: 'Rizky Pratama', email: 'rizky@mail.com', password: '1234', avatar: '🐉', points: 980, level: 'Intermediate', streak: 2, badges: [], joinDate: '2024-04' },
]

export function AppProvider({ children }) {
  const [user, setUser] = useState(null)
  const [users, setUsers] = useState(INITIAL_USERS)
  const [page, setPage] = useState('landing')
  const [notifications, setNotifications] = useState([])

  const login = (email, password) => {
    const found = users.find(u => u.email === email && u.password === password)
    if (found) { setUser(found); setPage('home'); return true }
    return false
  }

  const register = (name, email, password) => {
    if (users.find(u => u.email === email)) return false
    const newUser = {
      id: users.length + 1, name, email, password,
      avatar: ['🦁','🦊','🐺','🦋','🐉','🦅','🐬','🦄'][Math.floor(Math.random()*8)],
      points: 0, level: 'Beginner', streak: 0, badges: [], joinDate: new Date().toISOString().slice(0,7)
    }
    setUsers(prev => [...prev, newUser])
    setUser(newUser)
    setPage('home')
    return true
  }

  const logout = () => { setUser(null); setPage('landing') }

  const addPoints = (pts) => {
    if (!user) return
    const updated = { ...user, points: user.points + pts }
    setUser(updated)
    setUsers(prev => prev.map(u => u.id === user.id ? updated : u))
    addNotification(`+${pts} poin diperoleh! 🎉`)
  }

  const addNotification = (msg) => {
    const n = { id: Date.now(), msg }
    setNotifications(prev => [...prev, n])
    setTimeout(() => setNotifications(prev => prev.filter(x => x.id !== n.id)), 3500)
  }

  return (
    <AppContext.Provider value={{ user, users, page, setPage, login, register, logout, addPoints, notifications }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApp = () => useContext(AppContext)
