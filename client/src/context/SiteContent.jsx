import { createContext, useContext, useState, useEffect } from 'react'

export const DEFAULT_CONTENT = {
  hero: {
    badge: 'კეთილი იყოს თქვენი მობრძანება',
    headline: 'ALBuild Group',
    tagline: 'ვაშენებთ მტკიცე და საიმედო ნაგებობებს',
    ctaText: 'დაგვიკავშირდით',
    backgroundImage: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1600&q=80',
  },
  about: {
    badge: 'ვინ ვართ ჩვენ',
    heading: 'ვქმნით ხარისხიან და საიმედო სივრცეებს',
    text1: 'AlBuild Group წარმოადგენს სამშენებლო კომპანიას, პარტნიორებთან თანამშრომლობით კომპანიამ წარმატებით დაასრულა ორი საცხოვრებელი კორპუსის მშენებლობა. ასევე, აქტიურად მონაწილეობდა სხვადასხვა არქიტექტურულ და სამშენებლო პროექტებში, სადაც შეასრულა როგორც არქიტექტურული დაგეგმარების, ასევე სამშენებლო სამუშაოები მაღალი პროფესიონალიზმით. რომელიც მოღვაწეობს თბილისში და რომლის მთავარი მიზანია პროექტების მაღალი ხარისხითა და პროფესიონალური სტანდარტებით განხორციელება.',
    text2: 'ჩვენი კვალიფიციური ინჟინრებისა და ოსტატების გუნდი უზრუნველყოფს, რომ ყველა პროექტი შესრულდეს უმაღლეს სტანდარტებზე — დროულად, ბიუჯეტის ფარგლებში და გამძლედ.',
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80',
    stats: [
      { value: '15+', label: 'წლის გამოცდილება' },
      { value: '200+', label: 'დასრულებული პროექტი' },
      { value: '50+', label: 'კმაყოფილი კლიენტი' },
    ],
  },
  stats: [
    { target: 15, suffix: '+', label: 'წლის გამოცდილება' },
    { target: 200, suffix: '+', label: 'დასრულებული პროექტი' },
    { target: 50, suffix: '+', label: 'კმაყოფილი კლიენტი' },
    { target: 80, suffix: '+', label: 'გუნდის წევრი' },
  ],
  services: {
    badge: 'რას გთავაზობთ',
    heading: 'ჩვენი სერვისები',
    items: [
      {
        icon: 'building',
        title: 'მშენებლობა',
        description: 'სრული მასშტაბის მშენებლობა საძირკვლიდან სრულ დასრულებამდე. საცხოვრებელი, კომერციული და სამრეწველო შენობები, აგებული უმაღლეს სტანდარტებზე.',
        fullDescription: 'ჩვენ ვახორციელებთ ნებისმიერი მოცულობის სამშენებლო პროექტებს — საცხოვრებელი სახლებიდან დაწყებული კომერციული და სამრეწველო ობიექტებამდე. ჩვენი გამოცდილი ინჟინრების გუნდი უზრუნველყოფს პროექტის ყველა ეტაპის კონტროლს: დაგეგმვიდან ჩაბარებამდე.',
        features: ['საძირკვლის სამუშაოები', 'ბლოკური და ინდივიდუალური სახლების მშენებლობა', 'მაღალი ხარისხის სამშენებლო მასალები', 'სტანდარტებისა და უსაფრთხოების სრული დაცვა', 'სრული კონსტრუქციული მშენებლობა', 'ფასადისა და ინტერიერის სამუშაოები', 'ინჟინრული სისტემები', 'ხარისხის კონტროლი'],
        image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80',
      },
      {
        icon: 'hammer',
        title: 'რეკონსტრუქცია',
        description: 'ახალი სიცოცხლე შეიტანეთ თქვენს სივრცეებში. ჩვენ ვახორციელებთ ნებისმიერი მოცულობის სარემონტო სამუშაოებს — მინიმალური შეფერხებით და მაქსიმალური ხარისხით.',
        fullDescription: 'ძველი და დაზიანებული ნაგებობების სრული განახლება. ჩვენ ვახორციელებთ როგორც კოსმეტიკური, ასევე კაპიტალური სარემონტო სამუშაოებს, დამკვეთის სურვილებისა და ბიუჯეტის გათვალისწინებით.',
        features: ['კაპიტალური რემონტი', 'შიდა და გარე რემონტი', 'სივრცის ოპტიმიზაცია', 'საინჟინრო სისტემების განახლება', 'ენერგოეფექტური გადაწყვეტები', 'კოსმეტიკური განახლება', 'ფასადის რეაბილიტაცია', 'სახურავის სამუშაოები', 'ინტერიერის ტრანსფორმაცია'],
        image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=1200&q=80',
      },
      {
        icon: 'clipboard',
        title: 'პროექტის მართვა',
        description: 'პროექტის სრული მართვა — დაგეგმვიდან და დაბიუჯეტებიდან კოორდინაციამდე და ჩაბარებამდე. ჩვენ ყველაფერს კონტროლის ქვეშ ვინახავთ.',
        fullDescription: 'პროფესიული პროექტ-მენეჯმენტი — ვზრუნავთ ყველა დეტალზე, რომ თქვენ მხოლოდ შედეგზე ფოკუსდეთ. ვადების, ბიუჯეტისა და ხარისხის სრული კონტროლი ჩვენი პასუხისმგებლობაა.',
        features: ['გეგმის შედგენა და ბიუჯეტირება', 'ბიუჯეტის დაგეგმვა და კონტროლი', 'სამუშაო პროცესის მონიტორინგი', 'რესურსების მართვა', 'თანამედროვე პროგრამული კონტროლი', 'კონტრაქტორების კოორდინაცია', 'ვადების კონტროლი', 'ხარისხის ზედამხედველობა', 'ანგარიშგება'],
        image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1200&q=80',
      },
    ],
  },
  projects: {
    badge: 'ჩვენი სამუშაო',
    heading: 'გამორჩეული პროექტები',
    items: [
      {
        src: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80',
        title: 'საოფისე კომპლექსი',
        category: 'კომერციული',
        year: '2024',
        client: 'TBC Bank',
        location: 'თბილისი, ვაკე',
        area: '3,200 მ²',
        description: 'თანამედროვე საოფისე კომპლექსი, რომელიც შექმნილია 21-ე საუკუნის სამუშაო გარემოს მოთხოვნებთან შესაბამისად. პროექტი მოიცავს ღია სამუშაო სივრცეებს, კონფერენც-დარბაზებს და სრულ ინფრასტრუქტურას.',
        gallery: [],
      },
      {
        src: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
        title: 'თანამედროვე საცხოვრებელი',
        category: 'საცხოვრებელი',
        year: '2023',
        client: 'კერძო დამკვეთი',
        location: 'თბილისი, საბურთალო',
        area: '450 მ²',
        description: 'ექსკლუზიური კერძო სახლი, რომელშიც გაერთიანებულია თანამედროვე არქიტექტურა და ქართული ტრადიციები. სახლი აღჭურვილია სმარტ-ჰომ სისტემებით და ენერგოეფექტური გათბობა-გაგრილებით.',
        gallery: [],
      },
      {
        src: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80',
        title: 'სამრეწველო ობიექტი',
        category: 'სამრეწველო',
        year: '2023',
        client: 'Georgia Steel',
        location: 'რუსთავი',
        area: '12,000 მ²',
        description: 'მაღალი სიმძლავრის სამრეწველო ობიექტი, რომელიც შეიქმნა საწარმოო პროცესების ოპტიმიზაციის მიზნით. მოიცავს სასაწყობო სივრცეებს, ადმინისტრაციულ კორპუსს და სატრანსპორტო ინფრასტრუქტურას.',
        gallery: [],
      },
      {
        src: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&q=80',
        title: 'პრემიუმ ვილა',
        category: 'საცხოვრებელი',
        year: '2024',
        client: 'კერძო დამკვეთი',
        location: 'მცხეთა',
        area: '680 მ²',
        description: 'ლუქსუსური ვილა ბუნებრივ გარემოში, ფანჯრებიდან მდინარისა და მთის პანორამული ხედებით. პროექტი მოიცავს სველ წერტილებს, ბაღს, აუზს და სვეტ-ნებისმიერ სახვით ეზოს.',
        gallery: [],
      },
      {
        src: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80',
        title: 'საცხოვრებელი კომპლექსი',
        category: 'კომერციული',
        year: '2022',
        client: 'Silk Road Invest',
        location: 'თბილისი, გლდანი',
        area: '28,000 მ²',
        description: 'მულტიფუნქციური საცხოვრებელი კომპლექსი 12 კორპუსით, 800-ზე მეტი ბინით. კომპლექსი მოიცავს კომერციულ სივრცეებს, ბავშვთა მოედნებს, სპორტულ ინფრასტრუქტურას და პარკინგს.',
        gallery: [],
      },
      {
        src: 'https://images.unsplash.com/photo-1524230572899-a752b3835840?w=600&q=80',
        title: 'კომერციული ნაგებობა',
        category: 'კომერციული',
        year: '2023',
        client: 'Carrefour Georgia',
        location: 'თბილისი, დიდუბე',
        area: '5,500 მ²',
        description: 'სავაჭრო ცენტრი, რომელიც განკუთვნილია დიდი ფართობის სხვადასხვა პროფილის მაღაზიებისთვის. პროექტი მოიცავს სარეკლამო ფასადს, ფართო პარკინგს და სრულ ინჟინრულ სისტემებს.',
        gallery: [],
      },
    ],
  },
  contact: {
    badge: 'დაგვიკავშირდით',
    heading: 'კონტაქტი',
    subtext: 'გაქვთ პროექტის იდეა? შეავსეთ ფორმა და ჩვენი გუნდი 24 საათის განმავლობაში დაგიკავშირდებათ.',
    address: 'სამტრედია მშვიდობის 34',
    phone: '+995 577 505 859',
    email: 'albuild777@gmail.com',
    hours: 'ორშ – პარ: 09:00 – 18:00',
  },
  footer: {
    tagline: 'ვაშენებთ მტკიცე და საიმედო ნაგებობებს 2020 წლიდან. თქვენი სანდო პარტნიორი ყველა სამშენებლო პროექტში.',
    copyright: '© 2025 ALBuild Group. ყველა უფლება დაცულია.',
    socials: { facebook: '#', instagram: '#', linkedin: '#', youtube: '#' },
  },
  process: {
    badge: 'სამუშაო პროცესი',
    heading: 'როგორ ვმუშაობთ',
    subtext: 'გამჭვირვალე, სტრუქტურირებული და ეფექტური — ჩვენი 4-ეტაპიანი პროცესი გაძლევს სრულ კონტროლს ყოველ გადაწყვეტილებაზე.',
    ctaText: 'პროცესი დავიწყოთ',
    steps: [
      { num: '01', icon: 'chat',     title: 'კონსულტაცია და შეფასება', desc: 'ჩვენი ექსპერტი გუნდი გთავაზობთ უფასო საველე კონსულტაციას. ვამოწმებთ ობიექტს, ვაანალიზებთ მოთხოვნებს, განვიხილავთ ბიუჯეტსა და ვადებს — ისე, რომ პირველივე შეხვედრიდან გქონდეთ სრული სურათი.' },
      { num: '02', icon: 'map',      title: 'დიზაინი და დაგეგმვა', desc: 'ჩვენი არქიტექტორები BIM ტექნოლოგიის გამოყენებით ქმნიან სრულ საპროექტო დოკუმენტაციას. 3D ვიზუალიზაცია გაძლევთ შესაძლებლობას, ნახოთ სამომავლო ნაგებობა ჯერ კიდევ მშენებლობის დაწყებამდე.' },
      { num: '03', icon: 'building', title: 'მშენებლობა', desc: 'კვალიფიციური ოსტატებისა და ინჟინრების გუნდი ახორციელებს ყველა სამუშაოს უმაღლეს სტანდარტზე. ყოველ კვირა გიგზავნით ვიზუალურ ანგარიშს. ხარისხის კონტროლი — ყოველ ეტაპზე, ნებისმიერი შეყოვნების გარეშე.' },
      { num: '04', icon: 'check',    title: 'ჩაბარება და გარანტია', desc: 'პროექტი სრულდება საბოლოო ტექნიკური ინსპექციით. ვაბარებთ ობიექტს სრული სახელმწიფო დოკუმენტაციით. ყოველ ნაშრომს თან ახლავს 2 წლის გარანტია — ჩვენი ხარისხის საუკეთესო მტკიცებულება.' },
    ],
    highlights: [
      { value: '24/7',    label: 'კომუნიკაცია',   desc: 'ჩვენი მენეჯერი ყოველთვის ხელმისაწვდომია' },
      { value: '100%',    label: 'გამჭვირვალობა', desc: 'ყოველ ეტაპზე ხედავთ ხარჯებსა და პროგრესს' },
      { value: '2 წელი', label: 'გარანტია',       desc: 'ყოველ ჩაბარებულ ობიექტზე სრული გარანტია' },
    ],
  },
  testimonials: {
    badge: 'კლიენტების შეფასებები',
    heading: 'რას ამბობენ ჩვენი კლიენტები',
    subtext: '200-ზე მეტი დასრულებული პროექტი, ასობით კმაყოფილი კლიენტი — და ყოველ მათგანში ჩვენი ხელმოწერა.',
    items: [
      { name: 'გიორგი კვარაცხელია', role: 'CEO, TBC Invest', text: 'ALBuild Group-თან მუშაობა ნამდვილი სიამოვნება იყო. ჩვენი 3,200 კვ.მ. საოფისე კომპლექსი ჩაბარდა ვადაზე ადრე და ბიუჯეტის გადამეტების გარეშე. ყოველ ეტაპზე ვგრძნობდი, რომ ეს გუნდი ჩვენი სრულფასოვანი ბიზნეს-პარტნიორია.', rating: 5, project: 'საოფისე კომპლექსი · ვაკე · 2024', initials: 'გკ' },
      { name: 'ნინო ბერიძე', role: 'კერძო დამკვეთი', text: 'ჩვენი ოჯახური სახლი ALBuild Group-მა ააგო. ყოველ კვირა ვიღებდი ვიდეო-ანგარიშს, ყველა ცვლილება ზუსტად ჩანდა. ახლა ჩვენს სახლში ვცხოვრობთ — და ვამაყობთ ყოველი კედლით, ყოველი დეტალით.', rating: 5, project: 'კერძო სახლი · საბურთალო · 2023', initials: 'ნბ' },
      { name: 'დავით ჯიქია', role: 'CEO, Silk Road Invest', text: 'გლდანის 28,000 კვ.მ. საცხოვრებელი კომპლექსი ჩვენი ყველაზე მსხვილი პროექტი იყო. ALBuild Group-ის გუნდმა ოსტატურად გაართვა ყველა გამოწვევას. პროფესიონალიზმი, პასუხისმგებლობა, ხარისხი — ყველა ფრონტზე.', rating: 5, project: 'საცხოვრებელი კომპლექსი · გლდანი · 2022', initials: 'დჯ' },
    ],
    metrics: [
      { value: '4.9 / 5', label: 'საშუალო შეფასება',      sub: '200+ მიმოხილვის საფუძველზე' },
      { value: '98%',     label: 'კმაყოფილი კლიენტი',    sub: 'ყველა ჩვენს პროექტში' },
      { value: '85%',     label: 'განმეორებითი დამკვეთი', sub: 'ჩვენი ყველაზე დიდი სიამაყე' },
    ],
  },
  partners: {
    badge: 'ჩვენ ნდობა გამოუხატეს — საქართველოს წამყვანი კომპანიებმა',
    items: [
      { name: 'TBC Bank',         abbr: 'TBC' },
      { name: 'Bank of Georgia',  abbr: 'BOG' },
      { name: 'Silk Road Group',  abbr: 'SRG' },
      { name: 'Carrefour Georgia',abbr: 'CRF' },
      { name: 'Georgia Steel',    abbr: 'GS'  },
      { name: 'Castel Group',     abbr: 'CG'  },
      { name: 'Wissol Group',     abbr: 'WG'  },
      { name: 'Redix Group',      abbr: 'RDX' },
    ],
  },
}

