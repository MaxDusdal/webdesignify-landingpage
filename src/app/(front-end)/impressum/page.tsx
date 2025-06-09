import { Metadata } from "next";
import LegalPage from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Impressum - Webdesignify",
  description: "Impressum von Webdesignify Maximilian Tim Dusdal",
};

export default function ImpressumPage() {
  return <LegalPage slug="impressum" />;
}
