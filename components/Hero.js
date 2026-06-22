import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative flex h-[92vh] min-h-[600px] w-full items-end overflow-hidden sm:items-center">
      {/* Decorative sunset-over-lake backdrop. Swap for a real photo by editing this file
          and rendering <Image src="/images/hero/hero.jpg" .../> in place of the gradient + svg below. */}

      <Image
        src="/images/hero/hero.jpg"
        alt="Hero background"
        fill
        priority
        className="object-cover object-contain"
      />

      {/* Dark overlay so text stays readable */}
      <div className="absolute inset-0 bg-black/40" />


      {/* Bottom blur + fade so the hero dissolves into the page, like the reference design */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 backdrop-blur-2xl [mask-image:linear-gradient(to_bottom,transparent,black_85%)] sm:h-48" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-cream sm:h-40" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-28 text-center sm:px-8 sm:pb-16">
        <h1 style={{ fontFamily: "'Avant Garde Gothic', sans-serif", letterSpacing: '-0.03em', lineHeight: '0.85' }} className="font-display text-6xl text-white drop-shadow-sm sm:text-8xl">
          Finding Sisu
        </h1>
        <p className="mt-3 font-display text-xl text-white/95 drop-shadow-sm sm:text-2xl">
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
