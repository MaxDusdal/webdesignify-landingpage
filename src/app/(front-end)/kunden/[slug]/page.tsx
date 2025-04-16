import CaseStudyHero from '@/components/case-study/case-study-hero';
import CaseStudyOverview from '@/components/case-study/case-study-overview';
import CaseStudyChallenge from '@/components/case-study/case-study-challenge';
import CaseStudySolution from '@/components/case-study/case-study-solution';
import CaseStudyResults from '@/components/case-study/case-study-results';
import CaseStudyTestimonial from '@/components/case-study/case-study-testimonial';
import CaseStudyConclusion from '@/components/case-study/case-study-conclusion';
import { getPayload } from 'payload';
import payloadConfig from '@/app/payload.config';
import { CaseStudy } from '../../../../../payload-types';
import { RefreshRouteOnSave } from '@/components/refresh-route-on-save';

async function getCaseStudy(slug: string) {
    const payload = await getPayload({ config: payloadConfig });
    const caseStudy = await payload.find({
        collection: 'case-studies',
        where: { slug: { equals: slug } },
    });

    if (!caseStudy || caseStudy.docs.length === 0) {
        return null;
    }

    return caseStudy.docs[0] as CaseStudy;
}

export default async function CaseStudyPage({ params }: { params: Promise<{ slug: string }> }) {
    const slug = (await params).slug;
    const caseStudy = await getCaseStudy(slug);

    if (!caseStudy) {
        return <div>Case Study not found</div>;
    }

    return (
        <main>
            <CaseStudyHero caseStudy={caseStudy} />
            <CaseStudyOverview caseStudy={caseStudy} />
            <CaseStudyChallenge caseStudy={caseStudy} />
            <CaseStudySolution caseStudy={caseStudy} />
            <CaseStudyResults caseStudy={caseStudy} />
            <CaseStudyTestimonial caseStudy={caseStudy} />
            <CaseStudyConclusion caseStudy={caseStudy} />
            <RefreshRouteOnSave />
        </main>
    );
}
