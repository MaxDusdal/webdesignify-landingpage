import { GlobalConfig } from "payload";
export const Datenschutz: GlobalConfig = {
  slug: "datenschutz",
  access: {
    read: () => true,
  },
  admin: {
    group: "Legal",
    livePreview: {
      url: "/datenschutz",
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
        description: "The title of the Privacy Policy page",
      },
    },
    {
      name: "lastUpdated",
      type: "date",
      required: true,
      label: "Last Updated",
      admin: {
        description: "When was this Privacy Policy last updated?",
      },
    },
    {
      name: "content",
      type: "richText",
      required: true,
      label: "Content",
      admin: {
        description: "The main content of the Privacy Policy",
      },
    },
  ],
};
