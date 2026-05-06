import { Link } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const sections = [
  {
    heading: '1. ზოგადი დებულებები',
    body: 'ეს პირობები არეგულირებს ALBuild Group-ის მომსახურებებს. ჩვენი სერვისებით სარგებლობით, თქვენ ეთანხმებით ამ პირობებს. გთხოვთ, ყურადღებით წაიკითხოთ ხელშეკრულების გაფორმებამდე.',
  },
  {
    heading: '2. სერვისების მოცულობა',
    body: 'ALBuild Group გთავაზობთ სამშენებლო, სარეკონსტრუქციო და პროექტის მართვის სერვისებს. თითოეული პროექტის კონკრეტული პირობები განისაზღვრება ცალკე ხელშეკრულებით, რომელიც მხარეთა ხელმოწერით ძალაში შედის.',
  },
  {
    heading: '3. გადახდის პირობები',
    body: 'გადახდა ხდება ხელშეკრულებაში განსაზღვრული გრაფიკის მიხედვით. ჩვეულებრივ ითვალისწინება: 30% ავანსი, ეტაპობრივი გადახდები სამუშაოების მიმდინარეობისას და 10% საბოლოო გადახდა ობიექტის ჩაბარებისას.',
  },
  {
    heading: '4. პასუხისმგებლობა',
    body: 'ALBuild Group პასუხისმგებელია სამუშაოების ხარისხზე შეთანხმებული ტექნიკური დოკუმენტაციის შესაბამისად. გარანტიის ვადა — 2 წელი სამშენებლო სამუშაოებზე. ფორს-მაჟორულ გარემოებებზე (სტიქიური უბედურება, კანონმდებლობის ცვლილება) კომპანია პასუხისმგებლობას არ ატარებს.',
  },
  {
    heading: '5. კამათის გადაწყვეტა',
    body: 'ნებისმიერი დავა გადაიჭრება მოლაპარაკების გზით. თუ მხარეები ვერ მიაღწევენ შეთანხმებას, საქმე გადაეცემა საქართველოს სასამართლოს, საქართველოს მოქმედი კანონმდებლობის შესაბამისად.',
  },
]

const DocumentIcon = () => (
  <svg className="w-14 h-14 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
  </svg>
)

const TermsPage = () => (
  <div className="w-full overflow-x-hidden">
    <Navbar />

    {/* Hero */}
    <section className="relative py-24 bg-gradient-to-br from-[#431407] via-[#7c2d12] to-[#c2410c] overflow-hidden">
      <div className="absolute inset-0 opacity-5"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80')", backgroundSize: 'cover', backgroundPosition: 'center' }} />
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
            <DocumentIcon />
          </div>
          <div>
            <p className="text-[#facc15] text-xs font-bold uppercase tracking-widest mb-2">სამართლებრივი</p>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">მომსახურების პირობები</h1>
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
              <h3 className="text-white font-bold text-lg mb-4">გადახდის გრაფიკი</h3>
              <ul className="space-y-3">
                {[
                  { pct: '30%', label: 'ავანსი სამუშაოს დაწყებამდე' },
                  { pct: '60%', label: 'ეტაპობრივი გადახდები' },
                  { pct: '10%', label: 'ჩაბარებისას' },
                ].map(item => (
                  <li key={item.pct} className="flex items-center gap-3">
                    <span className="text-white font-black text-lg w-10 shrink-0">{item.pct}</span>
                    <span className="text-white/80 text-sm">{item.label}</span>
                  </li>
                ))}
              </ul>
              <a
                href="/#contact"
                className="block w-full text-center bg-white text-[#f97316] font-bold py-3 rounded-xl text-sm shadow hover:shadow-md transition-all mt-5"
              >
                პროექტი განვიხილოთ
              </a>
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

export default TermsPage
