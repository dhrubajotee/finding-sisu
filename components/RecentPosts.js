import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getRecentPosts } from "@/lib/utils";
import PostCard from "./PostCard";

export default function RecentPosts() {
  const posts = getRecentPosts(4);

  return (
    <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
      <div className="flex items-end justify-between gap-4">
        <h2 className="font-display text-3xl text-ink sm:text-4xl">
          Recent posts
        </h2>
        <Link
          href="/themes"
          className="hidden items-center gap-1.5 font-body text-sm font-semibold text-terracotta hover:text-rust sm:flex"
        >
          View all <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
        {posts.map((post, i) => (
          <PostCard key={post.slug} post={post} index={i} />
        ))}
      </div>

      <Link
        href="/themes"
        className="mt-10 flex items-center justify-center gap-1.5 font-body text-sm font-semibold text-terracotta hover:text-rust sm:hidden"
      >
        View all <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
