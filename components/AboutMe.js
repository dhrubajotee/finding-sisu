import Image from "next/image";
import PlaceholderImage from "./PlaceholderImage";

export default function AboutMe() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="grid grid-cols-1 items-center gap-10 sm:grid-cols-2 sm:gap-14">
        <div className="relative aspect-[4/4] w-full max-w-sm overflow-hidden rounded-[var(--radius-card)] sm:max-w-none">
          {/* Swap for a real portrait: <Image src="/images/about/portrait.jpg" alt="Swarna" fill className="object-cover" /> */}
          {/* <PlaceholderImage seed={2} label="Your photo here" className="h-full w-full" /> */}
          <Image src="/images/about/mee.jpg"  alt="Swarna" fill className="object-contain" />
        </div>

        <div>
          <p className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
            Little about me
          </p>
          <h2 className="mt-2 font-display text-3xl text-ink sm:text-4xl">
            Hi, I&apos;m Swarna
          </h2>
          <p className="mt-5 font-body text-base leading-relaxed text-ink-soft">
            I moved to Finland and found a life full of lakes, silence, and
            unexpected warmth. This blog is where I write honestly about that
            journey — the culture shocks, the small joys, the language
            stumbles, and the moments that made it all feel like home.
          </p>
        </div>
      </div>
    </section>
  );
}
