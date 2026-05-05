import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  markClassName,
  markSrc = "/images/Qlogo.png",
  large = false,
}: {
  className?: string;
  /** Classes for the logo mark wrapper (e.g. white chip in navbar). */
  markClassName?: string;
  /** Image for the mark; defaults to brand PNG in `public/images`. */
  markSrc?: string;
  /** Taller wordmark for navbar. */
  large?: boolean;
}) {
  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center text-ink font-medium tracking-tight",
        large ? "gap-2.5" : "gap-2",
        className,
      )}
    >
      <span className={markClassName}>
        <Image
          src={markSrc}
          alt="Qozen AI"
          width={large ? 40 : 32}
          height={large ? 40 : 32}
          className={cn("object-contain", large ? "h-10 w-10" : "h-8 w-8")}
          priority
        />
      </span>
      <span
        className={cn(
          large ? "text-lg font-semibold sm:text-xl" : "text-base",
        )}
      >
        Qozen AI
      </span>
    </Link>
  );
}
