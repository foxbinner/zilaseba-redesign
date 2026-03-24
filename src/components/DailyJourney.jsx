const SERVICES = [
  {
    src: '/images/rental.jpg',
    title: 'ভাড়া সেবা',
    description: 'গাড়ি, বাসা, পণ্য — যা প্রয়োজন ভাড়ায় খুঁজুন। উপলব্ধ ভাড়া তালিকা এক জায়গায়।',
    tag: 'জনপ্রিয়',
    tagColor: 'bg-primary/20 text-primary ring-primary/30',
    iconBg: 'bg-primary/10',
    icon: (
      <svg className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
      </svg>
    ),
  },
  {
    src: '/images/restaurant.jpg',
    title: 'হোটেল ও রেস্টুরেন্ট',
    description: 'কাছের সেরা হোটেল, রেস্টুরেন্ট ও খাবারের ঠিকানা। রিভিউ দেখুন, লোকেশন খুঁজুন।',
    tag: 'খাবার',
    tagColor: 'bg-emerald/20 text-emerald ring-emerald/30',
    iconBg: 'bg-emerald/10',
    icon: (
      <svg className="h-6 w-6 text-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016A3.001 3.001 0 0021 9.349m-18 0a2.997 2.997 0 00.658-2.098L4.074 3H19.93l.417 4.251A2.998 2.998 0 0021 9.349" />
      </svg>
    ),
  },
  {
    src: '/images/local-services.jpg',
    title: 'লোকাল সার্ভিস',
    description: 'হোম টিউটর, মেকানিক, কুরিয়ার সার্ভিস — স্থানীয় সেবাদাতাদের তথ্য খুঁজুন সহজে।',
    tag: 'ডিরেক্টরি',
    tagColor: 'bg-accent/20 text-accent-light ring-accent/30',
    iconBg: 'bg-accent/10',
    icon: (
      <svg className="h-6 w-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
  },
]

export default function DailyJourney() {
  return (
    <section id="services" className="relative bg-dark pt-24 pb-40 sm:pt-32 sm:pb-52 overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 h-[400px] w-[400px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <span className="inline-flex items-center rounded-full bg-accent/10 px-4 py-1.5 text-xs font-semibold text-accent-light ring-1 ring-accent/20 mb-4">
              সেবাসমূহ
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              স্থানীয় সেবা
              <br />
              <span className="text-gradient">আপনার হাতের কাছে</span>
            </h2>
          </div>
          <p className="mt-4 lg:mt-0 max-w-md text-base text-white/60">
            দৈনন্দিন প্রয়োজনীয় সেবা এক অ্যাপে।
            জেলা সেবা আপনার পাশে সবসময়।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className="group relative rounded-3xl overflow-hidden border border-white/[0.06] bg-dark-card transition-all duration-500 hover:border-white/[0.1]"
            >
              {/* Image section */}
              <div className="relative h-56 overflow-hidden">
                <img
                  src={service.src}
                  alt={service.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-card via-transparent to-transparent" />

                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${service.tagColor}`}>
                    {service.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className={`inline-flex h-11 w-11 items-center justify-center rounded-xl ${service.iconBg} mb-4`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-white/65 leading-relaxed">
                  {service.description}
                </p>

                <div className="mt-5 pt-5 border-t border-white/[0.04]">
                  <a href="#download" className="group/link inline-flex items-center gap-x-2 text-sm font-semibold text-white/50 transition-colors hover:text-primary">
                    শুরু করুন
                    <svg className="h-3.5 w-3.5 transition-transform group-hover/link:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* District badge */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex items-center gap-x-3 rounded-2xl bg-white/[0.03] border border-white/[0.06] px-6 py-3">
            <svg className="h-5 w-5 text-emerald" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-white/70">জেলার মানুষের বিশ্বস্ত প্ল্যাটফর্ম</span>
          </div>
        </div>
      </div>
    </section>
  )
}
