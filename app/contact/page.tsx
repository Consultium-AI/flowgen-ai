import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Plan een vrijblijvend gesprek of stuur een vraag. We reageren binnen één werkdag. Of het nu roadmap, workflow-scan of pilot betreft, we denken graag met je mee.",
};

export default function ContactPage() {
  return <ContactContent />;
}
