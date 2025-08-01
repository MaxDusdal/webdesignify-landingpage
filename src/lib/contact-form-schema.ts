import { z } from "zod";

// Define option values with labels for select fields
export const FORM_OPTIONS = {
  industries: [
    { value: "restaurants", label: "Restaurants & Gastronomie" },
    { value: "medical", label: "Ärzte & Heilpraktiker" },
    { value: "legal", label: "Rechtsanwälte & Notare" },
    { value: "trades", label: "Handwerk & Baugewerbe" },
    { value: "realestate", label: "Immobilien & Makler" },
    { value: "consulting", label: "Beratung & Coaching" },
    { value: "fitness", label: "Fitness & Sport" },
    { value: "education", label: "Bildung & Training" },
    { value: "events", label: "Events & Veranstaltungen" },
    { value: "other", label: "Andere" },
  ],

  businessSizes: [
    { value: "1-10", label: "1-10 Mitarbeiter" },
    { value: "11-50", label: "11-50 Mitarbeiter" },
    { value: "51-200", label: "51-200 Mitarbeiter" },
    { value: "201+", label: "201+ Mitarbeiter" },
  ],

  hasWebsite: [
    { value: "yes", label: "Ja" },
    { value: "no", label: "Nein" },
  ],

  marketingTools: [
    { value: "analytics", label: "Google Analytics" },
    { value: "ads", label: "Google Ads" },
    { value: "social", label: "Social Media Marketing" },
    { value: "email", label: "E-Mail Marketing" },
    { value: "seo", label: "SEO" },
    { value: "none", label: "Keine" },
  ],

  projectTypes: [
    { value: "web-design", label: "Webdesign" },
    { value: "web-development", label: "Webentwicklung" },
    { value: "seo-optimization", label: "SEO-Optimierung" },
    { value: "online-marketing", label: "Online-Marketing" },
    { value: "content-creation", label: "Content-Erstellung" },
    { value: "consulting", label: "Beratung" },
  ],

  timelines: [
    { value: "immediately", label: "Sofort" },
    { value: "1-month", label: "Innerhalb eines Monats" },
    { value: "3-months", label: "In 1-3 Monaten" },
    { value: "6-months", label: "In 3-6 Monaten" },
    { value: "exploring", label: "Ich erkunde nur Optionen" },
  ],

  budgets: [
    { value: "under-2k", label: "Unter 2.000 €" },
    { value: "2k-5k", label: "2.000 € - 5.000 €" },
    { value: "5k-10k", label: "5.000 € - 10.000 €" },
    { value: "10k-20k", label: "10.000 € - 20.000 €" },
    { value: "over-20k", label: "Über 20.000 €" },
    { value: "not-sure", label: "Noch nicht sicher" },
  ],

  referralSources: [
    { value: "search", label: "Suchmaschine (Google, Bing, etc.)" },
    { value: "social", label: "Social Media" },
    { value: "referral", label: "Empfehlung" },
    { value: "blog", label: "Blog oder Artikel" },
    { value: "other", label: "Andere" },
  ],

  statuses: [
    { value: "new", label: "New" },
    { value: "in-progress", label: "In Progress" },
    { value: "contacted", label: "Contacted" },
    { value: "closed", label: "Closed" },
  ],
};

// Create zod types from option values
export type Industry = (typeof FORM_OPTIONS.industries)[number]["value"];
export type BusinessSize = (typeof FORM_OPTIONS.businessSizes)[number]["value"];
export type HasWebsite = (typeof FORM_OPTIONS.hasWebsite)[number]["value"];
export type MarketingTool =
  (typeof FORM_OPTIONS.marketingTools)[number]["value"];
export type ProjectType = (typeof FORM_OPTIONS.projectTypes)[number]["value"];
export type Timeline = (typeof FORM_OPTIONS.timelines)[number]["value"];
export type Budget = (typeof FORM_OPTIONS.budgets)[number]["value"];
export type ReferralSource =
  (typeof FORM_OPTIONS.referralSources)[number]["value"];
export type Status = (typeof FORM_OPTIONS.statuses)[number]["value"];

// Define zod schema with properly typed enum values
export const contactFormSchema = z.object({
  // Step 1: Personal Information
  name: z.string().min(1, { message: "Name ist erforderlich" }),
  email: z.string().email({ message: "Gültige E-Mail-Adresse erforderlich" }),
  phone: z.string().optional(),

  // Step 2: Business Information
  companyName: z.string().optional(),
  industry: z.enum([...FORM_OPTIONS.industries.map((i) => i.value)] as [
    string,
    ...string[],
  ], { message: "Bitte wählen Sie eine gültige Branche aus" }),
  businessSize: z
    .enum([...FORM_OPTIONS.businessSizes.map((i) => i.value)] as [
      string,
      ...string[],
    ], { message: "Bitte wählen Sie eine gültige Unternehmensgröße aus" })
    .default("1-10"),

  // Step 3: Current Infrastructure
  hasWebsite: z.enum([...FORM_OPTIONS.hasWebsite.map((i) => i.value)] as [
    string,
    ...string[],
  ], { message: "Bitte wählen Sie eine gültige Option aus" }),
  websiteUrl: z.string().optional(),
  currentMarketing: z
    .array(
      z.enum([...FORM_OPTIONS.marketingTools.map((i) => i.value)] as [
        string,
        ...string[],
      ], { message: "Ungültiges Marketing-Tool ausgewählt" }),
    )
    .optional()
    .default([]),

  // Step 4: Project Details
  projectType: z
    .array(
      z.enum([...FORM_OPTIONS.projectTypes.map((i) => i.value)] as [
        string,
        ...string[],
      ], { message: "Ungültiger Projekttyp ausgewählt" }),
    )
    .min(1, { message: "Bitte mindestens eine Dienstleistung auswählen" }),
  timeline: z.enum([...FORM_OPTIONS.timelines.map((i) => i.value)] as [
    string,
    ...string[],
  ], { message: "Bitte wählen Sie einen gültigen Zeitrahmen aus" }),
  budget: z.enum([...FORM_OPTIONS.budgets.map((i) => i.value)] as [
    string,
    ...string[],
  ], { message: "Bitte wählen Sie ein gültiges Budget aus" }),

  // Step 5: Additional Information
  message: z.string().min(1, { message: "Ihre Nachricht ist erforderlich" }),
  howDidYouHear: z.enum([
    ...FORM_OPTIONS.referralSources.map((i) => i.value),
  ] as [string, ...string[]], { message: "Bitte wählen Sie eine gültige Option aus" }),
});
