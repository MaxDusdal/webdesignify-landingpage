import { CollectionConfig } from "payload";
import { revalidatePath } from "next/cache";

export const Projekte: CollectionConfig = {
  slug: "projekte",
  fields: [
    {
      name: "id",
      type: "text",
      required: true,
      unique: true,
      label: "ID",
      admin: {
        description:
          'Unique identifier used in the URL (e.g., "restaurant-bergblick")',
      },
    },
    {
      name: "title",
      type: "text",
      required: true,
      label: "Project Title",
    },
    {
      name: "subtitle",
      type: "text",
      required: true,
      label: "Project Subtitle",
    },
    {
      name: "description",
      type: "textarea",
      required: true,
      label: "Project Description",
    },
    {
      name: "image",
      type: "upload",
      relationTo: "media",
      required: true,
      label: "Project Image",
    },
    {
      name: "tags",
      type: "array",
      label: "Tags",
      fields: [
        {
          name: "tag",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "caseStudy",
      type: "relationship",
      relationTo: "case-studies",
      label: "Related Case Study",
      admin: {
        description: "Select the case study this project should redirect to",
      },
    },
    {
      name: "url",
      type: "text",
      required: true,
      label: "URL",
    },
  ],
  hooks: {
    afterChange: [
      ({ operation }) => {
        if (process.env.NODE_ENV === "production") {
          try {
            revalidatePath("/");
            revalidatePath("/projekte");

            console.log(
              `Revalidated paths after ${operation} operation on projekte collection`,
            );
          } catch (error) {
            console.error("Failed to revalidate after projekte change:", error);
          }
        }
      },
    ],
  },
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
};
