export default function BloodEmergency() {
  return (
    <section className="relative overflow-hidden bg-dark">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-6">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background image */}
          <div className="absolute inset-0">
            <img
              src="/images/blood-donor.png"
              alt=""
              className="h-full w-full object-cover opacity-15"
              aria-hidden="true"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-red-600/95 via-red-500/90 to-red-600/85" />
          <div className="absolute inset-0 noise" />

          <div className="relative px-8 py-14 sm:px-16">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:justify-between">
              <div className="flex items-center gap-x-6">
                {/* Pulsing heart icon */}
                <div className="relative flex-shrink-0">
                  <div className="absolute inset-0 animate-ping rounded-2xl bg-white/10" style={{ animationDuration: '2s' }} />
                  <div className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="text-2xl font-bold text-white sm:text-3xl">
                    জরুরি রক্তের প্রয়োজন?
                  </h4>
                  <p className="mt-2 text-sm text-red-100/70 max-w-lg">
                    যেকোনো রক্তের গ্রুপ, যেকোনো সময় — আমরা ২৪/৭ আপনার পাশে। এক কলেই পেয়ে যান রক্তদাতা।
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4">
                <a
                  href="tel:+8801700962537"
                  className="group inline-flex items-center gap-x-2.5 rounded-2xl bg-white px-7 py-4 text-sm font-bold text-red-600 shadow-xl transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 animate-glow"
                  style={{ '--tw-shadow-color': 'rgba(255,255,255,0.2)' }}
                >
                  <svg className="h-5 w-5 transition-transform group-hover:scale-110" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  এখনই কল করুন
                </a>
                <span className="text-sm font-medium text-red-100/60">+8801700962537</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
