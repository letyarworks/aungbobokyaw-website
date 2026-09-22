import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = { title: "Blog — Aung Bo Bo Kyaw" };

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-widest text-slate">Writing</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-paper md:text-4xl">Blog</h1>
      <p className="mt-4 font-body text-sm text-mist">
        Notes on the move from repair technician to product builder, and
        what I'm learning at Letyar Labs along the way.
      </p>

      <div className="mt-12 space-y-10">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="block border-b border-white/10 pb-10 last:border-0">
            <p className="font-mono text-xs text-slate">{p.date}</p>
            <h2 className="mt-2 font-display text-xl font-semibold text-paper transition hover:text-lacquer">
              {p.title}
            </h2>
            <p className="mt-2 font-body text-sm text-mist">{p.summary}</p>
            {p.tags?.length > 0 && (
              <div className="mt-3 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-sm bg-navy px-2 py-0.5 font-mono text-[10px] text-mist">
                    {t}
                  </span>
                ))}
              </div>
            )}
          </Link>
        ))}
        {posts.length === 0 && (
          <p className="font-body text-sm text-mist">No posts published yet — check back soon.</p>
        )}
      </div>
    </section>
  );
}
