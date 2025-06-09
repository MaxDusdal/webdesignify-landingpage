import { getPayload } from "payload";
import { notFound } from "next/navigation";
import config from "@payload-config";
import {
  PayloadLexicalReactRenderer,
  PayloadLexicalReactRendererContent,
} from "@atelier-disko/payload-lexical-react-renderer";
import { TableOfContents } from "@/components/table-of-contents";
import { customElementRenderers } from "@/lib/lexicalRenderers";
import { GlobalSlug } from "payload";
import { RefreshRouteOnSave } from "@/components/refresh-route-on-save";
import { Impressum } from "../../payload-types";
type LegalPageProps = {
  slug: "impressum" | "datenschutz";
};

async function getLegalContent(slug: string) {
  try {
    const payload = await getPayload({
      config: config,
    });
    const content = await payload.findGlobal({
      slug: slug as GlobalSlug,
    });

    if (!content) {
      return null;
    }

    return content as Impressum;
  } catch (error) {
    console.error("Error fetching legal content:", error);
    return null;
  }
}

export default async function LegalPage({ slug }: LegalPageProps) {
  const content = await getLegalContent(slug);

  if (!content || !content.content) {
    notFound();
  }

  // Validate content structure
  const contentData = content.content as PayloadLexicalReactRendererContent;
  if (!contentData || typeof contentData !== "object") {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-screen-lg">
      <h1 className="text-3xl font-bold mb-6">{content.title}</h1>
      <TableOfContents content={contentData} />
      <div className="prose prose-lg max-w-none">
        <PayloadLexicalReactRenderer
          content={contentData}
          elementRenderers={customElementRenderers}
        />
      </div>
      <div className="mt-8 text-sm text-gray-600">
        Zuletzt aktualisiert:{" "}
        {new Date(content.lastUpdated).toLocaleDateString("de-DE")}
      </div>
      <RefreshRouteOnSave />
    </div>
  );
}
