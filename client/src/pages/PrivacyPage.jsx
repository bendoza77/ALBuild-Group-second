import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const sections = [
  {
    heading: '1. შესავალი',
    body: 'ALBuild Group პატივს სცემს თქვენს კონფიდენციალურობას. ეს პოლიტიკა განმარტავს, თუ რა პერსონალურ ინფორმაციას ვაგროვებთ, როგორ ვიყენებთ და ვიცავთ მას, როდესაც თქვენ სარგებლობთ ჩვენი ვებ-გვერდითა და სერვისებით.',
  },
  {
    heading: '2. მონაცემების შეგროვება',
    body: 'ჩვენ ვაგროვებთ ინფორმაციას, რომელსაც თქვენ გვაწვდით საკონტაქტო ფორმის საშუალებით: სახელი, გვარი, ელ-ფოსტა, ტელეფონი, კომპანიის სახელი და პროექტის დეტალები. ასევე ავტომატურად ვაგროვებთ ტექნიკურ მონაცემებს, როგორებიცაა IP მისამართი, ბრაუზერის ტიპი და ვიზიტის სტატისტიკა.',
  },
  {
    heading: '3. მონაცემების გამოყენება',
    body: 'თქვენი მონაცემები გამოიყენება: (i) თქვენს მოთხოვნაზე პასუხის გასაცემად; (ii) ხელშეკრულების შესასრულებლად; (iii) ჩვენი სერვისების გასაუმჯობესებლად; (iv) სამართლებრივი ვალდებულებების შესასრულებლად. ჩვენ არ ვყიდით თქვენს მონაცემებს მესამე მხარეებს.',
  },
  {
    heading: '4. მონაცემების შენახვა',
    body: 'პერსონალური მონაცემები ინახება არაუმეტეს 5 წლისა, გარდა იმ შემთხვევისა, როდესაც კანონმდებლობა სხვა ვადას ითხოვს. პროექტთან დაკავშირებული დოკუმენტაცია შესაბამისი სამართლებრივი ვადით ინახება.',
  },
  {
    heading: '5. თქვენი უფლებები',
    body: 'საქართველოს პერსონალურ მონაცემთა დაცვის კანონმდებლობის შესაბამისად, თქვენ გაქვთ უფლება: მოითხოვოთ წვდომა თქვენს მონაცემებზე, მოითხოვოთ მათი გასწორება ან წაშლა, და წარადგინოთ საჩივარი. დასაკავშირებლად მოგვწერეთ: albuild777@gmail.com.',
  },
]

const ShieldIcon = () => (
  <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
)

const PrivacyPage = () => (
  <div className="w-full overflow-x-hidden">
    <Navbar />

    {/* Hero */}
    <section className="relative py-24 bg-gradient-to-br from-[#431407] via-[#7c2d12] to-[#c2410c] overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
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
            <ShieldIcon />
          </div>
          <div>
            <p className="text-[#facc15] text-xs font-bold uppercase tracking-widest mb-2">სამართლებრივი</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">კონფიდენციალურობის პოლიტიკა</h1>
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
              <h3 className="text-white font-bold text-lg mb-2">კითხვები გაქვთ?</h3>
              <p className="text-white/80 text-sm mb-5 leading-relaxed">
                კონფიდენციალურობასთან დაკავშირებული ნებისმიერი კითხვისთვის დაგვიკავშირდით.
              </p>
              <a
                href="/#contact"
                className="block w-full text-center bg-white text-[#f97316] font-bold py-3 rounded-xl text-sm shadow hover:shadow-md transition-all"
              >
                დაგვიკავშირდით
              </a>
            </div>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">სხვა დოკუმენტები</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/terms" className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#fff7ed] transition group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] shrink-0" />
                    <span className="text-gray-700 text-sm font-medium group-hover:text-[#f97316] transition">მომსახურების პირობები</span>
                  </Link>
                </li>
                <li>
                  <Link to="/cookies" className="flex items-center gap-3 p-3 rounded-xl hover:bg-[#fff7ed] transition group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] shrink-0" />
                    <span className="text-gray-700 text-sm font-medium group-hover:text-[#f97316] transition">Cookie პოლიტიკა</span>
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

export default PrivacyPage
