import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="relative isolate flex min-h-[80vh] items-center justify-center overflow-hidden pt-32">
      <div aria-hidden className="grid-bg absolute inset-0 -z-20" />
      <div className="container-narrow text-center">
        <h1 className="heading-display">Pagina niet gevonden</h1>
        <p className="mx-auto mt-5 max-w-md text-muted">
          De pagina die je zoekt bestaat niet. Laten we je terugbrengen naar onze
          homepage.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-accent-soft hover:shadow-glow"
        >
          <ArrowLeft className="h-4 w-4" />
          Terug naar homepage
        </Link>
      </div>
    </section>
  );
}
