import Link from "next/link";
import { Mail, MessageCircle, Phone, Linkedin } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { FOOTER_LINKS, SITE } from "@/lib/content";

export function Footer() {
  return (
    <footer
      className="hero-dark relative isolate overflow-hidden border-t border-white/10"
      style={{ backgroundColor: "#070708" }}
    >
      {/* Top hairline */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(16,185,129,0.45) 50%, transparent 100%)",
        }}
      />

      {/* Mesh background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(at 18% 22%, rgba(16,185,129,0.10) 0px, transparent 50%), radial-gradient(at 82% 38%, rgba(20,184,166,0.06) 0px, transparent 55%), radial-gradient(at 50% 90%, rgba(34,197,94,0.06) 0px, transparent 55%)",
        }}
      />

      {/* Dot pattern */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-50"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage:
            "linear-gradient(180deg, transparent 0%, #000 30%, #000 100%)",
          WebkitMaskImage:
            "linear-gradient(180deg, transparent 0%, #000 30%, #000 100%)",
        }}
      />

      {/* Pulsing aurora behind wordmark */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/2 -z-10 h-[80%] w-[110%] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at 50% 70%, rgba(16,185,129,0.16) 0%, transparent 60%)",
          filter: "blur(80px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-20 left-1/2 -z-10 h-1/2 w-[60%] -translate-x-1/2"
        style={{
          background:
            "radial-gradient(ellipse at 50% 70%, rgba(102,224,224,0.10) 0%, transparent 65%)",
          filter: "blur(70px)",
        }}
      />

      <div className="container-narrow relative pb-10 pt-24">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div className="max-w-sm space-y-6">
            <Logo
              className="text-white"
              markSrc="/images/Wlogo.png"
              markClassName="bg-black p-0.5 shadow-sm ring-white/25"
            />
            <p className="text-sm leading-relaxed text-muted">
              Wij bouwen AI-dashboards waarmee je team grip houdt op leads,
              opvolgingen en goedkeuringen. Alles op één plek.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href={SITE.phoneHref}
                className="inline-flex items-center gap-2 text-white/75 transition-colors hover:text-accent"
              >
                <Phone className="h-4 w-4" />
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-2 text-white/75 transition-colors hover:text-accent"
              >
                <Mail className="h-4 w-4" />
                {SITE.email}
              </a>
            </div>
            <div className="flex gap-2">
              <a
                href={`https://wa.me/${SITE.phone.replace(/\D/g, "")}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/12 bg-white/[0.06] text-white/70 transition-colors hover:border-accent/50 hover:text-accent"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a
                href={SITE.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-10 w-10 place-items-center rounded-xl border border-white/12 bg-white/[0.06] text-white/70 transition-colors hover:border-accent/50 hover:text-accent"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>

          <FooterColumn title="Navigatie" items={FOOTER_LINKS.navigatie} />
          <FooterColumn title="Start" items={FOOTER_LINKS.start} />
          <FooterColumn title="Legal" items={FOOTER_LINKS.legal} />
        </div>

        {/* Massive scroll-revealed wordmark */}
        <div className="my-16 select-none text-center">
          <h2 className="font-display display-tight bg-gradient-to-b from-white/80 to-white/5 bg-clip-text text-[clamp(4rem,18vw,16rem)] font-medium leading-[0.85] text-transparent">
            Qozen AI
          </h2>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="max-w-lg text-center font-mono text-[10px] uppercase leading-relaxed tracking-[0.16em] text-muted-soft sm:text-left sm:text-[11px] sm:tracking-[0.18em]">
            © {new Date().getFullYear()} Qozen AI · KVK {SITE.kvk} · BTW{" "}
            {SITE.btw} · Alle rechten voorbehouden
          </p>
          <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-soft">
            Gebouwd met passie in Nederland
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <h4 className="font-mono text-[11px] font-medium uppercase tracking-[0.22em] text-muted">
        {title}
      </h4>
      <ul className="mt-4 space-y-2.5">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="text-sm text-white/70 transition-colors hover:text-accent"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
