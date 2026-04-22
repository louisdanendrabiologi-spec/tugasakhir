import React from 'react'
import { useApp } from '../../context/AppContext'

export default function Notifications() {
  const { notifications } = useApp()
  return (
    <div style={{ position: 'fixed', bottom: 24, right: 24, zIndex: 200, display: 'flex', flexDirection: 'column', gap: 10 }}>
      {notifications.map(n => (
        <div key={n.id} style={{
          background: 'var(--sage-dark)', color: 'white', padding: '12px 20px',
          borderRadius: 12, fontSize: 14, fontWeight: 500,
          boxShadow: '0 4px 20px rgba(0,0,0,0.2)', animation: 'fadeIn 0.3s ease',
          maxWidth: 280
        }}>
          {n.msg}
        </div>
      ))}
    </div>
  )
}
