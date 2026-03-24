const BENTO_ITEMS = [
  {
    title: 'কেনাবেচা মার্কেটপ্লেস',
    description: 'পুরানো ও নতুন পণ্য সহজে কেনাবেচা করুন। মোবাইল, ইলেকট্রনিক্স, আসবাবপত্র — সবকিছু এক জায়গায়।',
    image: '/images/marketplace.jpg',
    imageClass: 'object-cover',
    span: 'lg:col-span-2 lg:row-span-2',
    size: 'large',
    accent: 'from-primary/80 to-primary/20',
  },
  {
    title: 'ডাক্তার ও ক্লিনিক',
    description: 'বাছাইকৃত ডাক্তার ও ক্লিনিকের তথ্য এক ক্লিকে। অ্যাপয়েন্টমেন্ট নিন সহজে।',
    image: '/images/doctor.jpg',
    imageClass: 'object-cover',
    span: 'lg:col-span-1',
    size: 'small',
    accent: 'from-emerald/80 to-emerald/20',
  },
  {
    title: 'ব্লাড ডোনার খুঁজুন',
    description: 'জরুরি মুহূর্তে আপনার রক্তের গ্রুপের ডোনার খুঁজে পান তাৎক্ষণিক।',
    image: '/images/blood-donor.png',
    imageClass: 'object-cover object-center',
    span: 'lg:col-span-1',
    size: 'small',
    accent: 'from-red-600/80 to-red-900/20',
  },
  {
    title: 'পর্যটন স্পট',
    description: 'সুন্দরবনসহ জেলার দর্শনীয় স্থানগুলো আবিষ্কার করুন। ভ্রমণ গাইড ও তথ্য পান।',
    image: '/images/tourism.jpg',
    imageClass: 'object-cover object-center',
    span: 'lg:col-span-1',
    size: 'small',
    accent: 'from-accent/80 to-accent/20',
  },
  {
    title: 'জরুরি সেবা',
    description: 'পুলিশ, ফায়ার সার্ভিস, অ্যাম্বুলেন্স — সব জরুরি নম্বর হাতের কাছে।',
    image: '/images/emergency.jpg',
    imageClass: 'object-cover object-center',
    span: 'lg:col-span-1',
    size: 'small',
    accent: 'from-gold/80 to-gold/20',
  },
]

export default function Platform() {
  return (
    <section id="features" className="relative bg-dark py-24 sm:py-32 overflow-hidden">
      {/* Subtle gradient orb */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[800px] bg-gradient-to-b from-primary/5 to-transparent rounded-full blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary ring-1 ring-primary/20 mb-4">
            ফিচারসমূহ
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            এক অ্যাপে{' '}
            <span className="text-gradient">সব তথ্য</span>
          </h2>
          <p className="mt-4 text-lg text-white/60">
            আপনার জেলার প্রয়োজনীয় সব তথ্য ও সেবা এক অ্যাপে
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px] lg:auto-rows-[220px]">
          {BENTO_ITEMS.map((item) => (
            <div
              key={item.title}
              className={`bento-card group relative overflow-hidden rounded-2xl ${item.span}`}
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className={`bento-image absolute inset-0 h-full w-full transition-transform duration-700 ${item.imageClass}`}
              />

              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t ${item.accent} opacity-0 mix-blend-multiply transition-opacity duration-500 group-hover:opacity-100`} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

              {/* Content */}
              <div className="relative h-full z-10">
                {/* Title + description: sit at bottom, slide up on hover */}
                <div className="absolute bottom-0 inset-x-0 px-6 pb-4 transition-transform duration-300 ease-out group-hover:-translate-y-10">
                  <h3 className={`font-bold text-white ${item.size === 'large' ? 'text-2xl sm:text-3xl' : 'text-lg'}`}>
                    {item.title}
                  </h3>
                  <p className={`mt-1.5 text-white/75 ${item.size === 'large' ? 'text-base max-w-sm' : 'text-sm'} ${item.size === 'small' ? 'line-clamp-2' : ''}`}>
                    {item.description}
                  </p>
                </div>

                {/* বিস্তারিত: hidden below card, slides up on hover */}
                <div className="absolute bottom-0 inset-x-0 px-6 pb-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out">
                  <span className="flex items-center gap-x-1.5 text-sm font-semibold text-primary">
                    বিস্তারিত
                    <svg className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
