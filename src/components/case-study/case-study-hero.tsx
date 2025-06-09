"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Calendar, Star, Search, Clock } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CaseStudy, Media } from "../../../payload-types";

// Map string icon names to Lucide components
const iconMap = {
  search: Search,
  star: Star,
  calendar: Calendar,
  clock: Clock,
};

export default function CaseStudyHero({ caseStudy }: { caseStudy: CaseStudy }) {
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, amount: 0.3 });
  const heroImage = caseStudy.heroImage as Media;

  return (
    <section className="relative w-full ">
      {/* Hero Background */}
      <div className="relative w-full h-[70vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh]">
        {heroImage && (
          <Image
            src={heroImage.url || "placeholder.svg?height=1080&width=1920"}
            alt={heroImage.alt || "placeholder"}
            fill
            className="object-cover brightness-[0.6]"
            priority
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/40 via-primary/30 to-primary/80"></div>
      </div>

      {/* Hero Content Overlay */}
      <div className="absolute inset-0 flex items-center mx-auto max-w-7xl">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl">
            <Badge
              variant="outline"
              className="bg-primary/20 text-primary-foreground mb-4 backdrop-blur-sm text-sm"
            >
              FALLSTUDIE
            </Badge>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-4 drop-shadow-md">
              {caseStudy.title}
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/90 mb-6 max-w-2xl">
              {caseStudy.description}
            </p>
            <Button className="group" size="lg">
              <Link href={caseStudy.heroCTA.buttonLink} target="_blank">
                {caseStudy.heroCTA.buttonText}
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-full max-w-4xl">
        <div
          ref={statsRef}
          className={`mx-4 grid gap-4 bg-card rounded-lg border border-border/40 shadow-lg p-8`}
          style={{
            gridTemplateColumns: `repeat(${caseStudy.statistics.length}, minmax(0, 1fr))`,
          }}
        >
          {caseStudy.statistics.map((item, index) => {
            const IconComponent = iconMap[item.icon];

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="rounded-full bg-secondary/10 p-3 mb-3">
                  <IconComponent className="h-6 w-6 text-secondary" />
                </div>
                <div className="text-2xl md:text-3xl font-bold text-primary">
                  {item.value}
                </div>
                <div className="text-xs md:text-sm text-muted-foreground">
                  {item.label}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
