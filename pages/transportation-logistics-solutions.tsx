import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';

export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'transportation-logistics-solutions' } });
}

export default function TransportationLogisticsSolutions(props: any) {
	return <ServicePage {...props} />;
}