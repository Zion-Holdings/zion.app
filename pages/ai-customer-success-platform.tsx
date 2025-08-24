import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';

export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'ai-customer-success-platform' } });
}

export default function AICustomerSuccessPlatform(props: any) {
	return <ServicePage {...props} />;
}