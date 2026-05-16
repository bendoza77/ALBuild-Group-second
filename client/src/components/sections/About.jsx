import { useSiteContent } from '../../context/SiteContent'

const CheckIcon = () => (
  <svg className="w-5 h-5 text-[#f97316] shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
  </svg>
)

const features = [
  'მხოლოდ სერტიფიცირებული, A-კლასის სამშენებლო მასალები',
  'გამოცდილი ინჟინრებისა და ოსტატების 80-კაციანი გუნდი',
  'ყოველი პროექტისთვის ვადების და ბიუჯეტის მკაცრი დაცვა',
  'BIM ტექნოლოგია — 3D მოდელირება სამშენებლო ეტაპებზე',
  'პოსტ-სამშენებლო მომსახურება და 2 წლის გარანტია',
]


const About = () => {
  const { content } = useSiteContent()
  const a = content.about

  return (
    <section id="about" className="py-28 bg-[#fff7ed] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-[#f97316] font-semibold uppercase tracking-widest text-sm mb-2">{a.badge}</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#7c2d12] mb-4 leading-tight">{a.heading}</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-[#f97316] to-[#facc15] mx-auto rounded-full" />
        </div>

        {/* Main split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">

          {/* Image grid */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-xl h-64">
                  <img
                    src={a.image}
                    alt="ALBuild Group სამშენებლო გუნდი"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl h-44">
                  <img
                    src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=600&q=80"
                    alt="სამშენებლო ტექნიკა"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-10">
                <div className="rounded-2xl overflow-hidden shadow-xl h-44">
                  <img
                    src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80"
                    alt="არქიტექტურული პროექტი"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-xl h-64">
                  <img
                    src="https://images.unsplash.com/photo-1590247813693-5541d1c609fd?w=600&q=80"
                    alt="თანამედროვე ნაგებობა"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Floating experience badge */}
            <div className="absolute -bottom-5 -right-5 bg-gradient-to-br from-[#f97316] to-[#ea6c0a] rounded-2xl p-5 shadow-2xl shadow-[#f97316]/40 text-center z-10">
              <p className="text-4xl font-extrabold text-white leading-none">6+</p>
              <p className="text-white/80 text-xs font-semibold mt-1 uppercase tracking-wider">წელი</p>
              <p className="text-white/80 text-xs font-semibold uppercase tracking-wider">გამოცდილება</p>
            </div>
          </div>

          {/* Text content */}
          <div>
            <p className="text-gray-700 text-lg leading-relaxed mb-5">{a.text1}</p>
            <p className="text-gray-600 leading-relaxed mb-5">{a.text2}</p>
            <p className="text-gray-600 leading-relaxed mb-8">
              ჩვენი წარმატება ეფუძნება სამ ძირეულ პრინციპს: ხარისხი, პუნქტუალურობა და გამჭვირვალობა. 2020 წლიდან დღემდე ჩვენ ავაშენეთ 200-ზე მეტი ობიექტი მთელი საქართველოს მასშტაბით — საცხოვრებელი სახლებიდან და ვილებიდან, კომერციული ცენტრებით, სამრეწველო ობიექტებით.
            </p>

            {/* Feature checklist */}
            <div className="space-y-3 mb-8">
              {features.map((f, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckIcon />
                  <span className="text-gray-700 text-sm leading-snug">{f}</span>
                </div>
              ))}
            </div>

            {/* Stats row */}
            <div className="flex flex-wrap gap-8 pt-8 border-t border-[#f5e6d3]">
              {a.stats?.map(s => (
                <div key={s.label}>
                  <p className="text-3xl font-extrabold text-[#f97316]">{s.value}</p>
                  <p className="text-gray-500 text-sm mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CEO Quote */}
        <blockquote className="bg-gradient-to-r from-[#7c2d12] to-[#431407] rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#f97316]/10 rounded-full -translate-y-1/2 translate-x-1/3 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#facc15]/8 rounded-full translate-y-1/2 -translate-x-1/4 blur-2xl pointer-events-none" />

          <svg className="w-12 h-12 text-[#f97316]/40 mb-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
          </svg>

          <p className="text-white/90 text-xl md:text-2xl font-light italic leading-relaxed max-w-3xl mb-8 relative z-10">
            "ჩვენი მიზანია არა მხოლოდ ნაგებობების, არამედ სიამაყის, სითბოსა და ხარისხის შექმნა — ისეთი ადგილების, სადაც ადამიანები კომფორტულად ცხოვრობენ, წარმატებულად მუშაობენ და თაობიდან თაობას გადასცემენ ჩვენს ნამუშევარს."
          </p>

          <div className="flex items-center gap-4 relative z-10">
            <div className="w-14 h-14 bg-gradient-to-br from-[#f97316] to-[#facc15] rounded-full flex items-center justify-center shrink-0">
              <span className="text-white font-extrabold text-base">AL</span>
            </div>
            <div>
              <p className="text-white font-bold text-base">ალექსანდრე სულაქველიძე</p>
              <p className="text-white/55 text-sm">ALBuild Group — დამფუძნებელი და CEO</p>
            </div>
          </div>
        </blockquote>

      </div>
    </section>
  )
}

export default About
