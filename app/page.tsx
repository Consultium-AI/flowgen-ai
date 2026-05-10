import dynamic from "next/dynamic";
import { Hero } from "@/components/home/Hero";

const ROICalculator = dynamic(() =>
  import("@/components/home/ROICalculator").then((mod) => mod.ROICalculator),
);
const Solution = dynamic(() =>
  import("@/components/home/Solution").then((mod) => mod.Solution),
);
const Industries = dynamic(() =>
  import("@/components/home/Industries").then((mod) => mod.Industries),
);
const Workflow = dynamic(() =>
  import("@/components/home/Workflow").then((mod) => mod.Workflow),
);
const Services = dynamic(() =>
  import("@/components/home/Services").then((mod) => mod.Services),
);
const FeaturedTestimonial = dynamic(() =>
  import("@/components/home/FeaturedTestimonial").then(
    (mod) => mod.FeaturedTestimonial,
  ),
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
      {/* 3. ROI-calculator */}
      <ROICalculator />
      {/* 4. Oplossing */}
      <Solution />
      {/* 5. Hoe het werkt */}
      <Workflow />
      {/* 6. Pricing */}
      <Services />
      {/* 7. Testimonial */}
      <FeaturedTestimonial />
      {/* 8. FAQ */}
      <FAQ />
      {/* 9. Bottom CTA */}
      <BottomCTA />
    </>
  );
}
