import Link from "next/link";
import { getAllPosts } from "@/lib/posts";
import { getAllCourses } from "@/lib/courses";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  const courses = getAllCourses().slice(0, 3);

  return (
    <>
      {/* HERO */}
      <section className="mx-auto max-w-5xl px-6 py-24 md:py-32">
        <p className="font-mono text-xs uppercase tracking-widest text-lacquer">
          Yangon, Myanmar
        </p>
        <h1 className="mt-5 max-w-2xl font-display text-4xl font-semibold leading-[1.1] text-paper md:text-5xl">
          I fix things. Then I build them.
        </h1>
        <p className="mt-6 max-w-lg font-body text-base text-mist md:text-lg">
          I started as an electronics repair technician. These days I build
          software, run{" "}
          <a href="https://letyarlabs.com" target="_blank" rel="noopener noreferrer" className="text-cyan hover:text-paper">
            Letyar Labs
          </a>
          , and teach what I've picked up along the way.
        </p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/blog" className="rounded-sm bg-lacquer px-6 py-3 font-mono text-sm font-medium text-paper transition hover:brightness-110">
            Read the blog
          </Link>
          <Link href="/training" className="rounded-sm border border-white/15 px-6 py-3 font-mono text-sm font-medium text-paper transition hover:border-white/40">
            Training center
          </Link>
        </div>
      </section>

      {/* CROSS-LINK TO LETYAR */}
      <section className="border-y border-white/5 bg-navy/40">
        <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-6 py-14 md:flex-row md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-slate">Also building</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-paper">Letyar Labs</h2>
            <p className="mt-2 max-w-md font-body text-sm text-mist">
              A Web, Software &amp; Product studio — where the client work
              and the templates live.
            </p>
          </div>
          <a
            href="https://letyarlabs.com"
            target="_blank"
            rel="noopener noreferrer"
            className="whitespace-nowrap rounded-sm border border-cyan/40 px-6 py-3 font-mono text-sm text-cyan transition hover:bg-cyan hover:text-ink"
          >
            Visit letyarlabs.com ↗
          </a>
        </div>
      </section>

      {/* BLOG PREVIEW */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-slate">Writing</p>
            <h2 className="mt-2 font-display text-2xl font-semibold text-paper md:text-3xl">Recent posts</h2>
          </div>
          <Link href="/blog" className="hidden font-mono text-sm text-lacquer hover:text-paper md:block">
            All posts →
          </Link>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((p, i) => (
            <Link
              key={p.slug}
              href={`/blog/${p.slug}`}
              className="animate-rise border border-white/10 bg-navy p-6 transition hover:border-lacquer/50"
              style={{ animationDelay: `${i * 90}ms` }}
            >
              <p className="font-mono text-[11px] text-slate">{p.date}</p>
              <h3 className="mt-2 font-display text-lg font-semibold text-paper">{p.title}</h3>
              <p className="mt-2 font-body text-sm text-mist">{p.summary}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* TRAINING PREVIEW */}
      <section className="border-y border-white/5 bg-navy/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="flex items-end justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-widest text-slate">Training center</p>
              <h2 className="mt-2 font-display text-2xl font-semibold text-paper md:text-3xl">
                Learn what I actually use
              </h2>
            </div>
            <Link href="/training" className="hidden font-mono text-sm text-lacquer hover:text-paper md:block">
              All courses →
            </Link>
          </div>
          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {courses.map((c) => (
              <div key={c.slug} className="border border-white/10 bg-ink p-6">
                <p className="font-mono text-[11px] uppercase tracking-wider text-gold">{c.level}</p>
                <h3 className="mt-2 font-display text-base font-semibold text-paper">{c.title}</h3>
                <p className="mt-2 font-body text-sm text-mist">{c.summary}</p>
                <p className="mt-4 font-mono text-xs text-slate">{c.duration} · {c.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <div className="flex flex-col items-start justify-between gap-6 border border-white/10 bg-navy p-10 md:flex-row md:items-center">
          <div>
            <h2 className="font-display text-2xl font-semibold text-paper">Want to work together?</h2>
            <p className="mt-2 max-w-md font-body text-sm text-mist">
              For project work, that's <a href="https://letyarlabs.com/contact" target="_blank" rel="noopener noreferrer" className="text-cyan hover:text-paper">Letyar Labs</a>. For everything else — training, speaking, questions — reach out directly.
            </p>
          </div>
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-sm bg-lacquer px-6 py-3 font-mono text-sm font-medium text-paper transition hover:brightness-110"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
}
