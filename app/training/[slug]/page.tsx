import { notFound } from "next/navigation";
import Link from "next/link";
import { getAllCourses, getCourse } from "@/lib/courses";

export function generateStaticParams() {
  return getAllCourses().map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const course = getCourse(params.slug);
  if (!course) return {};
  return { title: `${course.title} — Training` };
}

export default function CoursePage({ params }: { params: { slug: string } }) {
  const course = getCourse(params.slug);
  if (!course) return notFound();

  return (
    <article className="mx-auto max-w-2xl px-6 py-16">
      <Link href="/training" className="font-mono text-xs text-slate hover:text-paper">
        ← All courses
      </Link>

      <div className="mt-6 flex flex-wrap items-center gap-3">
        <span className="rounded-sm bg-navy px-2.5 py-1 font-mono text-[11px] text-gold">{course.level}</span>
        <span className="font-mono text-xs text-slate">{course.duration}</span>
      </div>
      <h1 className="mt-3 font-display text-3xl font-semibold text-paper">{course.title}</h1>

      <div className="mt-6 flex items-center justify-between border-y border-white/10 py-4">
        <span className="font-mono text-xl font-medium text-paper">{course.price}</span>
        <a
          href="/contact"
          className="rounded-sm bg-lacquer px-5 py-2.5 font-mono text-xs font-medium text-paper transition hover:brightness-110"
        >
          Enroll — contact me
        </a>
      </div>

      <div className="prose-post mt-10" dangerouslySetInnerHTML={{ __html: course.html }} />
    </article>
  );
}
