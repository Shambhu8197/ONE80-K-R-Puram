import type { AnchorHTMLAttributes, ReactNode } from "react";
type Props = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
  variant?: "primary" | "secondary";
};
export function ButtonLink({
  children,
  className = "",
  variant = "primary",
  ...props
}: Props) {
  const styles =
    variant === "primary"
      ? "bg-gold text-black hover:bg-foreground"
      : "border border-line text-foreground hover:border-accent hover:text-accent";
  return (
    <a
      className={`inline-flex min-h-12 items-center justify-center px-5 text-xs font-semibold uppercase tracking-[.16em] transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent ${styles} ${className}`}
      {...props}
    >
      {children}
    </a>
  );
}
