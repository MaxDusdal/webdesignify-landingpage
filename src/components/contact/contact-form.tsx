import type React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, Send, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { useForm, Controller, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FORM_OPTIONS, contactFormSchema } from "@/lib/contact-form-schema";

type FormData = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  onSubmitSuccess: () => void;
}

export default function ContactForm({ onSubmitSuccess }: ContactFormProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const methods = useForm<FormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      companyName: "",
      industry: "other",
      businessSize: "1-10",
      hasWebsite: "no",
      websiteUrl: "",
      currentMarketing: ["none"],
      projectType: [],
      timeline: "",
      budget: "",
      message: "",
      howDidYouHear: "",
    },
  });

  const {
    control,
    handleSubmit: hookFormSubmit,
    trigger,
    formState: { errors },
    watch,
    setValue,
  } = methods;

  const hasWebsite = watch("hasWebsite");

  const handleCheckboxChange = (
    field: "currentMarketing" | "projectType",
    value: string,
  ) => {
    const currentValues = watch(field);
    if (currentValues.includes(value)) {
      setValue(
        field,
        currentValues.filter((item) => item !== value),
      );
    } else {
      setValue(field, [...currentValues, value]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      if (currentStep < steps.length - 1) {
        nextStep();
      } else {
        hookFormSubmit(onSubmit)();
      }
    }
  };

  const nextStep = async () => {
    const fieldsToValidate = getFieldsToValidateForStep(currentStep);
    const isValid = await trigger(fieldsToValidate);

    if (isValid && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
      window.scrollTo(0, 0);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
      window.scrollTo(0, 0);
    }
  };

  const getFieldsToValidateForStep = (step: number): Array<keyof FormData> => {
    switch (step) {
      case 0:
        return ["name", "email"];
      case 1:
        return [];
      case 2:
        return ["hasWebsite"];
      case 3:
        return ["projectType", "timeline", "budget"];
      case 4:
        return ["message"];
      default:
        return [];
    }
  };

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "Failed to submit form");
      }

      console.log("Form submitted successfully:", result);
      onSubmitSuccess();
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    {
      title: "Persönliche Informationen",
      description: "Erzählen Sie uns ein wenig über sich",
      fields: (
        <div className="space-y-6">
          <div>
            <Label htmlFor="name" className="mb-2 block">
              Name *
            </Label>
            <Controller
              name="name"
              control={control}
              render={({ field }) => (
                <Input
                  id="name"
                  placeholder="Ihr vollständiger Name"
                  {...field}
                  className={errors.name ? "border-red-500" : ""}
                  onKeyDown={handleKeyDown}
                />
              )}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Label htmlFor="email" className="mb-2 block">
              E-Mail *
            </Label>
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <Input
                  id="email"
                  type="email"
                  placeholder="ihre-email@beispiel.de"
                  {...field}
                  className={errors.email ? "border-red-500" : ""}
                  onKeyDown={handleKeyDown}
                />
              )}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="phone" className="mb-2 block">
              Telefonnummer
            </Label>
            <Controller
              name="phone"
              control={control}
              render={({ field }) => (
                <Input
                  id="phone"
                  placeholder="+49 123 456789"
                  {...field}
                  onKeyDown={handleKeyDown}
                />
              )}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Unternehmensinformationen",
      description: "Erzählen Sie uns über Ihr Unternehmen",
      fields: (
        <div className="space-y-6">
          <div>
            <Label htmlFor="companyName" className="mb-2 block">
              Unternehmensname
            </Label>
            <Controller
              name="companyName"
              control={control}
              render={({ field }) => (
                <Input
                  id="companyName"
                  placeholder="Name Ihres Unternehmens"
                  {...field}
                  onKeyDown={handleKeyDown}
                />
              )}
            />
          </div>
          <div>
            <Label htmlFor="industry" className="mb-2 block">
              Branche
            </Label>
            <Controller
              name="industry"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Wählen Sie Ihre Branche" />
                  </SelectTrigger>
                  <SelectContent>
                    {FORM_OPTIONS.industries.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
          </div>
          <div>
            <Label htmlFor="businessSize" className="mb-2 block">
              Unternehmensgröße
            </Label>
            <Controller
              name="businessSize"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex flex-col space-y-1"
                >
                  {FORM_OPTIONS.businessSizes.map((option) => (
                    <div
                      key={option.value}
                      className="flex items-center space-x-2"
                    >
                      <RadioGroupItem
                        value={option.value}
                        id={`size-${option.value}`}
                      />
                      <Label htmlFor={`size-${option.value}`}>
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              )}
            />
          </div>
        </div>
      ),
    },
    {
      title: "Aktuelle Infrastruktur",
      description: "Erzählen Sie uns über Ihre bestehende Online-Präsenz",
      fields: (
        <div className="space-y-6">
          <div>
            <Label className="mb-2 block">
              Haben Sie bereits eine Website? *
            </Label>
            <Controller
              name="hasWebsite"
              control={control}
              render={({ field }) => (
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex flex-col space-y-1 mt-2"
                >
                  {FORM_OPTIONS.hasWebsite.map((option) => (
                    <div
                      key={option.value}
                      className="flex items-center space-x-2"
                    >
                      <RadioGroupItem
                        value={option.value}
                        id={`website-${option.value}`}
                      />
                      <Label htmlFor={`website-${option.value}`}>
                        {option.label}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              )}
            />
            {errors.hasWebsite && (
              <p className="text-red-500 text-sm mt-1">
                {errors.hasWebsite.message}
              </p>
            )}
          </div>

          {hasWebsite === "yes" && (
            <div>
              <Label htmlFor="websiteUrl" className="mb-2 block">
                Website URL
              </Label>
              <Controller
                name="websiteUrl"
                control={control}
                render={({ field }) => (
                  <Input
                    id="websiteUrl"
                    placeholder="https://www.ihre-website.de"
                    {...field}
                    onKeyDown={handleKeyDown}
                  />
                )}
              />
            </div>
          )}

          <div>
            <Label className="mb-2 block">
              Welche Marketing-Tools nutzen Sie bereits?
            </Label>
            <div className="space-y-2">
              {FORM_OPTIONS.marketingTools.map((item) => (
                <div key={item.value} className="flex items-center">
                  <input
                    type="checkbox"
                    id={item.value}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    checked={watch("currentMarketing").includes(item.value)}
                    onChange={() =>
                      handleCheckboxChange("currentMarketing", item.value)
                    }
                  />
                  <Label htmlFor={item.value} className="ml-2">
                    {item.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Projektdetails",
      description: "Erzählen Sie uns über Ihr Projekt",
      fields: (
        <div className="space-y-6">
          <div>
            <Label className="mb-2 block">
              An welchen Dienstleistungen sind Sie interessiert? *
            </Label>
            <div className="space-y-2">
              {FORM_OPTIONS.projectTypes.map((item) => (
                <div key={item.value} className="flex items-center">
                  <input
                    type="checkbox"
                    id={item.value}
                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                    checked={watch("projectType").includes(item.value)}
                    onChange={() =>
                      handleCheckboxChange("projectType", item.value)
                    }
                  />
                  <Label htmlFor={item.value} className="ml-2">
                    {item.label}
                  </Label>
                </div>
              ))}
            </div>
            {errors.projectType && (
              <p className="text-red-500 text-sm mt-1">
                {errors.projectType.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="timeline" className="mb-2 block">
              Zeitrahmen *
            </Label>
            <Controller
              name="timeline"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger
                    className={errors.timeline ? "border-red-500" : ""}
                  >
                    <SelectValue placeholder="Wann möchten Sie starten?" />
                  </SelectTrigger>
                  <SelectContent>
                    {FORM_OPTIONS.timelines.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.timeline && (
              <p className="text-red-500 text-sm mt-1">
                {errors.timeline.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="budget" className="mb-2 block">
              Budget *
            </Label>
            <Controller
              name="budget"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger
                    className={errors.budget ? "border-red-500" : ""}
                  >
                    <SelectValue placeholder="Ihr ungefähres Budget" />
                  </SelectTrigger>
                  <SelectContent>
                    {FORM_OPTIONS.budgets.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.budget && (
              <p className="text-red-500 text-sm mt-1">
                {errors.budget.message}
              </p>
            )}
          </div>
        </div>
      ),
    },
    {
      title: "Zusätzliche Informationen",
      description: "Teilen Sie uns weitere Details mit",
      fields: (
        <div className="space-y-6">
          <div>
            <Label htmlFor="message" className="mb-2 block">
              Ihre Nachricht *
            </Label>
            <Controller
              name="message"
              control={control}
              render={({ field }) => (
                <Textarea
                  id="message"
                  placeholder="Beschreiben Sie Ihr Projekt oder Ihre Anfrage im Detail..."
                  className={`min-h-[150px] ${errors.message ? "border-red-500" : ""}`}
                  {...field}
                />
              )}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message}
              </p>
            )}
          </div>
          <div>
            <Label htmlFor="howDidYouHear" className="mb-2 block">
              Wie haben Sie von uns erfahren? *
            </Label>
            <Controller
              name="howDidYouHear"
              control={control}
              render={({ field }) => (
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Bitte auswählen" />
                  </SelectTrigger>
                  <SelectContent>
                    {FORM_OPTIONS.referralSources.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}
            />
            {errors.howDidYouHear && (
              <p className="text-red-500 text-sm mt-1">
                {errors.howDidYouHear.message}
              </p>
            )}
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="bg-card border border-border/40 rounded-lg shadow-sm overflow-hidden">
      <div className="w-full bg-muted h-1">
        <div
          className="bg-secondary h-1 transition-all duration-300"
          style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
        ></div>
      </div>

      <div className="flex items-center justify-between px-6 py-4 bg-muted/50">
        <div className="flex items-center">
          <div className="bg-secondary text-secondary-foreground w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium">
            {currentStep + 1}
          </div>
          <div className="ml-3">
            <p className="font-medium">{steps[currentStep].title}</p>
            <p className="text-sm text-muted-foreground">
              {steps[currentStep].description}
            </p>
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          Schritt {currentStep + 1} von {steps.length}
        </div>
      </div>

      <FormProvider {...methods}>
        <form onSubmit={hookFormSubmit(onSubmit)} onKeyDown={handleKeyDown}>
          <div className="p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
              >
                {steps[currentStep].fields}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <div className="px-6 py-4 bg-muted/30 border-t border-border/40 flex justify-between">
            <Button
              type="button"
              variant="outline"
              onClick={prevStep}
              disabled={currentStep === 0}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Zurück
            </Button>

            {currentStep < steps.length - 1 ? (
              <Button type="button" onClick={nextStep}>
                Weiter
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            ) : (
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Wird gesendet...
                  </>
                ) : (
                  <>
                    Absenden
                    <Send className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            )}
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
