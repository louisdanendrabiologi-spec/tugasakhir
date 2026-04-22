import React, { useState } from 'react'
import { useApp } from '../../context/AppContext'

const navItems = [
  { id: 'home', label: 'Beranda', icon: '⌂' },
  { id: 'materials', label: 'Materi', icon: '📚' },
  { id: 'quiz', label: 'Kuis', icon: '✏️' },
  { id: 'problems', label: 'Soal', icon: '🧩' },
  { id: 'pdfs', label: 'Referensi', icon: '📄' },
  { id: 'leaderboard', label: 'Peringkat', icon: '🏆' },
  { id: 'news', label: 'Berita', icon: '📰' },
  { id: 'competitions', label: 'Lomba', icon: '🎯' },
  { id: 'forum', label: 'Forum', icon: '💬' },
]

export default function Navbar() {
  const { user, page, setPage, logout } = useApp()
  const [menuOpen, setMenuOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  if (!user) return null

  return (
    <>
      <nav style={styles.nav}>
        <div style={styles.inner}>
          <button onClick={() => setPage('home')} style={styles.logo}>
            <span style={styles.logoMath}>∑</span>
            <span style={styles.logoText}>MathOly</span>
          </button>

          <div style={styles.links}>
            {navItems.map(item => (
              <button key={item.id} onClick={() => setPage(item.id)}
                style={{ ...styles.navBtn, ...(page === item.id ? styles.navBtnActive : {}) }}>
                {item.label}
              </button>
            ))}
          </div>

          <div style={styles.right}>
            <div style={styles.pointsBadge}>
              <span style={styles.star}>★</span>
              <span style={styles.pointsNum}>{user.points.toLocaleString()}</span>
            </div>
            <button onClick={() => setProfileOpen(!profileOpen)} style={styles.avatarBtn}>
              <span style={styles.avatarEmoji}>{user.avatar}</span>
            </button>
            <button onClick={() => setMenuOpen(!menuOpen)} style={styles.mobileMenu}>☰</button>
          </div>
        </div>

        {menuOpen && (
          <div style={styles.mobileNav}>
            {navItems.map(item => (
              <button key={item.id}
                onClick={() => { setPage(item.id); setMenuOpen(false) }}
                style={{ ...styles.mobileNavBtn, ...(page === item.id ? styles.mobileNavBtnActive : {}) }}>
                <span>{item.icon}</span> {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {profileOpen && (
        <>
          <div onClick={() => setProfileOpen(false)} style={styles.overlay} />
          <div style={styles.profileDropdown}>
            <div style={styles.profileHeader}>
              <span style={{ fontSize: 32 }}>{user.avatar}</span>
              <div>
                <div style={{ fontWeight: 600, fontSize: 15 }}>{user.name}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{user.email}</div>
              </div>
            </div>
            <div style={styles.profileStats}>
              <div style={styles.statItem}><div style={styles.statNum}>{user.points.toLocaleString()}</div><div style={styles.statLbl}>Poin</div></div>
              <div style={styles.statItem}><div style={styles.statNum}>{user.streak}</div><div style={styles.statLbl}>Streak</div></div>
              <div style={styles.statItem}><div style={styles.statNum}>{user.badges.length}</div><div style={styles.statLbl}>Lencana</div></div>
            </div>
            <div style={styles.badgeRow}>{user.badges.map((b, i) => <span key={i} style={styles.badgeItem}>{b}</span>)}</div>
            <button onClick={logout} style={styles.logoutBtn}>Keluar</button>
          </div>
        </>
      )}
    </>
  )
}

const styles = {
  nav: { position: 'sticky', top: 0, zIndex: 100, background: 'rgba(250,248,243,0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid var(--border)' },
  inner: { maxWidth: 1280, margin: '0 auto', padding: '0 20px', height: 60, display: 'flex', alignItems: 'center', gap: 20 },
  logo: { display: 'flex', alignItems: 'center', gap: 8, background: 'none', padding: 0, cursor: 'pointer' },
  logoMath: { fontFamily: 'var(--font-serif)', fontSize: 26, color: 'var(--sage-dark)', lineHeight: 1 },
  logoText: { fontFamily: 'var(--font-serif)', fontSize: 20, fontWeight: 700, color: 'var(--ink)' },
  links: { display: 'flex', gap: 2, flex: 1, overflowX: 'auto' },
  navBtn: { background: 'none', padding: '6px 12px', borderRadius: 8, fontSize: 13.5, color: 'var(--ink-light)', fontWeight: 500, whiteSpace: 'nowrap', transition: 'all 0.15s', cursor: 'pointer' },
  navBtnActive: { background: 'var(--sage-dark)', color: 'white' },
  right: { display: 'flex', alignItems: 'center', gap: 10, marginLeft: 'auto' },
  pointsBadge: { display: 'flex', alignItems: 'center', gap: 4, background: 'var(--warm-white)', border: '1px solid var(--border)', borderRadius: 20, padding: '4px 12px' },
  star: { color: 'var(--amber)', fontSize: 14 },
  pointsNum: { fontSize: 13, fontWeight: 600, fontFamily: 'var(--font-mono)', color: 'var(--ink)' },
  avatarBtn: { background: 'none', border: '2px solid var(--border)', borderRadius: '50%', width: 36, height: 36, fontSize: 18, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' },
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
