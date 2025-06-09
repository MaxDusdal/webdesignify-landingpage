import { Metadata } from "next";
import LegalPage from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Datenschutzerklärung - Webdesignify",
  description: "Datenschutzerklärung von Webdesignify Maximilian Tim Dusdal",
};

export default function DatenschutzPage() {
  return <LegalPage slug="datenschutz" />;
}
