import { Link, useNavigate, useLocation } from 'react-router-dom'
import Logo from '../ui/Logo'
import { useSiteContent } from '../../context/SiteContent'

const navLinks = [
  { label: 'მთავარი', section: 'home' },
  { label: 'ჩვენ შესახებ', section: 'about' },
  { label: 'სერვისები', section: 'services' },
  { label: 'პროექტები', section: 'projects' },
  { label: 'კონტაქტი', section: 'contact' },
]

const ScrollLink = ({ section, children, className }) => {
  const navigate = useNavigate()
  const location = useLocation()

  const handleClick = (e) => {
    e.preventDefault()
    if (location.pathname === '/') {
      document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/', { state: { scrollTo: section } })
    }
  }

  return (
    <a href="/" onClick={handleClick} className={className}>
      {children}
    </a>
  )
}

const FacebookIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
)

const InstagramIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
)

const LinkedInIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 23.2 23.227 23.2 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
)

const YoutubeIcon = () => (
  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M23.495 6.205a3.007 3.007 0 00-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 00.527 6.205a31.247 31.247 0 00-.522 5.805 31.247 31.247 0 00.522 5.783 3.007 3.007 0 002.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 002.088-2.088 31.247 31.247 0 00.5-5.783 31.247 31.247 0 00-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
  </svg>
)

const socialLinks = [
  { Icon: FacebookIcon, href: '#', label: 'Facebook' },
  { Icon: InstagramIcon, href: '#', label: 'Instagram' },
  { Icon: LinkedInIcon, href: '#', label: 'LinkedIn' },
  { Icon: YoutubeIcon, href: '#', label: 'YouTube' },
]

const Footer = () => {
  const { content } = useSiteContent()
  const f = content.footer
  const serviceItems = content.services?.items ?? []

  return (
    <footer className="bg-[#1c0a00] text-[#f5e6d3]">

      {/* CTA strip */}
      <div className="border-b border-[#f97316]/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-white font-extrabold text-xl mb-1">გამოიძახეთ უფასო კონსულტაცია</p>
            <p className="text-white/45 text-sm">ჩვენი ექსპერტი გუნდი 24 საათის განმავლობაში დაგიკავშირდება.</p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <a
              href={`tel:${content.contact?.phone}`}
              className="inline-flex items-center gap-2 bg-[#f97316] hover:bg-[#ea6c0a] text-white font-bold px-7 py-3 rounded-xl transition-colors duration-200 text-sm shadow-lg shadow-[#f97316]/20"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              {content.contact?.phone}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 border border-white/20 hover:border-[#f97316]/50 text-white/70 hover:text-white font-semibold px-7 py-3 rounded-xl transition-all duration-200 text-sm"
            >
              ფორმის შევსება
            </a>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-14 pb-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand + social */}
          <div className="lg:col-span-1">
            <ScrollLink section="home" className="flex items-center gap-2.5 mb-4">
              <Logo size={40} />
              <span className="text-xl font-extrabold text-white">
                <span className="text-[#facc15]">AL</span>Build Group
              </span>
            </ScrollLink>
            <p className="text-[#f5e6d3]/55 text-sm leading-relaxed mb-3">{f.tagline}</p>
            <p className="text-[#f5e6d3]/40 text-xs leading-relaxed mb-6">
              ლიცენზია: #GEO-C-0042 · ISO 9001:2015 სერტიფიცირებული
            </p>
            <div className="flex gap-2.5">
              {socialLinks.map(({ Icon, href: defaultHref, label }) => {
                const key = label.toLowerCase()
                const href = f.socials?.[key] || defaultHref
                return (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#f5e6d3]/60 hover:bg-[#f97316] hover:text-white hover:border-[#f97316] transition-all duration-200"
                  >
                    <Icon />
                  </a>
                )
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">სწრაფი ბმულები</h4>
            <ul className="space-y-2.5 text-sm">
              {navLinks.map(link => (
                <li key={link.section}>
                  <ScrollLink
                    section={link.section}
                    className="text-[#f5e6d3]/55 hover:text-[#facc15] transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#f97316] inline-block shrink-0" />
                    {link.label}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">სერვისები</h4>
            <ul className="space-y-2.5 text-sm">
              {serviceItems.map((s, i) => (
                <li key={i}>
                  <Link
                    to={`/services/${i}`}
                    className="text-[#f5e6d3]/55 hover:text-[#facc15] transition-colors duration-200 flex items-center gap-2"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#f97316] inline-block shrink-0" />
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="font-bold text-white mb-5 text-sm uppercase tracking-wider">საკონტაქტო ინფო</h4>
            <ul className="space-y-3.5 text-sm text-[#f5e6d3]/55">
              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#f97316] mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {content.contact?.address}
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#f97316] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {content.contact?.phone}
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#f97316] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {content.contact?.email}
              </li>
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#f97316] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {content.contact?.hours}
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/8 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#f5e6d3]/35">
          <p>{f.copyright}</p>
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Link to="/privacy" className="hover:text-[#facc15] transition-colors duration-200">
              კონფიდენციალურობის პოლიტიკა
            </Link>
            <span className="opacity-30">|</span>
            <Link to="/terms" className="hover:text-[#facc15] transition-colors duration-200">
              მომსახურების პირობები
            </Link>
            <span className="opacity-30">|</span>
            <Link to="/cookies" className="hover:text-[#facc15] transition-colors duration-200">
              Cookie პოლიტიკა
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
