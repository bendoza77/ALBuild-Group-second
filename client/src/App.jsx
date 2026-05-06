import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SiteContentProvider } from './context/SiteContent'
import ScrollToTop from './components/layout/ScrollToTop'
import Home from './pages/Home'
import ProjectPage from './pages/ProjectPage'
import ServicePage from './pages/ServicePage'
import PrivacyPage from './pages/PrivacyPage'
import TermsPage from './pages/TermsPage'
import CookiesPage from './pages/CookiesPage'

const App = () => (
  <SiteContentProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="/services/:id" element={<ServicePage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/cookies" element={<CookiesPage />} />
      </Routes>
    </BrowserRouter>
  </SiteContentProvider>
)

export default App
