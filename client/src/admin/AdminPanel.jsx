import { useState, useEffect, useCallback } from 'react'
import { DEFAULT_CONTENT, publishContent } from '../context/SiteContent'

function loadDraft() {
  try {
    const saved = localStorage.getItem('siteContent')
    return saved ? JSON.parse(saved) : DEFAULT_CONTENT
  } catch {
    return DEFAULT_CONTENT
  }
}

// ── Icons ──────────────────────────────────────────────────────────────────
const SaveIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
  </svg>
)
const LogoutIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
  </svg>
)
const PlusIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
  </svg>
)
const TrashIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
)

// ── Sidebar sections ───────────────────────────────────────────────────────
const SECTIONS = [
  { id: 'hero',     label: 'Hero',     sub: 'Main banner section' },
  { id: 'about',    label: 'About',    sub: 'Company info & stats' },
  { id: 'stats',    label: 'Stats',    sub: 'Animated counters' },
  { id: 'services', label: 'Services', sub: 'Service cards' },
  { id: 'projects', label: 'Projects', sub: 'Project gallery' },
  { id: 'contact',  label: 'Contact',  sub: 'Contact information' },
  { id: 'footer',   label: 'Footer',   sub: 'Footer & social links' },
]

// ── Reusable field components ──────────────────────────────────────────────
const Label = ({ children }) => (
  <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5">{children}</label>
)

const Input = ({ value, onChange, placeholder, type = 'text' }) => (
  <input
    type={type}
    value={value ?? ''}
    onChange={e => onChange(e.target.value)}
    placeholder={placeholder}
    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#f97316]/30 focus:border-[#f97316] transition"
  />
)

const Textarea = ({ value, onChange, placeholder, rows = 4 }) => (
  <textarea
    value={value ?? ''}
    onChange={e => onChange(e.target.value)}
    placeholder={placeholder}
    rows={rows}
    className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#f97316]/30 focus:border-[#f97316] transition resize-none"
  />
)

const Field = ({ label, children }) => (
  <div className="mb-5">
    <Label>{label}</Label>
    {children}
  </div>
)

const ImageField = ({ label, value, onChange }) => (
  <div className="mb-5">
    <Label>{label}</Label>
    <Input value={value} onChange={onChange} placeholder="https://..." />
    {value && (
      <img
        src={value} alt="preview"
        className="mt-2 w-full h-40 object-cover rounded-xl border border-gray-100 shadow-sm"
        onError={e => { e.target.style.display = 'none' }}
        onLoad={e => { e.target.style.display = '' }}
      />
    )}
  </div>
)

const Card = ({ children }) => (
  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 mb-4">{children}</div>
)

const CardTitle = ({ title, sub }) => (
  <div className="mb-5 pb-4 border-b border-gray-100">
    <h3 className="text-sm font-bold text-gray-800">{title}</h3>
    {sub && <p className="text-xs text-gray-400 mt-0.5">{sub}</p>}
  </div>
)

// ── Section editors ────────────────────────────────────────────────────────
const HeroEditor = ({ data, onChange }) => {
  const set = k => v => onChange({ ...data, [k]: v })
  return (
    <>
      <Card>
        <CardTitle title="Text Content" sub="Displayed over the background image" />
        <Field label="Badge / Eyebrow"><Input value={data.badge} onChange={set('badge')} /></Field>
        <Field label="Main Headline"><Input value={data.headline} onChange={set('headline')} /></Field>
        <Field label="Tagline"><Input value={data.tagline} onChange={set('tagline')} /></Field>
        <Field label="CTA Button Text"><Input value={data.ctaText} onChange={set('ctaText')} /></Field>
      </Card>
      <Card>
        <CardTitle title="Background Image" sub="Paste a direct image URL" />
        <ImageField label="Image URL" value={data.backgroundImage} onChange={set('backgroundImage')} />
      </Card>
    </>
  )
}

