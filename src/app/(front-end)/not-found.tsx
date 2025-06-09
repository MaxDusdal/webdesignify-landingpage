import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[500px] flex flex-col items-center justify-center bg-background relative overflow-hidden">
      {/* Abstract shapes background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-10 w-80 h-80 bg-secondary/20 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/3 w-60 h-60 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 md:px-6 z-10">
        <div className="flex flex-col items-center text-center max-w-md mx-auto">
          <h1 className="text-9xl font-bold text-primary mb-4">404</h1>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Seite nicht gefunden
          </h2>
          <p className="text-muted-foreground mb-8">
            Die Seite die Sie suchen existiert nicht oder wurde an einen anderen
            URL verschoben.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild variant="default" size="lg" className="gap-2">
              <Link href="/">
                <ChevronLeft className="h-4 w-4" />
                Back to Home
              </Link>
            </Button>

            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Contact Support</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
