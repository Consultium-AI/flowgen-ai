"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { NAV_LINKS, SITE } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolledState] = useState(false);
  const [navHidden, setNavHiddenState] = useState(false);
  const [open, setOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const darkHeroRef = useRef<HTMLElement | null>(null);
  const rafRef = useRef<number | null>(null);
  const openRef = useRef(open);
  const scrolledRef = useRef(scrolled);
  const navHiddenRef = useRef(navHidden);
  const headerHeightRef = useRef(80);
  const darkHeroTopRef = useRef<number | null>(null);
  const darkHeroBottomRef = useRef<number | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    openRef.current = open;
    if (open) {
      navHiddenRef.current = false;
      setNavHiddenState(false);
    }
  }, [open]);

  useEffect(() => {
    darkHeroRef.current = document.querySelector<HTMLElement>('[data-navbar-theme="dark"]');

    const setScrolled = (nextScrolled: boolean) => {
      if (scrolledRef.current === nextScrolled) return;
      scrolledRef.current = nextScrolled;
      setScrolledState(nextScrolled);
    };

    const setNavHidden = (nextNavHidden: boolean) => {
      if (navHiddenRef.current === nextNavHidden) return;
      navHiddenRef.current = nextNavHidden;
      setNavHiddenState(nextNavHidden);
    };

    const measureNavbarBounds = () => {
      const darkHero = darkHeroRef.current;
      headerHeightRef.current = headerRef.current?.offsetHeight ?? 80;
      if (darkHero) {
        darkHeroTopRef.current = darkHero.offsetTop;
        darkHeroBottomRef.current = darkHero.offsetTop + darkHero.offsetHeight;
      } else {
        darkHeroTopRef.current = null;
        darkHeroBottomRef.current = null;
      }
    };

    const updateNavbar = () => {
      rafRef.current = null;
      const currentScrollY = window.scrollY;
      const heroTop = darkHeroTopRef.current;
      const heroBottom = darkHeroBottomRef.current;
      const headerH = headerHeightRef.current;

      let nextScrolled: boolean;
      if (heroTop === null || heroBottom === null) {
        nextScrolled = true;
      } else {
        const navTop = currentScrollY;
        const navBottom = currentScrollY + headerH;
        const overlapsDarkHero = navBottom > heroTop && navTop < heroBottom;
        nextScrolled = !overlapsDarkHero;
      }
      setScrolled(nextScrolled);

      setNavHidden(currentScrollY > 80 && !openRef.current);
    };

    const onScroll = () => {
      if (rafRef.current !== null) return;
      rafRef.current = window.requestAnimationFrame(updateNavbar);
    };

    const onResize = () => {
      measureNavbarBounds();
      updateNavbar();
    };

    measureNavbarBounds();
    updateNavbar();

    const resizeObserver =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => {
            measureNavbarBounds();
            onScroll();
          })
        : null;

    if (resizeObserver) {
      if (headerRef.current) resizeObserver.observe(headerRef.current);
      if (darkHeroRef.current) resizeObserver.observe(darkHeroRef.current);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      if (rafRef.current !== null) window.cancelAnimationFrame(rafRef.current);
      resizeObserver?.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, [pathname]);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
    navHiddenRef.current = false;
    setNavHiddenState(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href.startsWith("/#")) return false;
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <motion.header
      ref={headerRef}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: navHidden ? -96 : 0, opacity: navHidden ? 0 : 1 }}
      transition={{ duration: 0.6, ease: [0.21, 0.6, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-4 sm:pt-6"
    >
      <motion.div
        className={cn(
          "relative flex w-full items-center justify-between rounded-2xl border px-4 py-3 transition-[background,border,box-shadow] duration-500 sm:px-5 sm:py-3.5",
          scrolled
            ? "border-border bg-white/94 shadow-[0_18px_45px_-34px_rgba(15,23,42,0.45)] backdrop-blur-xl"
            : "border-white/20 bg-slate-950/45 shadow-[0_18px_45px_-38px_rgba(0,0,0,0.7)] backdrop-blur-md",
        )}
      >
        <div className="flex items-center gap-2.5">
          <Logo
            className={scrolled ? undefined : "text-white"}
            markSrc="/images/Wlogo.png"
            markClassName={cn(
              "bg-black p-0.5 shadow-sm",
              scrolled ? "ring-black/20" : "ring-white/25",
            )}
          />
        </div>

        <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors duration-200",
                  active
                    ? scrolled
                      ? "text-accent"
                      : "text-white"
                    : scrolled
                      ? "text-ink/70 hover:text-ink"
                      : "text-slate-200 hover:text-white",
                )}
              >
                {active && (
                  <motion.span
                    layoutId="nav-active"
                    className={cn(
                      "absolute inset-0 -z-0 rounded-xl",
                      scrolled ? "bg-accent/10" : "bg-white/10",
                    )}
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:block">
          {SITE.cal.strategy.startsWith("http") ? (
            <a
              href={SITE.cal.strategy}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-glow-soft transition-all duration-300 hover:bg-accent-soft hover:shadow-glow"
            >
              Plan workflow-scan
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          ) : (
            <Link
              href={SITE.cal.strategy}
              className="group inline-flex items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-white shadow-glow-soft transition-all duration-300 hover:bg-accent-soft hover:shadow-glow"
            >
              Plan workflow-scan
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </Link>
          )}
        </div>

        <button
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          className={cn(
            "rounded-xl border p-2.5 md:hidden",
            scrolled
              ? "border-border bg-white text-ink"
              : "border-white/20 bg-white/10 text-white",
          )}
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
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3, ease: [0.21, 0.6, 0.36, 1] }}
            className="absolute left-4 right-4 top-[78px] overflow-hidden rounded-2xl border border-border bg-white shadow-card md:hidden"
          >
            {/* Layered mobile menu background */}
            <div
              aria-hidden
              className="absolute inset-0 -z-10"
              style={{ backgroundColor: "#FFFFFF" }}
            />
            <div
              aria-hidden
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "radial-gradient(ellipse at 30% 0%, rgba(16,185,129,0.08) 0%, transparent 60%), radial-gradient(ellipse at 80% 100%, rgba(20,184,166,0.05) 0%, transparent 60%)",
              }}
            />
            <div className="relative backdrop-blur-xl">
              <nav className="flex flex-col gap-1 p-4">
                {NAV_LINKS.map((link, i) => {
                  const active = isActive(link.href);
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.06 * i, duration: 0.3 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-colors",
                          active
                            ? "bg-accent/10 text-accent"
                            : "text-ink/80 hover:bg-bg-card hover:text-ink",
                        )}
                      >
                        {link.label}
                        <ArrowRight className="h-4 w-4 opacity-50" />
                      </Link>
                    </motion.div>
                  );
                })}
                <div className="mt-2 border-t border-border pt-3">
                  {SITE.cal.strategy.startsWith("http") ? (
                    <a
                      href={SITE.cal.strategy}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white shadow-glow-soft"
                    >
                      Plan workflow-scan
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  ) : (
                    <Link
                      href={SITE.cal.strategy}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white shadow-glow-soft"
                    >
                      Plan workflow-scan
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
