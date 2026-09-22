import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllPosts, getPost } from "@/lib/posts";
import AuthorBio from "@/components/AuthorBio";

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.summary,
      url: `https://aungbobokyaw.com/blog/${post.slug}`,
      publishedTime: post.date,
      images: post.cover ? [post.cover] : undefined,
    },
    twitter: {
      card: post.cover ? "summary_large_image" : "summary",
      title: post.title,
      description: post.summary,
    },
  };
}

export default function PostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) return notFound();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    author: { "@type": "Person", name: "Aung Bo Bo Kyaw", url: "https://aungbobokyaw.com" },
    url: `https://aungbobokyaw.com/blog/${post.slug}`,
  };

  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      {/* eslint-disable-next-line react/no-danger */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Link href="/blog" className="font-mono text-xs text-slate hover:text-paper">
        ← All posts
      </Link>

      {post.cover && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={post.cover}
          alt={post.title}
          className="mt-6 aspect-[16/9] w-full rounded-md object-cover"
        />
      )}

      <div className="mt-6 flex items-center gap-3 font-mono text-xs text-slate">
        <span>{post.date}</span>
        <span>·</span>
        <span>{post.readingTime}</span>
      </div>
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

      <AuthorBio />
    </article>
  );
}
