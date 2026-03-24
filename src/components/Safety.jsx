const SAFETY_FEATURES = [
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: 'র\u200Dযাপিড রেসপন্স টিম',
    description: 'SOS বাটন চাপলেই কাছের টিম মিনিটের মধ্যে আপনার কাছে।',
    color: 'text-primary',
    bg: 'bg-primary/10',
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
      </svg>
    ),
    title: 'লাইভ লোকেশন শেয়ারিং',
    description: 'পরিবার ও বন্ধুদের সাথে রিয়েল-টাইম লোকেশন শেয়ার করুন।',
    color: 'text-emerald',
    bg: 'bg-emerald/10',
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
      </svg>
    ),
    title: '২৪/৭ কল সেন্টার',
    description: 'দিন-রাত যেকোনো সময় আমাদের কাস্টমার কেয়ারে কল করুন।',
    color: 'text-accent',
    bg: 'bg-accent/10',
  },
  {
    icon: (
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
      </svg>
    ),
    title: 'ভেরিফাইড রাইডার',
    description: 'সকল রাইডার NID ও ব্যাকগ্রাউন্ড চেক সম্পন্ন।',
    color: 'text-gold',
    bg: 'bg-gold/10',
  },
]

export default function Safety() {
  return (
    <section className="relative bg-dark py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-[500px] w-[500px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div>
            <span className="inline-flex items-center rounded-full bg-emerald/10 px-4 py-1.5 text-xs font-semibold text-emerald ring-1 ring-emerald/20 mb-4">
              নিরাপত্তা
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              আপনার সুরক্ষা
              <br />
              <span className="text-gradient">আমাদের সর্বোচ্চ প্রতিশ্রুতি</span>
            </h2>
            <p className="mt-6 text-base text-white/60 max-w-lg">
              আধুনিক প্রযুক্তি ও প্রশিক্ষিত টিমের সমন্বয়ে তৈরি করেছি
              একটি সম্পূর্ণ নিরাপত্তা ব্যবস্থা। #HereWithYou
            </p>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SAFETY_FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-300 hover:bg-white/[0.04] hover:border-white/[0.1]"
                >
                  <div className={`flex h-9 w-9 items-center justify-center rounded-xl ${feature.bg} ${feature.color} mb-3`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-white mb-1">{feature.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Merchant CTA */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden border border-white/[0.06]">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-accent/5 to-emerald/10" />
              <div className="absolute inset-0 noise" />

              <div className="relative px-8 py-16 sm:px-12 text-center">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/[0.06] mb-6">
                  <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.15c0 .415.336.75.75.75z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white sm:text-3xl">
                  আপনার পণ্য বিক্রয় করুন
                  <br />
                  <span className="text-gradient">সারা বাংলাদেশে</span>
                </h3>
                <p className="mt-4 text-sm text-white/65 max-w-sm mx-auto">
                  জয়েন করুন দেশের সবচেয়ে নির্ভরযোগ্য ডেলিভারি নেটওয়ার্কে।
                  কোনো মার্কেটপ্লেস ফি নেই, শুধু ডেলিভারি চার্জ।
                </p>
                <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href="#download"
                    className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-dark shadow-lg transition-all hover:shadow-xl hover:-translate-y-0.5"
                  >
                    মার্চেন্ট হিসেবে যোগ দিন
                  </a>
                  <a href="#contact" className="group text-sm font-semibold text-white/50 hover:text-white transition-colors">
                    বিস্তারিত জানুন
                    <span className="inline-block ml-1 transition-transform group-hover:translate-x-1">&#8594;</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
