"use client";

import CaseStudyHero from "@/components/case-study/case-study-hero";
import { 
  Search, 
  Star, 
  Calendar,
  TrendingUp,
  Smartphone,
  CheckCircle,
  Globe,
  Clock,
  Utensils
} from "lucide-react";

export default function HardysCaseStudyPage() {
  const heroData = {
    clientName: "Hardys Bar & Restaurant",
    clientLogo: "/client-logo/hardys.png",
    industry: "Gastronomie",
    location: "Rust, Deutschland",
    projectType: ["Webentwicklung", "SEO", "Reservierungssystem", "Google Ads", "Google My Business"],
    timeframe: "2022 - Laufend",
    description: "Komplette digitale Transformation eines Restaurants in direkter Nähe zum Europa-Park mit Fokus auf internationale Gäste und automatisierte Reservierungsprozesse.",
    websiteUrl: "https://hardys-rust.de",
  };

  return (
    <div className="max-w-6xl mx-auto">
      <CaseStudyHero {...heroData}>
        <div className="prose prose-gray max-w-none">
          
          {/* Projektübersicht */}
          <section id="projektübersicht" className="mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Projektübersicht</h2>
            
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-4 lg:mb-6">
              Das Hardys Bar & Restaurant befindet sich im Herzen von Rust, nur wenige Gehminuten vom beliebten Europa-Park entfernt. Aufgrund dieser strategischen Lage zieht das Restaurant zahlreiche internationale Besucher an, die ihren Aufenthalt und ihre gastronomischen Aktivitäten oft bereits im Voraus online planen.
            </p>
    
            <p className="leading-relaxed mb-4 lg:mb-6">
              Vor Beginn der Zusammenarbeit verfügte Hardys über eine grundlegende Website mit einer einfachen Webform für Reservierungen und einer Online-Speisekarte. Jedoch entsprach die bestehende digitale Präsenz nicht den Anforderungen einer zunehmend mobilen und internationalen Zielgruppe.
            </p>
    
            <div className=" border-l-4 border-secondary bg-secondary/10 p-4 lg:p-6 my-4 lg:my-6">
              <h4 className="font-semibold mb-3 text-lg">Hauptziele des Projekts</h4>
              <ul className="space-y-2 text-base">
                {[
                  'Erreichen von Platz 1 bei Keywords wie "Restaurant Rust" auf Google',
                  'Verbesserung der Conversion-Rate von Website-Besuchern zu zahlenden Gästen', 
                  'Aufbau einer mehrsprachigen Webseite für internationale Gäste'
                ].map((goal, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="font-bold">•</span>
                    {goal}
                  </li>
                ))}
              </ul>
            </div>
          </section>
  
          {/* Probleme & Lösungen */}
          <section id="probleme-und-lösungen" className="mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Probleme & Lösungen</h2>
            
            <p className="leading-relaxed mb-4 lg:mb-6">
              Die Herausforderungen waren vielfältig: Eine nicht mobiloptimierte Website, schlechte SEO-Performance und ineffiziente Reservierungsprozesse behinderten das Wachstum erheblich. Unsere maßgeschneiderten Lösungen adressierten jeden Punkt systematisch.
            </p>
  
            <div className="space-y-6 lg:space-y-8">
              <div className="bg-white border border-border rounded-lg p-4 lg:p-6">
                <h3 className="text-lg lg:text-xl font-semibold mb-3 lg:mb-4 flex items-center gap-2">
                  <Smartphone className="w-5 h-5 text-red-600" />
                  Challenge: Eingeschränkte Mobile Nutzererfahrung
                </h3>
                <p className="leading-relaxed mb-3 lg:mb-4">
                  Die bestehende Webseite war nicht für mobile Endgeräte optimiert, was zu längeren Ladezeiten, mangelnder Übersichtlichkeit und erhöhten Absprungraten führte - besonders problematisch bei einer überwiegend mobilen Zielgruppe.
                </p>
                <p className="leading-relaxed">
                  <strong>Lösung:</strong> Komplettes Redesign und Redevelopment mit konsequentem Mobile-First-Ansatz. Die Webseite wurde primär für Mobiltelefone entwickelt und anschließend für größere Bildschirmgrößen angepasst.
                </p>
              </div>
  
              <div className="bg-white border border-border rounded-lg p-4 lg:p-6">
                <h3 className="text-lg lg:text-xl font-semibold mb-3 lg:mb-4 flex items-center gap-2">
                  <Search className="w-5 h-5 text-orange-600" />
                  Challenge: Unzureichendes SEO und geringe Sichtbarkeit
                </h3>
                <p className="leading-relaxed mb-3 lg:mb-4">
                  Hardys belegte lediglich Platz 25 bei Google für &quot;Restaurant Rust&quot; (Seite 3). Da nur 0,63% der Nutzer Ergebnisse jenseits der ersten Seite anklicken, war dies eine erhebliche Schwachstelle.
                </p>
                <p className="leading-relaxed">
                  <strong>Lösung:</strong> Umfassende SEO-Optimierung mit professionellen Fotos, Google My Business-Optimierung, Werbekampagnen-Verbesserung und automatisierte Bewertungsstrategie über die eigene Reservierungssoftware.
                </p>
              </div>
  
              <div className="bg-white border border-border rounded-lg p-4 lg:p-6">
                <h3 className="text-lg lg:text-xl font-semibold mb-3 lg:mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  Challenge: Ineffizienter Reservierungsprozess
                </h3>
                <p className="leading-relaxed mb-3 lg:mb-4">
                  Der manuelle Reservierungsprozess über Telefon, E-Mail oder einfaches Webformular verursachte erhebliche Ineffizienzen, lange Wartezeiten und hohe versteckte Prozesskosten.
                </p>
                <p className="leading-relaxed">
                  <strong>Lösung:</strong> Entwicklung der innovativen Reservierungssoftware &quot;TableTrack&quot; mit vollautomatisierter Plattform, mehrsprachigen E-Mail-Templates und Echtzeit-Überblick für Mitarbeiter auf Mobilgeräten.
                </p>
              </div>
            </div>
          </section>
  
          {/* Funktionalitäten */}
          <section id="funktionalitäten" className="mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Funktionalitäten</h2>
            
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-4 lg:mb-6">
              Die Umsetzung konzentrierte sich auf drei Hauptbereiche: Mobile-First Website, SEO & Local Search sowie die innovative TableTrack Reservierungssoftware. Jeder Bereich wurde strategisch entwickelt, um maximale Synergien zu schaffen.
            </p>
  
            <div className="space-y-8 lg:space-y-12">
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6 flex items-center gap-3">
                  <Globe className="w-6 h-6 text-secondary" />
                  Mobile-First Website & Mehrsprachigkeit
                </h3>
                <p className="leading-relaxed mb-4 lg:mb-6">
                  Als Restaurant in direkter Nähe zum Europa-Park war eine mehrsprachige, mobiloptimierte Präsenz essentiell. Die internationale Zielgruppe erforderte eine intuitive, kulturübergreifende Nutzererfahrung.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Key-Features</h4>
                    <ul className="space-y-3">
                      {[
                        "Mehrsprachige Website, mit lückenloser und professioneller Übersetzung",
                        "Mobile-First responsive Design", 
                        "Optimierte Ladezeiten unter 1 Sekunde",
                        "Professionelle Fotografie-Integration",
                        "Intuitive Navigation für alle Kulturen",
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
  
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6 flex items-center gap-3">
                  <Search className="w-6 h-6 text-secondary" />
                  SEO & Local Search Dominanz
                </h3>
                <p className="leading-relaxed mb-4 lg:mb-6">
                  Der Fokus lag auf der Eroberung der lokalen Suchergebnisse für &quot;Restaurant Rust&quot;. Durch strategische Optimierungen erreichten wir nicht nur Platz 1, sondern auch die besten Bewertungen in der Region.
                </p>
                
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 text-center">
                    <div>
                      <div className="text-sm text-green-600 mb-1">Vorher: Platz 25</div>
                      <div className="text-2xl lg:text-3xl font-bold text-green-700">#1</div>
                      <div className="text-sm lg:text-base text-green-600">Google-Ranking für &quot;Restaurant Rust&quot;</div>
                    </div>
                    <div>
                      <div className="text-2xl lg:text-3xl font-bold text-green-700">500+</div>
                      <div className="text-sm lg:text-base text-green-600">Neue Bewertungen</div>
                    </div>
                    <div>
                      <div className="text-sm text-green-600 mb-1">Vorher: 7,4%</div>
                      <div className="text-2xl lg:text-3xl font-bold text-green-700">16,2%</div>
                      <div className="text-sm lg:text-base text-green-600">Conversion-Rate</div>
                    </div>
                  </div>
  
                <p className="leading-relaxed">
                  Die Strategie umfasste professionelle Fotografie, Google My Business-Optimierung, lokales Linkbuilding, mehrsprachigen Content und automatisierte Bewertungsgewinnung über TableTrack.
                </p>
              </div>
  
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6 flex items-center gap-3">
                  <Utensils className="w-6 h-6 text-secondary" />
                  TableTrack Reservierungssystem
                </h3>
                <p className="leading-relaxed mb-4 lg:mb-6">
                  TableTrack revolutionierte den Reservierungsprozess mit vollautomatisierten, mehrsprachigen Funktionen. Das System wurde speziell für High-Traffic-Umgebungen und internationale Gästekommunikation entwickelt.
                </p>
  
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-4 lg:mb-6">
                  <div className="text-center p-4 lg:p-6"> 
                    <div className="text-2xl lg:text-3xl font-bold ">500+</div>
                    <div className="text-sm lg:text-base ">Zusätzliche Reservierungen pro Jahr</div>
                  </div>
                  <div className="text-center p-4 lg:p-6"> 
                    <div className="text-2xl lg:text-3xl font-bold ">2x</div>
                    <div className="text-sm lg:text-base ">Mehr Bewertungen pro Tag</div>
                  </div>
                  <div className="text-center p-4 lg:p-6 "> 
                    <div className="text-2xl lg:text-3xl font-bold ">1h</div>
                    <div className="text-sm lg:text-base ">Gesparte Mitarbeiterzeit täglich</div>
                  </div>
                </div>
  
                <p className="leading-relaxed">
                  TableTrack bietet vollautomatisierte Reservierungen, mehrsprachige E-Mail-Templates, Echtzeit-Überblick für Mitarbeiter, automatische Bewertungsanfragen und nahtlose Integration in bestehende Geschäftsprozesse.
                </p>
              </div>
            </div>
          </section>
  
          {/* Projektergebnisse */}
          <section id="projektergebnisse" className="mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Projektergebnisse</h2>
  
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Search className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-3xl font-bold mb-1">#1</div>
                <div className="text-sm font-medium">Google-Ranking</div>
                <div className="text-xs text-muted-foreground">Für &quot;Restaurant Rust&quot;</div>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-3xl font-bold mb-1">500+</div>
                <div className="text-sm font-medium">Neue Reservierungen</div>
                <div className="text-xs text-muted-foreground">Pro Jahr zusätzlich</div>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-3xl font-bold mb-1">16,2%</div>
                <div className="text-sm font-medium">Conversion-Rate</div>
                <div className="text-xs text-muted-foreground">Steigerung von 7,4%</div>
              </div>
              
              <div className="text-center p-4">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-3xl font-bold mb-1">2x</div>
                <div className="text-sm font-medium">Mehr Bewertungen</div>
                <div className="text-xs text-muted-foreground">Pro Tag</div>
              </div>
            </div>
  
            <h3 className="text-lg lg:text-xl font-semibold mb-3 lg:mb-4">Nachhaltiger Erfolg durch Innovation</h3>
            <p className="leading-relaxed mb-3 lg:mb-4">
              Die Ergebnisse unterstreichen den Erfolg unserer ganzheitlichen Strategie. Hardys hat sich von einem regional wahrgenommenen Restaurant zu einem digitalen Vorreiter in Rust entwickelt, mit messbaren Verbesserungen in allen Kernbereichen.
            </p>
  
            <p className="leading-relaxed mb-4 lg:mb-6">
              Besonders hervorzuheben ist die Verdoppelung der täglich generierten Bewertungen und die Steigerung der Conversion-Rate um mehr als 100%. Diese Erfolge schaffen eine solide Basis für kontinuierliches Wachstum und etablieren Hardys als führendes Restaurant in der Europa-Park Region.
            </p>
          </section>
        </div>
      </CaseStudyHero>
    </div>
  );
} 