import { Metadata } from "next";
import Projects from "@/components/sections/projects";

export const metadata: Metadata = {
  title: "Meine Projekte - Webdesignify",
  description: "Entdecken Sie meine bisherigen Projekte und Leistungen",
};

export default async function ProjectsPage() {
  return (
    <main>
      <Projects />
    </main>
  );
}
