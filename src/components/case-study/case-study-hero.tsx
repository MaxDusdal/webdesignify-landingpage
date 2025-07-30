"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, Globe } from "lucide-react";
import Image from "next/image";

interface CaseStudyHeroProps {
  clientName: string;
  clientLogo: string;
  industry: string;
  location: string;
  projectType: string[];
  timeframe: string;
  description: string;
  websiteUrl?: string;
  children: React.ReactNode;
}

interface SectionProps {
  title: string;
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const Section = ({ title, children, className, delay = 0 }: SectionProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay }}
    className={`space-y-3 lg:space-y-4 ${className}`}
  >
    <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide hidden lg:block">{title}</h3>
    {children}
  </motion.div>
);

export default function CaseStudyHero({
  clientName,
  clientLogo,
  industry,
  location,
  projectType,
  timeframe,
  description,
  websiteUrl,
  children,
}: CaseStudyHeroProps) {
  const navigationItems = [
    "Projektübersicht",
    "Probleme & Lösungen", 
    "Funktionalitäten",
    "Projektergebnisse"
  ];

  const scrollToSection = (sectionName: string) => {
    const element = document.getElementById(sectionName.toLowerCase().replace(/\s+/g, '-').replace('&', 'und'));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="container mx-auto px-4 max-w-7xl py-4 md:py-8">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-8">
        {/* Sidebar - Stacked on mobile, sidebar on desktop */}
        <div className="w-full lg:w-1/5 lg:min-w-[280px]">
          <div className="lg:sticky lg:top-8 space-y-4 lg:space-y-6">
            {/* Client Logo & Name */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left pb-4 lg:pb-6 border-b border-border items-center"
            >
              <div className="flex items-center justify-center lg:justify-start gap-4 mb-2 lg:mb-3">
                <div className="w-12 h-12 lg:w-16 lg:h-16 relative flex-shrink-0">
                  <Image
                    src={clientLogo}
                    alt={`${clientName} Logo`}
                    fill
                    className="object-contain rounded-lg"
                  />
                </div>
                <div className="text-left">
                  <h1 className="text-lg lg:text-xl font-bold">{clientName}</h1>
                  <p className="text-sm text-muted-foreground">{industry}</p>
                </div>
              </div>
            </motion.div>

            {/* Description - Hidden on mobile to save space */}
            <Section title="" delay={0.1} className="hidden lg:block">
              <p className="text-sm text-muted-foreground leading-relaxed">
                {description}
              </p>
            </Section>

            {/* Navigation Bullets */}
            <Section title="Inhalt" delay={0.2} className="pb-4 lg:pb-6 border-b border-border">
              {/* Mobile: Horizontal scroll navigation */}
              <div className="flex gap-2 overflow-x-auto pb-2 lg:hidden">
                {navigationItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(item)}
                    className="flex-shrink-0 px-3 py-2 text-xs font-medium bg-muted/50 hover:bg-muted rounded-md transition-colors whitespace-nowrap"
                  >
                    {item}
                  </button>
                ))}
              </div>
              {/* Desktop: Vertical navigation */}
              <div className="hidden lg:block space-y-2">
                {navigationItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(item)}
                    className="w-full text-left py-2 px-3 rounded-md hover:bg-muted transition-colors group"
                  >
                    <div className="flex items-center gap-3 cursor-pointer">
                      <span className="text-2xl font-bold text-muted-foreground/30 w-8 group-hover:text-secondary">{index + 1}</span>
                      <span className="text-sm group-hover:text-secondary text-muted-foreground">{item}</span>
                    </div>
                  </button>
                ))}
              </div>
            </Section>

            {/* Meta Information */}
            <Section title="Details" delay={0.3}>
              {/* Mobile: Compact horizontal layout */}
              <div className="grid grid-cols-2 gap-4 lg:hidden">
                <div>
                  <p className="text-xs text-muted-foreground">Standort</p>
                  <p className="text-sm font-medium">{location}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Zeitraum</p>
                  <p className="text-sm font-medium">{timeframe}</p>
                </div>
              </div>

              {/* Desktop: Vertical layout with icons */}
              <div className="hidden lg:block space-y-4">
                {/* Location */}
                <div className="flex items-start gap-3">
                  <Globe className="w-4 h-4 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Standort</p>
                    <p className="text-sm">{location}</p>
                  </div>
                </div>

                {/* Timeframe */}
                <div className="flex items-start gap-3">
                  <Calendar className="w-4 h-4 text-muted-foreground mt-0.5" />
                  <div>
                    <p className="text-xs text-muted-foreground">Zeitraum</p>
                    <p className="text-sm">{timeframe}</p>
                  </div>
                </div>
              </div>
              {/* Project Types */}
              <Section title="Services">
                <div className="flex flex-wrap gap-1">
                  {projectType.map((type, index) => (
                    <Badge key={index} variant="secondary" className="text-xs bg-secondary/10 text-secondary">
                      {type}
                    </Badge>
                  ))}
                </div>
              </Section>

              {/* Website Link */}
              {websiteUrl && (
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full mt-3 lg:mt-4"
                  onClick={() => window.open(websiteUrl, '_blank')}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Website besuchen
                </Button>
              )}
            </Section>
          </div>
        </div>

        {/* Content Area - Full width on mobile, 4/5 on desktop */}
        <div className="w-full lg:w-4/5">
          {children}
        </div>
      </div>
    </div>
  );
}