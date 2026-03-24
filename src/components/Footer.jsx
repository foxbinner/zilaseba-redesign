const navigation = {
  services: [
    { name: 'রাইড শেয়ারিং', href: '#services' },
    { name: 'ডেলিভারি সার্ভিস', href: '#services' },
    { name: 'ডক্টর কনসালটেশন', href: '#services' },
    { name: 'ব্লাড ইমার্জেন্সি', href: '#contact' },
  ],
  company: [
    { name: 'আমাদের সম্পর্কে', href: '#features' },
    { name: 'প্ল্যাটফর্ম', href: '#features' },
    { name: 'ক্যারিয়ার', href: '#contact' },
    { name: 'মিডিয়া', href: '#contact' },
  ],
  support: [
    { name: 'যোগাযোগ', href: '#contact' },
    { name: 'হেল্পলাইন', href: 'tel:+8801956686338' },
    { name: 'প্রাইভেসি পলিসি', href: '#' },
    { name: 'ব্যবহারের শর্তাবলী', href: '#' },
  ],
  social: [
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/globalzilasebabd',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'YouTube',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
        </svg>
      ),
    },
    {
      name: 'LinkedIn',
      href: '#',
      icon: (props) => (
        <svg fill="currentColor" viewBox="0 0 24 24" {...props}>
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
    },
  ],
}

export default function Footer() {
  return (
    <footer className="relative bg-dark border-t border-white/[0.04]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Footer</h2>

      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex items-center gap-x-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-accent">
                <span className="text-xs font-bold text-white">জ</span>
              </div>
              <span className="text-xl font-bold text-white">জেলা সেবা</span>
            </div>
            <p className="text-sm leading-7 text-white/60 max-w-xs">
              বাংলাদেশের ১ নম্বর ডিজিটাল সার্ভিস প্ল্যাটফর্ম। রাইড শেয়ারিং,
              তাজা খাবার ডেলিভারি, ডক্টর কনসালটেশন ও ব্লাড ইমার্জেন্সি —
              আপনার প্রতিদিনের সঙ্গী।
            </p>
            <div className="flex gap-x-4">
              {navigation.social.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/[0.04] text-white/60 transition-all duration-300 hover:bg-white/[0.08] hover:text-white"
                >
                  <span className="sr-only">{item.name}</span>
                  <item.icon className="h-4 w-4" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="mt-16 grid grid-cols-3 gap-8 xl:col-span-2 xl:mt-0">
            <div>
              <h3 className="text-xs font-semibold text-white/70 uppercase tracking-wider">সেবাসমূহ</h3>
              <ul role="list" className="mt-6 space-y-3">
                {navigation.services.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm text-white/55 transition-colors hover:text-white">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-white/70 uppercase tracking-wider">কোম্পানি</h3>
              <ul role="list" className="mt-6 space-y-3">
                {navigation.company.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm text-white/55 transition-colors hover:text-white">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-xs font-semibold text-white/70 uppercase tracking-wider">সাপোর্ট</h3>
              <ul role="list" className="mt-6 space-y-3">
                {navigation.support.map((item) => (
                  <li key={item.name}>
                    <a href={item.href} className="text-sm text-white/55 transition-colors hover:text-white">
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <h3 className="text-xs font-semibold text-white/70 uppercase tracking-wider">অ্যাপ</h3>
                <div className="mt-3">
                  <a href="https://play.google.com/store/apps/details?id=com.global.zilaseba" target="_blank" rel="noopener noreferrer" className="inline-block transition-all duration-300 hover:scale-105 hover:opacity-80">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                      alt="Get it on Google Play"
                      className="h-9"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 border-t border-white/[0.04] pt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-between">
          <p className="text-xs text-white/45">
            &copy; {new Date().getFullYear()} জেলা সেবা (Zila Seba). সর্বস্বত্ব সংরক্ষিত।
          </p>
          <p className="text-xs text-white/40 flex items-center gap-x-1.5">
            Made by{' '}
            <a href="https://github.com/foxbinner" target="_blank" rel="noopener noreferrer" className="font-medium text-white/55 hover:text-white transition-colors">
              LittleFox
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
