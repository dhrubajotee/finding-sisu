# Finding Sisu

A personal blog about moving to Jyväskylä, Finland — built with Next.js (App
Router), JavaScript, and Tailwind CSS.

## Running it locally

```bash
npm install
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000).

## Deploying to Vercel

Push this folder to a GitHub repo and import it into Vercel (same as your
other site) — no special configuration needed, it's a standard Next.js app.

## Where everything lives

```
data/themes.js     → the 8 themes (title, description, color, icon)
data/posts.js       → all blog posts (title, date, theme, content, photos, video)
app/page.js          → homepage (Hero, Recent Posts, Explore Themes, About, Contact)
app/themes/page.js   → "all themes" page
app/themes/[slug]/   → one theme's post listing
app/blog/[slug]/     → one blog post
components/          → all the reusable pieces (cards, header, gallery, etc.)
public/images/       → where your real photos go (see README in each subfolder)
```

## Adding a new post

Open `data/posts.js`, copy one of the existing post objects, and edit it:

```js
{
  slug: "your-post-slug",            // becomes the URL: /blog/your-post-slug
  theme: "first-impressions-culture-shock", // must match a theme slug in data/themes.js
  title: "Your Post Title",
  date: "2026-07-01",                // YYYY-MM-DD. Leave as null to keep it a draft (hidden from the site)
  cover: null,                       // or "/images/posts/your-photo.jpg"
  gallery: [],                       // photos shown next to the text — see below
  video: null,                       // optional — see "Adding a video" below
  content: `Your post text here, in Markdown...`,
}
```

**Writing `content`:** it's plain Markdown — blank lines for new paragraphs,
`## Subheading` for section headings, `> A quote` for a pulled-out quote,
`- item` for bullet lists, `**bold**` and `*italic*` for emphasis.

## Adding photos

1. Drop the image file into `public/images/posts/`.
2. In that post's entry in `data/posts.js`, set `cover` (for the card photo) and/or
   add to `gallery` (for the photos shown next to the post text):

```js
cover: "/images/posts/the-silence.jpg",
gallery: [
  { src: "/images/posts/the-silence-1.jpg", orientation: "portrait", alt: "Description" },
  { src: "/images/posts/the-silence-2.jpg", orientation: "landscape", alt: "Description" },
],
```

Until you add a photo, the site shows a soft pastel placeholder automatically
— nothing will look broken in the meantime. The hero photo and your about-me
portrait work the same way; see the README files inside `public/images/hero/`
and `public/images/about/`.

## Adding a video

If you've already posted a video somewhere (Instagram, TikTok, YouTube,
Facebook) and want to link it from a post, set the `video` field:

```js
video: {
  url: "https://www.instagram.com/reel/XXXXXXX/",
  platform: "instagram", // "instagram" | "tiktok" | "youtube" | "facebook" | "other"
  caption: "Vappu car parade, live from Harju",
},
```

This shows a clickable thumbnail card on the post — clicking it opens your
Instagram/TikTok/YouTube video in a new tab. Nothing is uploaded or hosted
here, it just links out to where the video already lives. Leave it as
`video: null` for posts that don't have one.

## Adding a new theme

Open `data/themes.js` and copy one of the existing objects — give it a
unique `slug`, a `title`, a one-line `description`, an `accent` color (pick
one already used, e.g. `"navy"`, `"terracotta"`, `"rust"`, `"caramel"`,
`"periwinkle"`, `"skyDeep"`), and an `icon` (any icon name from
[lucide.dev/icons](https://lucide.dev/icons)). New themes with no posts yet
will automatically show a "No posts here yet" message instead of looking broken.

## Things worth knowing

- **Comments** currently live only in your browser tab while you're viewing
  the page — they're not saved anywhere yet, so refreshing clears them, and
  no one else sees what others post. The delete (trash) button is already
  there for moderation once comments are real. To make them persist for real
  visitors, the simplest free option is [Giscus](https://giscus.app) (backed
  by GitHub Discussions); a small Supabase table is another option if you'd
  rather not tie it to GitHub. Happy to wire either one up whenever you're ready.
- Two posts didn't have a date in your Word doc — **"Finnish Saunas: The
  Cultural Shock Nobody Truly Prepares You For"** and **"The Complete
  Newcomer Checklist for Jyväskylä"** — they're marked `date: null` in
  `data/posts.js` (and flagged with a `// TODO` comment right above each) so
  they won't show on the live site until you add a real date.
- `lib/site.js` has a placeholder URL used to build the share buttons —
  update it once your Vercel URL (or custom domain) is final.
