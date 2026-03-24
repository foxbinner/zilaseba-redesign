const TESTIMONIALS = [
  {
    body: 'জেলা সেবা অ্যাপ ব্যবহার করে আমি খুবই সন্তুষ্ট। সাতক্ষীরা থেকে খুলনা পর্যন্ত রাইড সার্ভিস দ্রুত এবং নির্ভরযোগ্য।',
    author: { name: 'রহিম উদ্দিন', role: 'ব্যবসায়ী, সাতক্ষীরা', avatar: 'https://i.pravatar.cc/40?img=12' },
  },
  {
    body: 'ডেলিভারি সার্ভিস অসাধারণ! তাজা মাছ অর্ডার দিলে ঘণ্টার মধ্যে বাসায় পৌঁছে যায়। কাস্টমার সাপোর্টও চমৎকার।',
    author: { name: 'ফাতেমা আক্তার', role: 'গৃহিণী, খুলনা', avatar: 'https://i.pravatar.cc/40?img=47' },
  },
  {
    body: 'পেমেন্ট সিস্টেম সহজ এবং নিরাপদ। বিকাশ, নগদ সব সাপোর্ট করে। এক অ্যাপেই সব কাজ হয়ে যায়।',
    author: { name: 'কামরুল হাসান', role: 'শিক্ষক, ঢাকা', avatar: 'https://i.pravatar.cc/40?img=33' },
  },
  {
    body: 'গ্রামীণ এলাকায়ও সেবা পাওয়া যাচ্ছে, এটা সত্যিই প্রশংসনীয়। আমাদের ইউনিয়নেও রাইড পাই এখন।',
    author: { name: 'নাসরিন সুলতানা', role: 'সরকারি চাকরিজীবী', avatar: 'https://i.pravatar.cc/40?img=54' },
  },
  {
    body: 'ব্লাড ইমার্জেন্সি ফিচারটি সত্যিই জীবন বাঁচাচ্ছে। মাত্র ৩০ মিনিটে রক্তদাতা পেয়ে গেলাম।',
    author: { name: 'আব্দুল করিম', role: 'প্রকৌশলী, যশোর', avatar: 'https://i.pravatar.cc/40?img=18' },
  },
  {
    body: 'লাইভ লোকেশন শেয়ারিং ফিচারটি আমার পরিবারের জন্য খুবই উপকারী। নিরাপত্তা নিয়ে আর চিন্তা নেই।',
    author: { name: 'সুমাইয়া খান', role: 'উদ্যোক্তা, সাতক্ষীরা', avatar: 'https://i.pravatar.cc/40?img=62' },
  },
]

export default function Testimonials() {
  return (
    <section className="relative bg-dark py-24 sm:py-32 overflow-hidden">
      <div className="absolute top-0 right-0 h-[400px] w-[400px] bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-flex items-center rounded-full bg-gold/10 px-4 py-1.5 text-xs font-semibold text-gold ring-1 ring-gold/20 mb-4">
            প্রশংসাপত্র
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
            হাজারো মানুষের{' '}
            <span className="text-gradient">বিশ্বাসই আমাদের শক্তি</span>
          </h2>
          <p className="mt-4 text-base text-white/60 max-w-lg mx-auto">
            সারা বাংলাদেশ থেকে আমাদের ব্যবহারকারীরা কী বলছেন
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.author.name}
              className="group relative rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-300 hover:bg-white/[0.04] hover:border-white/[0.1]"
            >
              {/* Quote icon */}
              <svg className="h-8 w-8 text-white/[0.06] mb-4" fill="currentColor" viewBox="0 0 32 32">
                <path d="M10 8c-3.3 0-6 2.7-6 6v10h10V14H8c0-1.1.9-2 2-2V8zm14 0c-3.3 0-6 2.7-6 6v10h10V14h-6c0-1.1.9-2 2-2V8z" />
              </svg>

              {/* Stars */}
              <div className="flex gap-x-0.5 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-3.5 w-3.5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              <blockquote className="text-sm text-white/75 leading-relaxed">
                &ldquo;{testimonial.body}&rdquo;
              </blockquote>

              <div className="mt-6 pt-5 border-t border-white/[0.04] flex items-center gap-x-3">
                <img
                  src={testimonial.author.avatar}
                  alt={testimonial.author.name}
                  className="h-9 w-9 rounded-full object-cover ring-1 ring-white/10"
                />
                <div>
                  <div className="text-sm font-semibold text-white">{testimonial.author.name}</div>
                  <div className="text-xs text-white/55">{testimonial.author.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
