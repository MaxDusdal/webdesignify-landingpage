"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { motion, AnimatePresence } from "framer-motion";
import {
  PayloadLexicalReactRenderer,
  PayloadLexicalReactRendererContent,
} from "@atelier-disko/payload-lexical-react-renderer";
import { customElementRenderers } from "@/lib/lexicalRenderers";
import { Faq as FaqType } from "../../payload-types";

type FaqProps = {
  faqItems: FaqType["faqItems"];
};

export default function FAQ({ faqItems }: FaqProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  if (!faqItems) {
    return null;
  }

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqItems.map((faq, index) => (
        <motion.div
          key={faq.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1, duration: 0.4 }}
        >
          <Collapsible
            open={openIndex === index}
            onOpenChange={() => toggleFAQ(index)}
            className={`border border-border/40 rounded-lg transition-all duration-300 ${
              openIndex === index
                ? "bg-card shadow-md scale-[1.01]"
                : "bg-background hover:bg-muted/50 hover:scale-[1.005]"
            }`}
          >
            <CollapsibleTrigger asChild>
              <button
                className={`flex cursor-pointer w-full rounded-md px-6 py-4 text-left bg-white transition-all duration-300 ${
                  openIndex === index
                    ? "text-primary font-medium"
                    : "hover:text-primary/80"
                }`}
              >
                <div className="flex w-full items-start">
                  <div
                    className="text-lg font-medium grow mr-4 whitespace-normal"
                    style={{ wordWrap: "break-word" }}
                  >
                    {faq.question}
                  </div>
                  <motion.div
                    className="flex-shrink-0 mt-1"
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {openIndex === index ? (
                      <Minus size={18} />
                    ) : (
                      <Plus size={18} />
                    )}
                  </motion.div>
                </div>
              </button>
            </CollapsibleTrigger>
            <CollapsibleContent className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="px-6 pb-6"
                  >
                    <PayloadLexicalReactRenderer
                      content={faq.answer as PayloadLexicalReactRendererContent}
                      elementRenderers={customElementRenderers}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </CollapsibleContent>
          </Collapsible>
        </motion.div>
      ))}
    </div>
  );
}
