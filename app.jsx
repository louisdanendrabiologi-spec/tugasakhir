import React from 'react'
import { AppProvider, useApp } from './context/AppContext'
import Navbar from './components/layout/Navbar'
import Notifications from './components/layout/Notifications'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Materials from './pages/Materials'
import Quiz from './pages/Quiz'
import Problems from './pages/Problems'
import PDFs from './pages/PDFs'
import Leaderboard from './pages/Leaderboard'
import News from './pages/News'
import Competitions from './pages/Competitions'
import Forum from './pages/Forum'

function Router() {
  const { user, page } = useApp()

  if (!user) return <Landing />

  const pages = {
    home: <Home />,
    materials: <Materials />,
    quiz: <Quiz />,
    problems: <Problems />,
    pdfs: <PDFs />,
    leaderboard: <Leaderboard />,
    news: <News />,
    competitions: <Competitions />,
    forum: <Forum />,
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--cream)' }}>
      <Navbar />
      <main style={{ paddingBottom: 60 }}>
        {pages[page] || <Home />}
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
