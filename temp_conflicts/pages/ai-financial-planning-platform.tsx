import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';

export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'ai-financial-planning-platform' } });
}

export default function AIFinancialPlanningPlatform(props: any) {
	return <ServicePage {...props} />;
}