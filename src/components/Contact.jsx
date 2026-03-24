import { useState } from 'react'

const CONTACT_INFO = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    label: 'ফোন',
    value: '+880 1956686338',
    href: 'tel:+8801956686338',
    description: 'সকাল ৯টা - রাত ১১টা',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
      </svg>
    ),
    label: 'ইমেইল',
    value: 'sheikhshaadil37@gmail.com',
    href: 'mailto:sheikhshaadil37@gmail.com',
    description: '২৪ ঘণ্টার মধ্যে উত্তর',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
      </svg>
    ),
    label: 'হেড অফিস',
    value: 'Example Plaza (3rd Floor)\nHouse#9, Road#3, Khulna 9100',
    href: null,
    description: 'বাংলাদেশ',
    color: 'text-emerald',
    bg: 'bg-emerald/10',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({ firstName: '', lastName: '', email: '', phone: '', message: '' })

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' })
  }

  return (
    <section id="contact" className="relative bg-dark py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] bg-gradient-to-b from-primary/3 to-transparent rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary ring-1 ring-primary/20 mb-4">
            যোগাযোগ
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            আমাদের সাথে{' '}
            <span className="text-gradient">কথা বলুন</span>
          </h2>
          <p className="mt-4 text-base text-white/65 max-w-lg mx-auto">
            প্রশ্ন আছে? পরামর্শ দিতে চান? আমরা সবসময় প্রস্তুত।
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact info cards */}
          <div className="lg:col-span-2 space-y-4">
            {CONTACT_INFO.map((info, i) => (
              <div
                key={i}
                className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-300 hover:bg-white/[0.04] hover:border-white/[0.1]"
              >
                <div className="flex items-start gap-x-4">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${info.bg} ${info.color}`}>
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-xs font-medium text-white/55 uppercase tracking-wider">{info.label}</p>
                    {info.href ? (
                      <a className="text-sm font-semibold text-white hover:text-primary transition-colors" href={info.href}>
                        {info.value}
                      </a>
                    ) : (
                      <span className="text-sm font-semibold text-white whitespace-pre-line">{info.value}</span>
                    )}
                    <p className="mt-0.5 text-xs text-white/50">{info.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="lg:col-span-3 rounded-3xl border border-white/[0.06] bg-white/[0.02] p-8">
            <div className="grid grid-cols-1 gap-x-6 gap-y-5 sm:grid-cols-2">
              <div>
                <label htmlFor="first-name" className="block text-xs font-medium text-white/65 mb-2">
                  নাম
                </label>
                <input
                  type="text"
                  id="first-name"
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="block w-full rounded-xl border-0 bg-white/[0.04] px-4 py-3 text-sm text-white ring-1 ring-white/[0.06] placeholder:text-white/15 focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="আপনার নাম"
                />
              </div>
              <div>
                <label htmlFor="last-name" className="block text-xs font-medium text-white/65 mb-2">
                  পদবি
                </label>
                <input
                  type="text"
                  id="last-name"
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="block w-full rounded-xl border-0 bg-white/[0.04] px-4 py-3 text-sm text-white ring-1 ring-white/[0.06] placeholder:text-white/15 focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="আপনার পদবি"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-xs font-medium text-white/65 mb-2">
                  ইমেইল
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="block w-full rounded-xl border-0 bg-white/[0.04] px-4 py-3 text-sm text-white ring-1 ring-white/[0.06] placeholder:text-white/15 focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="আপনার ইমেইল"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone" className="block text-xs font-medium text-white/65 mb-2">
                  ফোন নম্বর
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="block w-full rounded-xl border-0 bg-white/[0.04] px-4 py-3 text-sm text-white ring-1 ring-white/[0.06] placeholder:text-white/15 focus:ring-2 focus:ring-primary/50 transition-all"
                  placeholder="০১XXXXXXXXX"
                />
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-xs font-medium text-white/65 mb-2">
                  বার্তা
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="block w-full rounded-xl border-0 bg-white/[0.04] px-4 py-3 text-sm text-white ring-1 ring-white/[0.06] placeholder:text-white/15 focus:ring-2 focus:ring-primary/50 transition-all resize-none"
                  placeholder="আপনার বার্তা লিখুন..."
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                type="submit"
                className="rounded-xl bg-gradient-to-r from-primary to-accent px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                বার্তা পাঠান
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
