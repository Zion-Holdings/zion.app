import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';

export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'real-estate-technology-solutions' } });
}

export default function RealEstateTechnologySolutions(props: any) {
	return <ServicePage {...props} />;
}