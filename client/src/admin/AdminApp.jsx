import { useState } from 'react'
import AdminLogin from './AdminLogin'
import AdminPanel from './AdminPanel'

const AdminApp = () => {
  const [authed, setAuthed] = useState(() => sessionStorage.getItem('adminAuth') === '1')

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuth')
    setAuthed(false)
  }

  if (!authed) return <AdminLogin onLogin={() => setAuthed(true)} />
  return <AdminPanel onLogout={handleLogout} />
}

export default AdminApp
