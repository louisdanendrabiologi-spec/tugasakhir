import React from 'react'
import { AppProvider, useApp } from './context/AppContext'
import Navbar from './components/layout/Navbar'
import Notifications from './components/layout/Notifications'

function Router() {
  const { user, page } = useApp()

  if (!user) {
    return (
      <div style={{ padding: 40 }}>
        <h1>MathOly</h1>
        <p>Silakan login atau daftar untuk mulai belajar.</p>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh' }}>
      <Navbar />
      <main style={{ padding: 20 }}>
        <h2>Halaman: {page}</h2>
      </main>
      <Notifications />
    </div>
  )
}

export default function App() {
  return (
    <AppProvider>
      <Router />
    </AppProvider>
  )
}
