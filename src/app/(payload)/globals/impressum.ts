import { GlobalConfig } from "payload";

export const Impressum: GlobalConfig = {
  slug: "impressum",
  access: {
    read: () => true,
  },
  admin: {
    group: "Legal",
    livePreview: {
      url: "/impressum",
    },
  },
  versions: {
    drafts: {
      autosave: true,
    },
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      label: "Title",
      admin: {
        description: "Der Titel der Impressum Seite",
      },
    },
    {
      name: "lastUpdated",
      type: "date",
      required: true,
      label: "Last Updated",
      admin: {
        description: "Wann wurde diese Impressum Seite zuletzt aktualisiert?",
      },
    },
    {
      name: "content",
      type: "richText",
      required: true,
      label: "Content",
      admin: {
        description: "Der Hauptinhalt der Impressum Seite",
      },
    },
  ],
};