const STORAGE_KEY = 'siteContent'

function loadContent() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (!saved) return DEFAULT_CONTENT
    const parsed = JSON.parse(saved)
    // Merge to ensure new default fields (like fullDescription, features) exist
    return {
      ...DEFAULT_CONTENT,
      ...parsed,
      services: {
        ...DEFAULT_CONTENT.services,
        ...parsed.services,
        items: parsed.services?.items?.map((item, i) => ({
          ...DEFAULT_CONTENT.services.items[i],
          ...item,
        })) ?? DEFAULT_CONTENT.services.items,
      },
      projects: {
        ...DEFAULT_CONTENT.projects,
        ...parsed.projects,
        items: parsed.projects?.items?.map((item, i) => ({
          ...DEFAULT_CONTENT.projects.items[i],
          ...item,
        })) ?? DEFAULT_CONTENT.projects.items,
      },
    }
  } catch {
    return DEFAULT_CONTENT
  }
}

export function publishContent(data) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  window.dispatchEvent(new CustomEvent('siteContentUpdated', { detail: data }))
}

const SiteContentContext = createContext({ content: DEFAULT_CONTENT })

export const useSiteContent = () => useContext(SiteContentContext)

export const SiteContentProvider = ({ children }) => {
  const [content, setContent] = useState(loadContent)

  useEffect(() => {
    const onStorage = e => {
      if (e.key === STORAGE_KEY && e.newValue) {
        try { setContent(JSON.parse(e.newValue)) } catch {}
      }
    }
    const onUpdate = e => setContent(e.detail)
    window.addEventListener('storage', onStorage)
    window.addEventListener('siteContentUpdated', onUpdate)
    return () => {
      window.removeEventListener('storage', onStorage)
      window.removeEventListener('siteContentUpdated', onUpdate)
    }
  }, [])

  return (
    <SiteContentContext.Provider value={{ content }}>
      {children}
    </SiteContentContext.Provider>
  )
}
