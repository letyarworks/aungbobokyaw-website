import Link from "next/link";
import { getAllCourses } from "@/lib/courses";

export const metadata = { title: "Training — Aung Bo Bo Kyaw" };

export default function TrainingPage() {
  const courses = getAllCourses();

  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-widest text-slate">Training center</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-paper md:text-4xl">
        Practical courses, taught directly
      </h1>
      <p className="mt-4 font-body text-sm text-mist">
        Every course here comes from something I've actually done recently —
        not a fixed curriculum written years ago.
      </p>

      <div className="mt-12 space-y-6">
        {courses.map((c) => (
          <Link
            key={c.slug}
            href={`/training/${c.slug}`}
            className="block border border-white/10 bg-navy p-6 transition hover:border-lacquer/50"
          >
            <div className="flex flex-wrap items-center justify-between gap-2">
              <h2 className="font-display text-lg font-semibold text-paper">{c.title}</h2>
              <span className="font-mono text-xs text-gold">{c.level}</span>
            </div>
            <p className="mt-2 font-body text-sm text-mist">{c.summary}</p>
            <p className="mt-4 font-mono text-xs text-slate">{c.duration} · {c.price}</p>
          </Link>
        ))}
        {courses.length === 0 && (
          <p className="font-body text-sm text-mist">No courses published yet — check back soon.</p>
        )}
      </div>
    </section>
  );
}
