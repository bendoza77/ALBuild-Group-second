const steps = [
  {
    num: '01',
    title: 'კონსულტაცია და შეფასება',
    desc: 'ჩვენი ექსპერტი გუნდი გთავაზობთ უფასო საველე კონსულტაციას. ვამოწმებთ ობიექტს, ვაანალიზებთ მოთხოვნებს, განვიხილავთ ბიუჯეტსა და ვადებს — ისე, რომ პირველივე შეხვედრიდან გქონდეთ სრული სურათი.',
    Icon: () => (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'დიზაინი და დაგეგმვა',
    desc: 'ჩვენი არქიტექტორები BIM ტექნოლოგიის გამოყენებით ქმნიან სრულ საპროექტო დოკუმენტაციას. 3D ვიზუალიზაცია გაძლევთ შესაძლებლობას, ნახოთ სამომავლო ნაგებობა ჯერ კიდევ მშენებლობის დაწყებამდე.',
    Icon: () => (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'მშენებლობა',
    desc: 'კვალიფიციური ოსტატებისა და ინჟინრების გუნდი ახორციელებს ყველა სამუშაოს უმაღლეს სტანდარტზე. ყოველ კვირა გიგზავნით ვიზუალურ ანგარიშს. ხარისხის კონტროლი — ყოველ ეტაპზე, ნებისმიერი შეყოვნების გარეშე.',
    Icon: () => (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0H3m2 0h14M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    num: '04',
    title: 'ჩაბარება და გარანტია',
    desc: 'პროექტი სრულდება საბოლოო ტექნიკური ინსპექციით. ვაბარებთ ობიექტს სრული სახელმწიფო დოკუმენტაციით. ყოველ ნაშრომს თან ახლავს 2 წლის გარანტია — ჩვენი ხარისხის საუკეთესო მტკიცებულება.',
    Icon: () => (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
]

const Process = () => (
  <section className="py-28 bg-white overflow-hidden">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">

      {/* Header */}
      <div className="text-center mb-16">
        <p className="text-[#f97316] font-semibold uppercase tracking-widest text-sm mb-2">სამუშაო პროცესი</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#7c2d12] mb-4">როგორ ვმუშაობთ</h2>
        <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
          გამჭვირვალე, სტრუქტურირებული და ეფექტური — ჩვენი 4-ეტაპიანი პროცესი გაძლევს სრულ კონტროლს ყოველ გადაწყვეტილებაზე.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-[#f97316] to-[#facc15] mx-auto rounded-full mt-6" />
      </div>

      {/* Steps grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 relative mb-16">
        {/* Desktop connecting line */}
        <div className="hidden lg:block absolute top-[3.75rem] left-[calc(12.5%+2rem)] right-[calc(12.5%+2rem)] h-0.5 bg-gradient-to-r from-[#f97316] via-[#facc15] to-[#f97316] opacity-30" />

        {steps.map((step, i) => (
          <div key={i} className="relative z-10 flex flex-col items-center text-center">
            {/* Circle */}
            <div className="w-[4.5rem] h-[4.5rem] bg-gradient-to-br from-[#f97316] to-[#facc15] rounded-full flex items-center justify-center text-white shadow-xl shadow-[#f97316]/30 mb-6 relative">
              <step.Icon />
              {/* Step number */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-[#7c2d12] rounded-full flex items-center justify-center text-white text-[10px] font-extrabold border-2 border-white">
                {i + 1}
              </div>
            </div>

            {/* Large watermark number */}
            <div className="text-[#f97316]/8 font-extrabold text-8xl absolute -top-6 left-1/2 -translate-x-1/2 leading-none pointer-events-none select-none">
              {step.num}
            </div>

            <h3 className="font-extrabold text-[#7c2d12] text-base mb-3 px-2">{step.title}</h3>
            <p className="text-gray-500 text-sm leading-relaxed px-2">{step.desc}</p>
          </div>
        ))}
      </div>

      {/* Feature highlights */}
      <div className="bg-gradient-to-br from-[#fff7ed] to-[#f5e6d3] rounded-3xl p-8 md:p-10 border border-[#f5e6d3] mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {[
            { value: '24/7', label: 'კომუნიკაცია', desc: 'ჩვენი მენეჯერი ყოველთვის ხელმისაწვდომია' },
            { value: '100%', label: 'გამჭვირვალობა', desc: 'ყოველ ეტაპზე ხედავთ ხარჯებსა და პროგრესს' },
            { value: '2 წელი', label: 'გარანტია', desc: 'ყოველ ჩაბარებულ ობიექტზე სრული გარანტია' },
          ].map((item, i) => (
            <div key={i}>
              <p className="text-3xl font-extrabold text-[#f97316] mb-1">{item.value}</p>
              <p className="font-bold text-[#7c2d12] text-sm mb-1">{item.label}</p>
              <p className="text-gray-500 text-xs">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="text-center">
        <a
          href="#contact"
          className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#f97316] to-[#facc15] text-white font-bold px-10 py-4 rounded-full text-base shadow-xl shadow-[#f97316]/30 hover:shadow-[#f97316]/50 transition-shadow duration-300"
        >
          პროცესი დავიწყოთ
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </div>

    </div>
  </section>
)

export default Process
