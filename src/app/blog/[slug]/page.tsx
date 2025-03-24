import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, ArrowRight, Calendar, Clock, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export default function BlogPost({ params }: { params: { slug: string } }) {
  // This would normally come from a CMS or API
  const post = {
    id: params.slug,
    title: "7 Responsive Design Trends That Will Dominate 2023",
    excerpt:
      "Discover the latest responsive design techniques that are reshaping the web development landscape and how you can implement them in your projects.",
    image: "/placeholder.svg?height=600&width=1200",
    date: "June 15, 2023",
    readTime: "6 min read",
    author: "Max Mustermann",
    authorImage: "/placeholder.svg?height=80&width=80",
    category: "Web Design",
    content: [
      {
        type: "paragraph",
        content:
          "The digital landscape is constantly evolving, and responsive design continues to be at the forefront of creating seamless user experiences across devices. As we move further into 2023, several responsive design trends are emerging that promise to reshape how we approach web development.",
      },
      {
        type: "heading",
        content: "1. Fluid Typography and Spacing",
      },
      {
        type: "paragraph",
        content:
          "Gone are the days of fixed font sizes and spacing. Fluid typography uses viewport units (vw, vh) and calc() functions to create text that scales smoothly between minimum and maximum sizes based on the viewport width. This approach ensures optimal readability across all devices without requiring numerous breakpoints.",
      },
      {
        type: "code",
        content: `/* Fluid typography example */
:root {
  --font-size-min: 16;
  --font-size-max: 24;
  --viewport-min: 320;
  --viewport-max: 1200;
}

body {
  font-size: calc(
    (var(--font-size-min) * 1px) + 
    (var(--font-size-max) - var(--font-size-min)) * 
    (100vw - (var(--viewport-min) * 1px)) / 
    ((var(--viewport-max) - var(--viewport-min)) * 1px)
  );
}`,
      },
      {
        type: "cta",
        title: "Need help implementing fluid typography?",
        content: "I can help you modernize your website with the latest responsive design techniques.",
        buttonText: "Get in Touch",
        buttonLink: "#contact",
      },
      {
        type: "heading",
        content: "2. Container Queries",
      },
      {
        type: "paragraph",
        content:
          "While media queries have been the backbone of responsive design for years, container queries are changing the game. Instead of basing styles on the viewport size, container queries allow elements to adapt based on their parent container's size. This creates more modular, reusable components that can adapt to their context.",
      },
      {
        type: "paragraph",
        content:
          "Container queries are particularly useful for component-based architectures, where the same component might appear in different layouts and contexts throughout a site. With container queries, a card component can adapt its layout based on whether it's in a sidebar, main content area, or grid layout.",
      },
      {
        type: "heading",
        content: "3. Responsive Animation",
      },
      {
        type: "paragraph",
        content:
          "As devices become more powerful, responsive animation is becoming increasingly important. This means not just scaling animations based on screen size, but also considering factors like device capabilities, user preferences, and even battery status.",
      },
      {
        type: "paragraph",
        content:
          "For example, you might serve complex animations to desktop users with powerful GPUs, while providing simpler alternatives to mobile users or those who have enabled reduced motion preferences. This ensures a smooth experience for all users without sacrificing visual appeal.",
      },
      {
        type: "cta",
        title: "Want to add engaging animations to your site?",
        content: "Let's discuss how we can enhance your user experience with thoughtful, accessible animations.",
        buttonText: "Discuss Your Project",
        buttonLink: "#contact",
      },
      {
        type: "heading",
        content: "Conclusion",
      },
      {
        type: "paragraph",
        content:
          "Responsive design continues to evolve beyond simple breakpoints and flexible grids. By embracing these emerging trends, you can create more adaptable, user-friendly websites that provide optimal experiences across all devices and contexts.",
      },
      {
        type: "paragraph",
        content:
          "Remember that the best responsive designs are those that consider not just screen sizes, but also user needs, device capabilities, and content requirements. By taking a holistic approach to responsive design, you can create websites that truly stand out in 2023 and beyond.",
      },
    ],
    relatedPosts: [
      {
        id: "seo-for-developers",
        title: "SEO for Developers: Technical Optimizations That Make a Difference",
        image: "/placeholder.svg?height=200&width=300",
        category: "SEO",
      },
      {
        id: "web-performance-guide",
        title: "The Complete Guide to Web Performance Optimization",
        image: "/placeholder.svg?height=200&width=300",
        category: "Performance",
      },
      {
        id: "accessibility-best-practices",
        title: "Accessibility Best Practices Every Developer Should Know",
        image: "/placeholder.svg?height=200&width=300",
        category: "Accessibility",
      },
    ],
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-16">
        {/* Hero Section */}
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden">
          <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
        </div>

        <div className="container px-4 md:px-6 -mt-20 relative z-10">
          <div className="max-w-3xl mx-auto bg-card rounded-lg border border-border/40 shadow-lg p-6 md:p-8 lg:p-10">
            <Badge variant="secondary" className="bg-primary text-primary-foreground mb-4">
              {post.category}
            </Badge>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">{post.title}</h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8 pb-8 border-b border-border/40">
              <div className="flex items-center gap-2">
                <div className="relative w-8 h-8 rounded-full overflow-hidden">
                  <Image src={post.authorImage || "/placeholder.svg"} alt={post.author} fill className="object-cover" />
                </div>
                <span>{post.author}</span>
              </div>
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{post.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
              <div className="ml-auto">
                <Button variant="ghost" size="sm" className="gap-1">
                  <Share2 className="h-4 w-4" />
                  Share
                </Button>
              </div>
            </div>

            {/* Blog Content */}
            <div className="prose prose-lg max-w-none">
              {post.content.map((block, index) => {
                if (block.type === "paragraph") {
                  return (
                    <p key={index} className="mb-6 text-foreground/90 leading-relaxed">
                      {block.content}
                    </p>
                  )
                } else if (block.type === "heading") {
                  return (
                    <h2 key={index} className="text-2xl font-bold mt-10 mb-4">
                      {block.content}
                    </h2>
                  )
                } else if (block.type === "code") {
                  return (
                    <pre key={index} className="bg-primary/5 p-4 rounded-lg overflow-x-auto mb-6 text-sm font-mono">
                      {block.content}
                    </pre>
                  )
                } else if (block.type === "cta") {
                  return (
                    <div key={index} className="my-10 p-6 bg-primary/10 rounded-lg border border-primary/20 animate-in">
                      <h3 className="text-xl font-bold mb-2">{block.title}</h3>
                      <p className="mb-4">{block.content}</p>
                      <Button asChild>
                        <Link href={block.buttonLink}>{block.buttonText}</Link>
                      </Button>
                    </div>
                  )
                }
                return null
              })}
            </div>

            {/* Author Bio */}
            <div className="mt-12 p-6 bg-card rounded-lg border border-border/40 flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="relative w-20 h-20 rounded-full overflow-hidden flex-shrink-0">
                <Image src={post.authorImage || "/placeholder.svg"} alt={post.author} fill className="object-cover" />
              </div>
              <div>
                <h3 className="text-lg font-bold mb-2">About {post.author}</h3>
                <p className="text-muted-foreground mb-4">
                  Web designer and developer with over 8 years of experience creating custom digital solutions that
                  drive business growth. Specializing in responsive design, performance optimization, and user
                  experience.
                </p>
                <Button variant="outline" size="sm">
                  View All Posts
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        <div className="container px-4 md:px-6 py-16">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {post.relatedPosts.map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.id}`}
                  className="group relative flex flex-col overflow-hidden rounded-lg border border-border/40 bg-card shadow-sm transition-all duration-300 hover:shadow-md hover:border-primary/20"
                >
                  <div className="relative h-[140px] w-full overflow-hidden">
                    <Image
                      src={relatedPost.image || "/placeholder.svg"}
                      alt={relatedPost.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge variant="secondary" className="bg-primary/80 text-primary-foreground text-xs">
                        {relatedPost.category}
                      </Badge>
                    </div>
                  </div>

                  <div className="p-4">
                    <h3 className="text-sm font-semibold group-hover:text-primary transition-colors line-clamp-2">
                      {relatedPost.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Post Navigation */}
        <div className="container px-4 md:px-6 pb-16">
          <div className="max-w-3xl mx-auto flex justify-between">
            <Button variant="ghost" className="gap-1">
              <ArrowLeft className="h-4 w-4" />
              Previous Post
            </Button>
            <Button variant="ghost" className="gap-1">
              Next Post
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

