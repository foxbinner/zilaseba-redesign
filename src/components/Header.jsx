import { useState, useEffect } from 'react'

const NAV_LINKS = [
  { label: 'হোম', href: '#hero' },
  { label: 'ফিচার', href: '#features' },
  { label: 'সেবাসমূহ', href: '#services' },
  { label: 'ডাউনলোড', href: '#download' },
  { label: 'যোগাযোগ', href: '#contact' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-2xl px-6 py-3 transition-all duration-500 ${
          scrolled
            ? 'bg-dark/80 backdrop-blur-2xl shadow-lg shadow-black/20 border border-white/5'
            : 'bg-white/[0.03] backdrop-blur-xl border border-white/[0.06]'
        }`}
      >
        <a href="#hero" className="flex items-center gap-x-2.5">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg overflow-hidden">
            <img src="/images/favicon.webp" alt="জেলা সেবা" className="h-8 w-8 object-cover" />
          </div>
          <span className="text-lg font-bold text-white tracking-tight">
            জেলা সেবা
          </span>
        </a>

        <div className="hidden md:flex items-center gap-x-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-white/80 rounded-lg transition-all duration-200 hover:text-white hover:bg-white/[0.06]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-x-3">
          <a
            href="tel:+8801956686338"
            className="flex items-center gap-x-1.5 text-sm font-medium text-white/80 transition-colors hover:text-white"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
          </a>
          <a
            href="#download"
            className="relative group rounded-xl bg-gradient-to-r from-primary to-accent px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:shadow-lg hover:shadow-primary/25"
          >
            <span className="relative z-10">ডাউনলোড</span>
          </a>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden flex items-center justify-center h-9 w-9 rounded-lg text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Toggle menu"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
            {mobileOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            )}
          </svg>
        </button>
      </nav>

      {mobileOpen && (
        <div className="md:hidden mt-2 mx-auto max-w-6xl">
          <div className="rounded-2xl bg-dark/90 backdrop-blur-2xl border border-white/5 p-4 shadow-xl">
            <div className="space-y-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-white/80 transition-colors hover:text-white hover:bg-white/5"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/5">
              <a
                href="#download"
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl bg-gradient-to-r from-primary to-accent px-4 py-3 text-center text-sm font-semibold text-white"
              >
                ফ্রি ডাউনলোড করুন
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
