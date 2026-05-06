require('dotenv').config()
const express = require('express')
const cors = require('cors')
const rateLimit = require('express-rate-limit')
const { Resend } = require('resend')

const app = express()
app.set('trust proxy', 1)
const PORT = process.env.PORT || 3001

const resend = new Resend(process.env.RESEND_API_KEY)

app.use(cors({
  origin: process.env.CLIENT_URL,
  methods: ['GET', 'POST', 'PATCH', "DELETE"],
}))


app.use(express.json())
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  standardHeaders: true,
  legacyHeaders: false,
  message: { error: 'ძალიან ბევრი მოთხოვნა. სცადეთ 15 წუთში.' },
})

function escapeHtml(str) {
  if (!str) return ''
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;')
}

function validateContact(body) {
  const { name, lastName, phone, email, service, message } = body
  if (!name?.trim())                                               return 'სახელი სავალდებულოა'
  if (!lastName?.trim())                                           return 'გვარი სავალდებულოა'
  if (!phone?.trim())                                              return 'ტელეფონი სავალდებულოა'
  if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return 'ელ-ფოსტა არასწორია'
  if (!service?.trim())                                            return 'სერვისი სავალდებულოა'
  if (!message?.trim() || message.trim().length < 5)               return 'შეტყობინება ძალიან მოკლეა'
  return null
}

// ─── Email: admin notification ─────────────────────────────────────────────
function adminHtml(d) {
  const ts = new Date().toLocaleString('ka-GE', { timeZone: 'Asia/Tbilisi' })
  return `<!DOCTYPE html>
<html lang="ka">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{background:#f5e6d3;font-family:'Segoe UI',Arial,sans-serif;padding:24px}
  .card{max-width:620px;margin:0 auto;border-radius:20px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,.12)}
  .top{background:linear-gradient(135deg,#f97316 0%,#facc15 100%);padding:36px 32px;text-align:center}
  .badge{display:inline-block;background:rgba(255,255,255,.25);color:#fff;font-size:11px;font-weight:700;letter-spacing:1.2px;text-transform:uppercase;padding:4px 14px;border-radius:20px;margin-bottom:14px}
  .top h1{color:#fff;font-size:26px;font-weight:800;margin-bottom:4px}
  .top p{color:rgba(255,255,255,.85);font-size:13px}
  .body{background:#fff;padding:36px 32px}
  .grid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:12px}
  .field{background:#fff7ed;border-left:4px solid #f97316;border-radius:0 10px 10px 0;padding:12px 16px}
  .field-full{background:#fff7ed;border-left:4px solid #f97316;border-radius:0 10px 10px 0;padding:14px 16px;margin-bottom:12px}
  .label{font-size:10px;font-weight:800;color:#f97316;letter-spacing:1.2px;text-transform:uppercase;margin-bottom:5px}
  .value{font-size:14px;color:#1c0a00;font-weight:600;word-break:break-word;line-height:1.5}
  .msg{white-space:pre-wrap}
  .foot{background:#fff7ed;padding:20px 32px;text-align:center;font-size:12px;color:#9ca3af;border-top:1px solid #fed7aa}
</style>
</head>
<body>
<div class="card">
  <div class="top">
    <div class="badge">ახალი შეტყობინება</div>
    <h1>ALBuild Group</h1>
    <p>კონტაქტის ფორმა &mdash; ${ts}</p>
  </div>
  <div class="body">
    <div class="grid">
      <div class="field"><div class="label">სახელი &amp; გვარი</div><div class="value">${escapeHtml(d.name)} ${escapeHtml(d.lastName)}</div></div>
      <div class="field"><div class="label">ტელეფონი</div><div class="value">${escapeHtml(d.phone)}</div></div>
      <div class="field"><div class="label">ელ-ფოსტა</div><div class="value">${escapeHtml(d.email)}</div></div>
      <div class="field"><div class="label">კომპანია</div><div class="value">${escapeHtml(d.company) || '&mdash;'}</div></div>
      <div class="field"><div class="label">სერვისი</div><div class="value">${escapeHtml(d.service)}</div></div>
      <div class="field"><div class="label">ბიუჯეტი</div><div class="value">${escapeHtml(d.budget) || '&mdash;'}</div></div>
    </div>
    <div class="field-full">
      <div class="label">პროექტის აღწერა</div>
      <div class="value msg">${escapeHtml(d.message)}</div>
    </div>
  </div>
  <div class="foot">ALBuild Group &bull; info@albuildgroup.com &bull; +995 555 123 456</div>
</div>
</body>
</html>`
}

