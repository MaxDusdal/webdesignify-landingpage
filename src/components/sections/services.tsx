import Link from "next/link";
import {
  TrendingUp,
  Globe,
  Server,
  MessageCircle,
  ArrowRight,
} from "lucide-react";
import HeaderSection from "@/components/sections/header-section";

export default function Services() {
  const services = [
    {
      id: "strategie-optimierung",
      title: "Strategie Optimierung",
      description:
        "Sie haben bereits einen Online-Auftritt, aber nutzen das gesamte Potential der digitalen Vermarktung nicht aus? Ich analysiere und optimiere Ihren Online-Auftritt für das bestmögliche Ergebnis.",
      iconName: "TrendingUp",
    },
    {
      id: "webdesign",
      title: "Webseite",
      description:
        "Ich konzipiere, designe und programmiere Ihre Webseite aus einer Hand und sorge dafür, dass ihre Webseite elegant, erfolgreich und nutzerfreundlich ist.",
      iconName: "Globe",
    },
    {
      id: "it-loesungen",
      title: "IT-Lösungen",
      description:
        "Sie benötigen IT-Lösungen für Ihr Unternehmen, wie z. B. Online-Buchungs-Systeme, E-Mail-Server oder auch Softwarelösungen. Ich berate Sie und konzipiere eine Lösung für Sie.",
      iconName: "Server",
    },
    {
      id: "beratung",
      link: "/kontakt",
      title: "Beratung",
      description:
        "Sie möchten von der Reichweite des Online-Marketings profitieren? Ich helfe Ihnen, ich berate Sie und konzipiere professionelle Lösungen genau abgestimmt auf Ihr Anliegen.",
      iconName: "MessageCircle",
    },
  ];

  return (
    <section id="services" className="w-full py-12 md:py-16 bg-background/50">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <HeaderSection
          headerType="h2"
          animate={false}
          subtitle="Services"
          title="Was ich Ihnen anbiete"
          variant="default"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => {
            const Icon = getIconComponent(service.iconName);

            return (
              <Link
                key={service.id}
                href={service.link ?? `/services/${service.id}`}
                className="group flex flex-col h-full"
              >
                <div className="flex flex-col h-full rounded-lg border border-border bg-card p-6 shadow-md transition-all duration-200 hover:shadow-lg ">
                  <div className="mb-4 rounded-full bg-secondary p-3 w-12 h-12 flex items-center justify-center">
                    {Icon && (
                      <Icon className="h-6 w-6 text-secondary-foreground" />
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-2 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground flex-grow">
                    {service.description}
                  </p>

                  <div className="mt-4 text-sm font-medium text-secondary flex items-center justify-between ">
                    {service.link
                      ? "Jetzt Beratung vereinbaren"
                      : "Mehr erfahren"}

                    <ArrowRight className="h-4 w-4 ml-2" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Helper function to get icon component by name
function getIconComponent(name: string) {
  switch (name) {
    case "TrendingUp":
      return TrendingUp;
    case "Globe":
      return Globe;
    case "Server":
      return Server;
    case "MessageCircle":
      return MessageCircle;
    default:
      return null;
  }
}
