import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';

export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'ai-hr-analytics-platform' } });
}

export default function AIHRAnalyticsPlatform(props: any) {
	return <ServicePage {...props} />;
}