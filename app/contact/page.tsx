import { ContactView } from "@/components/pages/contact-view";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with SimpleThink. Discuss your web application, mobile app, software architecture, or schedule a direct engineering consultation.",
};

export default function ContactPage() {
  return <ContactView />;
}
