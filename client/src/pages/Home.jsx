import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Navbar from '../components/layout/Navbar'
import Footer from '../components/layout/Footer'
import Hero from '../components/sections/Hero'
import About from '../components/sections/About'
import Process from '../components/sections/Process'
import Projects from '../components/sections/Projects'
import Contact from '../components/sections/Contact'

const Home = () => {
  const location = useLocation()

  useEffect(() => {
    const section = location.state?.scrollTo
    if (!section) return
    const el = document.getElementById(section)
    if (el) setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 80)
  }, [location.state])

  return (
    <div className="w-full overflow-x-hidden">
      <Navbar />
      <Hero />
      <About />
      <Process />
      <Projects />      <Contact />
      <Footer />
    </div>
  )
}

export default Home
