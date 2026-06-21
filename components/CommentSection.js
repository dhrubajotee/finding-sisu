"use client";

import { useState } from "react";
import { Trash2, MessageCircle } from "lucide-react";

/**
 * Local-only comment UI for now: comments live in this browser tab's memory
 * and reset on refresh — nothing is saved to a server yet. The delete button
 * is here so the moderation flow is in place once comments are persisted.
 *
 * To make this real (saved + visible to every visitor), wire it up to a
 * backend — e.g. Giscus (free, uses GitHub Discussions) or a small Supabase
 * table — and swap the local `useState` below for fetching/posting there.
 */
export default function CommentSection({ postSlug }) {
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!message.trim()) return;

    setComments((prev) => [
      ...prev,
      {
        id: `${Date.now()}`,
        name: name.trim() || "Anonymous",
        message: message.trim(),
        date: new Date().toLocaleDateString("en-GB", {
          day: "numeric",
          month: "short",
          year: "numeric",
        }),
      },
    ]);
    setMessage("");
  }

  function handleDelete(id) {
    setComments((prev) => prev.filter((c) => c.id !== id));
  }

  return (
    <section className="mt-4 border-t border-navy/10 pt-10">
      <h2 className="flex items-center gap-2 font-display text-2xl text-ink">
        <MessageCircle className="h-5 w-5 text-terracotta" />
        Comments
      </h2>

      <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-3">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name (optional)"
          className="rounded-xl border border-navy/15 bg-white/70 px-4 py-2.5 font-body text-sm text-ink placeholder:text-ink-soft/60"
        />
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Share a thought…"
          rows={3}
          required
          className="resize-none rounded-xl border border-navy/15 bg-white/70 px-4 py-2.5 font-body text-sm text-ink placeholder:text-ink-soft/60"
        />
        <button
          type="submit"
          className="self-start rounded-full bg-terracotta px-5 py-2 font-body text-sm font-semibold text-cream transition-colors hover:bg-rust"
        >
          Post comment
        </button>
      </form>

      {comments.length > 0 ? (
        <ul className="mt-8 flex flex-col gap-5">
          {comments.map((c) => (
            <li
              key={c.id}
              className="flex items-start justify-between gap-4 rounded-xl bg-cream-deep p-4"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="font-body text-sm font-semibold text-ink">
                    {c.name}
                  </span>
                  <span className="font-body text-xs text-ink-soft">
                    {c.date}
                  </span>
                </div>
                <p className="mt-1 font-body text-sm text-ink-soft">
                  {c.message}
                </p>
              </div>
              <button
                type="button"
                onClick={() => handleDelete(c.id)}
                aria-label="Delete comment"
                title="Delete comment"
                className="shrink-0 rounded-full p-1.5 text-ink-soft/60 transition-colors hover:bg-coral/20 hover:text-rust"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="mt-8 font-body text-sm text-ink-soft">
          No comments yet — be the first to share a thought.
        </p>
      )}
    </section>
  );
}
