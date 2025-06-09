import SocialProof from "@/components/sections/social-proof";
import Blog from "@/components/sections/blog";
import Subservices from "@/components/subservices";
import HeaderSection from "@/components/sections/header-section";
import Timeline, { TimelineStep } from "@/components/timeline";
import ServicesCtaSection from "@/components/sections/services-cta-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Webdesign aus Mannheim - Webdesignify",
  description:
    "Eine gut gestaltete Webseite ist der Schlüssel zu einem erfolgreichen Online-Auftritt. Ich biete maßgeschneiderte Webdesign- und Entwicklungsdienste an, die nicht nur ästhetisch ansprechend sind, sondern auch funktional und benutzerfreundlich. Gemeinsam verwandeln wir Ihre Vision in eine leistungsstarke Webseite, die Ihre Besucher begeistert und Ihre Geschäftsziele unterstützt.",
};

export default function WebDesign() {
  const subServices = [
    {
      icon: "Building2",
      title: "Unternehmenswebsite",
      description:
        "Ihre professionelle Unternehmenswebseite kann schnell, unkompliziert und individuell erstellt werden. Der einzigartige Aufbau und Design Ihrer Webseite steht dabei an erster Stelle.",
    },
    {
      icon: "PanelTop",
      title: "Landingpages",
      description:
        "Eine strategisch optimierte Landingpage passgenau für Ihre Zielgruppe kann Ihnen helfen Ihre Conversionrate zu steigern und für einen höheren Erfolg Ihres Produktes sorgen.",
    },
    {
      icon: "FileText",
      title: "Blog",
      description:
        "Einen Blog mit allen nötigen Features wie Kategorien, Suchfunktion und wunderbaren SEO-Funktionen. Mit dem Webflow CMS können Sie jederzeit, einfach und schnell Blogbeiträge individuell erstellen.",
    },
    {
      icon: "ShoppingCart",
      title: "Onlineshops",
      description:
        "Ein vollfunktionsfähiger Onlineshop welcher nach Ihrem Belieben designt wird und genau auf Ihre Zielgruppe zugeschnitten ist. Auch die Zahlungsabwicklung ist dank Stripe kein Aufwand mehr.",
    },
    {
      icon: "Cpu",
      title: "Web-Apps",
      description:
        "Sie brauchen Ihre ganz eigene Lösung? Ich kann für Sie eine komplette Web-App konzipieren, entwerfen und programmieren. Kontaktieren Sie mich für eine individuelle Beratung.",
    },
    {
      icon: "Layers",
      title: "Prototypen",
      description:
        "Sie haben eine Idee für eine Software oder ähnliche Lösung? Ich kann für Sie Prototypen wie bspw. Klickdummies erstellen damit Sie Ihre Idee validieren können bevor Sie Geld investieren.",
    },
  ];

  const websiteServices = [
    {
      icon: "Search",
      title: "SEO",
      description:
        "SEO ist in jedem Projekt inbegriffen und entscheidet darüber, wie hoch Ihre Seite auf Google erscheint, denn: Ein besseres Google-Ranking bedeutet mehr Besucher auf Ihrer Webseite.",
    },
    {
      icon: "FileEdit",
      title: "Content-Management",
      description:
        "Ihre Webseite sollte auch von Ihnen bearbeitet werden können. Mit meinem CMS können Sie problemlos neuen Content wie Blog-Posts, Bilder oder Dateien selbst hochladen.",
    },
    {
      icon: "LineChart",
      title: "Website Analytics",
      description:
        "Ihr Einblick in das Nutzerverhalten Ihrer Kunden - Finden Sie heraus, was sich verbessern lässt und wie Ihre Webseite abschneidet.",
    },
    {
      icon: "Target",
      title: "Erfolgsorientiert",
      description:
        "Eine Webseite muss sich lohnen - Ich baue erfolgsorientierte Webseiten, die nicht nur schön aussehen sodern auch einen geschäftlichen Mehrwert bringen.",
    },
    {
      icon: "Smartphone",
      title: "Mobile-Responsive",
      description:
        "Inzwischen besteht 60 % des Online-Traffics aus mobilen Endgeräten. Entsprechend sorge ich dafür, dass Ihre Webseite an alle Geräte angepasst ist.",
    },
    {
      icon: "Link2",
      title: "Integrationen",
      description:
        "Anlaufstationen für Kunden - Auf Wunsch binde ich Ihre Booking-Plattform, Support-Plattform o. ä. externe Plattformen nahtlos in Ihre Webseite mit ein.",
    },
    {
      icon: "Shield",
      title: "Absolute Sicherheit",
      description:
        "Alle Webseiten werden nach Branchen-Standards verschlüsselt und auch gewartet. Beim Thema Sicherheit, sind Sie mit mir auf der sicheren Seite.",
    },
    {
      icon: "Zap",
      title: "Beste Ladezeiten",
      description:
        "Ich optimiere alle Bilder und den Code der Webseite um die besten Ladezeiten Ihrer Webseite zu garantieren denn lange Ladezeiten führen zu abspringenden Nutzern.",
    },
    {
      icon: "Wrench",
      title: "Ohne Wartung",
      description:
        "Da wir Webflow nutzen gibt es keine Notwendigkeit die Webseite regelmäßig zu warten oder zu updaten.",
    },
  ];

  const timelineSteps: TimelineStep[] = [
    {
      number: 1,
      title: "Onboarding",
      description:
        "Wir lernen uns gemeinsam kennen, ob vor Ort oder digital. In einem Gespräch ermittlen wir dann Ihre Ziele für Ihre Webseite und Ihre Zielgruppe.",
    },
    {
      number: 2,
      title: "Konzept & Design",
      description:
        "Aus dem gemeinsam erarbeiteten Konzept ensteht ein erstes Design welches genau auf Ihre Zielgruppe optimiert ist.",
    },
    {
      number: 3,
      title: "Umsetzung",
      description:
        "Wenn Sie mit Ihrem Design zufrieden sind dann setze ich Ihr Design in eine vollfunktionsfähige Webseite um.",
    },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className="py-12 md:py-1   6">
        <HeaderSection
          subtitle="WEBDESIGN"
          title="Ihre Webseite entscheidet über den ersten Eindruck."
          description="Eine gut gestaltete Webseite ist der Schlüssel zu einem erfolgreichen Online-Auftritt. Ich biete maßgeschneiderte Webdesign- und Entwicklungsdienste an, die nicht nur ästhetisch ansprechend sind, sondern auch funktional und benutzerfreundlich. Gemeinsam verwandeln wir Ihre Vision in eine leistungsstarke Webseite, die Ihre Besucher begeistert und Ihre Geschäftsziele unterstützt."
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

        {/* Subservices Section */}
        <Subservices services={subServices} />
      </section>
      {/* Timeline Section */}
      <section className="py-12 md:py-16 ">
        <div className="container px-4 md:px-6 mx-auto max-w-7xl">
          <HeaderSection
            headerType="h2"
            animate={false}
            subtitle="DER PROZESS"
            title="Wie genau läuft der Webdesign Prozess ab?"
            align="left"
          />
          <Timeline steps={timelineSteps} />
        </div>
      </section>
      {/* Social Proof Section */}
      <SocialProof variant="secondary" showClientLogos={false} />

      <section className="py-12 md:py-16">
        <HeaderSection
          headerType="h2"
          animate={false}
          subtitle="WEBSITE-OPTIMIERUNG"
          title="Ihre Webseite sollte nicht nur gut aussehen."
          description="Ich optimiere Ihre Webseite, um mehr Besucher in Kunden zu verwandeln."
        />
        {/* Website Services Section */}
        <Subservices services={websiteServices} animate={false} />
      </section>

      {/* CTA Section */}
      <ServicesCtaSection
        header="Bereit, Ihren Online-Auftritt zu 📈?"
        description="Lassen Sie uns gemeinsam eine Strategie entwickeln, die Ihren Geschäftserfolg nachhaltig steigert."
        buttonText="Jetzt Beratungsgespräch vereinbaren"
      />

      {/* Blog Section */}
      <Blog />
    </main>
  );
}
