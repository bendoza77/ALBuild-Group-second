import { useState } from 'react'

const ADMIN_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'admin123'

const AdminLogin = ({ onLogin }) => {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = e => {
    e.preventDefault()
    if (password === ADMIN_PASSWORD) {
      sessionStorage.setItem('adminAuth', '1')
      onLogin()
    } else {
      setError('Incorrect password. Please try again.')
      setPassword('')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1c0a00] to-[#431407] flex items-center justify-center px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <span className="text-4xl font-extrabold text-white">
            <span className="text-[#facc15]">AL</span>Build
          </span>
          <p className="text-[#f5e6d3]/50 text-sm uppercase tracking-widest font-semibold mt-1">Admin Panel</p>
        </div>

        <div className="bg-white rounded-3xl shadow-2xl p-8">
          <h1 className="text-2xl font-bold text-[#1c0a00] mb-1">Welcome back</h1>
          <p className="text-gray-400 text-sm mb-7">Enter your admin password to continue</p>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 text-sm mb-5">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-bold text-gray-500 uppercase tracking-widest mb-1.5">Password</label>
              <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
                placeholder="Enter admin password"
                autoFocus
                required
                className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:ring-2 focus:ring-[#f97316]/40 focus:border-[#f97316] transition"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-[#f97316] to-[#facc15] text-white font-bold py-3.5 rounded-xl text-sm shadow-lg hover:shadow-xl transition-all"
            >
              Sign In
            </button>
          </form>
        </div>

        <p className="text-center text-[#f5e6d3]/30 text-xs mt-6">
          ALBuild Group &copy; 2025
        </p>
      </div>
    </div>
  )
}

export default AdminLogin
