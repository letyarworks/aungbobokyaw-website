import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPost } from "@/lib/posts";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return { title: `${post.title} — Aung Bo Bo Kyaw` };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return notFound();

  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <Link href="/blog" className="font-mono text-xs text-slate hover:text-paper">
        ← All posts
      </Link>
      <p className="mt-6 font-mono text-xs text-slate">{post.date}</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-paper">{post.title}</h1>
      {post.tags?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-1.5">
          {post.tags.map((t) => (
            <span key={t} className="rounded-sm bg-navy px-2 py-0.5 font-mono text-[10px] text-mist">
              {t}
            </span>
          ))}
        </div>
      )}
      <div className="prose-post mt-10" dangerouslySetInnerHTML={{ __html: post.html }} />
    </article>
  );
}
