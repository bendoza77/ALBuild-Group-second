import { useState, useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import Logo from '../ui/Logo'

const NAV_LINKS = [
  { label: 'მთავარი', hash: 'home' },
  { label: 'ჩვენ შესახებ', hash: 'about' },
  { label: 'სერვისები', hash: 'services' },
  { label: 'პროექტები', hash: 'projects' },
  { label: 'კონტაქტი', hash: 'contact' },
]

const PhoneIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToSection = (hash, e) => {
    e?.preventDefault()
    setActive(hash)
    if (location.pathname === '/') {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: hash } })
    }
  }

  return (
    <nav
      style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50 }}
      className={`transition-all duration-300 ${
        scrolled
          ? 'bg-[#1c0a00] shadow-2xl shadow-black/40 border-b border-[#f97316]/25'
          : 'bg-[#1c0a00]/85 backdrop-blur-md border-b border-white/5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3.5">

          {/* Logo */}
          <button onClick={(e) => scrollToSection('home', e)} className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute inset-0 bg-[#f97316]/20 rounded-xl blur-md group-hover:bg-[#f97316]/40 transition-all duration-300" />
              <Logo size={42} />
            </div>
            <div className="flex flex-col leading-none gap-0.5">
              <span className="text-[10px] font-bold tracking-[0.25em] text-[#facc15]/90 uppercase">ALBuild</span>
              <span className="text-lg font-extrabold text-white tracking-wide leading-none">Group</span>
            </div>
          </button>

          {/* Desktop nav */}
          <ul className="hidden md:flex items-center gap-0.5">
            {NAV_LINKS.map(link => (
              <li key={link.hash}>
                <button
                  onClick={(e) => scrollToSection(link.hash, e)}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200 block ${
                    active === link.hash ? 'text-[#facc15]' : 'text-white/80 hover:text-white'
                  }`}
                >
                  <span className="absolute inset-0 rounded-lg bg-white/0 hover:bg-white/8 transition-colors duration-200" />
                  {link.label}
                  {active === link.hash && (
                    <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-[#facc15] rounded-full" />
                  )}
                </button>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <button
              onClick={(e) => scrollToSection('contact', e)}
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#f97316] hover:bg-[#ea6c0a] active:scale-95 text-white text-sm font-semibold shadow-lg shadow-[#f97316]/30 hover:shadow-[#f97316]/50 transition-all duration-200"
            >
              <PhoneIcon />
              დაგვიკავშირდით
            </button>
            <button
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-white/25 text-white hover:bg-white/10 transition-colors duration-200"
              onClick={() => setMenuOpen(prev => !prev)}
              aria-label="მენიუ"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {menuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <div
        className="md:hidden overflow-hidden bg-[#1c0a00]/98 backdrop-blur-md border-t border-[#f97316]/20 transition-[max-height] duration-300 ease-in-out"
        style={{ maxHeight: menuOpen ? '400px' : '0' }}
      >
        <div className="px-4 py-4 space-y-1">
          {NAV_LINKS.map(link => (
            <button
              key={link.hash}
              onClick={(e) => { scrollToSection(link.hash, e); setMenuOpen(false) }}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                active === link.hash
                  ? 'bg-[#f97316]/15 text-[#facc15] border border-[#f97316]/30'
                  : 'text-white/75 hover:bg-white/8 hover:text-white'
              }`}
            >
              <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 transition-colors duration-200 ${
                active === link.hash ? 'bg-[#facc15]' : 'bg-white/25'
              }`} />
              {link.label}
            </button>
          ))}
          <div className="pt-3 mt-2 border-t border-white/10">
            <button
              onClick={(e) => { scrollToSection('contact', e); setMenuOpen(false) }}
              className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-[#f97316] hover:bg-[#ea6c0a] text-white font-semibold transition-colors duration-200 shadow-lg shadow-[#f97316]/25"
            >
              <PhoneIcon />
              დაგვიკავშირდით
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
