const DISTRICTS = [
  { name: "ঢাকা জেলা", status: "সক্রিয়", riders: "৫০+" },
  { name: "সাতক্ষীরা জেলা", status: "সক্রিয়", riders: "১০০+" },
];

export default function ServiceAreas() {
  return (
    <section className="relative bg-dark py-24 sm:py-32 overflow-hidden">
      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] bg-primary/5 rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map */}
          <div className="relative rounded-3xl overflow-hidden border border-white/[0.06] shadow-2xl">
            <iframe
              src="https://maps.google.com/maps?q=satkhira%2C%20bangladesh&z=13&output=embed"
              title="Satkhira, Bangladesh"
              aria-label="Satkhira, Bangladesh"
              className="h-80 w-full border-0 lg:h-[28rem]"
              loading="lazy"
            />
            <div className="absolute inset-0 pointer-events-none rounded-3xl ring-1 ring-inset ring-white/[0.06]" />
          </div>

          {/* Content */}
          <div>
            <span className="inline-flex items-center rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary ring-1 ring-primary/20 mb-4">
              সেবা এলাকা
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              আমরা আছি <span className="text-gradient">আপনার জেলায়</span>
            </h2>
            <p className="mt-6 text-base text-white/65 max-w-lg">
              ধীরে ধীরে সারা বাংলাদেশে সম্প্রসারিত হচ্ছে জেলা সেবা। প্রতিটি
              জেলায় স্থানীয় রাইডার ও সার্ভিস পয়েন্ট নিয়ে কাজ করছি।
            </p>

            <div className="mt-10 space-y-3">
              {DISTRICTS.map((district) => (
                <div
                  key={district.name}
                  className="group flex items-center justify-between rounded-2xl border border-white/[0.06] bg-white/[0.02] p-5 transition-all duration-300 hover:bg-white/[0.04] hover:border-white/[0.1]"
                >
                  <div className="flex items-center gap-x-4">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                      <svg
                        className="h-5 w-5 text-primary"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <span className="text-base font-semibold text-white">
                        {district.name}
                      </span>
                      <p className="text-xs text-white/55">
                        {district.riders} রাইডার সক্রিয়
                      </p>
                    </div>
                  </div>
                  <span
                    className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ring-1 ring-inset ${
                      district.status === "সক্রিয়"
                        ? "bg-emerald/10 text-emerald ring-emerald/20"
                        : "bg-gold/10 text-gold ring-gold/20"
                    }`}
                  >
                    {district.status}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-8 text-sm text-white/55">
              আপনার জেলায় জেলা সেবা চান?{" "}
              <a
                href="#contact"
                className="font-semibold text-primary hover:text-primary-light transition-colors"
              >
                আমাদের জানান &#8594;
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
