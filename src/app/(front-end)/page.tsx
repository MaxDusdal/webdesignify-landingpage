import Hero from '@/components/hero';
import SocialProof from '@/components/social-proof';
import Services from '@/components/services';
import Differentiators from '@/components/differentiators';
import Portfolio from '@/components/portfolio';
import Blog from '@/components/blog';

export default function Home() {
    return (
        <>
            <Hero />
            <SocialProof />
            <Services />
            <Differentiators />
            <Portfolio />
            <Blog />
        </>
    );
}
