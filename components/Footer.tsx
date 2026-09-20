import Link from "next/link";

const socials = [
  { label: "GitHub", href: "https://github.com/letyarworks" },
  { label: "X", href: "https://x.com/letyarworks" },
  { label: "Telegram", href: "https://t.me/letyarworks" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-navy">
      <div className="mx-auto max-w-5xl px-6 py-14">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-4">
          <div className="col-span-2">
            <div className="flex items-center gap-2.5">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-lacquer font-display text-[11px] font-semibold text-paper">
                AK
              </span>
              <span className="font-display text-base font-semibold text-paper">Aung Bo Bo Kyaw</span>
            </div>
            <p className="mt-4 max-w-sm font-body text-sm text-mist">
              Technician, builder, and founder of{" "}
              <a href="https://letyarlabs.com" target="_blank" rel="noopener noreferrer" className="text-cyan hover:text-paper">
                Letyar Labs
              </a>
              . Writing about the path between the two.
            </p>
            <p className="mt-4 font-mono text-xs text-slate">Yangon, Myanmar</p>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-slate">Site</p>
            <ul className="mt-4 space-y-2 font-body text-sm text-mist">
              <li><Link href="/about" className="hover:text-paper">About</Link></li>
              <li><Link href="/blog" className="hover:text-paper">Blog</Link></li>
              <li><Link href="/training" className="hover:text-paper">Training</Link></li>
              <li><Link href="/contact" className="hover:text-paper">Contact</Link></li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-slate">Elsewhere</p>
            <ul className="mt-4 space-y-2 font-body text-sm text-mist">
              <li>
                <a href="https://letyarlabs.com" target="_blank" rel="noopener noreferrer" className="text-cyan hover:text-paper">
                  Letyar Labs ↗
                </a>
              </li>
              {socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer" className="hover:text-paper">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/5 pt-6 font-mono text-xs text-slate md:flex-row md:items-center md:justify-between">
          <span>© {new Date().getFullYear()} Aung Bo Bo Kyaw. All rights reserved.</span>
          <span>aungbobokyaw.com</span>
        </div>
      </div>
    </footer>
  );
}
