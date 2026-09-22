export default function AuthorBio() {
  return (
    <div className="mt-16 flex items-center gap-4 border-t border-white/10 pt-8">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/brand/avatar-cream.svg"
        alt="Aung Bo Bo Kyaw"
        width={56}
        height={56}
        className="shrink-0 rounded-full"
      />
      <div>
        <p className="font-display text-sm font-semibold text-paper">Aung Bo Bo Kyaw</p>
        <p className="mt-1 font-body text-sm text-mist">
          Technician turned builder — founder of{" "}
          <a href="https://letyarlabs.com" target="_blank" rel="noopener noreferrer" className="text-cyan hover:text-paper">
            Letyar Labs
          </a>
          . Writing about the path in between.
        </p>
      </div>
    </div>
  );
}
