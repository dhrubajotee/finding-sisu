// lucide-react no longer ships brand/social glyphs, so these are small,
// simple monogram-style icons instead of exact logo reproductions.

export function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M14 9h2.5V6H14c-1.93 0-3.5 1.57-3.5 3.5V11H8v3h2.5v6h3v-6h2.4l.6-3h-3v-1.5c0-.55.45-1 1-1z" />
    </svg>
  );
}

export function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" {...props}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function LinkedInIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="3" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="8" cy="8.5" r="1.3" />
      <rect x="7" y="11" width="2" height="7" />
      <path d="M12 11h2v1.2c.5-.85 1.4-1.4 2.5-1.4 1.9 0 3 1.3 3 3.6V18h-2v-3.1c0-1.1-.5-1.8-1.5-1.8-.95 0-1.6.65-1.8 1.5-.07.25-.2.55-.2 1V18h-2z" />
    </svg>
  );
}

export function XIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M6 5l5.2 6.6L6 19h1.8l4.3-5.5 3.5 5.5H19l-5.5-7 5-6.2h-1.8l-3.9 5-3.2-5z" />
    </svg>
  );
}

export function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <rect x="3" y="6" width="18" height="12" rx="3.5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <path d="M10.5 9.7v4.6l4-2.3z" />
    </svg>
  );
}

export function TikTokIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.5 3c.4 2.2 1.9 3.8 4.1 4v3.1c-1.5.1-2.9-.4-4.1-1.2v6.4c0 3.3-2.7 5.7-5.8 5.7-3.2 0-5.8-2.5-5.8-5.7 0-3.2 2.7-5.7 5.8-5.7.4 0 .8 0 1.2.1v3.2a2.7 2.7 0 0 0-1.2-.3 2.6 2.6 0 1 0 0 5.2c1.5 0 2.7-1.1 2.7-2.7V3h3.1z" />
    </svg>
  );
}
