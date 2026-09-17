import Image from "next/image";

type PhotoFrameProps = {
  caption: string;
  index: number;
  src?: string;
  featured?: boolean;
};

export function PhotoFrame({
  caption,
  index,
  src,
  featured = false,
}: PhotoFrameProps) {
  return (
    <figure
      className={`group relative isolate overflow-hidden rounded-2xl border border-line bg-surface-raised transition-all duration-500 hover:-translate-y-1 hover:border-gold/50 ${featured ? "col-span-2 aspect-[1.8] border-gold/30 shadow-[0_22px_55px_rgba(216,174,104,0.1)] md:col-span-2" : "aspect-square"}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-gold/[0.12] via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      {src ? (
        <Image
          src={src}
          alt={caption}
          fill
          sizes="(min-width: 768px) 33vw, 50vw"
          className="object-cover transition duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
        />
      ) : (
        <div
          className="photo-placeholder absolute inset-0"
          aria-hidden="true"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/20 to-background/10" />
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-background/60 to-transparent" />
      <div className="relative flex h-full flex-col justify-between p-5 sm:p-6">
        <span className="self-start border border-gold/50 bg-background/55 px-2 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-gold backdrop-blur-sm">
          {String(index).padStart(2, "0")}
        </span>
        <figcaption className="max-w-[19rem] text-sm leading-5 text-foreground sm:text-base">
          <span className="block translate-y-2 opacity-90 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
            {caption}
          </span>
          {!src && (
            <span className="mt-1 block text-xs text-muted">
              Photo coming soon
            </span>
          )}
        </figcaption>
      </div>
    </figure>
  );
}
