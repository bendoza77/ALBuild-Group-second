import { useEffect, useState } from 'react'
import { useSiteContent } from '../../context/SiteContent'
import useInView from '../../hooks/useInView'

const CountUp = ({ target, suffix, isInView }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!isInView) return
    let start = 0
    const duration = 2000
    const step = 16
    const increment = target / (duration / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= target) { setCount(target); clearInterval(timer) }
      else setCount(Math.floor(start))
    }, step)
    return () => clearInterval(timer)
  }, [isInView, target])

  return <span>{count}{suffix}</span>
}

const Stats = () => {
  const [ref, isInView] = useInView({ once: true, margin: '-60px' })
  const { content } = useSiteContent()
  const stats = content.stats

  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('https://images.unsplash.com/photo-1590247813693-5541d1c609fd?w=1920&q=80')` }}
      />
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#431407]/96 via-[#7c2d12]/92 to-[#c2410c]/88" />
      {/* Subtle grid lines */}
      <div className="absolute inset-0" style={{
        backgroundImage: `linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)`,
        backgroundSize: '70px 70px',
      }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-14">
          <p className="text-[#facc15] font-semibold uppercase tracking-widest text-sm mb-3">ჩვენი მიღწევები</p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-2">რიცხვები, რომლითაც ვამაყობთ</h2>
          <p className="text-white/45 text-base max-w-md mx-auto mt-3">
            6 წლის მუდმივი ზრდა, პროფესიონალიზმი და შეუდარებელი ხარისხი.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
          {stats.map(({ target, suffix, label }, i) => (
            <div
              key={label}
              className="text-center bg-white/8 border border-white/12 rounded-2xl p-6 sm:p-8 backdrop-blur-sm hover:bg-white/12 transition-colors duration-300"
            >
              <p className="text-5xl sm:text-6xl font-extrabold text-[#facc15] mb-3">
                <CountUp target={target} suffix={suffix} isInView={isInView} />
              </p>
              <div className="w-10 h-0.5 bg-[#f97316]/60 mx-auto mb-3 rounded-full" />
              <p className="text-white/70 font-medium text-sm uppercase tracking-wider">{label}</p>
            </div>
          ))}
        </div>

        {/* Awards strip */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            {
              title: 'ISO 9001:2015',
              desc: 'ხარისხის მართვის სისტემის საერთაშორისო სერტიფიკატი',
              Icon: () => (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              ),
            },
            {
              title: 'საქართველოს საუკეთესო',
              desc: 'სამშენებლო კომპანია — ეროვნული ჯილდო 2023',
              Icon: () => (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                </svg>
              ),
            },
            {
              title: 'B-კლასი ენერგოეფექტური',
              desc: 'ყველა ჩვენი ობიექტი აკმაყოფილებს B-კლასის ენერგო-სტანდარტს',
              Icon: () => (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              ),
            },
          ].map((award, i) => (
            <div key={i} className="bg-white/6 border border-white/10 rounded-2xl p-5 flex items-start gap-4">
              <div className="text-[#facc15] shrink-0 mt-0.5">
                <award.Icon />
              </div>
              <div>
                <p className="text-white font-bold text-sm mb-1">{award.title}</p>
                <p className="text-white/45 text-xs leading-relaxed">{award.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
