import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const sections = [
  {
    heading: '1. Cookie-ები რა არის?',
    body: 'Cookie-ები არის მცირე ტექსტური ფაილები, რომლებიც ინახება თქვენს მოწყობილობაზე ვებ-გვერდის მონახულებისას. ისინი ეხმარება ვებ-გვერდს გაიხსენოს თქვენი ქმედებები და პრეფერენციები.',
  },
  {
    heading: '2. Cookie-ების ტიპები',
    body: 'ჩვენ ვიყენებთ: (i) აუცილებელ Cookie-ებს — ვებ-გვერდის სწორი ფუნქციონირებისთვის; (ii) ანალიტიკურ Cookie-ებს — ვიზიტორთა სტატისტიკის შეგროვებისთვის (Google Analytics); (iii) ფუნქციურ Cookie-ებს — თქვენი პრეფერენციების შენახვისთვის.',
  },
  {
    heading: '3. Cookie-ების მართვა',
    body: 'თქვენ შეგიძლიათ გააკონტროლოთ Cookie-ები ბრაუზერის პარამეტრებიდან. გაითვალისწინეთ, რომ Cookie-ების გამორთვამ შეიძლება ზოგიერთი ფუნქციის შეზღუდვა გამოიწვიოს. უმეტეს ბრაუზერში Cookie-ების მართვა შესაძლებელია: პარამეტრები → კონფიდენციალურობა → Cookie-ები.',
  },
  {
    heading: '4. მესამე მხარეები',
    body: 'ჩვენი ვებ-გვერდი იყენებს Google Maps-ის ჩაშენებულ რუკას, რომელმაც შეიძლება დააყენოს საკუთარი Cookie-ები. მათ კონფიდენციალურობის პოლიტიკასთან გაცნობა შეგიძლიათ: policies.google.com.',
  },
  {
    heading: '5. პოლიტიკის განახლება',
    body: 'ჩვენ ვიტოვებთ უფლებას განვაახლოთ ეს პოლიტიკა. ნებისმიერი ცვლილებისას გვერდი განახლდება და მითითებული იქნება ბოლო განახლების თარიღი. გთხოვთ, პერიოდულად შეამოწმოთ ეს გვერდი.',
  },
]

const cookieTypes = [
  { name: 'აუცილებელი', color: 'bg-red-100 text-red-700', desc: 'ვებ-გვერდის ფუნქციონირებისთვის' },
  { name: 'ანალიტიკური', color: 'bg-blue-100 text-blue-700', desc: 'ვიზიტორთა სტატისტიკა' },
  { name: 'ფუნქციური', color: 'bg-green-100 text-green-700', desc: 'პრეფერენციების შენახვა' },
]

const CookieIcon = () => (
  <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const CookiesPage = () => (
  <div className="w-full overflow-x-hidden">
    <Navbar />

    {/* Hero */}
    <section className="relative py-24 bg-gradient-to-br from-[#431407] via-[#7c2d12] to-[#c2410c] overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-[#facc15] text-sm font-semibold mb-8 hover:gap-3 transition-all"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          მთავარ გვერდზე დაბრუნება
        </Link>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-7">
          <div className="p-5 bg-white/15 backdrop-blur-sm rounded-3xl border border-white/20 shrink-0">
            <CookieIcon />
          </div>
          <div>
            <p className="text-[#facc15] text-xs font-bold uppercase tracking-widest mb-2">სამართლებრივი</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">Cookie პოლიტიკა</h1>
            <p className="text-white/60 text-sm mt-3">ბოლო განახლება: 1 იანვარი, 2025</p>
          </div>
        </div>
      </div>
    </section>

    {/* Content */}
    <section className="py-16 bg-[#fff7ed]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">

          {/* Main content */}
          <div className="lg:col-span-2 space-y-2">
            {sections.map((s, i) => (
              <div
                key={s.heading}
                className="bg-white rounded-2xl shadow-sm border border-[#f5e6d3] p-6"
              >
                <h2 className="text-lg font-bold text-[#7c2d12] mb-3 flex items-center gap-2">
                  <span className="w-7 h-7 rounded-lg bg-[#f97316]/10 text-[#f97316] flex items-center justify-center text-xs font-black shrink-0">
                    {i + 1}
                  </span>
                  {s.heading.replace(/^\d+\.\s/, '')}
                </h2>
                <p className="text-gray-600 leading-relaxed text-sm">{s.body}</p>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-5 sticky top-24 self-start">
            <div className="bg-gradient-to-br from-[#f97316] to-[#facc15] rounded-2xl p-6 shadow-xl">
              <h3 className="text-white font-bold text-lg mb-4">Cookie-ების ტიპები</h3>
              <ul className="space-y-3">
                {cookieTypes.map(c => (
                  <li key={c.name} className="bg-white/20 rounded-xl px-4 py-3 flex items-center gap-3">
                    <span className="w-2 h-2 rounded-full bg-white shrink-0" />
                    <div>
                      <p className="text-white font-semibold text-sm">{c.name}</p>
                      <p className="text-white/70 text-xs">{c.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Cookie-ების გამორთვა</h3>
              <p className="text-gray-600 text-xs leading-relaxed mb-4">
                ბრაუზერის პარამეტრებში გადადით კონფიდენციალურობის განყოფილებაში და მართეთ Cookie-ები.
              </p>
              <div className="space-y-1.5 text-xs text-gray-500">
                {['Chrome → Settings → Privacy', 'Firefox → Options → Privacy', 'Safari → Preferences → Privacy'].map(b => (
                  <div key={b} className="flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-[#f97316]" />
                    {b}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">სხვა დოკუმენტები</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/privacy" className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#fff7ed] transition group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] shrink-0" />
                    <span className="text-gray-700 text-sm font-medium group-hover:text-[#f97316] transition">კონფიდენციალურობის პოლიტიკა</span>
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#fff7ed] transition group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] shrink-0" />
                    <span className="text-gray-700 text-sm font-medium group-hover:text-[#f97316] transition">მომსახურების პირობები</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>

    <Footer />
  </div>
)

export default CookiesPage
