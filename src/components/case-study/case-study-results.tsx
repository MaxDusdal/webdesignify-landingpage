"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TrendingUp, LineChart, Users } from "lucide-react";
import { CaseStudy } from "../../../payload-types";

export default function CaseStudyResults({
  caseStudy,
}: {
  caseStudy: CaseStudy;
}) {
  const resultsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(resultsRef, { once: true, amount: 0.2 });

  const metrics = [
    {
      category: "Online-Sichtbarkeit",
      icon: TrendingUp,
      stats: [
        {
          label: "Organisches Suchranking",
          before: "Position 48+ für relevante Keywords",
          after: "Top 10 Position für relevante Keywords",
          improvement: "+100%",
        },
        {
          label: "Website-Besuche pro Monat",
          before: "1.200",
          after: "4.800+",
          improvement: "+300%",
        },
        {
          label: "Mobile Besucher",
          before: "28% der Gesamtbesucher",
          after: "64% der Gesamtbesucher",
          improvement: "+129%",
        },
      ],
    },
    {
      category: "Kundeninteraktion",
      icon: Users,
      stats: [
        {
          label: "Online-Reservierungsrate",
          before: "12% aller Reservierungen",
          after: "78% aller Reservierungen",
          improvement: "+550%",
        },
        {
          label: "Bewertungen pro Woche",
          before: "2-3 Bewertungen",
          after: "12-15 Bewertungen",
          improvement: "+400%",
        },
        {
          label: "Durchschnittliche Bewertung",
          before: "3.8 / 5 Sterne",
          after: "4.7 / 5 Sterne",
          improvement: "+24%",
        },
      ],
    },
    {
      category: "Betriebliche Effizienz",
      icon: LineChart,
      stats: [
        {
          label: "Reservierungszeit pro Kunde",
          before: "3.5 Minuten",
          after: "1.1 Minuten",
          improvement: "-68%",
        },
        {
          label: "Fehlerhafte Reservierungen",
          before: "18% aller Buchungen",
          after: "< 1% aller Buchungen",
          improvement: "-94%",
        },
        {
          label: "Tischauslastung",
          before: "72% durchschnittlich",
          after: "91% durchschnittlich",
          improvement: "+26%",
        },
      ],
    },
  ];

  return (
    <section
      ref={resultsRef}
      className="w-full py-16 md:py-24 bg-secondary text-secondary-foreground"
    >
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
            Ergebnisse
          </h2>
          <p className="mt-4 text-lg text-primary-foreground/80 max-w-2xl mx-auto">
            {caseStudy.results?.description ||
              "Die digitale Transformation führte zu messbaren Verbesserungen in allen Geschäftsbereichen des Restaurants Bergblick."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-6"
              >
                <div className="flex items-center mb-6">
                  <div className="rounded-full bg-primary-foreground/20 p-2 mr-3">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="text-xl font-bold">{metric.category}</h3>
                </div>

                <div className="space-y-6">
                  {metric.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className="border-b border-primary-foreground/20 pb-4 last:border-0"
                    >
                      <div className="text-sm text-primary-foreground/70 mb-2">
                        {stat.label}
                      </div>
                      <div className="flex justify-between items-baseline mb-1">
                        <div className="text-sm opacity-80">
                          <span className="text-xs uppercase">Vorher:</span>{" "}
                          {stat.before}
                        </div>
                        <div className="text-sm font-medium">
                          <span className="text-xs uppercase">Nachher:</span>{" "}
                          {stat.after}
                        </div>
                      </div>
                      <div className="flex justify-end items-center">
                        <span
                          className={`text-sm font-bold ${
                            stat.improvement.startsWith("+")
                              ? "text-green-400"
                              : "text-accent"
                          }`}
                        >
                          {stat.improvement}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
