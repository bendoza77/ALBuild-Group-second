import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import AdminApp from './admin/AdminApp.jsx'

const root = createRoot(document.getElementById('root'))

if (window.location.pathname.startsWith('/admin')) {
  root.render(<AdminApp />)
} else {
  root.render(<App />)
}
