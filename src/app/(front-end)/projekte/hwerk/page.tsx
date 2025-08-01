"use client";

import CaseStudyHero from "@/components/case-study/case-study-hero";
import { 
  Search, 
  Star, 
  Mail, 
  Calendar,
  TrendingUp,
  Users,
  Monitor,
  Smartphone,
  Building2,
  CheckCircle,
  AlertCircle
} from "lucide-react";

export default function HWerkCaseStudyPage() {
  const heroData = {
    clientName: "H-Werk",
    clientLogo: "/client-logo/hwerk.png",
    industry: "Friseursalon",
    location: "Lahr, Deutschland",
    projectType: ["Webdesign", "SEO", "Online Marketing", "Buchungssystem"],
    timeframe: "September 2019 - Laufend",
    description: "Ein vollständiger digitaler Neuauftritt für den Friseursalon H-Werk mit strategischer Online-Vermarktung zur Kundenakquise über alle Altersgruppen hinweg.",
    websiteUrl: "https://hwerk.de",
  };

  return (
    <div className="max-w-6xl mx-auto">
      <CaseStudyHero {...heroData}>
        <div className="prose prose-gray max-w-none">
          
          {/* Projektübersicht */}
          <section id="projektübersicht" className="mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Projektübersicht</h2>
            
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-4 lg:mb-6">
              Das H-Werk, ein moderner Friseursalon in der belebten Marktstraße von Lahr, nutzt seine zentrale Lage für einen stetigen Strom an Laufkundschaft. Doch um langfristig zu wachsen, war eine starke digitale Präsenz unerlässlich. Elina Sauter, die Geschäftsleiterin seit der Eröffnung im September 2019, war unsere enge Ansprechpartnerin und trieb die Vision einer nachhaltigen Kundenerweiterung voran.
            </p>
    
            <p className="leading-relaxed mb-4 lg:mb-6">
              Trotz der erstklassigen Position in der Fußgängerzone stand der Salon vor der Herausforderung, sich in einem wettbewerbsintensiven Markt abzuheben. Eine ganzheitliche Online-Strategie war der Schlüssel, um Kunden aller Altersgruppen zu erreichen und die lokale Konkurrenz zu übertrumpfen.
            </p>
    
            <div className="bg-accent/5 border-l-4 border-accent p-4 lg:p-6 my-4 lg:my-6 rounded-lg">
              <h4 className="font-semibold mb-3 text-lg">Hauptziele des Projekts</h4>
              <ul className="space-y-2 text-base">
                <li className="flex items-start gap-2"><span className="text-accent font-bold">•</span> Aufbau einer digitalen Präsenz von Grund auf</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold">•</span> Erreichung von Platz 1 bei der Suche nach „Friseur Lahr“</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold">•</span> Ansprache aller Altersgruppen durch gezielte Online-Kanäle</li>
                <li className="flex items-start gap-2"><span className="text-accent font-bold">•</span> Schaffung einer mobiloptimierten Nutzererfahrung</li>
              </ul>
            </div>
          </section>
  
          {/* Probleme & Lösungen */}
          <section id="probleme-und-lösungen" className="mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Probleme & Lösungen</h2>
            
            <p className="leading-relaxed mb-4 lg:mb-6">
              Der Einstieg war ambitioniert: Keine bestehende Online-Sichtbarkeit, starke lokale Konkurrenz und eine breite Zielgruppe von Jung bis Alt stellten uns vor klare Herausforderungen. Wir haben jede davon mit einer maßgeschneiderten Strategie gemeistert, um nachhaltigen Erfolg zu sichern.
            </p>
  
            <div className="space-y-6 lg:space-y-8">
              <div className="bg-white border border-gray-200 rounded-lg p-4 lg:p-6 shadow-sm">
                <h3 className="text-lg lg:text-xl font-semibold mb-3 lg:mb-4 flex items-center gap-2">
                  <AlertCircle className="w-5 h-5 text-red-600" />
                  Challenge: Fehlende Online-Präsenz
                </h3>
                <p className="leading-relaxed mb-3 lg:mb-4">
                  Das H-Werk war im Digitalen unsichtbar – ohne Website, Google-Eintrag oder Social-Media-Kanäle. In einer Ära, in der 75 % der Kunden online nach Dienstleistern suchen, war das ein signifikanter Nachteil.
                </p>
                <p className="leading-relaxed">
                  <strong>Lösung:</strong> Wir bauten eine komplette digitale Infrastruktur auf, inklusive einer modernen, mobiloptimierten Website, einem professionellen Google My Business-Profil und gezielter Social-Media-Präsenz. Der Fokus auf Mobile-First-Design war entscheidend, da der Großteil der Besucher über Smartphones zugreift.
                </p>
              </div>
  
              <div className="bg-white border border-gray-200 rounded-lg p-4 lg:p-6 shadow-sm">
                <h3 className="text-lg lg:text-xl font-semibold mb-3 lg:mb-4 flex items-center gap-2">
                  <Building2 className="w-5 h-5 text-orange-600" />
                  Challenge: Intensive lokale Konkurrenz
                </h3>
                <p className="leading-relaxed mb-3 lg:mb-4">
                  Etablierte Salons in Lahr dominierten bereits die Online-Suche und hatten starke Positionen inne. Sich gegen diese zu behaupten, erforderte eine smarte Herangehensweise.
                </p>
                <p className="leading-relaxed">
                  <strong>Lösung:</strong> Eine offensive Local-SEO-Strategie mit Keyword-Optimierung, lokalen Backlinks und kontinuierlichem Content-Marketing führte zum Erfolg: Platz 1 für „Friseur Lahr“.
                </p>
              </div>
  
              <div className="bg-white border border-gray-200 rounded-lg p-4 lg:p-6 shadow-sm">
                <h3 className="text-lg lg:text-xl font-semibold mb-3 lg:mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-blue-600" />
                  Challenge: Breite Zielgruppe
                </h3>
                <p className="leading-relaxed mb-3 lg:mb-4">
                  Die Kundschaft umfasste alle Altersgruppen – von social-media-affinen Jungen bis zu traditionellen Älteren –, was eine nuancierte Ansprache erforderte.
                </p>
                <p className="leading-relaxed">
                  <strong>Lösung:</strong> Ein Multi-Channel-Ansatz mit Social Media für Jüngere, E-Mail-Kampagnen für Mittlere und SMS für alle Generationen sorgte für breite Reichweite und Engagement.
                </p>
              </div>
            </div>
          </section>
  
          {/* Funktionalitäten */}
          <section id="funktionalitäten" className="mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Funktionalitäten</h2>
            
            <p className="text-base lg:text-lg text-muted-foreground leading-relaxed mb-4 lg:mb-6">
              Die Umsetzung gliederte sich in drei Kernbereiche: Website & Design, SEO & Local Search sowie Marketing Automation. Jeder wurde sorgfältig geplant, um nahtlos ineinanderzugreifen und maximale Wirkung zu erzielen.
            </p>
  
            <div className="space-y-8 lg:space-y-12">
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6 flex items-center gap-3">
                  <Monitor className="w-6 h-6 text-secondary" />
                  Website & Design
                </h3>
                <p className="leading-relaxed mb-4 lg:mb-6">
                  Mit 75 % mobilen Besuchern war ein Mobile-First-Ansatz essenziell. Wir entwickelten eine responsive Website, die intuitiv, schnell und für alle Altersgruppen zugänglich ist.
                </p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
                  <div>
                    <h4 className="font-semibold mb-3 text-lg">Schlüssel-Features</h4>
                    <ul className="space-y-3">
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" /> Voll responsives Design für alle Geräte</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" /> Ladezeiten unter 3 Sekunden</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" /> Intuitive Navigation und Benutzerführung</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" /> Hochwertige Bildergalerie mit Salon-Impressionen</li>
                      <li className="flex items-center gap-3"><CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" /> Nahtlose Social-Media-Integration</li>
                    </ul>
                  </div>
                  <div className="bg-muted/30 p-4 lg:p-6 rounded-lg shadow-sm">
                    <h4 className="font-semibold mb-3 flex items-center gap-2 text-lg">
                      <Smartphone className="w-5 h-5" /> Mobile-Statistiken
                    </h4>
                    <div className="space-y-3 text-base">
                      <div className="flex justify-between"><span>Mobile Traffic:</span> <strong>75 %</strong></div>
                      <div className="flex justify-between"><span>Desktop Traffic:</span> <strong>25 %</strong></div>
                      <div className="flex justify-between"><span>Durchschnittliche Ladezeit (Mobile):</span> <strong>2,8 s</strong></div>
                    </div>
                  </div>
                </div>
              </div>
  
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6 flex items-center gap-3">
                  <Search className="w-6 h-6 text-secondary" />
                  SEO & Local Search
                </h3>
                <p className="leading-relaxed mb-4 lg:mb-6">
                  Der Fokus lag auf lokaler Sichtbarkeit, um bei relevanten Suchen wie „Friseur Lahr“ zu dominieren. Durch gezielte Optimierungen erreichten wir messbare Erfolge.
                </p>
                
                <div className="bg-green-50 border border-green-200 p-4 lg:p-6 rounded-lg mb-4 lg:mb-6 shadow-sm">
                  <h4 className="font-semibold text-green-800 mb-3 text-lg">SEO-Erfolge (28-Tage-Periode)</h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 text-center">
                    <div>
                      <div className="text-2xl lg:text-3xl font-bold text-green-700">#1</div>
                      <div className="text-sm lg:text-base text-green-600">Google-Ranking für „Friseur Lahr“</div>
                    </div>
                    <div>
                      <div className="text-2xl lg:text-3xl font-bold text-green-700">3.167</div>
                      <div className="text-sm lg:text-base text-green-600">Impressionen</div>
                    </div>
                    <div>
                      <div className="text-2xl lg:text-3xl font-bold text-green-700">7,6 %</div>
                      <div className="text-sm lg:text-base text-green-600">Click-Through-Rate</div>
                    </div>
                  </div>
                </div>
  
                <p className="leading-relaxed">
                  Unsere Strategie umfasste Keyword-Recherche, Google My Business-Optimierung, lokale Linkbuilding, regelmäßigen Content und Schema-Markup für bessere Suchmaschinenverständnis.
                </p>
              </div>
  
              <div>
                <h3 className="text-xl lg:text-2xl font-semibold mb-4 lg:mb-6 flex items-center gap-3">
                  <Mail className="w-6 h-6 text-secondary" />
                  Marketing Automation
                </h3>
                <p className="leading-relaxed mb-4 lg:mb-6">
                  Automatisierte Prozesse stärkten die Kundenbindung und das Bewertungsmanagement. Besonders die SMS-Kampagnen für Reviews zeigten beeindruckende Ergebnisse.
                </p>
  
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 mb-4 lg:mb-6">
                  <div className="text-center p-4 lg:p-6 bg-blue-50 border border-blue-200 rounded-lg shadow-sm">
                    <div className="text-2xl lg:text-3xl font-bold text-blue-700">54 %</div>
                    <div className="text-sm lg:text-base text-blue-600">Anteil Online-Buchungen an allen Terminen</div>
                  </div>
                  <div className="text-center p-4 lg:p-6 bg-green-50 border border-green-200 rounded-lg shadow-sm">
                    <div className="text-2xl lg:text-3xl font-bold text-green-700">33,2 %</div>
                    <div className="text-sm lg:text-base text-green-600">Click-Through-Rate bei Geburtstags-E-Mails</div>
                  </div>
                  <div className="text-center p-4 lg:p-6 bg-orange-50 border border-orange-200 rounded-lg shadow-sm">
                    <div className="text-2xl lg:text-3xl font-bold text-orange-700">+90</div>
                    <div className="text-sm lg:text-base text-orange-600">Neue Bewertungen durch SMS-Kampagnen</div>
                  </div>
                </div>
  
                <p className="leading-relaxed">
                  Das System integrierte Online-Buchungen, automatische Erinnerungen per SMS, personalisierte E-Mail-Kampagnen, Geburtstags-Aktionen und ein effizientes Review-Management.
                </p>
              </div>
            </div>
          </section>
  
          {/* Projektergebnisse */}
          <section id="projektergebnisse" className="mb-8 lg:mb-12">
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 lg:mb-6">Projektergebnisse</h2>
  
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-6 lg:mb-8">
              <div className="text-center bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Search className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-3xl font-bold mb-1">#1</div>
                <div className="text-sm font-medium">Google-Ranking</div>
                <div className="text-xs text-muted-foreground">Für „Friseur Lahr“</div>
              </div>
              
              <div className="text-center bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Star className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-3xl font-bold mb-1">+102</div>
                <div className="text-sm font-medium">Neue Bewertungen</div>
                <div className="text-xs text-muted-foreground">Davon 90 via SMS</div>
              </div>
              
              <div className="text-center bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-3xl font-bold mb-1">54 %</div>
                <div className="text-sm font-medium">Online-Buchungen</div>
                <div className="text-xs text-muted-foreground">An allen Terminen</div>
              </div>
              
              <div className="text-center bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-3xl font-bold mb-1">4,7</div>
                <div className="text-sm font-medium">Sterne-Rating</div>
                <div className="text-xs text-muted-foreground">Steigerung von 4,2</div>
              </div>
            </div>
  
            <h3 className="text-lg lg:text-xl font-semibold mb-3 lg:mb-4">Nachhaltiger Impact</h3>
            <p className="leading-relaxed mb-3 lg:mb-4">
              Diese Ergebnisse unterstreichen den Erfolg unserer ganzheitlichen Strategie. Das H-Werk hat sich von einem rein lokalen Salon zu einem digitalen Vorreiter in Lahr entwickelt, mit spürbaren Verbesserungen in Sichtbarkeit, Kundenbindung und Zufriedenheit.
            </p>
  
            <p className="leading-relaxed mb-4 lg:mb-6">
              Besonders hervorzuheben ist die Steigerung des Sterne-Ratings von 4,2 auf 4,7 bei über 100 neuen Bewertungen – ein klares Zeichen für gesteigerte Qualität und Kundentreue. Diese Erfolge bilden die Basis für kontinuierliches Wachstum.
            </p>
          </section>
        </div>
      </CaseStudyHero>
    </div>
  );
}
