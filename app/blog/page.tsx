import Link from "next/link";
import { getAllPosts } from "@/lib/posts";

export const metadata = { title: "Blog" };

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-slate">Writing</p>
          <h1 className="mt-2 font-display text-3xl font-semibold text-paper md:text-4xl">Blog</h1>
        </div>
        <a
          href="/feed.xml"
          className="shrink-0 rounded-sm border border-white/15 px-3 py-1.5 font-mono text-[11px] text-mist transition hover:border-lacquer/50 hover:text-paper"
        >
          RSS
        </a>
      </div>
      <p className="mt-4 font-body text-sm text-mist">
        Notes on the move from repair technician to product builder, and
        what I'm learning at Letyar Labs along the way.
      </p>

      <div className="mt-12 space-y-10">
        {posts.map((p) => (
          <Link key={p.slug} href={`/blog/${p.slug}`} className="group block border-b border-white/10 pb-10 last:border-0">
            {p.cover && (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={p.cover}
                alt={p.title}
                className="mb-4 aspect-[16/9] w-full rounded-md object-cover"
              />
            )}
            <div className="flex items-center gap-2 font-mono text-xs text-slate">
              <span>{p.date}</span>
              <span>·</span>
              <span>{p.readingTime}</span>
            </div>
            <h2 className="mt-2 font-display text-xl font-semibold text-paper transition group-hover:text-lacquer">
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
