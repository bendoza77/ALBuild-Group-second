import { useState } from 'react'
import { useSiteContent } from '../../context/SiteContent'

const inputClass =
  'w-full border border-[#f5e6d3] rounded-xl px-4 py-3 text-gray-700 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#f97316] transition text-sm'

const labelClass = 'block text-[#7c2d12] font-semibold mb-1.5 text-sm'

const API = import.meta.env.VITE_API_URL || ''

const services = [
  'სერვისი აირჩიეთ',
  'მშენებლობა',
  'რეკონსტრუქცია',
  'პროექტის მართვა',
  'საკონსულტაციო',
  'სხვა',
]

const budgets = [
  'ბიუჯეტი აირჩიეთ',
  '10,000₾ – 50,000₾',
  '50,000₾ – 150,000₾',
  '150,000₾ – 500,000₾',
  '500,000₾+',
  'განსახილველია',
]

const InfoCard = ({ icon, title, value }) => (
  <div className="flex items-start gap-3 bg-white rounded-2xl p-4 shadow-sm">
    <div className="p-2 bg-[#f97316]/10 rounded-xl text-[#f97316] shrink-0">{icon}</div>
    <div>
      <p className="text-xs font-semibold text-[#7c2d12] uppercase tracking-wide mb-0.5">{title}</p>
      <p className="text-gray-600 text-sm">{value}</p>
    </div>
  </div>
)

const LocationIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)

const PhoneIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
)

const EmailIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
)

const ClockIcon = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const SelectArrow = () => (
  <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  </div>
)

const Contact = () => {
  const { content } = useSiteContent()
  const c = content.contact

  const [form, setForm] = useState({
    name: '', lastName: '', phone: '', email: '',
    company: '', service: '', budget: '', message: '',
  })
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMsg, setErrorMsg] = useState('')

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async e => {
    e.preventDefault()
    setStatus('loading')
    setErrorMsg('')
    try {
      const res = await fetch(`${API}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (!res.ok) throw new Error(data.error || 'დაფიქსირდა შეცდომა.')
      setStatus('success')
      setForm({ name: '', lastName: '', phone: '', email: '', company: '', service: '', budget: '', message: '' })
      setTimeout(() => setStatus('idle'), 6000)
    } catch (err) {
      setErrorMsg(err.message)
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-[#f5e6d3] to-[#fff7ed]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#f97316] font-semibold uppercase tracking-widest text-sm mb-2">{c.badge}</p>
          <h2 className="text-4xl font-extrabold text-[#7c2d12]">{c.heading}</h2>
          <p className="text-gray-600 mt-3 max-w-xl mx-auto">{c.subtext}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* Left column: info cards + map */}
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InfoCard icon={<LocationIcon />} title="მისამართი" value={c.address} />
              <InfoCard icon={<PhoneIcon />} title="ტელეფონი" value={c.phone} />
              <InfoCard icon={<EmailIcon />} title="ელ-ფოსტა" value={c.email} />
              <InfoCard icon={<ClockIcon />} title="სამუშაო საათები" value={c.hours} />
            </div>

            {/* Google Maps */}
            <div className="rounded-2xl overflow-hidden shadow-lg flex-1 min-h-72">
              <iframe
                title="ALBuild Group მდებარეობა"
                src="https://maps.google.com/maps?q=Tbilisi,Georgia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ minHeight: '290px', border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          {/* Right column: form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-3xl shadow-xl p-8 space-y-5"
          >
            {status === 'success' && (
              <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl px-4 py-3 text-sm font-medium text-center">
                ✓ გმადლობთ! შეტყობინება გაიგზავნა. მალე დაგიკავშირდებით.
              </div>
            )}

            {status === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl px-4 py-3 text-sm font-medium text-center">
                {errorMsg}
              </div>
            )}

            {/* Row 1: Name + Last name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>სახელი <span className="text-[#f97316]">*</span></label>
                <input type="text" name="name" value={form.name} onChange={handleChange} required placeholder="გიორგი" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>გვარი <span className="text-[#f97316]">*</span></label>
                <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required placeholder="მამულაშვილი" className={inputClass} />
              </div>
            </div>

            {/* Row 2: Phone + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>ტელეფონი <span className="text-[#f97316]">*</span></label>
                <input type="tel" name="phone" value={form.phone} onChange={handleChange} required placeholder="+995 5XX XXX XXX" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>ელ-ფოსტა <span className="text-[#f97316]">*</span></label>
                <input type="email" name="email" value={form.email} onChange={handleChange} required placeholder="your@email.com" className={inputClass} />
              </div>
            </div>

            {/* Row 3: Company + Service */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className={labelClass}>კომპანია / ორგანიზაცია</label>
                <input type="text" name="company" value={form.company} onChange={handleChange} placeholder="კომპანიის სახელი" className={inputClass} />
              </div>
              <div>
                <label className={labelClass}>სერვისის ტიპი <span className="text-[#f97316]">*</span></label>
                <div className="relative">
                  <select name="service" value={form.service} onChange={handleChange} required className={`${inputClass} appearance-none pr-10 cursor-pointer`}>
                    {services.map(s => (
                      <option key={s} value={s === 'სერვისი აირჩიეთ' ? '' : s} disabled={s === 'სერვისი აირჩიეთ'}>
                        {s}
                      </option>
                    ))}
                  </select>
                  <SelectArrow />
                </div>
              </div>
            </div>

            {/* Row 4: Budget */}
            <div>
              <label className={labelClass}>პროექტის სავარაუდო ბიუჯეტი</label>
              <div className="relative">
                <select name="budget" value={form.budget} onChange={handleChange} className={`${inputClass} appearance-none pr-10 cursor-pointer`}>
                  {budgets.map(b => (
                    <option key={b} value={b === 'ბიუჯეტი აირჩიეთ' ? '' : b}>
                      {b}
                    </option>
                  ))}
                </select>
                <SelectArrow />
              </div>
            </div>

            {/* Row 5: Message */}
            <div>
              <label className={labelClass}>პროექტის აღწერა <span className="text-[#f97316]">*</span></label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={4}
                placeholder="მოგვიყევით თქვენი პროექტის შესახებ — ადგილმდებარეობა, ზომა, ვადები..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full bg-gradient-to-r from-[#f97316] to-[#facc15] text-white font-bold py-4 rounded-xl text-base shadow-lg disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.97] transition-transform duration-200"
            >
              {status === 'loading' ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  გაგზავნა...
                </>
              ) : 'შეტყობინების გაგზავნა'}
            </button>

            <p className="text-xs text-gray-400 text-center">
              ფორმის გაგზავნით თქვენ ეთანხმებით ჩვენს{' '}
              <a href="#" className="text-[#f97316] underline">კონფიდენციალურობის პოლიტიკას</a>.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
