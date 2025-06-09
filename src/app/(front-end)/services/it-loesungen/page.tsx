import SocialProof from "@/components/sections/social-proof";
import Blog from "@/components/sections/blog";
import Subservices from "@/components/subservices";
import HeaderSection from "@/components/sections/header-section";
import Timeline, { TimelineStep } from "@/components/timeline";
import ServicesCtaSection from "@/components/sections/services-cta-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT-Lösungen aus Mannheim - Webdesignify",
  description:
    "Ob E-Mails, Mail-Server, API-Anbindungen oder Cloud-Lösungen - ich entwickle handgemachte IT-Lösungen für Ihre Geschäftsziele!",
};

export default function WebDesign() {
  const subServices = [
    {
      icon: "Mail",
      title: "Email-Kampagnen",
      description:
        "Sie möchten mit E-Mails Marketing betreiben? Ich berate Sie in Ihren Möglichkeiten und richte ggf. Newsletter o. ä. für Sie ein.",
    },
    {
      icon: "Server",
      title: "Mail-Server",
      description:
        "Sie benötigen eine E-Mail-Adresse mit ihrer eigenen Domain? Ich mache Ihre Wunschdomain (Unternehmen.de) verfügbar und richte einen entsprechenden Mail-Server ein.",
    },
    {
      icon: "Link",
      title: "API-Anbindungen",
      description:
        "Sie möchten unterschiedliche Plattformen miteinander verknüpfen? Ich programmiere Back-Ends, welche diese per API-Schnittstelle miteinander verbindet.",
    },
    {
      icon: "Cloud",
      title: "Cloud-Lösungen",
      description:
        "Sie brauchen eine zuverlässige Cloud-Lösung für Ihr Unternehmen? Ich berate Sie und richte eine Cloud-Lösung ein, damit Sie keine Angst mehr vor Datenverlust haben müssen.",
    },
    {
      icon: "Calendar",
      title: "Booking-System",
      description:
        "Sie möchten Online-Reservierungen für Ihre Unterkunft, Ihr Restaurant o. ä. entgegennehmen können? Gerne schlage ich Lösungen vor und entwickle bzw. richte ein entsprechendes System ein.",
    },
    {
      icon: "HelpCircle",
      title: "Ein anderes Anliegen?",
      description:
        "Sie haben ein spezifischeres Anliegen? Kontaktieren Sie mich gerne für eine schnelle und einfache Beratung.",
    },
  ];

  const websiteServices = [
    {
      icon: "DollarSign",
      title: "Kostengünstig",
      description:
        "Ich garantiere Sie zu allen möglichen Lösungen zu beraten und Ihnen aufzuzeigen welche Lösung am optimalsten ist. Dabei spielen die Kosten natürlich auch eine Rolle.",
    },
    {
      icon: "CheckCircle",
      title: "Reibungslos",
      description:
        "Es ist wichtig, dass alle implementierten Systeme eine Erleichterung im Kerngeschäft schaffen. Ich stelle sicher, dass Sie durch zusätzliche technische Anbindungen nicht aufgehalten werden.",
    },
    {
      icon: "UserCheck",
      title: "Coaching",
      description:
        "Ihre Mitarbeiter haben womöglich auch Zugriff auf die integrierten Systeme. Deswegen biete ich ein Coaching mit Ihren Mitarbeitern an, damit diese nicht durch Unklarheiten aufgehalten werden.",
    },
    {
      icon: "Lock",
      title: "DSGVO-konform",
      description:
        "Datenschutz steht an erster Stelle. Die Daten Ihrer Kunden sind äußerst wichtig, ein Datenleck oder -verlust könnte drastische Auswirkungen haben. Meine Lösungen stellen sicher, dass dies nicht passiert.",
    },
    {
      icon: "Shield",
      title: "Absolute Sicherheit",
      description:
        "Alle hauseigenen Systeme von Webdesignify werden mit hohem Fokus auf Sicherheit erstellt. Bei Ihren Daten gibt es keinen Spielraum für fahrlässige Sicherheitslücken.",
    },
    {
      icon: "Monitor",
      title: "Monitoring",
      description:
        "Damit das integrierte System auch nicht plötzlich für Probleme sorgt, stelle ich sicher, dass Ihr System 24/7 online ist. Bei Problemen garantiere ich eine Ausfallzeit von maximal 2 Stunden.",
    },
  ];

  const timelineSteps: TimelineStep[] = [
    {
      number: 1,
      title: "Onboarding",
      description:
        "Wir lernen uns gemeinsam kennen, ob vor Ort oder digital. In einem Gespräch ermittlen wir dann welches Anliegen es gibt und die gewünschten Ziele.",
    },
    {
      number: 2,
      title: "Konzept & Umsetzung",
      description:
        "Für jedes Anliegen muss ein passende Lösung konzipiert werden. Ich berate Sie welche technische Lösung Ihr Anliegen einfach und kostengünstig löst. Nach einer Zusammenkunft kümmere Ich mich dann um die Ausführung des erarbeiteten Konzeptes.",
    },
    {
      number: 3,
      title: "Monitoring & Support",
      description:
        "Ich sorge dafür das Ihr System immer online bleibt, durch professionelles Monitoring bleibt stelle ich sicher das es keine Disruptionen in Ihrem Kerngeschäft gibt. Bei Fragen bin ich natürlich jederzeit erreichbar.",
    },
  ];

  return (
    <main>
      <section className="py-12 md:py-1   6">
        <HeaderSection
          subtitle="IT-LÖSUNGEN"
          title="Automatisierung und Vereinfachung von Prozessen."
          description="Sie brauchen etwas, das es nicht einfach aus dem Regal gibt? Ich entwickle handgemachte IT-Lösungen für genau solche Fälle!"
          buttons={[
            {
              text: "Kontakt aufnehmen",
              withArrow: true,
            },
            {
              text: "Referenzen ansehen",
              variant: "link",
            },
          ]}
        />

        <Subservices services={subServices} />
      </section>

      <section className="py-12 md:py-16 ">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <HeaderSection
            headerType="h2"
            animate={false}
            subtitle="DER PROZESS"
            title="Wie laufen Projekte für IT-Lösungen ab?"
            align="left"
          />
          <Timeline steps={timelineSteps} />
        </div>
      </section>

      <SocialProof variant="secondary" showClientLogos={false} />

      <section className="py-12 md:py-16">
        <HeaderSection
          headerType="h2"
          animate={false}
          subtitle="WEBSITE-OPTIMIERUNG"
          title="Ihre Webseite sollte nicht nur gut aussehen."
          description="Ich optimiere Ihre Webseite, um mehr Besucher in Kunden zu verwandeln."
        />
        <Subservices services={websiteServices} animate={false} />
      </section>

      <ServicesCtaSection
        header="Bereit, Ihren Geschäftsprozesse zu automatisieren?"
        description="Profitieren Sie von mehr Effizienz und mehr Zeit für Ihre Kunden. Lassen Sie uns gemeinsam Ihre Geschäftsprozesse automatisieren."
        buttonText="Jetzt Beratungsgespräch vereinbaren"
      />

      <Blog />
    </main>
  );
}
