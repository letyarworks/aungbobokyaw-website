import Link from "next/link";

const links = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/training", label: "Training" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-ink/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-lacquer font-display text-xs font-semibold text-paper">
            AK
          </span>
          <span className="font-display text-base font-semibold text-paper">Aung Bo Bo Kyaw</span>
        </Link>

        <nav className="hidden items-center gap-8 font-body text-sm text-mist md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition hover:text-paper">
              {l.label}
            </Link>
          ))}
        </nav>

        <a
          href="https://letyarlabs.com"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-sm border border-cyan/40 px-4 py-2 font-mono text-xs text-cyan transition hover:bg-cyan hover:text-ink"
        >
          Letyar Labs ↗
        </a>
      </div>
    </header>
  );
}
