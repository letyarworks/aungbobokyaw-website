export const metadata = { title: "Contact — Aung Bo Bo Kyaw" };

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-16">
      <p className="font-mono text-xs uppercase tracking-widest text-slate">Get in touch</p>
      <h1 className="mt-2 font-display text-3xl font-semibold text-paper md:text-4xl">
        Training, speaking, or just questions
      </h1>
      <p className="mt-4 font-body text-sm text-mist">
        For client project work, that goes through{" "}
        <a href="https://letyarlabs.com/contact" target="_blank" rel="noopener noreferrer" className="text-cyan hover:text-paper">
          Letyar Labs
        </a>
        . For training enrollment, speaking, or anything else — reach me
        directly here.
      </p>

      <div className="mt-10 space-y-6">
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-slate">Email</p>
          <a href="mailto:admin@aungbobokyaw.com" className="mt-1 block font-body text-sm text-paper hover:text-lacquer">
            admin@aungbobokyaw.com
          </a>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-slate">Based in</p>
          <p className="mt-1 font-body text-sm text-paper">Yangon, Myanmar</p>
        </div>
        <div>
          <p className="font-mono text-xs uppercase tracking-wider text-slate">Business inquiries</p>
          <a href="https://letyarlabs.com/contact" target="_blank" rel="noopener noreferrer" className="mt-1 block font-body text-sm text-cyan hover:text-paper">
            letyarlabs.com/contact ↗
          </a>
        </div>
      </div>
    </section>
  );
}
