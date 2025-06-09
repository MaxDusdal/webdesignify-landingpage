import { GlobalConfig } from "payload";
import { revalidatePath } from "next/cache";

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
  hooks: {
    afterChange: [
      ({ context }) => {
        if (process.env.NODE_ENV === "production") {
          try {
            revalidatePath("/datenschutz");

            console.log(
              `Revalidated paths after ${context.operation} operation on datenschutz collection`,
            );
          } catch (error) {
            console.error("Failed to revalidate after datenschutz change:", error);
          }
        }
      },
    ],
  },
};
