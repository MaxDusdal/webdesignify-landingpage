import { GlobalConfig } from "payload";

export const FAQ: GlobalConfig = {
  slug: "faq",
  access: {
    read: () => true,
  },
  admin: {
    group: "Content",
    livePreview: {
      url: "/#faq",
    },
  },
  versions: {
    drafts: {
      autosave: true,
    },
  },
  fields: [
    {
      name: "faqItems",
      type: "array",
      label: "FAQ Items",
      admin: {
        description: "Die einzelnen FAQ-Einträge",
      },
      fields: [
        {
          name: "question",
          type: "text",
          required: true,
          label: "Frage",
          admin: {
            description: "Die Frage des FAQ-Eintrags",
          },
        },
        {
          name: "answer",
          type: "richText",
          required: true,
          label: "Antwort",
          admin: {
            description: "Die Antwort auf die Frage",
          },
        },
      ],
    },
  ],
};
