import { getPayload, GlobalSlug } from "payload";
import payloadConfig from "@/app/payload.config";
import FAQ from "@/components/faq";
import HeaderSection from "@/components/sections/header-section";
import { Faq } from "../../../payload-types";

export async function FAQSection() {
  const payload = await getPayload({ config: payloadConfig });
  const faqData = await payload.findGlobal({
    slug: "faq" as GlobalSlug,
  });

  if (!faqData) {
    return null;
  }

  const faq = faqData as Faq;

  return (
    <section id="faq" className="w-full py-12 md:py-24 bg-background">
      <div className="container px-4 md:px-6 mx-auto max-w-7xl">
        <HeaderSection
          headerType="h2"
          animate={false}
          subtitle="FAQ"
          title="Häufigste Fragen"
          description="Hier finden Sie Antworten auf häufige Fragen zu unseren Produkten und Dienstleistungen."
        />

        <FAQ faqItems={faq.faqItems} />
      </div>
    </section>
  );
}

export default FAQSection;
