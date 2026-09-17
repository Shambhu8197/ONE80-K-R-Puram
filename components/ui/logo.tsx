import Image from "next/image";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Image
      src="/logo/one80-logo.png.avif"
      alt="ONE80° K R Puram"
      width={180}
      height={48}
      priority
      className={`h-8 w-auto max-w-[148px] object-contain object-left sm:h-9 sm:max-w-[180px] ${className}`}
      style={{ width: "auto", height: "auto" }}
    />
  );
}
