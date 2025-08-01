import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getPayload } from "payload";
import payloadConfig from "@/app/payload.config";
import HeaderSection from "@/components/sections/header-section";
import type { Blog, Media } from "../../../../payload-types";

export const metadata = {
  title: "Blog - Webdesignify",
  description:
    "Aktuelle Artikel über Webdesign, Entwicklung und digitale Strategien",
};

export default async function BlogPage() {
  const payload = await getPayload({ config: payloadConfig });
  const posts = await payload.find({
    collection: "blog",
    limit: 10,
    sort: "-date",
    where: {
      status: {
        equals: "published",
      },
    },
    depth: 1, // To populate relationships like author
  });

  return (
    <div className="bg-background flex flex-col">
      <main className="">
        <div className="container px-4 max-w-7xl mx-auto">
          <HeaderSection
            headerType="h2"
            subtitle="BLOG"
            title="Mein Blog"
            description="Gedanken, Tipps und Erkenntnisse zu Webentwicklung, Geschäftsprozesse und digitalen Marketing"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.docs.length > 0 ? (
              posts.docs.map((post: Blog) => (
                <Link
                  key={post.id}
                  href={`/blog/${post.slug}`}
                  className="group relative flex flex-col overflow-hidden rounded-lg border border-border/40 bg-card shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20 hover:translate-y-[-4px]"
                >
                  <div className="relative h-[200px] w-full overflow-hidden">
                    <Image
                      src={(post.image as Media)?.url || "/placeholder.svg"}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                  </div>

                  <div className="flex flex-col flex-grow p-6">
                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center text-sm text-muted-foreground mt-auto pt-4 border-t border-border/40">
                      <div className="flex items-center mr-4">
                        <Calendar className="h-4 w-4 mr-1" />
                        {new Date(post.date).toLocaleDateString("de-DE", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })}
                      </div>
                      {post.readTime && (
                        <div className="flex items-center">
                          <Clock className="h-4 w-4 mr-1" />
                          {post.readTime} min Lesezeit
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-300 group-hover:w-full"></div>
                </Link>
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <h3 className="text-xl font-medium mb-2">
                  No blog posts found
                </h3>
                <p className="text-muted-foreground">
                  Check back soon for new content!
                </p>
              </div>
            )}
          </div>

          {posts.totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                {Array.from({ length: posts.totalPages }, (_, i) => (
                  <Button
                    key={i}
                    variant={posts.page === i + 1 ? "default" : "outline"}
                    size="sm"
                    asChild
                  >
                    <Link href={`/blog?page=${i + 1}`}>{i + 1}</Link>
                  </Button>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
