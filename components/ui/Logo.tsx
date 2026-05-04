import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  markClassName,
  markSrc = "/images/Qlogo.png",
}: {
  className?: string;
  /** Classes for the logo mark wrapper (e.g. white chip in navbar). */
  markClassName?: string;
  /** Image for the mark; defaults to brand PNG in `public/images`. */
  markSrc?: string;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-2 text-ink font-medium tracking-tight",
        className,
      )}
    >
      <span
      >
        <Image
          src={markSrc}
          alt="Qozen AI"
          width={32}
          height={32}
          className="h-full w-full object-contain"
          priority
        />
      </span>
      <span className="text-base">Qozen AI</span>
    </Link>
  );
}
