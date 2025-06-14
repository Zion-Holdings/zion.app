import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import React from 'react';
import { useRouter } from 'next/router';
import { Helmet } from 'react-helmet-async';
import { NextSeo } from '@/components/NextSeo';
import { SERVICES } from '@/data/servicesData';
import { slugify } from '@/lib/slugify';
import Custom404 from '../404';
const ServicePage = () => {
    const router = useRouter();
    const { slug } = router.query;
    if (!slug) {
        return _jsx(Custom404, {});
    }
    const service = React.useMemo(() => SERVICES.find((s) => slugify(s.title) === slug) || null, [slug]);
    if (!service) {
        return _jsx(Custom404, {});
    }
    const serviceLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        name: service.title,
        description: service.description,
        offers: {
            "@type": "Offer",
            price: service.price,
            priceCurrency: service.currency,
        },
    };
    return (_jsxs(_Fragment, { children: [_jsx(NextSeo, { title: service.title, description: service.description, openGraph: { title: service.title, description: service.description } }), _jsx(Helmet, { children: _jsx("script", { type: "application/ld+json", children: JSON.stringify(serviceLd) }) }), _jsxs("main", { className: "prose dark:prose-invert max-w-3xl mx-auto py-8", children: [_jsx("h1", { children: service.title }), _jsx("p", { children: service.description })] })] }));
};
export default ServicePage;
