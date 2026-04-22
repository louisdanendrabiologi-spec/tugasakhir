import React from 'react'
import { useApp } from '../../context/AppContext'

export default function Notifications() {
  const { notifications } = useApp()

  return (
    <div style={{
      position: 'fixed',
      bottom: 20,
      right: 20
    }}>
      {notifications.map(n => (
        <div key={n.id} style={{
          background: '#333',
          color: 'white',
          padding: 10,
          marginTop: 10,
          borderRadius: 8
        }}>
          {n.msg}
        </div>
      ))}
    </div>
  )
}
