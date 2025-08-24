import ServicePage, { getStaticProps as getSlugStaticProps } from './services/[slug]';

export async function getStaticProps() {
	return (getSlugStaticProps as any)({ params: { slug: 'intelligent-project-management-suite' } });
}

export default function IntelligentProjectManagementSuite(props: any) {
	return <ServicePage {...props} />;
}