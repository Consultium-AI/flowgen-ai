import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy beleid — Qozen AI",
  description: "Privacy beleid van Qozen AI.",
};

export default function PrivacyPage() {
  return (
    <article className="container-narrow pb-24 pt-36 sm:pt-44">
      <h1 className="heading-display">Privacy beleid</h1>
      <div className="mt-10 max-w-2xl space-y-5 text-base leading-relaxed text-muted">
        <p>
          Qozen AI hecht waarde aan jouw privacy. In dit privacy beleid leggen we uit
          welke gegevens we verzamelen, waarom we ze verzamelen en hoe je deze kunt
          inzien, wijzigen of verwijderen.
        </p>
        <p>
          We verzamelen alleen de gegevens die nodig zijn voor het leveren van onze
          diensten en het optimaliseren van onze website. Jouw data wordt nooit zonder
          expliciete toestemming met derden gedeeld.
        </p>
        <p>
          Voor vragen kun je contact opnemen via{" "}
          <a className="text-accent underline" href="mailto:info@qozenai.nl">
            info@qozenai.nl
          </a>
          .
        </p>
      </div>
    </article>
  );
}
