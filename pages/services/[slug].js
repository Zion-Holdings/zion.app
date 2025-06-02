import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import NextHead from '@/components/NextHead';
import { SERVICES } from '@/data/servicesData';
import { slugify } from '@/lib/slugify';
import Custom404 from '../404';
const ServicePage = ({ service }) => {
    if (!service) {
        return _jsx(Custom404, {});
    }
    return (_jsxs(_Fragment, { children: [_jsx(NextHead, { title: service.title, description: service.description, openGraph: { title: service.title, description: service.description } }), _jsxs("main", { className: "prose dark:prose-invert max-w-3xl mx-auto py-8", children: [_jsx("h1", { children: service.title }), _jsx("p", { children: service.description })] })] }));
};
export const getStaticPaths = async () => {
    const paths = SERVICES.map((service) => ({
        params: {
            slug: slugify(service.title),
        },
    }));
    return { paths, fallback: 'blocking' };
};
export const getStaticProps = async ({ params }) => {
    const slug = params?.slug;
    const service = SERVICES.find((s) => slugify(s.title) === slug) || null;
    return { props: { service } };
};
export default ServicePage;
