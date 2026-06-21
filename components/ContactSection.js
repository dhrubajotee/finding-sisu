import { Mail } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="contact" className="bg-navy py-20">
      <div className="mx-auto max-w-2xl px-5 text-center sm:px-8">
        <h2 className="font-display text-3xl text-cream sm:text-4xl">
          Let&apos;s connect
        </h2>
        <p className="mt-4 font-body text-base text-periwinkle-soft">
          Questions, shared experiences, or just want to say hello — I&apos;d
          love to hear from you.
        </p>
        <a
          href="mailto:swarna9393@gmail.com"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-cream px-7 py-3 font-body text-sm font-semibold text-navy transition-transform hover:scale-[1.03]"
        >
          <Mail className="h-4 w-4" />
          swarna9393@gmail.com
        </a>
      </div>
    </section>
  );
}
