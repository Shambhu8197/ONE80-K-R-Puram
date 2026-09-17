type ArtistCardProps = {
  number: string;
  title: string;
  photo: string;
  languages: string[];
};
export function ArtistCard({
  number,
  title,
  photo,
  languages,
}: ArtistCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-2xl border border-line bg-surface-raised p-3 shadow-[0_18px_45px_rgba(0,0,0,0.16)] transition-all duration-500 hover:-translate-y-1 hover:border-gold/45 hover:shadow-[0_24px_60px_rgba(216,174,104,0.1)] sm:p-4">
      <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.12] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      <div className="relative">
        <div
          className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-cover bg-center grayscale transition duration-700 group-hover:grayscale-0"
          style={{ backgroundImage: `url(${photo})` }}
          role="img"
          aria-label={`${title} performing live`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-background/10" />
          <span className="absolute left-4 top-4 border border-gold/45 bg-background/55 px-2 py-1 font-mono text-[10px] uppercase tracking-[.16em] text-gold backdrop-blur-sm">
            Live artist
          </span>
          <span className="absolute bottom-4 right-4 text-2xl text-foreground/80 transition-transform duration-500 group-hover:translate-x-1">
            ↗
          </span>
        </div>
        <div className="mt-5 flex items-center justify-between gap-3">
          <p className="font-mono text-sm text-gold">{number}</p>
          <span className="h-px flex-1 bg-gradient-to-r from-gold/60 to-transparent" />
        </div>
        <div className="mt-5">
          <p className="eyebrow text-[10px] text-foreground/60">
            Featured performer
          </p>
          <h3 className="mt-3 text-2xl font-medium tracking-[-0.04em] text-foreground sm:text-3xl">
            {title}
          </h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {languages.map((language) => (
              <span
                key={language}
                className="border border-line px-2 py-1 text-[10px] uppercase tracking-[.12em] text-muted"
              >
                {language}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
