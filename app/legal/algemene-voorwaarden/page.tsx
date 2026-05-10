import type { Metadata } from "next";
import { SITE } from "@/lib/content";

export const metadata: Metadata = {
  title: "Algemene voorwaarden",
  description:
    "Algemene voorwaarden van Qozen AI. Lees onze leveringsvoorwaarden, aansprakelijkheid en afspraken.",
};

export default function TermsPage() {
  return (
    <article className="container-narrow pb-24 pt-36 sm:pt-44">
      <h1 className="heading-display">Algemene voorwaarden</h1>
      <p className="mt-4 text-sm text-muted">Laatst bijgewerkt: 10 mei 2026</p>

      <div className="mt-10 max-w-2xl space-y-10 text-base leading-relaxed text-muted">
        {/* 1 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-ink">
            1. Definities
          </h2>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              <strong className="text-ink">Qozen AI</strong>: de eenmanszaak
              Qozen AI, gevestigd te Rotterdam, ingeschreven bij de KvK onder
              nummer {SITE.kvk}, BTW-identificatienummer {SITE.btw}.
            </li>
            <li>
              <strong className="text-ink">Opdrachtgever</strong>: de
              natuurlijke of rechtspersoon die een overeenkomst aangaat met
              Qozen AI.
            </li>
            <li>
              <strong className="text-ink">Diensten</strong>: alle werkzaamheden
              die Qozen AI verricht, waaronder het ontwerpen, bouwen en
              onderhouden van AI Operations Dashboards, workflows en
              aanverwante automatiseringen.
            </li>
            <li>
              <strong className="text-ink">Dashboard</strong>: de door Qozen AI
              ontwikkelde webapplicatie waarin AI-workflows, leads, opvolgingen
              en rapportages zichtbaar en beheerbaar worden gemaakt.
            </li>
          </ul>
        </section>

        {/* 2 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-ink">
            2. Demo&rsquo;s, website en contractuele scope
          </h2>
          <p>
            Productdemo&rsquo;s, voorbeeldschermen en teksten op de website
            (waaronder de recruitment-productdemo) illustreren een
            productrichting. Wat Qozen AI contractueel levert, staat in de
            offerte, bevestiging van opdracht en verdere schriftelijke afspraken.
            Standaard omvat een pilot geen volledige automatische koppeling met
            externe platforms (zoals ATS, professionele netwerksites,
            agenda-tools of klantomgevingen), tenzij dat uitdrukkelijk als
            onderdeel van de scope is beschreven en gefactureerd.
          </p>
        </section>

        {/* 3 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-ink">
            3. Toepasselijkheid
          </h2>
          <p>
            Deze algemene voorwaarden zijn van toepassing op alle aanbiedingen,
            offertes en overeenkomsten tussen Qozen AI en de opdrachtgever.
            Afwijkingen zijn alleen geldig wanneer deze schriftelijk zijn
            overeengekomen.
          </p>
          <p className="mt-3">
            Door het verstrekken van een opdracht of het accepteren van een
            offerte verklaart de opdrachtgever zich akkoord met deze
            voorwaarden.
          </p>
        </section>

        {/* 4 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-ink">
            4. Offertes en overeenkomsten
          </h2>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              Alle offertes van Qozen AI zijn vrijblijvend en hebben een
              geldigheidsduur van 14 dagen, tenzij anders aangegeven.
            </li>
            <li>
              Een overeenkomst komt tot stand op het moment dat de opdrachtgever
              een offerte schriftelijk (of per e-mail) accepteert, dan wel
              wanneer Qozen AI feitelijk met de werkzaamheden begint.
            </li>
            <li>
              Elke offerte bevat een omschrijving van de scope, het
              tijdsbestek, de setupkosten en de maandelijkse kosten.
            </li>
          </ul>
        </section>

        {/* 5 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-ink">
            5. Uitvoering van diensten
          </h2>
          <p>
            Qozen AI voert alle diensten uit naar beste inzicht en vermogen. Het
            betreft een <strong className="text-ink">inspanningsverplichting</strong>,
            geen resultaatverplichting. Specifiek voor AI-diensten geldt:
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5">
            <li>
              AI-oplossingen zijn afhankelijk van externe factoren zoals de
              beschikbaarheid en prestaties van AI-modellen (o.a. OpenAI,
              Anthropic), datakwaliteit en API-beschikbaarheid.
            </li>
            <li>
              Qozen AI garandeert niet dat AI-gegenereerde output altijd
              foutloos, volledig of actueel is.
            </li>
            <li>
              De opdrachtgever is verantwoordelijk voor het controleren en
              goedkeuren van AI-gegenereerde acties alvorens deze worden
              uitgevoerd (bijvoorbeeld via de approval inbox).
            </li>
          </ul>
        </section>

        {/* 6 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-ink">
            6. Verantwoord gebruik van AI
          </h2>
          <p>
            De door Qozen AI geleverde dashboards en AI-workflows mogen niet
            worden ingezet voor:
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5">
            <li>Het stellen van medische diagnoses of het geven van medisch advies</li>
            <li>
              Het nemen van juridisch bindende beslissingen zonder menselijke
              beoordeling
            </li>
            <li>
              Het nemen van financi&euml;le beslissingen zonder menselijke
              controle
            </li>
            <li>
              Discriminerende, misleidende of onrechtmatige doeleinden
            </li>
            <li>
              Het massaal versturen van ongewenste berichten (spam)
            </li>
          </ul>
          <p className="mt-3">
            De opdrachtgever draagt volledige verantwoordelijkheid voor het
            gebruik van de geleverde systemen en de output die daaruit
            voortkomt.
          </p>
        </section>

        {/* 7 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-ink">
            7. Meerwerk
          </h2>
          <p>
            Werkzaamheden die buiten de overeengekomen scope vallen, gelden als
            meerwerk. Meerwerk wordt pas uitgevoerd na schriftelijke
            overeenstemming over de aanvullende kosten. Voorbeelden van meerwerk
            zijn:
          </p>
          <ul className="mt-3 list-disc space-y-1.5 pl-5">
            <li>Extra workflows bovenop het afgesproken pakket</li>
            <li>Aanvullende integraties (CRM, ATS, WhatsApp, externe API&rsquo;s)</li>
            <li>Wijzigingen in scope na oplevering van het dashboard</li>
            <li>Training of onboarding van extra teamleden</li>
          </ul>
        </section>

        {/* 8 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-ink">
            8. Prijzen en betaling
          </h2>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>Alle genoemde prijzen zijn exclusief btw, tenzij anders vermeld.</li>
            <li>
              Setupkosten worden gefactureerd bij aanvang van het project.
              Maandelijkse kosten worden per maand vooraf gefactureerd.
            </li>
            <li>
              De betalingstermijn is 14 dagen na factuurdatum, tenzij anders
              overeengekomen.
            </li>
            <li>
              Bij niet-tijdige betaling is Qozen AI gerechtigd de dienstverlening
              op te schorten en wettelijke rente in rekening te brengen.
            </li>
            <li>
              Externe kosten (zoals API-verbruik van AI-providers) worden
              1-op-1 doorbelast, vermeerderd met 15% beheervergoeding.
            </li>
          </ul>
        </section>

        {/* 9 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-ink">
            9. Intellectueel eigendom
          </h2>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              Alle intellectuele eigendomsrechten op door Qozen AI ontwikkelde
              code, dashboards, prompts, systemen en documentatie berusten bij
              Qozen AI.
            </li>
            <li>
              De opdrachtgever ontvangt een niet-exclusief, niet-overdraagbaar
              gebruiksrecht voor de duur van de overeenkomst.
            </li>
            <li>
              Het is niet toegestaan om door Qozen AI geleverde systemen te
              kopi&euml;ren, aan te passen of door te verkopen zonder
              schriftelijke toestemming.
            </li>
            <li>
              Door de opdrachtgever aangeleverde data, content en materialen
              blijven eigendom van de opdrachtgever.
            </li>
          </ul>
        </section>

        {/* 10 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-ink">
            10. Gegevensverwerking en AVG
          </h2>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              Qozen AI verwerkt persoonsgegevens conform de Algemene Verordening
              Gegevensbescherming (AVG). Zie onze{" "}
              <a
                className="text-accent underline"
                href="/legal/privacy-beleid"
              >
                privacyverklaring
              </a>{" "}
              voor details.
            </li>
            <li>
              Wanneer Qozen AI persoonsgegevens verwerkt namens de
              opdrachtgever, treedt Qozen AI op als verwerker. Indien gewenst
              sluiten wij een verwerkersovereenkomst.
            </li>
            <li>
              De opdrachtgever garandeert dat alle aan Qozen AI verstrekte
              gegevens rechtmatig zijn verkregen en dat de benodigde
              toestemmingen zijn verkregen.
            </li>
          </ul>
        </section>

        {/* 11 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-ink">
            11. Aansprakelijkheid
          </h2>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              De aansprakelijkheid van Qozen AI is beperkt tot het bedrag dat
              voor de betreffende dienst is gefactureerd in de drie maanden
              voorafgaand aan de schadeveroorzakende gebeurtenis.
            </li>
            <li>
              Qozen AI is niet aansprakelijk voor indirecte schade, waaronder
              gederfde winst, gemiste besparingen, reputatieschade of schade door
              bedrijfsstagnatie.
            </li>
            <li>
              Qozen AI is niet aansprakelijk voor schade die voortvloeit uit
              foutieve of onverwachte AI-output, noch voor beslissingen die de
              opdrachtgever neemt op basis van AI-gegenereerde resultaten.
            </li>
            <li>
              Qozen AI is niet aansprakelijk voor storingen, onderbrekingen of
              wijzigingen bij externe diensten en AI-providers waarvan de
              dashboards afhankelijk zijn.
            </li>
          </ul>
        </section>

        {/* 12 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-ink">
            12. Onderhoud en support
          </h2>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              Doorlopende pakketten omvatten maandelijks onderhoud en kleine
              optimalisaties, zoals beschreven in de offerte.
            </li>
            <li>
              Support is beschikbaar op werkdagen. Responstijd is afhankelijk van
              het gekozen pakket.
            </li>
            <li>
              Grotere aanpassingen of nieuwe functionaliteiten vallen onder
              meerwerk (zie artikel 7).
            </li>
          </ul>
        </section>

        {/* 13 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-ink">
            13. Looptijd en opzegging
          </h2>
          <ul className="list-disc space-y-1.5 pl-5">
            <li>
              <strong className="text-ink">Eenmalige projecten</strong>: de
              overeenkomst eindigt na oplevering en betaling. Vroegtijdige
              opzegging door de opdrachtgever laat de betalingsverplichting voor
              reeds uitgevoerde werkzaamheden onverlet.
            </li>
            <li>
              <strong className="text-ink">Doorlopende diensten</strong>{" "}
              (maandelijkse pakketten): opzegbaar met een opzegtermijn van
              1 kalendermaand, schriftelijk of per e-mail.
            </li>
            <li>
              Na be&euml;indiging van de overeenkomst wordt de toegang tot het
              dashboard be&euml;indigd. De opdrachtgever ontvangt desgevraagd een
              export van eigen data.
            </li>
          </ul>
        </section>

        {/* 14 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-ink">
            14. Overmacht
          </h2>
          <p>
            Qozen AI is niet gehouden tot nakoming van enige verplichting indien
            sprake is van overmacht. Onder overmacht wordt verstaan: storingen
            bij externe AI-providers, internetuitval, stroomuitval,
            overheidsmaatregelen of andere omstandigheden buiten de
            redelijke invloedssfeer van Qozen AI. Gedurende overmacht worden de
            verplichtingen van Qozen AI opgeschort.
          </p>
        </section>

        {/* 15 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-ink">
            15. Toepasselijk recht en geschillen
          </h2>
          <p>
            Op alle overeenkomsten tussen Qozen AI en de opdrachtgever is
            Nederlands recht van toepassing. Geschillen worden in eerste
            instantie in onderling overleg opgelost. Indien dit niet lukt, is de
            bevoegde rechter te Rotterdam exclusief bevoegd.
          </p>
        </section>

        {/* 16 */}
        <section>
          <h2 className="mb-3 text-lg font-semibold text-ink">
            16. Wijzigingen
          </h2>
          <p>
            Qozen AI behoudt zich het recht voor deze algemene voorwaarden te
            wijzigen. De meest actuele versie is altijd beschikbaar op onze
            website. Bij ingrijpende wijzigingen worden bestaande opdrachtgevers
            hiervan op de hoogte gesteld.
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
            <li>KVK: {SITE.kvk}</li>
            <li>BTW: {SITE.btw}</li>
            <li>
              E-mail:{" "}
              <a className="text-accent underline" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
            </li>
            <li>
              Telefoon:{" "}
              <a className="text-accent underline" href={SITE.phoneHref}>
                {SITE.phone}
              </a>
            </li>
          </ul>
        </section>
      </div>
    </article>
  );
}
