import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy beleid",
  description:
    "Privacyverklaring van Qozen AI. Lees hoe wij omgaan met jouw persoonsgegevens.",
};

export default function PrivacyPage() {
  return (
    <article className="container-narrow pb-24 pt-36 sm:pt-44">
      <h1 className="heading-display">Privacyverklaring</h1>
      <p className="mt-4 text-sm text-muted">Laatst bijgewerkt: 5 mei 2025</p>

      <div className="mt-10 max-w-2xl space-y-10 text-base leading-relaxed text-muted">
        {/* 1 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-ink">
            1. Wie zijn wij?
          </h2>
          <p>
            Qozen AI is gevestigd aan de Westerstraat 10, 3016&nbsp;DH Rotterdam
            en ingeschreven bij de Kamer van Koophandel onder nummer{" "}
            <strong className="text-ink">96716606</strong>. Voor vragen over deze
            privacyverklaring kun je contact opnemen via{" "}
            <a className="text-accent underline" href="mailto:info@qozenai.nl">
              info@qozenai.nl
            </a>
            .
          </p>
        </section>

        {/* 2 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-ink">
            2. Welke gegevens verzamelen wij?
          </h2>
          <p>Wij kunnen de volgende persoonsgegevens verwerken:</p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5">
            <li>Voor- en achternaam</li>
            <li>Bedrijfsnaam en functie</li>
            <li>E-mailadres</li>
            <li>Telefoonnummer</li>
            <li>
              Technische gegevens zoals IP-adres, browsertype en paginabezoeken
              (via cookies en analytics)
            </li>
            <li>
              Gegevens die je zelf invult via ons contactformulier of
              workflow-scan aanvraag
            </li>
          </ul>
        </section>

        {/* 3 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-ink">
            3. Waarvoor gebruiken wij deze gegevens?
          </h2>
          <p>Wij verwerken persoonsgegevens uitsluitend voor de volgende doelen:</p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5">
            <li>
              Het uitvoeren van onze diensten (o.a. het bouwen en onderhouden van
              AI Operations Dashboards)
            </li>
            <li>Het beantwoorden van vragen en verzoeken via ons contactformulier</li>
            <li>Het versturen van offertes, facturen en projectupdates</li>
            <li>Het verbeteren van onze website en dienstverlening</li>
            <li>Het naleven van wettelijke verplichtingen (zoals belastingwetgeving)</li>
          </ul>
        </section>

        {/* 4 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-ink">
            4. Grondslagen voor verwerking
          </h2>
          <p>Wij verwerken persoonsgegevens op basis van:</p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5">
            <li>
              <strong className="text-ink">Uitvoering van een overeenkomst</strong>{" "}
              &mdash; wanneer verwerking noodzakelijk is om onze diensten te leveren.
            </li>
            <li>
              <strong className="text-ink">Gerechtvaardigd belang</strong> &mdash;{" "}
              voor het verbeteren van onze website en het beantwoorden van
              contactverzoeken.
            </li>
            <li>
              <strong className="text-ink">Wettelijke verplichting</strong> &mdash;{" "}
              voor het bewaren van administratieve gegevens conform de
              belastingwetgeving.
            </li>
            <li>
              <strong className="text-ink">Toestemming</strong> &mdash; wanneer je
              expliciet toestemming geeft, bijvoorbeeld voor het ontvangen van
              projectupdates.
            </li>
          </ul>
        </section>

        {/* 5 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-ink">
            5. AI-diensten en gegevensverwerking
          </h2>
          <p>
            Qozen AI bouwt dashboards en workflows die gebruikmaken van
            AI-technologie (o.a. large language models). Hierbij geldt:
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5">
            <li>
              Wanneer wij AI-workflows bouwen voor opdrachtgevers, treden wij op
              als <strong className="text-ink">verwerker</strong>. De
              opdrachtgever blijft verantwoordelijk als verwerkingsverantwoordelijke.
            </li>
            <li>
              Klantdata worden niet gebruikt voor het trainen van onze eigen
              modellen.
            </li>
            <li>
              Bij gebruik van externe AI-providers (zoals OpenAI of Anthropic)
              gelden hun verwerkersvoorwaarden. Wij selecteren uitsluitend
              providers met adequate privacywaarborgen.
            </li>
            <li>
              Gevoelige acties binnen dashboards (zoals het versturen van mails)
              worden standaard beveiligd via een approval-proces.
            </li>
          </ul>
        </section>

        {/* 6 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-ink">
            6. Delen met derden
          </h2>
          <p>
            Qozen AI verkoopt jouw gegevens nooit aan derden. Wij kunnen
            gegevens delen met:
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5">
            <li>Hostingproviders voor het draaien van onze dashboards en website</li>
            <li>
              AI-providers (zoals OpenAI, Anthropic) die noodzakelijk zijn voor de
              werking van de gebouwde workflows
            </li>
            <li>Boekhoudsoftware voor facturatie</li>
            <li>
              Overheidsinstanties wanneer dit wettelijk verplicht is
            </li>
          </ul>
          <p className="mt-3">
            Met alle partijen die namens ons persoonsgegevens verwerken sluiten
            wij een verwerkersovereenkomst af.
          </p>
        </section>

        {/* 7 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-ink">
            7. Bewaartermijnen
          </h2>
          <ul className="mt-3 list-disc space-y-1.5 pl-5">
            <li>
              <strong className="text-ink">Administratieve gegevens</strong>{" "}
              (facturen, overeenkomsten): 7 jaar, conform de fiscale
              bewaarplicht.
            </li>
            <li>
              <strong className="text-ink">Contactformulier-gegevens</strong>:
              maximaal 2 jaar na het laatste contact, tenzij er een
              overeenkomst uit voortkomt.
            </li>
            <li>
              <strong className="text-ink">Website-analytics</strong>: maximaal
              26 maanden (afhankelijk van de gebruikte tool).
            </li>
          </ul>
        </section>

        {/* 8 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-ink">
            8. Cookies
          </h2>
          <p>
            Onze website maakt gebruik van functionele cookies die noodzakelijk
            zijn voor de goede werking van de site. Daarnaast kunnen wij
            analytische cookies inzetten om het websitegebruik te analyseren.
            Deze gegevens zijn niet herleidbaar tot een individu.
          </p>
          <p className="mt-3">
            Bij je eerste bezoek vragen wij toestemming voor niet-essenti&euml;le
            cookies. Je kunt je voorkeuren op elk moment wijzigen via je
            browserinstellingen.
          </p>
        </section>

        {/* 9 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-ink">
            9. Beveiliging
          </h2>
          <p>
            Wij nemen passende technische en organisatorische maatregelen om
            persoonsgegevens te beschermen tegen verlies, misbruik of onbevoegde
            toegang. Denk hierbij aan:
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5">
            <li>Versleutelde verbindingen (SSL/TLS)</li>
            <li>Toegangscontrole op systemen en dashboards</li>
            <li>Veilige hosting binnen de EU</li>
            <li>API-keys en wachtwoorden zijn niet zichtbaar in de frontend</li>
          </ul>
        </section>

        {/* 10 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-ink">
            10. Jouw rechten
          </h2>
          <p>
            Op grond van de AVG (Algemene Verordening Gegevensbescherming) heb
            je de volgende rechten:
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5">
            <li>
              <strong className="text-ink">Recht op inzage</strong> &mdash; je
              mag opvragen welke gegevens wij van je bewaren.
            </li>
            <li>
              <strong className="text-ink">Recht op rectificatie</strong> &mdash;{" "}
              je kunt onjuiste gegevens laten corrigeren.
            </li>
            <li>
              <strong className="text-ink">Recht op verwijdering</strong> &mdash;{" "}
              je kunt ons verzoeken jouw gegevens te wissen.
            </li>
            <li>
              <strong className="text-ink">Recht op beperking</strong> &mdash; je
              kunt vragen de verwerking tijdelijk te beperken.
            </li>
            <li>
              <strong className="text-ink">Recht op overdraagbaarheid</strong>{" "}
              &mdash; je kunt vragen om een kopie van je gegevens in een gangbaar
              formaat.
            </li>
            <li>
              <strong className="text-ink">Recht van bezwaar</strong> &mdash; je
              kunt bezwaar maken tegen verwerking op basis van gerechtvaardigd
              belang.
            </li>
          </ul>
          <p className="mt-3">
            Je kunt een verzoek indienen via{" "}
            <a className="text-accent underline" href="mailto:info@qozenai.nl">
              info@qozenai.nl
            </a>
            . Wij reageren binnen vier weken op je verzoek. Je hebt ook altijd
            het recht om een klacht in te dienen bij de Autoriteit
            Persoonsgegevens.
          </p>
        </section>

        {/* 11 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-ink">
            11. Wijzigingen
          </h2>
          <p>
            Qozen AI behoudt zich het recht voor deze privacyverklaring te
            wijzigen. De meest recente versie is altijd beschikbaar op onze
            website. Bij ingrijpende wijzigingen informeren wij je via e-mail of
            een melding op de website.
          </p>
        </section>

        {/* Contact */}
        <section className="rounded-2xl border border-border bg-bg-elevated/40 p-6">
          <h2 className="mb-3 text-lg font-semibold text-ink">
            Contactgegevens
          </h2>
          <ul className="space-y-1">
            <li>
              <strong className="text-ink">Qozen AI</strong>
            </li>
            <li>Westerstraat 10</li>
            <li>3016 DH Rotterdam</li>
            <li>KVK: 96716606</li>
            <li>
              E-mail:{" "}
              <a className="text-accent underline" href="mailto:info@qozenai.nl">
                info@qozenai.nl
              </a>
            </li>
            <li>
              Telefoon:{" "}
              <a className="text-accent underline" href="tel:+31103603123">
                010 360 3123
              </a>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