const AboutEditor = ({ data, onChange }) => {
  const set = k => v => onChange({ ...data, [k]: v })
  const setStat = (i, k) => v => onChange({ ...data, stats: data.stats.map((s, idx) => idx === i ? { ...s, [k]: v } : s) })
  return (
    <>
      <Card>
        <CardTitle title="Text Content" sub="Section headers and body paragraphs" />
        <Field label="Badge"><Input value={data.badge} onChange={set('badge')} /></Field>
        <Field label="Heading"><Input value={data.heading} onChange={set('heading')} /></Field>
        <Field label="Paragraph 1"><Textarea value={data.text1} onChange={set('text1')} /></Field>
        <Field label="Paragraph 2"><Textarea value={data.text2} onChange={set('text2')} /></Field>
      </Card>
      <Card>
        <CardTitle title="Photo" sub="Shown on the left side" />
        <ImageField label="Image URL" value={data.image} onChange={set('image')} />
      </Card>
      <Card>
        <CardTitle title="Inline Stats" sub="Numbers shown below the text" />
        {data.stats?.map((stat, i) => (
          <div key={i} className="grid grid-cols-2 gap-3 mb-3 p-4 bg-gray-50 rounded-xl">
            <div><Label>Value</Label><Input value={stat.value} onChange={setStat(i, 'value')} placeholder="15+" /></div>
            <div><Label>Label</Label><Input value={stat.label} onChange={setStat(i, 'label')} /></div>
          </div>
        ))}
      </Card>
    </>
  )
}

const StatsEditor = ({ data, onChange }) => {
  const set = (i, k) => v => onChange(data.map((s, idx) => idx === i ? { ...s, [k]: k === 'target' ? Number(v) : v } : s))
  return (
    <Card>
      <CardTitle title="Animated Counters" sub="The big numbers in the colored strip" />
      {data?.map((stat, i) => (
        <div key={i} className="grid grid-cols-3 gap-3 mb-3 p-4 bg-gray-50 rounded-xl">
          <div><Label>Number</Label><Input type="number" value={stat.target} onChange={set(i, 'target')} /></div>
          <div><Label>Suffix</Label><Input value={stat.suffix} onChange={set(i, 'suffix')} placeholder="+" /></div>
          <div><Label>Label</Label><Input value={stat.label} onChange={set(i, 'label')} /></div>
        </div>
      ))}
    </Card>
  )
}

