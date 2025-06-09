import sharp from "sharp";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { s3Storage } from "@payloadcms/storage-s3";
import { buildConfig } from "payload";
import { en } from "@payloadcms/translations/languages/en";
import { de } from "@payloadcms/translations/languages/de";
import { Media } from "./(payload)/collections/media";
import { Blog } from "./(payload)/collections/blog";
import { Author } from "./(payload)/collections/author";
import { Impressum } from "./(payload)/globals/impressum";
import { Datenschutz } from "./(payload)/globals/datenschutz";
import { seoPlugin } from "@payloadcms/plugin-seo";
import { FAQ } from "@/app/(payload)/globals/faq";
import { CaseStudies } from "@/app/(payload)/collections/case-studies";
import { ContactForm } from "./(payload)/collections/contact-form";
import { Projekte } from "./(payload)/collections/projekte";
export default buildConfig({
  // If you'd like to use Rich Text, pass your editor here
  editor: lexicalEditor(),

  // Define and configure your collections in this array
  collections: [Media, Blog, Author, CaseStudies, ContactForm, Projekte],

  // Define and configure your globals in this array
  globals: [Impressum, Datenschutz, FAQ],

  // Your Payload secret - should be a complex and secure string, unguessable
  secret: process.env.PAYLOAD_SECRET || "",
  // Whichever Database Adapter you're using should go here
  // Mongoose is shown as an example, but you can also use Postgres
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
    },
  }),
  // If you want to resize images, crop, set focal point, etc.
  // make sure to install it and pass it to the config.
  // This is optional - if you don't need to do these things,
  // you don't need it!

  sharp,
  serverURL: process.env.SERVER_URL || "http://localhost:3000",
  telemetry: false,

  plugins: [
    s3Storage({
      collections: {
        media: true,
      },
      bucket: process.env.S3_BUCKET || "",
      config: {
        region: process.env.S3_REGION || "",
        credentials: {
          accessKeyId: process.env.S3_ACCESS_KEY_ID || "",
          secretAccessKey: process.env.S3_SECRET_ACCESS_KEY || "",
        },
        endpoint: process.env.S3_ENDPOINT || "",
      },
    }),
    seoPlugin({
      collections: ["blog"],
      uploadsCollection: "media",
      generateTitle: ({ doc }) => `${doc.title} | Webdesignify`,
      generateDescription: ({ doc }) => doc.excerpt,
      generateImage: ({ doc }) => doc.image,
      tabbedUI: true,
      generateURL: ({ doc }) => `https://webdesignify.de/blog/${doc.slug}`,
    }),
  ],
  i18n: {
    supportedLanguages: { de, en },
    fallbackLanguage: "en",
  },
});
