export default function AppDownload() {
  return (
    <section id="download" className="relative bg-dark py-24 sm:py-32 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/4 h-[600px] w-[600px] bg-primary/8 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 right-1/4 h-[400px] w-[400px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative rounded-[2.5rem] overflow-hidden border border-white/[0.06]">
          {/* Inner gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-section-dark via-dark-card to-section-dark" />
          <div className="absolute inset-0 noise" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center px-8 py-16 sm:px-16 lg:px-20">
            {/* Left: Content */}
            <div>
              <div className="inline-flex items-center gap-x-2 rounded-full bg-emerald/10 px-4 py-1.5 text-xs font-semibold text-emerald ring-1 ring-emerald/20 mb-6">
                <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                Google Play Store-এ পাওয়া যাচ্ছে
              </div>

              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl leading-tight">
                জেলা সেবা অ্যাপ
                <br />
                <span className="text-gradient">ডাউনলোড করুন আজই</span>
              </h2>

              <p className="mt-6 text-base text-white/65 max-w-lg">
                লাখো মানুষের বিশ্বস্ত সঙ্গী। রাইড, ডেলিভারি, পেমেন্ট,
                ডক্টর কনসালটেশন — সব সেবা এক অ্যাপেই।
              </p>

              {/* Stats pills */}
              <div className="mt-8 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-x-1.5 rounded-xl bg-white/[0.04] px-4 py-2.5 text-sm ring-1 ring-white/[0.06]">
                  <svg className="h-4 w-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  <span className="font-semibold text-white">4.9</span>
                  <span className="text-white/65">রেটিং</span>
                </span>
                <span className="inline-flex items-center gap-x-1.5 rounded-xl bg-white/[0.04] px-4 py-2.5 text-sm ring-1 ring-white/[0.06]">
                  <span className="font-semibold text-white">১০ লাখ+</span>
                  <span className="text-white/65">ডাউনলোড</span>
                </span>
                <span className="inline-flex items-center gap-x-1.5 rounded-xl bg-white/[0.04] px-4 py-2.5 text-sm ring-1 ring-white/[0.06]">
                  <span className="font-semibold text-emerald">100%</span>
                  <span className="text-white/65">ফ্রি</span>
                </span>
              </div>

              {/* CTA */}
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <a
                  href="https://play.google.com/store/apps/details?id=com.global.zilaseba"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-all duration-300 hover:scale-105 hover:-translate-y-1"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                    alt="Get it on Google Play"
                    className="h-14"
                  />
                </a>
                <a
                  href="#contact"
                  className="group inline-flex items-center gap-x-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
                >
                  আরও জানুন
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Right: App screenshot */}
            <div className="relative flex justify-center">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[350px] w-[350px] bg-gradient-to-tr from-primary/15 to-accent/15 rounded-full blur-[80px]" />
              <div className="relative">
                <img
                  src="/images/app-screenshot.png"
                  alt="জেলা সেবা অ্যাপ"
                  width={400}
                  height={400}
                  loading="lazy"
                  className="relative z-10 w-full max-w-[360px] rounded-2xl shadow-2xl ring-1 ring-white/10"
                />
                {/* Decorative elements */}
                <div className="absolute -top-6 -right-6 h-24 w-24 rounded-2xl border border-white/[0.04] bg-white/[0.02] backdrop-blur-sm" />
                <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-xl border border-white/[0.04] bg-white/[0.02] backdrop-blur-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
