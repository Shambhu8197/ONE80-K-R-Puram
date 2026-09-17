type Props = { eyebrow: string; title: string; copy?: string };
export function SectionHeading({ eyebrow, title, copy }: Props) { return <div className="max-w-2xl"><p className="eyebrow">{eyebrow}</p><h2 className="section-heading">{title}</h2>{copy && <p className="copy mt-6 max-w-xl">{copy}</p>}</div>; }
