import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import SocialProof from "@/components/social-proof"
import Services from "@/components/services"
import Differentiators from "@/components/differentiators"
import Portfolio from "@/components/portfolio"
import Blog from "@/components/blog"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <SocialProof />
        <Services />
        <Differentiators />
        <Portfolio />
        <Blog />
      </main>
      <Footer />
    </div>
  )
}

