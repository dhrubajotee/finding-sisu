import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";
import { posts } from "@/data/posts";
import { getPostBySlug, getThemeBySlug, formatLongDate, getExcerpt } from "@/lib/utils";
import { pastelFor } from "@/lib/theme-colors";
import { SITE_URL } from "@/lib/site";
import Gallery from "@/components/Gallery";
import VideoEmbed from "@/components/VideoEmbed";
import ShareIcons from "@/components/ShareIcons";
import CommentSection from "@/components/CommentSection";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

// export function generateMetadata({ params }) {
//   const post = getPostBySlug(params.slug);
//   if (!post) return {};
//   return {
//     title: `${post.title} — Finding Sisu`,
//     description: getExcerpt(post.content, 160),
//   };
// }

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} — Finding Sisu`,
    description: getExcerpt(post.content, 160),
  };
}

// export default function BlogPostPage({ params }) {
//   const post = getPostBySlug(params.slug);
//   if (!post) notFound();

//   const theme = getThemeBySlug(post.theme);
//   const pastel = pastelFor(theme?.accent);
//   const hasGallery = post.gallery && post.gallery.length > 0;
//   const url = `${SITE_URL}/blog/${post.slug}`;

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const theme = getThemeBySlug(post.theme);
  const pastel = pastelFor(theme?.accent);
  const hasGallery = post.gallery && post.gallery.length > 0;
  const url = `${SITE_URL}/blog/${post.slug}`;

  return (
    <article className="mx-auto max-w-5xl px-5 py-14 sm:px-8 sm:py-20">
      {theme ? (
        <Link
          href={`/themes/${theme.slug}`}
          className="inline-flex items-center gap-1.5 font-body text-sm font-medium text-ink-soft hover:text-terracotta"
        >
          <ArrowLeft className="h-4 w-4" />
          {theme.title}
        </Link>
      ) : null}

      <header className="mt-5 max-w-3xl">
        {theme ? (
          <span
            className={`inline-flex w-fit items-center rounded-full px-2.5 py-1 font-body text-[11px] font-semibold uppercase tracking-wide ${pastel.bg} ${pastel.text}`}
          >
            {theme.tag || theme.title}
          </span>
        ) : null}
        <h1 className="mt-3 font-display text-3xl leading-tight text-ink sm:text-4xl lg:text-5xl">
          {post.title}
        </h1>
        <p className="mt-3 font-body text-sm text-ink-soft">
          {formatLongDate(post.date)}
        </p>
      </header>

      <VideoEmbed video={post.video} accent={theme?.accent} />

      <div
        className={`mt-10 grid grid-cols-1 gap-12 ${
          hasGallery ? "lg:grid-cols-[1.3fr_1fr]" : ""
        }`}
      >
        <div className={hasGallery ? "" : "mx-auto w-full max-w-2xl"}>
          <div className="prose-sisu">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {post.content}
            </ReactMarkdown>
          </div>
        </div>

        {hasGallery ? (
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Gallery images={post.gallery} />
          </div>
        ) : null}
      </div>

      <div className="mt-12 border-t border-navy/10 pt-8">
        <ShareIcons url={url} title={post.title} />
      </div>

      <CommentSection postSlug={post.slug} />
    </article>
  );
}
