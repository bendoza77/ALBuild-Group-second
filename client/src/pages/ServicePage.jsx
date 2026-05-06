import { useParams } from 'react-router-dom'
import { useSiteContent } from '../context/SiteContent'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const BackIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)
const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#f97316]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
)

const BuildingIcon = () => (
  <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0H3m2 0h14M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
  </svg>
)
const HammerIcon = () => (
  <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
  </svg>
)
const ClipboardIcon = () => (
  <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
  </svg>
)

const ICONS = { building: BuildingIcon, hammer: HammerIcon, clipboard: ClipboardIcon }

const ServicePage = () => {
  const { id } = useParams()
  const { content } = useSiteContent()
  const service = content.services?.items?.[Number(id)]
  const allServices = content.services?.items ?? []

  if (!service) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-400 text-lg mb-4">Service not found.</p>
            <a href="/#services" className="text-[#f97316] font-semibold hover:underline">Back to services</a>
          </div>
        </div>
      </div>
    )
  }

  const Icon = ICONS[service.icon] || BuildingIcon
  const others = allServices.filter((_, i) => i !== Number(id))

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative py-24 bg-gradient-to-br from-[#431407] via-[#7c2d12] to-[#c2410c] overflow-hidden">
        <div className="absolute inset-0 opacity-10"
          style={{ backgroundImage: `url('${service.image || ''}')`, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
          <a
            href="/#services"
            className="inline-flex items-center gap-1.5 text-[#facc15] text-sm font-semibold mb-8 hover:gap-3 transition-all"
          >
            <BackIcon /> Back to Services
          </a>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-7">
            <div className="p-5 bg-white/15 backdrop-blur-sm rounded-3xl border border-white/20 shrink-0">
              <Icon />
            </div>
            <div>
              <p className="text-[#facc15] text-xs font-bold uppercase tracking-widest mb-2">სერვისი</p>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">{service.title}</h1>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#fff7ed]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Main */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#7c2d12] mb-4">სერვისის შესახებ</h2>
                <p className="text-gray-600 text-lg leading-relaxed">{service.fullDescription || service.description}</p>
              </div>

              {service.image && (
                <img
                  src={service.image} alt={service.title}
                  className="w-full h-72 object-cover rounded-2xl shadow-lg"
                />
              )}

              {service.features?.length > 0 && (
                <div>
                  <h3 className="text-xl font-bold text-[#7c2d12] mb-5">რას მოიცავს</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((f, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 bg-white rounded-xl px-4 py-3 shadow-sm border border-[#f5e6d3]"
                      >
                        <CheckIcon />
                        <span className="text-gray-700 text-sm font-medium">{f}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar */}
            <div>
              {/* CTA card */}
              <div className="bg-gradient-to-br from-[#f97316] to-[#facc15] rounded-2xl p-6 shadow-xl mb-6">
                <h3 className="text-white font-bold text-lg mb-2">გაქვთ პროექტი?</h3>
                <p className="text-white/80 text-sm mb-5 leading-relaxed">
                  მოგვწერეთ და ჩვენი სპეციალისტი 24 საათში დაგიკავშირდება უფასო კონსულტაციისთვის.
                </p>
                <a
                  href="/#contact"
                  className="block w-full text-center bg-white text-[#f97316] font-bold py-3 rounded-xl text-sm shadow hover:shadow-md transition-all"
                >
                  დაგვიკავშირდით
                </a>
              </div>

              {/* Other services */}
              {others.length > 0 && (
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                  <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-4">სხვა სერვისები</h3>
                  <ul className="space-y-2">
                    {others.map((s, i) => {
                      const origIdx = allServices.findIndex(x => x === s)
                      return (
                        <li key={i}>
                          <a
                            href={`/services/${origIdx}`}
                            className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#fff7ed] transition group"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] shrink-0" />
                            <span className="text-gray-700 text-sm font-medium group-hover:text-[#f97316] transition">{s.title}</span>
                          </a>
                        </li>
                      )
                    })}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default ServicePage
