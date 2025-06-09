import { CollectionConfig } from "payload";

export const CaseStudies: CollectionConfig = {
  slug: "case-studies",
  fields: [
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      label: "Slug",
      admin: {
        description:
          'Der Slug wird verwendet, um die URL des Projekts zu generieren. (z.B. "restaurant-bergblick" in der URL https://webdesignify.de/projekte/restaurant-bergblick)',
      },
    },
    {
      name: "title",
      type: "text",
      required: true,
      label: "Name der Case Study",
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      label: "Beschreibung der Case Study",
    },
    {
      name: "heroImage",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Hero Hintergrundbild",
    },
    {
      name: "heroCTA",
      type: "group",
      label: "Hero CTA",
      fields: [
        {
          name: "buttonText",
          type: "text",
          defaultValue: "Zum Projekt",
          label: "Button Text",
        },
        {
          name: "buttonLink",
          type: "text",
          required: true,
          label: "Button Link",
        },
      ],
    },
    {
      name: "statistics",
      type: "array",
      required: true,
      label: "Statistiken",
      fields: [
        {
          name: "icon",
          type: "select",
          options: [
            { label: "Search", value: "search" },
            { label: "Star", value: "star" },
            { label: "Calendar", value: "calendar" },
            { label: "Clock", value: "clock" },
          ],
          required: true,
          label: "Icon",
        },
        {
          name: "value",
          type: "text",
          required: true,
          label: "Wert der Statistik",
          admin: {
            description: 'Wert der Statistik (z.B. "100" oder "100%")',
          },
        },
        {
          name: "label",
          type: "text",
          required: true,
          label: "Name der Statistik",
          admin: {
            description:
              'Label der Statistik (z.B. "Verbesserung der Suchleistung")',
          },
        },
      ],
      minRows: 1,
      maxRows: 4,
    },
    {
      name: "projectSummary",
      type: "group",
      label: "Projekt Zusammenfassung",
      fields: [
        {
          name: "content",
          type: "richText",
          label: "Projektzusammenfassung",
        },
        {
          name: "timelineItems",
          type: "array",
          label: "Projektzeitraum",
          fields: [
            {
              name: "text",
              type: "text",
              required: true,
              label: "Projektzeitraum",
            },
          ],
        },
        {
          name: "serviceItems",
          type: "array",
          label: "Service Items",
          fields: [
            {
              name: "text",
              type: "text",
              required: true,
              label: "Service Item",
            },
          ],
        },
      ],
    },
    {
      name: "challenge",
      type: "group",
      label: "Herausforderungen",
      fields: [
        {
          name: "description",
          type: "textarea",
          label: "Beschreibung der Herausforderungen",
        },
        {
          name: "challenges",
          type: "array",
          label: "Herausforderungen",
          fields: [
            {
              name: "text",
              type: "text",
              required: true,
              label: "Herausforderung",
            },
          ],
        },
        {
          name: "summary",
          type: "textarea",
          label: "Zusammenfassung der Herausforderungen",
        },
        {
          name: "imageGroup",
          type: "group",
          label: "Bild der Herausforderungen",
          fields: [
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              label: "Bild",
            },
            {
              name: "imageDescription",
              type: "text",
              label: "Bildbeschriftung",
            },
          ],
        },
      ],
    },

    {
      name: "solution",
      type: "group",
      label: "Lösung",
      fields: [
        {
          name: "description",
          type: "textarea",
          label: "Lösung Beschreibung",
          defaultValue:
            "Wir entwickelten eine umfassende digitale Strategie, die sowohl die Onlinepräsenz als auch die betrieblichen Abläufe des Restaurants revolutionierte.",
        },
        {
          name: "points",
          type: "array",
          label: "Lösung Punkte",
          fields: [
            {
              name: "text",
              type: "text",
              required: true,
              label: "Solution Point",
            },
          ],
        },
        {
          name: "tabs",
          type: "array",
          label: "Lösung Tabs",
          minRows: 1,
          maxRows: 3,
          fields: [
            {
              name: "title",
              type: "text",
              required: true,
              label: "Tab Title",
            },
            {
              name: "value",
              type: "text",
              required: true,
              label: "Tab Value",
              admin: {
                description:
                  'Eindeutige Kennung für diesen Tab (z.B. "website", "system", "results")',
              },
            },
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              required: true,
              label: "Tab Image",
            },
            {
              name: "description",
              type: "textarea",
              label: "Tab Beschreibung",
            },
          ],
          admin: {
            description:
              "Füge 1 bis 3 Tabs hinzu, um verschiedene Aspekte der Lösung zu zeigen",
          },
        },
      ],
    },
    {
      name: "inHouseSoftware",
      type: "group",
      label: "In-House Software",
      fields: [
        {
          name: "title",
          type: "text",
          defaultValue: "In-House Software",
          label: "Title",
        },
        {
          name: "description",
          type: "textarea",
          label: "Description",
        },
        {
          name: "points",
          type: "array",
          label: "Points",
          fields: [
            {
              name: "text",
              type: "text",
              required: true,
              label: "Point",
            },
          ],
        },
        {
          name: "cta",
          type: "group",
          label: "CTA",
          fields: [
            {
              name: "text",
              type: "text",
              defaultValue: "Mehr über Software XY erfahren",
              label: "Button Text",
            },
            {
              name: "link",
              type: "text",
              label: "Button Link",
            },
          ],
        },
      ],
    },

    {
      name: "results",
      type: "group",
      label: "Results",
      fields: [
        {
          name: "description",
          type: "textarea",
          label: "Ergebnisse Beschreibung",
          defaultValue:
            "Die digitale Transformation führte zu messbaren Verbesserungen in allen Geschäftsbereichen des Restaurants Bergblick.",
        },
        {
          name: "metrics",
          type: "array",
          label: "Ergebnisse Kategorien",
          fields: [
            {
              name: "category",
              type: "text",
              required: true,
              label: "Ergebnisse Kategorie",
            },
            {
              name: "icon",
              type: "select",
              options: [
                { label: "Trending Up", value: "trendingUp" },
                { label: "Line Chart", value: "lineChart" },
                { label: "Users", value: "users" },
              ],
              required: true,
              label: "Kategorie Icon",
            },
            {
              name: "statistics",
              type: "array",
              label: "Statistiken",
              fields: [
                {
                  name: "label",
                  type: "text",
                  required: true,
                  label: "Statistik Label",
                },
                {
                  name: "before",
                  type: "text",
                  required: true,
                  label: "Vorher Wert",
                },
                {
                  name: "after",
                  type: "text",
                  required: true,
                  label: "Nachher Wert",
                },
                {
                  name: "improvement",
                  type: "text",
                  required: true,
                  label: "Verbesserung Wert (z.B. +100%, -68%)",
                },
              ],
              admin: {
                description:
                  "Add vorher/nachher Statistiken für diese Kategorie",
              },
            },
          ],
          admin: {
            description: "Add Kategorien zu Ergebnissen anzeigen",
          },
        },
      ],
    },
    {
      name: "testimonial",
      type: "group",
      label: "Kundenbewertung",
      fields: [
        {
          name: "quote",
          type: "textarea",
          label: "Kundenbewertung Zitat",
          required: true,
        },
        {
          name: "author",
          type: "group",
          label: "Autor",
          fields: [
            {
              name: "name",
              type: "text",
              label: "Name des Autors der Kundenbewertung",
              required: true,
            },
            {
              name: "title",
              type: "text",
              label: "Titel des Autors der Kundenbewertung",
              required: true,
            },
            {
              name: "image",
              type: "upload",
              relationTo: "media",
              label: "Bild des Autors der Kundenbewertung",
            },
          ],
        },
      ],
    },
    {
      name: "conclusion",
      type: "group",
      label: "Fazit",
      fields: [
        {
          name: "content",
          type: "richText",
          label: "Fazit",
          required: true,
        },
      ],
    },
  ],
  admin: {
    useAsTitle: "title",
    livePreview: {
      url: ({ data }) => {
        return `/kunden/${data.slug}`;
      },
    },
  },
  access: {
    read: () => true,
  },

  versions: {
    drafts: {
      autosave: true,
    },
  },
};
