import { useEffect, useRef, useState } from "react";

const STATS = [
  {
    value: 5,
    suffix: " লাখ+",
    label: "অ্যাপ ডাউনলোড",
    sub: "Google Play Store",
    color: "text-primary",
    bg: "bg-primary/10",
    glow: "group-hover:shadow-primary/20",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
        />
      </svg>
    ),
  },
  {
    value: 1,
    suffix: " লাখ+",
    label: "সফল ট্রিপ ও অর্ডার",
    sub: "সম্পন্ন হয়েছে সফলভাবে",
    color: "text-emerald",
    bg: "bg-emerald/10",
    glow: "group-hover:shadow-emerald/20",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    value: 150,
    suffix: "+",
    label: "সক্রিয় রাইডার",
    sub: "প্রতিদিন সেবা দিচ্ছেন",
    color: "text-accent",
    bg: "bg-accent/10",
    glow: "group-hover:shadow-accent/20",
    icon: (
      <svg
        className="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
        />
      </svg>
    ),
  },
  {
    value: 64,
    suffix: "",
    label: "জেলায় সেবা",
    sub: "সারা বাংলাদেশ জুড়ে",
    color: "text-gold",
    bg: "bg-gold/10",
    glow: "group-hover:shadow-gold/20",
    icon: (
      <svg
        className="h-5 w-5"
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
    ),
  },
];

function useCountUp(end, duration = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.3 },
    );
    const el = ref.current;
    if (el) observer.observe(el);
    return () => {
      if (el) observer.unobserve(el);
    };
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let frame;
    const start = performance.now();
    const tick = (now) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [started, end, duration]);

  return { count, ref };
}

export default function Stats() {
  return (
    <section className="relative bg-dark py-6">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative rounded-3xl border border-white/[0.08] bg-white/[0.02] overflow-hidden">
          {/* Subtle inner glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-accent/[0.03] pointer-events-none" />

          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-white/[0.06]">
            {STATS.map((stat) => (
              <StatItem key={stat.label} {...stat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function StatItem({ value, suffix, label, sub, color, bg, icon }) {
  const { count, ref } = useCountUp(value);

  return (
    <div
      ref={ref}
      className={`group relative flex flex-col items-center text-center gap-y-3 px-8 py-8 transition-all duration-300 hover:bg-white/[0.03]`}
    >
      {/* Icon */}
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-xl ${bg} ${color} transition-all duration-300 group-hover:scale-110`}
      >
        {icon}
      </div>

      {/* Number */}
      <div>
        <dd
          className={`text-3xl font-bold tracking-tight text-white sm:text-4xl`}
        >
          {count}
          <span className={`${color} text-2xl sm:text-3xl`}>{suffix}</span>
        </dd>
        <dt className="mt-1 text-sm font-medium text-white/70">{label}</dt>
        <p className="mt-0.5 text-xs text-white/30">{sub}</p>
      </div>
    </div>
  );
}