// ─── Email: user auto-reply ─────────────────────────────────────────────────
function userHtml(name) {
  return `<!DOCTYPE html>
<html lang="ka">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<style>
  *{box-sizing:border-box;margin:0;padding:0}
  body{background:#f5e6d3;font-family:'Segoe UI',Arial,sans-serif;padding:24px}
  .card{max-width:560px;margin:0 auto;border-radius:20px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,.12)}
  .top{background:linear-gradient(135deg,#f97316 0%,#facc15 100%);padding:44px 32px;text-align:center}
  .check{width:68px;height:68px;background:rgba(255,255,255,.2);border-radius:50%;margin:0 auto 18px;font-size:34px;line-height:68px;text-align:center}
  .top h1{color:#fff;font-size:24px;font-weight:800;margin-bottom:6px}
  .top p{color:rgba(255,255,255,.85);font-size:13px}
  .body{background:#fff;padding:36px 32px}
  .greeting{font-size:19px;font-weight:800;color:#1c0a00;margin-bottom:14px}
  .text{color:#4b5563;font-size:14px;line-height:1.75;margin-bottom:16px}
  .highlight{background:#fff7ed;border:1.5px solid #fed7aa;border-radius:14px;padding:18px 20px;margin:22px 0}
  .highlight p{color:#7c2d12;font-weight:700;font-size:14px}
  .steps-title{font-weight:700;color:#1c0a00;font-size:14px;margin-bottom:12px}
  .step{display:flex;align-items:flex-start;gap:12px;padding:11px 0;border-bottom:1px solid #f3f4f6;font-size:13px;color:#4b5563}
  .step:last-child{border-bottom:none}
  .num{width:26px;height:26px;min-width:26px;background:linear-gradient(135deg,#f97316,#facc15);color:#fff;border-radius:50%;font-size:12px;font-weight:800;display:flex;align-items:center;justify-content:center}
  .info{margin-top:28px;padding-top:22px;border-top:1px solid #f3f4f6}
  .info p{font-size:13px;color:#6b7280;margin-bottom:6px}
  .foot{background:#fff7ed;padding:18px 32px;text-align:center;font-size:11px;color:#9ca3af;border-top:1px solid #fed7aa}
</style>
</head>
<body>
<div class="card">
  <div class="top">
    <div class="check">&#10003;</div>
    <h1>ALBuild Group</h1>
    <p>შეტყობინება წარმატებით მიღებულია</p>
  </div>
  <div class="body">
    <div class="greeting">გამარჯობა, ${escapeHtml(name)}!</div>
    <p class="text">გმადლობთ, რომ დაინტერესდით ALBuild Group-ის სერვისებით. თქვენი შეტყობინება მიღებული და დამუშავდება.</p>
    <div class="highlight">
      <p>&#9200;&nbsp; ჩვენი სპეციალისტი დაგიკავშირდება <strong>24 საათის</strong> განმავლობაში სამუშაო დღეებში.</p>
    </div>
    <div class="steps-title">შემდეგი ნაბიჯები:</div>
    <div class="step"><div class="num">1</div><span>ჩვენი სპეციალისტი გაეცნობა თქვენი პროექტის დეტალებს</span></div>
    <div class="step"><div class="num">2</div><span>დაგიკავშირდება ტელეფონით ან ელ-ფოსტით კონსულტაციისთვის</span></div>
    <div class="step"><div class="num">3</div><span>მოგამზადებს ინდივიდუალურ შეთავაზებას თქვენს პროექტზე</span></div>
    <div class="info">
      <p>&#128222;&nbsp; +995 555 123 456</p>
      <p>&#9993;&nbsp; info@albuildgroup.com</p>
      <p>&#128205;&nbsp; ვაჟა-ფშაველას გამზ. 45, თბილისი</p>
    </div>
  </div>
  <div class="foot">&copy; 2025 ALBuild Group &bull; ყველა უფლება დაცულია</div>
</div>
</body>
</html>`
}

// ─── Route ─────────────────────────────────────────────────────────────────
app.post('/api/contact', contactLimiter, async (req, res) => {
  const validationError = validateContact(req.body)
  if (validationError) {
    return res.status(400).json({ error: validationError })
  }

  const { name, lastName, phone, email, company, service, budget, message } = req.body
  const from = 'ALBuild Group <onboarding@resend.dev>'
  const adminEmail = process.env.ADMIN_EMAIL

  try {
    await Promise.all([
      resend.emails.send({
        from,
        to: adminEmail,
        subject: `📋 ახალი მოთხოვნა: ${service} — ${name} ${lastName}`,
        html: adminHtml({ name, lastName, phone, email, company, service, budget, message }),
      }),
      resend.emails.send({
        from,
        to: email,
        subject: 'ALBuild Group — თქვენი შეტყობინება მიღებულია ✓',
        html: userHtml(name),
      }),
    ])
    res.json({ success: true })
  } catch (err) {
    console.error('Resend error:', err?.message ?? err)
    res.status(500).json({ error: 'ელ-ფოსტის გაგზავნა ვერ მოხერხდა. სცადეთ მოგვიანებით.' })
  }
})

app.listen(PORT, () => console.log(`Server is running on port ${process.env.PORT}}`))
