import Link from "next/link";

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-start justify-center px-6 py-24">
      <h1 className="font-display text-3xl font-semibold text-paper">Page not found.</h1>
      <p className="mt-3 font-body text-sm text-mist">
        That page doesn't exist — try the blog or training center instead.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-sm bg-lacquer px-6 py-3 font-mono text-sm font-medium text-paper transition hover:brightness-110"
      >
        Back home
      </Link>
    </section>
  );
}
