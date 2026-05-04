import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Algemene voorwaarden — Qozen AI",
  description: "Algemene voorwaarden van Qozen AI.",
};

export default function TermsPage() {
  return (
    <article className="container-narrow pb-24 pt-36 sm:pt-44">
      <h1 className="heading-display">Algemene voorwaarden</h1>
      <div className="mt-10 max-w-2xl space-y-5 text-base leading-relaxed text-muted">
        <p>
          Deze algemene voorwaarden zijn van toepassing op alle overeenkomsten tussen
          Qozen AI en haar opdrachtgevers. Bij het inschakelen van onze diensten ga je
          akkoord met onderstaande voorwaarden.
        </p>
        <p>
          Voor specifieke vragen of een PDF-versie van onze voorwaarden kun je contact
          opnemen via{" "}
          <a className="text-accent underline" href="mailto:info@qozenai.nl">
            info@qozenai.nl
          </a>
          .
        </p>
      </div>
    </article>
  );
}
