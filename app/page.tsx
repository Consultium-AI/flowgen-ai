import dynamic from "next/dynamic";
import { Hero } from "@/components/home/Hero";

const Features = dynamic(() =>
  import("@/components/home/Features").then((mod) => mod.Features),
);
const Solution = dynamic(() =>
  import("@/components/home/Solution").then((mod) => mod.Solution),
);
const Testimonials = dynamic(() =>
  import("@/components/home/Testimonials").then((mod) => mod.Testimonials),
);
const Industries = dynamic(() =>
  import("@/components/home/Industries").then((mod) => mod.Industries),
);
const DienstenList = dynamic(() =>
  import("@/components/home/DienstenList").then((mod) => mod.DienstenList),
);
const Workflow = dynamic(() =>
  import("@/components/home/Workflow").then((mod) => mod.Workflow),
);
const Services = dynamic(() =>
  import("@/components/home/Services").then((mod) => mod.Services),
);
const Comparison = dynamic(() =>
  import("@/components/home/Comparison").then((mod) => mod.Comparison),
);
const FAQ = dynamic(() => import("@/components/home/FAQ").then((mod) => mod.FAQ));
const BottomCTA = dynamic(() =>
  import("@/components/home/BottomCTA").then((mod) => mod.BottomCTA),
);

export default function HomePage() {
  return (
    <>
      {/* 1. Hero */}
      <Hero />
      {/* 2. Voor wie */}
      <Industries />
      {/* 3. Probleem */}
      <Features />
      {/* 4. Oplossing */}
      <Solution />
      {/* 5. Case study / Dashboard demo */}
      <Testimonials />
      {/* 6. Diensten / modules */}
      <DienstenList />
      {/* 7. Hoe het werkt */}
      <Workflow />
      {/* 8. Pricing */}
      <Services />
      {/* 9. Security & control */}
      <Comparison />
      {/* 10. FAQ */}
      <FAQ />
      {/* 11. Bottom CTA */}
      <BottomCTA />
    </>
  );
}
