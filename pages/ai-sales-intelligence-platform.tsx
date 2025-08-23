import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';

export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'ai-sales-intelligence-platform' } });
}

export default function AISalesIntelligencePlatform(props: any) {
	return <ServicePage {...props} />;
}