import { useSiteContent } from '../../context/SiteContent'

const ShieldIcon = () => (
  <svg className="w-4 h-4 text-[#facc15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)
const AwardIcon = () => (
  <svg className="w-4 h-4 text-[#facc15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)
const BadgeIcon = () => (
  <svg className="w-4 h-4 text-[#facc15]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11.5V14m0-2.5v-6a1.5 1.5 0 113 0m-3 6a1.5 1.5 0 00-3 0v2a7.5 7.5 0 0015 0v-5a1.5 1.5 0 00-3 0m-6-3V11m0-5.5v-1a1.5 1.5 0 013 0v1m0 0V11m0-5.5a1.5 1.5 0 013 0v3m0 0V11" />
  </svg>
)

const trust = [
  { Icon: AwardIcon, text: '15+ წლის გამოცდილება' },
  { Icon: BadgeIcon, text: '2 წლის სამშენებლო გარანტია' },
]

const bottomStats = [
  { value: '15+', label: 'წლის გამოცდილება' },
  { value: '200+', label: 'დასრულებული პროექტი' },
  { value: '50+', label: 'კმაყოფილი კლიენტი' },
  { value: '80+', label: 'გუნდის წევრი' },
]

const Hero = () => {
  const { content } = useSiteContent()
  const h = content.hero

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url('${h.backgroundImage}')` }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1c0a00]/92 via-[#431407]/82 to-[#7c2d12]/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#1c0a00]/90 via-transparent to-[#1c0a00]/30" />

      {/* Decorative blobs */}
      <div className="absolute top-1/3 right-16 w-96 h-96 bg-[#f97316]/12 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 left-10 w-64 h-64 bg-[#facc15]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto pt-28 pb-52">

        {/* Badge */}
        <div className="inline-flex items-center gap-2.5 bg-[#f97316]/15 border border-[#f97316]/35 rounded-full px-5 py-2.5 mb-8">
          <span className="w-2 h-2 bg-[#facc15] rounded-full animate-pulse" />
          <span className="text-[#facc15] font-semibold uppercase tracking-[0.22em] text-xs">{h.badge}</span>
        </div>

        {/* Headline */}
        <h1 className="text-6xl sm:text-7xl md:text-9xl font-extrabold text-white mb-5 leading-none tracking-tight">
          {h.headline}
        </h1>

        {/* Tagline */}
        <p className="text-xl sm:text-2xl md:text-3xl text-[#f5e6d3]/85 mb-4 font-light max-w-2xl mx-auto">
          {h.tagline}
        </p>

        {/* Sub-description */}
        <p className="text-base sm:text-lg text-[#f5e6d3]/55 mb-10 max-w-xl mx-auto leading-relaxed">
          2020 წლიდან ვქმნით გამძლე, ლამაზ და ინოვაციურ სამშენებლო პროექტებს — საცხოვრებელი სახლებიდან დაწყებული მსხვილ კომერციულ კომპლექსებამდე.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#f97316] to-[#ea6c0a] text-white font-bold px-10 py-4 rounded-full text-lg shadow-2xl shadow-[#f97316]/40 hover:shadow-[#f97316]/60 hover:scale-105 active:scale-97 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {h.ctaText}
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2.5 border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-full text-base hover:border-[#f97316]/70 hover:bg-[#f97316]/10 hover:scale-105 active:scale-97 transition-all duration-300"
          >
            ჩვენი პროექტები
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {trust.map(({ Icon, text }, i) => (
            <div key={i} className="flex items-center gap-2 bg-white/8 border border-white/15 rounded-full px-4 py-2 backdrop-blur-sm">
              <Icon />
              <span className="text-white/75 text-xs font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom glassmorphic stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <div className="bg-white/8 backdrop-blur-md border-t border-white/12">
          <div className="max-w-5xl mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/10">
              {bottomStats.map((s, i) => (
                <div key={i} className="text-center py-5 px-4">
                  <p className="text-2xl sm:text-3xl font-extrabold text-[#facc15]">{s.value}</p>
                  <p className="text-white/50 text-xs mt-1">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-28 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <svg className="w-6 h-6 text-white/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
  )
}

export default Hero
