import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ThankYouMessage() {
  const router = useRouter();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-card border border-border/40 rounded-lg shadow-sm p-8 text-center"
    >
      <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
        <Check className="h-8 w-8 text-primary" />
      </div>
      <h2 className="text-2xl font-bold mb-2">Vielen Dank!</h2>
      <p className="text-muted-foreground mb-6">
        Ihre Anfrage wurde erfolgreich übermittelt. Ich melde mich innerhalb von
        48 Stunden bei dir.
      </p>
      <Button onClick={() => router.push("/")}>Zurück zur Startseite</Button>
    </motion.div>
  );
}
