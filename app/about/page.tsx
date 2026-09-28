import { AboutView } from "@/components/pages/about-view";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About SimpleThink — A premier software development company built on the belief that custom software and digital systems should be simple, focused, and high-performance.",
};

export default function AboutPage() {
  return <AboutView />;
}
