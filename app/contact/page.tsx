import type { Metadata } from "next";
import { ContactContent } from "@/components/contact/ContactContent";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Vertel ons welk proces je wilt automatiseren. We kijken samen of het geschikt is voor een eerste AI-dashboard pilot.",
};

export default function ContactPage() {
  return <ContactContent />;
}
