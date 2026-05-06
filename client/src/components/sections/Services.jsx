import { Link } from 'react-router-dom'
import { useSiteContent } from '../../context/SiteContent'

const BuildingIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0H3m2 0h14M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
)
const HammerIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
)
const ClipboardIcon = () => (
  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
)
const ICONS = { building: BuildingIcon, hammer: HammerIcon, clipboard: ClipboardIcon }

const whyUs = [
  { num: '200+', desc: 'წარმატებით დასრულებული სამშენებლო პროექტი' },
  { num: '100%', desc: 'კლიენტების კმაყოფილება ყველა ჩვენს სერვისში' },
  { num: '0', desc: 'ვადაგადაცილებული პროექტი 15 წლის მუშაობაში' },
]

const Services = () => {
  const { content } = useSiteContent()
  const s = content.services

  return (
    <section id="services" className="py-28 relative overflow-hidden bg-[#1c0a00]">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&q=60')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#1c0a00] via-[#1c0a00]/90 to-[#1c0a00]" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(rgba(249,115,22,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(249,115,22,0.05) 1px, transparent 1px)`,
        backgroundSize: '80px 80px',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-[#f97316] font-semibold uppercase tracking-widest text-sm mb-2">{s.badge}</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">{s.heading}</h2>
          <p className="text-white/45 max-w-lg mx-auto text-base leading-relaxed">
            ჩვენ გთავაზობთ სამშენებლო ინდუსტრიის ყველა ძირითად სერვისს — ერთი გამოცდილი გუნდის სიძლიერით.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#f97316] to-[#facc15] mx-auto rounded-full mt-6" />
        </div>

        {/* Quick metrics strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-14">
          {whyUs.map((w, i) => (
            <div
              key={i}
              className="bg-white/5 border border-white/10 rounded-2xl px-6 py-5 flex items-center gap-4"
            >
              <p className="text-3xl font-extrabold text-[#facc15] shrink-0">{w.num}</p>
              <p className="text-white/55 text-sm leading-snug">{w.desc}</p>
            </div>
          ))}
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {s.items?.map((item, i) => {
            const Icon = ICONS[item.icon] || BuildingIcon
            return (
              <Link
                key={i}
                to={`/services/${i}`}
                className="group relative rounded-3xl overflow-hidden block h-[460px] shadow-2xl"
              >
                {/* Background image */}
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                  style={{ backgroundImage: `url('${item.image}')` }}
                />

                {/* Always-on gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1c0a00] via-[#1c0a00]/65 to-[#1c0a00]/10" />

                {/* Hover tint */}
                <div className="absolute inset-0 bg-[#f97316]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Service number watermark */}
                <div className="absolute top-5 right-6 text-white/10 font-extrabold text-7xl leading-none select-none group-hover:text-white/20 transition-colors duration-300">
                  0{i + 1}
                </div>

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-8">
                  <div className="mb-5 text-[#f97316] p-3 bg-[#f97316]/15 rounded-2xl w-fit border border-[#f97316]/30 group-hover:bg-[#f97316] group-hover:border-[#f97316] group-hover:text-white transition-all duration-300">
                    <Icon />
                  </div>

                  <h3 className="text-2xl font-extrabold text-white mb-2">{item.title}</h3>
                  <p className="text-white/65 text-sm leading-relaxed mb-4 group-hover:text-white/80 transition-colors duration-300">
                    {item.description}
                  </p>

                  {/* Features — revealed on hover */}
                  <ul className="space-y-1.5 mb-5 max-h-0 overflow-hidden group-hover:max-h-40 transition-all duration-500">
                    {item.features?.slice(0, 3).map((f, fi) => (
                      <li key={fi} className="flex items-center gap-2 text-white/75 text-xs">
                        <svg className="w-3.5 h-3.5 text-[#facc15] shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center gap-2 text-[#facc15] text-sm font-bold group-hover:gap-4 transition-all duration-300">
                    გაიგე მეტი
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>

                {/* Hover border */}
                <div className="absolute inset-0 rounded-3xl border-2 border-[#f97316] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </Link>
            )
          })}
        </div>

        {/* Bottom CTA banner */}
        <div className="bg-gradient-to-r from-[#f97316] to-[#facc15] rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <h3 className="text-2xl md:text-3xl font-extrabold text-white mb-2">
              მზადა ხართ პროექტის დასაწყებად?
            </h3>
            <p className="text-white/80 text-base max-w-md">
              დაგვიკავშირდით დღეს — მიიღეთ უფასო კონსულტაცია და სავარაუდო ბიუჯეტი ჩვენი ექსპერტებისგან.
            </p>
          </div>
          <a
            href="#contact"
            className="shrink-0 bg-white text-[#f97316] font-extrabold px-9 py-4 rounded-2xl hover:bg-[#fff7ed] transition-colors duration-200 shadow-xl text-base whitespace-nowrap"
          >
            უფასო კონსულტაცია
          </a>
        </div>

      </div>
    </section>
  )
}

export default Services
