import React from 'react'
import { useApp } from '../../context/AppContext'

export default function Navbar() {
  const { user, setPage, logout } = useApp()

  if (!user) return null

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: 16,
      borderBottom: '1px solid #ddd'
    }}>
      <h2>MathOly</h2>

      <div style={{ display: 'flex', gap: 10 }}>
        <button onClick={() => setPage('home')}>Home</button>
        <button onClick={() => setPage('quiz')}>Quiz</button>
        <button onClick={() => setPage('leaderboard')}>Leaderboard</button>
      </div>

      <div style={{ display: 'flex', gap: 10 }}>
        <span>{user.points} pts</span>
        <button onClick={logout}>Logout</button>
      </div>
    </nav>
  )
}  avatarBtn: { background: 'none', border: '2px solid var(--border)', borderRadius: '50%', width: 36, height: 36, fontSize: 18, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' },
  avatarEmoji: { fontSize: 18, lineHeight: 1 },
  mobileMenu: { display: 'none', background: 'none', fontSize: 20, cursor: 'pointer' },
  mobileNav: { borderTop: '1px solid var(--border)', padding: '12px 20px', display: 'flex', flexWrap: 'wrap', gap: 8 },
  mobileNavBtn: { background: 'var(--warm-white)', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 14px', fontSize: 13, display: 'flex', gap: 6, alignItems: 'center', cursor: 'pointer' },
  mobileNavBtnActive: { background: 'var(--sage-dark)', color: 'white', border: '1px solid var(--sage-dark)' },
  overlay: { position: 'fixed', inset: 0, zIndex: 149 },
  profileDropdown: { position: 'fixed', top: 68, right: 20, zIndex: 150, background: 'white', border: '1px solid var(--border)', borderRadius: 'var(--radius-lg)', padding: 20, width: 260, boxShadow: 'var(--shadow-large)' },
  profileHeader: { display: 'flex', gap: 12, alignItems: 'center', marginBottom: 16 },
  profileStats: { display: 'flex', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', padding: '12px 0', marginBottom: 12 },
  statItem: { flex: 1, textAlign: 'center' },
  statNum: { fontSize: 18, fontWeight: 700, fontFamily: 'var(--font-mono)', color: 'var(--ink)' },
  statLbl: { fontSize: 11, color: 'var(--muted)', marginTop: 2 },
  badgeRow: { display: 'flex', gap: 6, marginBottom: 14, flexWrap: 'wrap' },
  badgeItem: { fontSize: 22 },
  logoutBtn: { width: '100%', background: 'var(--warm-white)', border: '1px solid var(--border)', borderRadius: 8, padding: '8px 0', fontSize: 14, color: 'var(--ink-light)', cursor: 'pointer' },
}
