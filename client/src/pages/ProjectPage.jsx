import { useParams } from 'react-router-dom'
import { useSiteContent } from '../context/SiteContent'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'

const BackIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
)
const LocationIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)
const CalendarIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
)
const AreaIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
  </svg>
)
const UserIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
  </svg>
)

const ProjectPage = () => {
  const { id } = useParams()
  const { content } = useSiteContent()
  const project = content.projects?.items?.[Number(id)]
  const allProjects = content.projects?.items ?? []

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <p className="text-gray-400 text-lg mb-4">Project not found.</p>
            <a href="/#projects" className="text-[#f97316] font-semibold hover:underline">Back to projects</a>
          </div>
        </div>
      </div>
    )
  }

  const others = allProjects.filter((_, i) => i !== Number(id)).slice(0, 3)

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />

      {/* Hero */}
      <section className="relative h-[60vh] min-h-[420px] flex items-end overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${project.src}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c0a00] via-[#1c0a00]/60 to-transparent" />
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 pb-12 w-full">
          <a
            href="/#projects"
            className="inline-flex items-center gap-1.5 text-[#facc15] text-sm font-semibold mb-4 hover:gap-3 transition-all"
          >
            <BackIcon /> Back to Projects
          </a>
          {project.category && (
            <span className="block text-[#f97316] text-xs font-bold uppercase tracking-widest mb-2">
              {project.category}
            </span>
          )}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-[#fff7ed]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

            {/* Main content */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold text-[#7c2d12] mb-5">პროექტის შესახებ</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">{project.description}</p>

              {project.gallery?.filter(Boolean).length > 0 && (
                <div className="grid grid-cols-2 gap-4 mt-6">
                  {project.gallery.filter(Boolean).map((img, i) => (
                    <img key={i} src={img} alt={`${project.title} ${i + 1}`}
                      className="w-full h-52 object-cover rounded-2xl shadow-md" />
                  ))}
                </div>
              )}
            </div>

            {/* Sidebar: details */}
            <div>
              <div className="bg-white rounded-2xl shadow-md p-6 sticky top-24">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-5">პროექტის დეტალები</h3>
                <ul className="space-y-4">
                  {project.category && (
                    <li className="flex items-center gap-3">
                      <span className="p-2 bg-[#f97316]/10 rounded-xl text-[#f97316]">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                        </svg>
                      </span>
                      <div>
                        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">კატეგორია</p>
                        <p className="text-gray-800 font-semibold text-sm">{project.category}</p>
                      </div>
                    </li>
                  )}
                  {project.year && (
                    <li className="flex items-center gap-3">
                      <span className="p-2 bg-[#f97316]/10 rounded-xl text-[#f97316]"><CalendarIcon /></span>
                      <div>
                        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">წელი</p>
                        <p className="text-gray-800 font-semibold text-sm">{project.year}</p>
                      </div>
                    </li>
                  )}
                  {project.client && (
                    <li className="flex items-center gap-3">
                      <span className="p-2 bg-[#f97316]/10 rounded-xl text-[#f97316]"><UserIcon /></span>
                      <div>
                        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">კლიენტი</p>
                        <p className="text-gray-800 font-semibold text-sm">{project.client}</p>
                      </div>
                    </li>
                  )}
                  {project.location && (
                    <li className="flex items-center gap-3">
                      <span className="p-2 bg-[#f97316]/10 rounded-xl text-[#f97316]"><LocationIcon /></span>
                      <div>
                        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">მდებარეობა</p>
                        <p className="text-gray-800 font-semibold text-sm">{project.location}</p>
                      </div>
                    </li>
                  )}
                  {project.area && (
                    <li className="flex items-center gap-3">
                      <span className="p-2 bg-[#f97316]/10 rounded-xl text-[#f97316]"><AreaIcon /></span>
                      <div>
                        <p className="text-xs text-gray-400 font-semibold uppercase tracking-wide">ფართობი</p>
                        <p className="text-gray-800 font-semibold text-sm">{project.area}</p>
                      </div>
                    </li>
                  )}
                </ul>

                <div className="mt-7 pt-6 border-t border-gray-100">
                  <a
                    href="/#contact"
                    className="block w-full text-center bg-gradient-to-r from-[#f97316] to-[#facc15] text-white font-bold py-3 rounded-xl text-sm shadow-md hover:shadow-lg transition-all"
                  >
                    დაგვიკავშირდით
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other projects */}
      {others.length > 0 && (
        <section className="py-16 bg-[#f5e6d3]">
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-[#7c2d12] mb-8">სხვა პროექტები</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {others.map((p, i) => {
                const origIdx = allProjects.findIndex(x => x === p)
                return (
                  <a key={i} href={`/projects/${origIdx}`}
                    className="group relative rounded-2xl overflow-hidden shadow-lg h-52 block">
                    <img src={p.src} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#7c2d12]/80 via-[#f97316]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <p className="text-white font-bold px-4 pb-4 text-sm drop-shadow">{p.title}</p>
                    </div>
                  </a>
                )
              })}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}

export default ProjectPage