const ServicesEditor = ({ data, onChange }) => {
  const set = k => v => onChange({ ...data, [k]: v })
  const setItem = (i, k) => v => onChange({ ...data, items: data.items.map((s, idx) => idx === i ? { ...s, [k]: v } : s) })
  const addItem = () => onChange({ ...data, items: [...data.items, { icon: 'building', title: '', description: '' }] })
  const removeItem = i => onChange({ ...data, items: data.items.filter((_, idx) => idx !== i) })
  return (
    <>
      <Card>
        <CardTitle title="Section Header" />
        <Field label="Badge"><Input value={data.badge} onChange={set('badge')} /></Field>
        <Field label="Heading"><Input value={data.heading} onChange={set('heading')} /></Field>
      </Card>
      {data.items?.map((item, i) => (
        <Card key={i}>
          <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-100">
            <div>
              <p className="text-sm font-bold text-gray-800">Service {i + 1}</p>
              <p className="text-xs text-gray-400">Card {i + 1}</p>
            </div>
            {data.items.length > 1 && (
              <button onClick={() => removeItem(i)} className="flex items-center gap-1 text-red-400 hover:text-red-600 text-xs font-semibold transition">
                <TrashIcon /> Remove
              </button>
            )}
          </div>
          <Field label="Title"><Input value={item.title} onChange={setItem(i, 'title')} /></Field>
          <Field label="Short Description (card)"><Textarea value={item.description} onChange={setItem(i, 'description')} rows={2} /></Field>
          <Field label="Full Description (detail page)"><Textarea value={item.fullDescription} onChange={setItem(i, 'fullDescription')} rows={4} /></Field>
          <Field label="Page Image URL">
            <Input value={item.image} onChange={setItem(i, 'image')} placeholder="https://..." />
            {item.image && <img src={item.image} alt="preview" className="mt-2 w-full h-28 object-cover rounded-xl border border-gray-100" onError={e => { e.target.style.display = 'none' }} onLoad={e => { e.target.style.display = '' }} />}
          </Field>
          <Field label="Features (one per line)">
            <Textarea
              value={(item.features || []).join('\n')}
              onChange={v => setItem(i, 'features')(v.split('\n').filter(Boolean))}
              rows={4}
              placeholder="Feature 1&#10;Feature 2&#10;Feature 3"
            />
          </Field>
          <div>
            <Label>Icon</Label>
            <select value={item.icon} onChange={e => setItem(i, 'icon')(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-2.5 text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-[#f97316]/30 focus:border-[#f97316] transition">
              <option value="building">Building</option>
              <option value="hammer">Hammer</option>
              <option value="clipboard">Clipboard</option>
            </select>
          </div>
        </Card>
      ))}
      <button onClick={addItem}
        className="flex items-center gap-2 w-full justify-center border-2 border-dashed border-gray-200 hover:border-[#f97316]/50 text-gray-400 hover:text-[#f97316] rounded-2xl py-4 text-sm font-semibold transition">
        <PlusIcon /> Add Service
      </button>
    </>
  )
}

const ProjectsEditor = ({ data, onChange }) => {
  const set = k => v => onChange({ ...data, [k]: v })
  const setItem = (i, k) => v => onChange({ ...data, items: data.items.map((p, idx) => idx === i ? { ...p, [k]: v } : p) })
  const addItem = () => onChange({ ...data, items: [...data.items, { src: '', title: '' }] })
  const removeItem = i => onChange({ ...data, items: data.items.filter((_, idx) => idx !== i) })
  return (
    <>
      <Card>
        <CardTitle title="Section Header" />
        <Field label="Badge"><Input value={data.badge} onChange={set('badge')} /></Field>
        <Field label="Heading"><Input value={data.heading} onChange={set('heading')} /></Field>
      </Card>
      {data.items?.map((item, i) => (
        <Card key={i}>
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-sm font-bold text-gray-800">Project {i + 1}</p>
              <p className="text-xs text-gray-400">Gallery card</p>
            </div>
            <button onClick={() => removeItem(i)} className="flex items-center gap-1 text-red-400 hover:text-red-600 text-xs font-semibold transition">
              <TrashIcon /> Remove
            </button>
          </div>
          <Field label="Title"><Input value={item.title} onChange={setItem(i, 'title')} /></Field>
          <Field label="Category"><Input value={item.category} onChange={setItem(i, 'category')} placeholder="Commercial, Residential..." /></Field>
          <div className="grid grid-cols-2 gap-3 mb-5">
            <div><Label>Year</Label><Input value={item.year} onChange={setItem(i, 'year')} placeholder="2024" /></div>
            <div><Label>Area</Label><Input value={item.area} onChange={setItem(i, 'area')} placeholder="1,200 მ²" /></div>
          </div>
          <Field label="Client"><Input value={item.client} onChange={setItem(i, 'client')} /></Field>
          <Field label="Location"><Input value={item.location} onChange={setItem(i, 'location')} /></Field>
          <Field label="Description (detail page)"><Textarea value={item.description} onChange={setItem(i, 'description')} rows={3} /></Field>
          <div>
            <Label>Cover Image URL</Label>
            <Input value={item.src} onChange={setItem(i, 'src')} placeholder="https://..." />
            {item.src && (
              <img src={item.src} alt="preview" className="mt-2 w-full h-32 object-cover rounded-xl border border-gray-100"
                onError={e => { e.target.style.display = 'none' }}
                onLoad={e => { e.target.style.display = '' }} />
            )}
          </div>
        </Card>
      ))}
      <button onClick={addItem}
        className="flex items-center gap-2 w-full justify-center border-2 border-dashed border-gray-200 hover:border-[#f97316]/50 text-gray-400 hover:text-[#f97316] rounded-2xl py-4 text-sm font-semibold transition">
        <PlusIcon /> Add Project
      </button>
    </>
  )
}

const ContactEditor = ({ data, onChange }) => {
  const set = k => v => onChange({ ...data, [k]: v })
  return (
    <>
      <Card>
        <CardTitle title="Section Header" />
        <Field label="Badge"><Input value={data.badge} onChange={set('badge')} /></Field>
        <Field label="Heading"><Input value={data.heading} onChange={set('heading')} /></Field>
        <Field label="Subtext"><Textarea value={data.subtext} onChange={set('subtext')} rows={2} /></Field>
      </Card>
      <Card>
        <CardTitle title="Contact Details" sub="Shown in the info cards" />
        <Field label="Address"><Input value={data.address} onChange={set('address')} /></Field>
        <Field label="Phone"><Input value={data.phone} onChange={set('phone')} /></Field>
        <Field label="Email"><Input value={data.email} onChange={set('email')} /></Field>
        <Field label="Business Hours"><Input value={data.hours} onChange={set('hours')} /></Field>
      </Card>
    </>
  )
}

const FooterEditor = ({ data, onChange }) => {
  const set = k => v => onChange({ ...data, [k]: v })
  const setSocial = k => v => onChange({ ...data, socials: { ...data.socials, [k]: v } })
  return (
    <>
      <Card>
        <CardTitle title="Footer Content" />
        <Field label="Company Tagline"><Textarea value={data.tagline} onChange={set('tagline')} rows={2} /></Field>
        <Field label="Copyright Text"><Input value={data.copyright} onChange={set('copyright')} /></Field>
      </Card>
      <Card>
        <CardTitle title="Social Media Links" sub="Full URLs for each platform" />
        <Field label="Facebook URL"><Input value={data.socials?.facebook} onChange={setSocial('facebook')} placeholder="https://facebook.com/..." /></Field>
        <Field label="Instagram URL"><Input value={data.socials?.instagram} onChange={setSocial('instagram')} placeholder="https://instagram.com/..." /></Field>
        <Field label="LinkedIn URL"><Input value={data.socials?.linkedin} onChange={setSocial('linkedin')} placeholder="https://linkedin.com/..." /></Field>
        <Field label="YouTube URL"><Input value={data.socials?.youtube} onChange={setSocial('youtube')} placeholder="https://youtube.com/..." /></Field>
      </Card>
    </>
  )
}

// ── Toast ──────────────────────────────────────────────────────────────────
const Toast = ({ toast, onClose }) => {
  useEffect(() => {
    const t = setTimeout(onClose, 2500)
    return () => clearTimeout(t)
  }, [onClose])
  return (
    <div className={`fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-2xl shadow-2xl text-sm font-semibold ${
      toast.type === 'success' ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
    }`}>
      {toast.type === 'success'
        ? <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
        : <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
      }
      {toast.message}
    </div>
  )
}

// ── Main AdminPanel ────────────────────────────────────────────────────────
const AdminPanel = ({ onLogout }) => {
  const [section, setSection] = useState('hero')
  const [draft, setDraft] = useState(loadDraft)
  const [toast, setToast] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const save = () => {
    try {
      publishContent(draft)
      setToast({ type: 'success', message: 'Changes applied instantly!' })
    } catch {
      setToast({ type: 'error', message: 'Failed to save.' })
    }
  }

  const updateSection = (key, data) => setDraft(prev => ({ ...prev, [key]: data }))

  const closeToast = useCallback(() => setToast(null), [])

  const current = SECTIONS.find(s => s.id === section)

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div className="fixed inset-0 bg-black/50 z-20 lg:hidden" onClick={() => setSidebarOpen(false)} />
      )}

      {/* ── Sidebar ─────────────────────────────────────────── */}
      <aside className={`fixed lg:static inset-y-0 left-0 z-30 w-64 bg-[#1c0a00] flex flex-col transition-transform duration-300 ${sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}>
        <div className="px-6 py-5 border-b border-white/8">
          <div className="flex items-center gap-2">
            <span className="text-xl font-extrabold text-white"><span className="text-[#facc15]">AL</span>Build</span>
            <span className="text-[10px] font-bold text-[#f97316] uppercase tracking-widest border border-[#f97316]/40 rounded-md px-1.5 py-0.5">Admin</span>
          </div>
          <p className="text-[#f5e6d3]/35 text-xs mt-1">Content Management</p>
        </div>

        <nav className="flex-1 px-3 py-4 overflow-y-auto">
          <p className="text-[#f5e6d3]/25 text-[10px] font-bold uppercase tracking-widest px-3 mb-3">Sections</p>
          {SECTIONS.map(s => (
            <button key={s.id} onClick={() => { setSection(s.id); setSidebarOpen(false) }}
              className={`w-full flex flex-col items-start px-3 py-3 rounded-xl mb-1 text-left transition-all ${
                section === s.id ? 'bg-[#f97316] shadow-lg shadow-[#f97316]/20' : 'hover:bg-white/6'
              }`}>
              <span className={`text-sm font-semibold ${section === s.id ? 'text-white' : 'text-[#f5e6d3]/75'}`}>{s.label}</span>
              <span className={`text-[11px] mt-0.5 ${section === s.id ? 'text-white/65' : 'text-[#f5e6d3]/30'}`}>{s.sub}</span>
            </button>
          ))}
        </nav>

        <div className="px-3 py-4 border-t border-white/8 space-y-1">
          <a href="/" target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-2.5 rounded-xl text-[#f5e6d3]/45 hover:bg-white/6 hover:text-white text-sm font-medium transition-all">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            View Website
          </a>
          <button onClick={onLogout}
            className="flex items-center gap-2 w-full px-3 py-2.5 rounded-xl text-[#f5e6d3]/45 hover:bg-red-500/10 hover:text-red-400 text-sm font-medium transition-all">
            <LogoutIcon /> Logout
          </button>
        </div>
      </aside>

      {/* ── Main ─────────────────────────────────────────────── */}
      <div className="flex-1 flex flex-col min-w-0">
        <header className="bg-white border-b border-gray-100 px-4 lg:px-8 py-4 flex items-center justify-between sticky top-0 z-10">
          <div className="flex items-center gap-4">
            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition">
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            <div>
              <h1 className="text-lg font-bold text-gray-900">{current?.label}</h1>
              <p className="text-xs text-gray-400 hidden sm:block">{current?.sub}</p>
            </div>
          </div>

          <button onClick={save}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#f97316] to-[#facc15] text-white text-sm font-bold rounded-xl shadow-md hover:shadow-lg transition-all active:scale-95">
            <SaveIcon />
            <span className="hidden sm:inline">Save Changes</span>
          </button>
        </header>

        <main className="flex-1 p-4 lg:p-8 overflow-y-auto">
          <div className="max-w-2xl mx-auto">
            {section === 'hero'     && <HeroEditor     data={draft.hero}     onChange={d => updateSection('hero', d)} />}
            {section === 'about'    && <AboutEditor    data={draft.about}    onChange={d => updateSection('about', d)} />}
            {section === 'stats'    && <StatsEditor    data={draft.stats}    onChange={d => updateSection('stats', d)} />}
            {section === 'services' && <ServicesEditor data={draft.services} onChange={d => updateSection('services', d)} />}
            {section === 'projects' && <ProjectsEditor data={draft.projects} onChange={d => updateSection('projects', d)} />}
            {section === 'contact'  && <ContactEditor  data={draft.contact}  onChange={d => updateSection('contact', d)} />}
            {section === 'footer'   && <FooterEditor   data={draft.footer}   onChange={d => updateSection('footer', d)} />}
          </div>
        </main>
      </div>

      {toast && <Toast toast={toast} onClose={closeToast} />}
    </div>
  )
}

export default AdminPanel
