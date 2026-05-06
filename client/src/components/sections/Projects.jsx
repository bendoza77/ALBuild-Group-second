import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSiteContent } from '../../context/SiteContent'

const LocationIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const AreaIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
  </svg>
)

const Projects = () => {
  const { content } = useSiteContent()
  const p = content.projects

  const [activeFilter, setActiveFilter] = useState('ყველა')

  const allCategories = p.items?.map(item => item.category).filter(Boolean) ?? []
  const uniqueCategories = ['ყველა', ...new Set(allCategories)]

  const indexedItems = p.items?.map((item, originalIndex) => ({ ...item, originalIndex })) ?? []
  const filtered = activeFilter === 'ყველა'
    ? indexedItems
    : indexedItems.filter(item => item.category === activeFilter)

  return (
    <section id="projects" className="py-28 bg-[#fff7ed]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-10">
          <p className="text-[#f97316] font-semibold uppercase tracking-widest text-sm mb-2">{p.badge}</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#7c2d12] mb-4">{p.heading}</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base leading-relaxed">
            200-ზე მეტი წარმატებულად დასრულებული პროექტიდან ჩვენ შევარჩიეთ ყველაზე გამორჩეული სამუშაო — საქართველოს სხვადასხვა ქალაქებსა და სეგმენტებში.
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-[#f97316] to-[#facc15] mx-auto rounded-full mt-6" />
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {uniqueCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                activeFilter === cat
                  ? 'bg-[#f97316] text-white shadow-lg shadow-[#f97316]/30 scale-105'
                  : 'bg-white text-gray-600 hover:bg-[#f5e6d3] border border-[#f5e6d3] shadow-sm'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((project, i) => (
            <Link
              key={project.originalIndex}
              to={`/projects/${project.originalIndex}`}
              className="group relative rounded-3xl overflow-hidden shadow-md h-72 block border border-[#f5e6d3] hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Image */}
              <img
                src={project.src}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Always-on bottom gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1c0a00]/85 via-[#1c0a00]/20 to-transparent" />

              {/* Category badge */}
              {project.category && (
                <div className="absolute top-4 left-4">
                  <span className="bg-[#f97316] text-white text-[10px] font-extrabold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
                    {project.category}
                  </span>
                </div>
              )}

              {/* Year badge */}
              <div className="absolute top-4 right-4">
                <span className="bg-black/40 backdrop-blur-sm text-white/80 text-xs font-semibold px-3 py-1.5 rounded-full border border-white/20">
                  {project.year}
                </span>
              </div>

              {/* Bottom info */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <p className="text-white font-bold text-lg leading-tight mb-1.5">{project.title}</p>
                <div className="flex items-center gap-4 text-white/55 text-xs">
                  {project.location && (
                    <span className="flex items-center gap-1">
                      <LocationIcon />
                      {project.location}
                    </span>
                  )}
                  {project.area && (
                    <span className="flex items-center gap-1">
                      <AreaIcon />
                      {project.area}
                    </span>
                  )}
                </div>

                {/* Hover CTA */}
                <div className="mt-3 flex items-center gap-1.5 text-[#facc15] text-xs font-bold opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
                  პროექტის დეტალები
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Hover border glow */}
              <div className="absolute inset-0 rounded-3xl border-2 border-[#f97316] opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-gray-500 text-sm mb-5">
            ეს მხოლოდ ჩვენი პორტფოლიოს ნაწილია. გაინტერესებთ სრული სია?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 bg-gradient-to-r from-[#7c2d12] to-[#431407] text-white font-bold px-10 py-4 rounded-full text-base hover:from-[#431407] hover:to-[#1c0a00] transition-all duration-300 shadow-xl"
          >
            ყველა პროექტის ნახვა
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

      </div>
    </section>
  )
}

export default Projects
