"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, TrendingUp } from "lucide-react";
import HeaderSection from "@/components/sections/header-section";

interface Metric {
  label: string;
  value: string;
  change?: string;
  description?: string;
  icon?: React.ReactNode;
}

interface MetricCategory {
  title: string;
  subtitle?: string;
  metrics: Metric[];
}

interface CaseStudyMetricsProps {
  title?: string;
  subtitle?: string;
  description?: string;
  categories: MetricCategory[];
  timeframe?: string;
  disclaimer?: string;
}

export default function CaseStudyMetrics({
  title = "Die Ergebnisse",
  subtitle = "ERFOLG MESSBAR GEMACHT",
  description,
  categories,
  timeframe,
  disclaimer,
}: CaseStudyMetricsProps) {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="py-16 md:py-24 bg-secondary/30">
      <div className="container px-4 mx-auto max-w-7xl">
        {/* Header */}
        <HeaderSection
          subtitle={subtitle}
          title={title}
          description={description}
          headerType="h2"
          className="mb-16"
        />

        {/* Timeframe */}
        {timeframe && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={1}
            className="text-center mb-16"
          >
            <Badge variant="outline" className="text-sm px-4 py-2">
              <Calendar className="h-4 w-4 mr-2" />
              Zeitraum: {timeframe}
            </Badge>
          </motion.div>
        )}

        {/* Metrics Categories */}
        <div className="space-y-20">
          {categories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeInUp}
              custom={categoryIndex + 1}
            >
              {/* Category Header */}
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-2">
                  {category.title}
                </h3>
                {category.subtitle && (
                  <p className="text-muted-foreground text-lg">
                    {category.subtitle}
                  </p>
                )}
              </div>

              {/* Simple Metrics Layout */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {category.metrics.map((metric, metricIndex) => (
                  <motion.div
                    key={metricIndex}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    custom={metricIndex + 2}
                    className="text-center"
                  >
                    {/* Icon */}
                    {metric.icon && (
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center">
                          <div className="text-accent">
                            {metric.icon}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Value */}
                    <div className="mb-4">
                      <div className="text-4xl md:text-5xl font-bold mb-2">
                        {metric.value}
                      </div>
                      {metric.change && (
                        <Badge 
                          variant="secondary" 
                          className="bg-green-50 text-green-700 border-green-200 text-sm"
                        >
                          {metric.change}
                        </Badge>
                      )}
                    </div>

                    {/* Label */}
                    <h4 className="text-lg font-semibold mb-2">
                      {metric.label}
                    </h4>

                    {/* Description */}
                    {metric.description && (
                      <p className="text-muted-foreground text-sm">
                        {metric.description}
                      </p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Summary */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          custom={1}
          className="mt-20"
        >
          <Card className="bg-accent/5 border-accent/20">
            <CardContent className="p-8 md:p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center">
                  <TrendingUp className="h-10 w-10 text-accent" />
                </div>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Nachhaltiger Erfolg
              </h3>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto leading-relaxed">
                Diese Zahlen sprechen für sich. Durch eine durchdachte Strategie und kontinuierliche Optimierung 
                konnten wir messbare Verbesserungen in allen relevanten Kennzahlen erzielen.
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Disclaimer */}
        {disclaimer && (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            custom={2}
            className="mt-12 text-center"
          >
            <p className="text-xs text-muted-foreground max-w-5xl mx-auto leading-relaxed">
              {disclaimer}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
} 