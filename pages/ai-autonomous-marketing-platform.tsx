import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';

export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'ai-autonomous-marketing-platform' } });
}

export default function AIAutonomousMarketingPlatform(props: any) {
	return <ServicePage {...props} />;
}