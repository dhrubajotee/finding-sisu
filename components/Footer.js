import Link from "next/link";
import { Mail } from "lucide-react";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-navy/10 bg-cream-deep">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-5 py-10 text-center sm:px-8 sm:text-left">
        <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
          <span className="font-display text-lg italic text-terracotta">
            Finding Sisu
          </span>
          <a
            href="mailto:swarna9393@gmail.com"
            className="flex items-center gap-2 font-body text-sm font-medium text-ink-soft hover:text-terracotta"
          >
            <Mail className="h-4 w-4" />
            swarna9393@gmail.com
          </a>
        </div>
        <p className="font-body text-xs text-ink-soft/80">
          © {year} Finding Sisu — A life across lakes and seasons. Built with{" "}
          <Link href="/" className="underline underline-offset-2 hover:text-terracotta">
            care, in Jyväskylä
          </Link>
          .
        </p>
      </div>
    </footer>
  );
}
