export const metadata = { title: "About — Aung Bo Bo Kyaw" };

const path = [
  { step: "Technician", body: "Started fixing electronics — phones, circuit boards, hardware. Learned to isolate a fault before touching anything." },
  { step: "Creator", body: "Started building and posting content, learning in public instead of waiting to feel ready." },
  { step: "Educator", body: "Began teaching what I'd just learned, while it was still fresh enough to explain clearly." },
  { step: "Developer", body: "Moved from fixing hardware to writing software — same debugging instincts, new material." },
  { step: "Digital Product Builder", body: "Started shipping full products, not just fixes or one-off scripts." },
  { step: "Entrepreneur", body: "Founded Letyar Labs — a studio for the web, software and product work." },
  { step: "Platform Builder", body: "Now building toward systems — tools and platforms other people can build on, not just single projects." },
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-widest text-slate">About</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-paper md:text-4xl">
        Aung Bo Bo Kyaw
      </h1>
      <p className="mt-6 font-body text-base leading-relaxed text-mist">
        I'm based in Yangon, Myanmar, working mostly from my phone. I started
        as an electronics repair technician — years of isolating faults in
        hardware, one small test at a time. That same habit is most of what
        I rely on now, building software instead of fixing it.
      </p>
      <p className="mt-4 font-body text-base leading-relaxed text-mist">
        I founded{" "}
        <a href="https://letyarlabs.com" target="_blank" rel="noopener noreferrer" className="text-cyan hover:text-paper">
          Letyar Labs
        </a>{" "}
        to do that building for other people — web, software and product
        work, scoped honestly and shipped on time. This site is where I
        write about the path itself, and where I teach what I've picked up
        along the way.
      </p>

      <div className="mt-16 border-t border-white/10 pt-10">
        <p className="font-mono text-xs uppercase tracking-widest text-slate">The path so far</p>
        <div className="mt-8 space-y-8">
          {path.map((p, i) => (
            <div key={p.step} className="flex gap-5">
              <div className="flex flex-col items-center">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-lacquer font-mono text-xs text-lacquer">
                  {i + 1}
                </span>
                {i < path.length - 1 && <span className="mt-1 w-px flex-1 bg-white/10" />}
              </div>
              <div className="pb-2">
                <h3 className="font-display text-base font-semibold text-paper">{p.step}</h3>
                <p className="mt-1 font-body text-sm text-mist">{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
