import { Media, Projekte } from "../../../payload-types";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { getPayload } from "payload";
import HeaderSection from "@/components/sections/header-section";
import payloadConfig from "@/app/payload.config";
interface Tag {
  tag: string;
}

export async function getData(): Promise<Projekte[]> {
  const payload = await getPayload({ config: payloadConfig });
  const { docs: projects } = await payload.find({
    collection: "projekte",
    depth: 2,
    sort: "-projectDate",
  });

  return projects as Projekte[];
}

export default async function Projects() {
  const projects = await getData();

  return (
    <div className="container px-4 md:px-6 mx-auto py-12 md:py-16 max-w-7xl">
      <HeaderSection
        headerType="h2"
        animate={false}
        title="Meine Projekte"
        description="Entdecken Sie meine bisherigen Projekte und Leistungen"
      />

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <Link
            key={project.id}
            href={project.url}
            className="group flex flex-col overflow-hidden rounded-lg shadow-md border border-border bg-card transition-all duration-200 hover:shadow-lg"
          >
            <div className="relative h-[200px] overflow-hidden">
              <Image
                src={(project.image as Media).url ?? "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover"
              />
              <div className="absolute top-4 left-4 flex gap-2 flex-wrap">
                {project.tags?.map((tagObj: Tag, i: number) => (
                  <Badge
                    key={i}
                    variant="secondary"
                    className="bg-primary/80 text-primary-foreground"
                  >
                    {tagObj.tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="flex flex-col flex-1 p-6">
              <h2 className="text-xl font-bold mb-1 transition-colors">
                {project.title}
              </h2>
              <p className="text-sm text-muted-foreground mb-4">
                {project.subtitle}
              </p>


              <div className="mt-auto pt-4 flex items-center text-secondary justify-between font-medium text-sm">
                Projekt ansehen
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
