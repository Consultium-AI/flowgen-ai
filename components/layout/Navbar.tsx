"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS, SITE } from "@/lib/content";
import { cn } from "@/lib/utils";

function NavCta({ onNavigate }: { onNavigate?: () => void }) {
  const className =
    "inline-flex min-h-[2.375rem] w-full items-center justify-center rounded-full bg-white px-4 py-2 text-center text-[13px] font-semibold leading-tight text-black transition-colors hover:bg-zinc-100 sm:w-auto sm:min-h-0 sm:px-5 sm:text-sm sm:leading-none";

  const handleClick = () => {
    onNavigate?.();
  };

  if (SITE.cal.strategy.startsWith("http")) {
    return (
      <a
        href={SITE.cal.strategy}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={handleClick}
      >
        Plan workflow-scan
      </a>
    );
  }
  return (
    <Link href={SITE.cal.strategy} onClick={handleClick} className={className}>
      Plan workflow-scan
    </Link>
  );
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [navHidden, setNavHidden] = useState(false);
  const pathname = usePathname();
  const lastScrollY = useRef(0);
  const rafScroll = useRef<number | null>(null);
  const openRef = useRef(open);

  openRef.current = open;

  useEffect(() => {
    if (open) setNavHidden(false);
  }, [open]);

  useEffect(() => {
    if (typeof window === "undefined") return;
    lastScrollY.current = window.scrollY;
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (rafScroll.current !== null) return;

      rafScroll.current = window.requestAnimationFrame(() => {
        rafScroll.current = null;

        if (openRef.current) {
          lastScrollY.current = window.scrollY;
          setNavHidden(false);
          return;
        }

        const y = window.scrollY;
        const delta = y - lastScrollY.current;
        lastScrollY.current = y;

        if (y < 72) {
          setNavHidden(false);
          return;
        }

        const isDemoRecruitment = pathname?.startsWith("/demo-recruitment");
        if (isDemoRecruitment) {
          const hero = document.getElementById("demo-hero");
          if (hero) {
            const heroBottom = hero.getBoundingClientRect().bottom;
            if (heroBottom <= 100) {
              setNavHidden(true);
              return;
            }
          }
        }

        const goingDown = delta > 6;
        const goingUp = delta < -6;

        if (goingDown && y > 96) setNavHidden(true);
        else if (goingUp) setNavHidden(false);
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafScroll.current !== null) {
        window.cancelAnimationFrame(rafScroll.current);
        rafScroll.current = null;
      }
    };
  }, [pathname]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setOpen(false);
    setNavHidden(false);
    if (typeof window !== "undefined") {
      lastScrollY.current = window.scrollY;
    }
  }, [pathname]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  const pillStyle = {
    backgroundColor: "rgba(15, 15, 17, 0.65)",
    borderColor: "rgba(255, 255, 255, 0.14)",
    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
  } as const;

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{
        opacity: open || !navHidden ? 1 : 0,
        y: open || !navHidden ? 0 : -118,
      }}
      transition={{ duration: 0.42, ease: [0.21, 0.6, 0.36, 1] }}
      className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-5 sm:pt-8"
    >
      <div
        className={cn(
          "relative w-full max-w-2xl",
          navHidden && !open
            ? "pointer-events-none"
            : "pointer-events-auto",
        )}
      >
        <div
          className="flex w-full items-center justify-between gap-3 rounded-full border px-3 py-2.5 pl-4 pr-3 backdrop-blur-xl sm:gap-4 sm:py-2 sm:pl-5 sm:pr-2.5"
          style={pillStyle}
        >
          <Logo
            markSrc="/images/Wlogo.png"
            className="font-sans text-[15px] font-bold tracking-tight text-white sm:text-[16px]"
            markClassName="shrink-0 rounded-md"
          />

          <div className="hidden items-center gap-6 sm:flex sm:gap-7">
            <nav className="flex items-center gap-1 lg:gap-2">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                      active
                        ? "text-white"
                        : "text-zinc-400 hover:text-zinc-200",
                    )}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
            <NavCta />
          </div>

          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            className="rounded-full border border-white/15 bg-white/[0.06] p-2 text-white sm:hidden"
            onClick={() => setOpen((o) => !o)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <X className="h-5 w-5" />
                </motion.span>
              ) : (
                <motion.span
                  key="m"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="block"
                >
                  <Menu className="h-5 w-5" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: [0.21, 0.6, 0.36, 1] }}
              className="absolute left-0 right-0 top-[calc(100%+0.625rem)] overflow-hidden rounded-3xl border backdrop-blur-xl sm:hidden"
              style={pillStyle}
            >
              <nav className="flex flex-col gap-0.5 p-2">
                {NAV_LINKS.map((link, i) => {
                  const active = isActive(link.href);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -6 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * i, duration: 0.25 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-medium transition-colors",
                          active
                            ? "bg-white/10 text-white"
                            : "text-zinc-300 hover:bg-white/5 hover:text-white",
                        )}
                      >
                        {link.label}
                        <ArrowRight className="h-4 w-4 opacity-45" />
                      </Link>
                    </motion.div>
                  );
                })}
                <div className="p-2 pt-1">
                  <NavCta onNavigate={() => setOpen(false)} />
                </div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}
