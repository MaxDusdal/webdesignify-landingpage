import Image from "next/image";
import { Calendar, Clock } from "lucide-react";
import payloadConfig from "@/app/payload.config";
import { getPayload } from "payload";
import {
  PayloadLexicalReactRenderer,
  PayloadLexicalReactRendererContent,
} from "@atelier-disko/payload-lexical-react-renderer";
import { customElementRenderers } from "@/lib/lexicalRenderers";
import { RefreshRouteOnSave } from "@/components/refresh-route-on-save";
import { Author, Blog, Media } from "../../../../../payload-types";
import { Metadata } from "next";

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export default async function BlogPost({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const payload = await getPayload({ config: payloadConfig });
  const posts = await payload.find({
    collection: "blog",
    where: {
      slug: { equals: slug },
    },
    depth: 2,
  });

  const postData = posts.docs[0] as Blog & { author: Author };

  const postImage = postData.image as Media;
  const authorImage = postData.author?.image as Media;
  return (
    <main className="container mx-auto max-w-3xl px-4 py-8 md:px-6">
      <div className="ring-border mb-8 w-full max-w-2xl overflow-hidden rounded-lg shadow-md ring-1">
      <Image
          src={postImage.url ?? "/placeholder.svg"}
          alt={postData.title}
          width={1200}
          height={630}
          className="object-cover"
          priority
        />
      </div>

        <div className="max-w-3xl mx-auto">
          {/* Header Card with Metadata */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              {postData.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image
                    src={authorImage.url ?? "/placeholder.svg"}
                    alt={postData.author?.name ?? ""}
                    fill
                    className="object-cover"
                  />
                </div>
                <span>{postData.author?.name}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>
                  {new Date(postData.date).toLocaleDateString("de-DE", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                  })}
                </span>
              </div>
              {postData.readTime && (
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  <span>{postData.readTime} Minuten Lesezeit</span>
                </div>
              )}
            </div>
          </div>

          {/* Blog Content - No card styling */}
          <div className="prose prose-lg max-w-none">
            <PayloadLexicalReactRenderer
              content={postData.content as PayloadLexicalReactRendererContent}
              elementRenderers={customElementRenderers}
            />
          </div>
        </div>

      <RefreshRouteOnSave />
    </main>
  );
}

export async function generateMetadata(
  props: BlogPostPageProps,
): Promise<Metadata> {
  const { slug } = await props.params;
  const payload = await getPayload({ config: payloadConfig });
  const post = await payload.find({
    collection: "blog",
    where: { slug: { equals: slug } },
  });

  const postData = post.docs[0] as Blog & { author: Author };
  const postImage = postData.image as Media;

  return {
    title: postData.meta?.title || postData.title,
    description: postData.meta?.description || postData.excerpt,
    openGraph: {
      images: [postImage.url || "/placeholder.svg"],
    },
  };
}
