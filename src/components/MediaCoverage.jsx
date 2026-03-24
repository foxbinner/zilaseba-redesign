const LOGOS = Array.from({ length: 6 }, (_, i) => ({
  src: `/images/logos/client-${i + 1}.svg`,
  alt: `মিডিয়া পার্টনার ${i + 1}`,
}))

export default function MediaCoverage() {
  const doubled = [...LOGOS, ...LOGOS]

  return (
    <section className="relative bg-dark py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-white/50 uppercase tracking-widest">
            বিশ্বস্ত মিডিয়া পার্টনার
          </p>
        </div>

        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-dark to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-dark to-transparent z-10" />

          <div className="flex animate-marquee items-center gap-x-16">
            {doubled.map((logo, i) => (
              <img
                key={i}
                src={logo.src}
                alt={logo.alt}
                className="max-h-10 w-36 shrink-0 object-contain opacity-20 grayscale transition-all duration-500 hover:opacity-60 hover:grayscale-0"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
