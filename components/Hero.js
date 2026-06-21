import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex h-[92vh] min-h-[600px] w-full items-end overflow-hidden sm:items-center">
      {/* Decorative sunset-over-lake backdrop. Swap for a real photo by editing this file
          and rendering <Image src="/images/hero/hero.jpg" .../> in place of the gradient + svg below. */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, #86afdb 0%, #a7c3de 22%, #e3c2c1 48%, #f2a49a 68%, #e7d4d0 86%, var(--color-cream) 100%)",
        }}
      />
      <svg
        className="absolute inset-x-0 bottom-0 h-1/2 w-full opacity-90"
        viewBox="0 0 1440 360"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <path
          d="M0,180 L60,170 120,185 180,160 240,178 300,150 360,172 420,140 480,168 540,148 600,176 660,155 720,170 780,145 840,175 900,158 960,180 1020,150 1080,172 1140,160 1200,178 1260,150 1320,172 1380,160 1440,175 L1440,360 L0,360 Z"
          fill="var(--color-navy)"
          opacity="0.55"
        />
        <path
          d="M0,220 L80,210 160,225 240,205 320,222 400,200 480,218 560,198 640,222 720,205 800,225 880,202 960,220 1040,200 1120,222 1200,208 1280,224 1360,206 1440,220 L1440,360 L0,360 Z"
          fill="var(--color-navy)"
          opacity="0.8"
        />
        <rect x="0" y="232" width="1440" height="2" fill="var(--color-cream)" opacity="0.25" />
      </svg>

      {/* Bottom blur + fade so the hero dissolves into the page, like the reference design */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 backdrop-blur-2xl [mask-image:linear-gradient(to_bottom,transparent,black_85%)] sm:h-48" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-cream sm:h-40" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-28 text-center sm:px-8 sm:pb-16">
        <h1 className="font-display text-5xl italic text-white drop-shadow-sm sm:text-7xl">
          Finding Sisu
        </h1>
        <p className="mt-3 font-display text-xl text-white/95 drop-shadow-sm sm:text-3xl">
          A life across lakes and seasons
        </p>
        <p className="mx-auto mt-5 max-w-xl font-body text-sm text-white/90 sm:text-base">
          Stories of belonging, learning, and finding home in Finland
        </p>
        <Link
          href="/themes"
          className="mt-8 inline-flex items-center justify-center rounded-full bg-terracotta px-7 py-3 font-body text-sm font-semibold text-cream shadow-lg shadow-navy/20 transition-transform hover:scale-[1.03] hover:bg-rust"
        >
          Explore Themes
        </Link>
      </div>

      <span className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 font-body text-xs uppercase tracking-[0.3em] text-ink-soft/70 sm:block">
        Scroll
      </span>
    </section>
  );
}
