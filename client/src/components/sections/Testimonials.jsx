const testimonials = [
  {
    name: 'გიორგი კვარაცხელია',
    role: 'CEO, TBC Invest',
    text: 'ALBuild Group-თან მუშაობა ნამდვილი სიამოვნება იყო. ჩვენი 3,200 კვ.მ. საოფისე კომპლექსი ჩაბარდა ვადაზე ადრე და ბიუჯეტის გადამეტების გარეშე. ყოველ ეტაპზე ვგრძნობდი, რომ ეს გუნდი ჩვენი სრულფასოვანი ბიზნეს-პარტნიორია.',
    rating: 5,
    project: 'საოფისე კომპლექსი · ვაკე · 2024',
    initials: 'გკ',
  },
  {
    name: 'ნინო ბერიძე',
    role: 'კერძო დამკვეთი',
    text: 'ჩვენი ოჯახური სახლი ALBuild Group-მა ააგო. ყოველ კვირა ვიღებდი ვიდეო-ანგარიშს, ყველა ცვლილება ზუსტად ჩანდა. ახლა ჩვენს სახლში ვცხოვრობთ — და ვამაყობთ ყოველი კედლით, ყოველი დეტალით.',
    rating: 5,
    project: 'კერძო სახლი · საბურთალო · 2023',
    initials: 'ნბ',
  },
  {
    name: 'დავით ჯიქია',
    role: 'CEO, Silk Road Invest',
    text: 'გლდანის 28,000 კვ.მ. საცხოვრებელი კომპლექსი ჩვენი ყველაზე მსხვილი პროექტი იყო. ALBuild Group-ის გუნდმა ოსტატურად გაართვა ყველა გამოწვევას. პროფესიონალიზმი, პასუხისმგებლობა, ხარისხი — ყველა ფრონტზე.',
    rating: 5,
    project: 'საცხოვრებელი კომპლექსი · გლდანი · 2022',
    initials: 'დჯ',
  },
]

const StarFull = () => (
  <svg className="w-4 h-4 fill-[#facc15]" viewBox="0 0 24 24">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
)

const QuoteIcon = () => (
  <svg className="w-9 h-9 text-[#f97316]/25" fill="currentColor" viewBox="0 0 24 24">
    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
  </svg>
)

const Testimonials = () => (
  <section className="py-28 bg-[#f5e6d3] relative overflow-hidden">
    {/* Decorative blobs */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-[#f97316]/8 rounded-full -translate-y-1/3 translate-x-1/4 pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#facc15]/8 rounded-full translate-y-1/3 -translate-x-1/4 pointer-events-none" />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">

      {/* Header */}
      <div className="text-center mb-14">
        <p className="text-[#f97316] font-semibold uppercase tracking-widest text-sm mb-2">კლიენტების შეფასებები</p>
        <h2 className="text-4xl md:text-5xl font-extrabold text-[#7c2d12] mb-4">რას ამბობენ ჩვენი კლიენტები</h2>
        <p className="text-gray-600 max-w-xl mx-auto text-base leading-relaxed">
          200-ზე მეტი დასრულებული პროექტი, ასობით კმაყოფილი კლიენტი — და ყოველ მათგანში ჩვენი ხელმოწერა.
        </p>
        <div className="w-20 h-1 bg-gradient-to-r from-[#f97316] to-[#facc15] mx-auto rounded-full mt-6" />
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-14">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex flex-col"
          >
            <QuoteIcon />

            {/* Stars */}
            <div className="flex gap-0.5 mt-3 mb-5">
              {Array(t.rating).fill(0).map((_, s) => <StarFull key={s} />)}
            </div>

            {/* Quote */}
            <p className="text-gray-600 text-base leading-relaxed flex-1 italic mb-6">
              "{t.text}"
            </p>

            {/* Project tag */}
            <div className="mb-5">
              <span className="bg-[#f97316]/10 text-[#f97316] text-xs font-semibold px-3 py-1.5 rounded-full">
                {t.project}
              </span>
            </div>

            {/* Author */}
            <div className="flex items-center gap-3 pt-5 border-t border-[#f5e6d3]">
              <div className="w-12 h-12 bg-gradient-to-br from-[#f97316] to-[#7c2d12] rounded-full flex items-center justify-center text-white font-extrabold text-sm shrink-0">
                {t.initials}
              </div>
              <div>
                <p className="font-bold text-[#7c2d12] text-sm">{t.name}</p>
                <p className="text-gray-400 text-xs">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        {[
          { value: '4.9 / 5', label: 'საშუალო შეფასება', sub: '200+ მიმოხილვის საფუძველზე' },
          { value: '98%', label: 'კმაყოფილი კლიენტი', sub: 'ყველა ჩვენს პროექტში' },
          { value: '85%', label: 'განმეორებითი დამკვეთი', sub: 'ჩვენი ყველაზე დიდი სიამაყე' },
        ].map((m, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-6 text-center shadow-md border border-white hover:shadow-xl transition-shadow duration-300"
          >
            <p className="text-3xl font-extrabold text-[#f97316] mb-1">{m.value}</p>
            <p className="font-bold text-[#7c2d12] text-sm mb-1">{m.label}</p>
            <p className="text-gray-400 text-xs">{m.sub}</p>
          </div>
        ))}
      </div>

    </div>
  </section>
)

export default Testimonials
