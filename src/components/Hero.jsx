export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-dark noise"
    >
      {/* Gradient orbs */}
      <div className="absolute top-[-20%] left-[-10%] h-[600px] w-[600px] rounded-full bg-primary/15 blur-[120px] animate-pulse-slow" />
      <div
        className="absolute bottom-[-20%] right-[-10%] h-[500px] w-[500px] rounded-full bg-accent/10 blur-[120px] animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-[40%] left-[50%] h-[300px] w-[300px] rounded-full bg-emerald/8 blur-[100px] animate-pulse-slow"
        style={{ animationDelay: "4s" }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 opacity-[0.03]" aria-hidden="true">
        <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="white"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 lg:px-8 lg:pt-40 lg:pb-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div>
            {/* Live badge */}
            <div className="inline-flex items-center gap-x-3 rounded-full bg-white/[0.04] px-4 py-2 text-sm ring-1 ring-white/[0.08] mb-8">
              <span className="flex items-center gap-x-1.5 font-semibold text-emerald">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
                </span>
                লাইভ
              </span>
              <span className="h-3 w-px bg-white/10" />
              <span className="text-white/70">সেবা চালু আছে আপনার জেলায়</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1]">
              <span className="text-white">দেশের ১ নম্বর</span>
              <br />
              <span className="text-gradient">ডিজিটাল প্ল্যাটফর্ম</span>
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-white/70 max-w-lg">
              রাইড শেয়ারিং, তাজা মাছ-মাংস ডেলিভারি, ডক্টর কনসালটেশন, ব্লাড
              ইমার্জেন্সি — সব এক অ্যাপে। গ্রাম থেকে শহর, আমরা আছি সবখানে।
            </p>

            {/* Feature pills */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "নিরাপদ রাইড",
                "দ্রুত ডেলিভারি",
                "২৪/৭ সাপোর্ট",
                "ফ্রি অ্যাপ",
              ].map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center gap-x-1.5 rounded-full bg-white/[0.04] px-3.5 py-1.5 text-xs font-medium text-white/75 ring-1 ring-white/[0.06]"
                >
                  <svg
                    className="h-3 w-3 text-emerald"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {tag}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#download"
                className="group relative inline-flex items-center gap-x-2 rounded-2xl bg-gradient-to-r from-primary to-accent px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-primary/20 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/30 hover:-translate-y-0.5"
              >
                <svg
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>
                ফ্রি ডাউনলোড করুন
              </a>
              <a
                href="#services"
                className="group inline-flex items-center gap-x-2 rounded-2xl px-7 py-4 text-sm font-semibold text-white/70 ring-1 ring-white/10 transition-all duration-300 hover:text-white hover:ring-white/20 hover:bg-white/[0.03]"
              >
                সেবাসমূহ দেখুন
                <svg
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </a>
            </div>

            {/* Social proof */}
            <div className="mt-12 flex items-center gap-x-6">
              <div className="flex -space-x-2.5">
                {[10, 32, 45, 57].map((n) => (
                  <img
                    key={n}
                    src={`https://i.pravatar.cc/40?img=${n}`}
                    alt="user avatar"
                    className="h-9 w-9 rounded-full object-cover ring-2 ring-dark"
                  />
                ))}
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-[10px] font-bold text-white/80 ring-2 ring-dark">
                  +50K
                </div>
              </div>
              <div className="flex flex-col gap-y-1">
                <div className="text-sm font-semibold text-white">৫০ হাজার+ মানুষ</div>
                <div className="flex items-center gap-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-3 w-3 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-xs text-white/55 ml-1">৫.০ রেটিং দিয়েছেন</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Phone image */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Decorative ring */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[420px] w-[420px] rounded-full border border-white/[0.04] animate-spin-slow" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-[340px] w-[340px] rounded-full border border-dashed border-white/[0.03]" />
            </div>

            {/* Glow behind phone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[300px] bg-gradient-to-tr from-primary/20 to-accent/20 rounded-full blur-[80px]" />

            <div className="relative animate-float">
              <img
                src="/images/hero-phone.png"
                alt="জেলা সেবা অ্যাপ"
                width={460}
                height={560}
                className="relative z-10 w-full max-w-[450px] drop-shadow-[0_20px_60px_rgba(59,130,246,0.15)]"
              />

              {/* Floating badges */}
              <div className="absolute top-16 -left-8 z-20 rounded-2xl bg-dark-card/90 backdrop-blur-xl border border-white/[0.06] px-4 py-3 shadow-xl">
                <div className="flex items-center gap-x-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald/10">
                    <svg
                      className="h-4 w-4 text-emerald"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">
                      ভেরিফাইড
                    </div>
                    <div className="text-[10px] text-white/30">সকল রাইডার</div>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-24 -right-4 z-20 rounded-2xl bg-dark-card/90 backdrop-blur-xl border border-white/[0.06] px-4 py-3 shadow-xl">
                <div className="flex items-center gap-x-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gold/10">
                    <svg
                      className="h-4 w-4 text-gold"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-white">
                      4.9 রেটিং
                    </div>
                    <div className="text-[10px] text-white/30">Play Store</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-dark to-transparent" />
    </section>
  );
}
