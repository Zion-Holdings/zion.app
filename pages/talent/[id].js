import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { NextSeo } from '@/components/NextSeo';
import { useRouter } from 'next/router';
// Loader2 removed as TalentProfileSkeleton will be used
import TalentProfileSkeleton from '@/components/talent/TalentProfileSkeleton';
import NotFound from '@/components/NotFound';
import useSWR from 'swr';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
// fetcher-like function for handling API responses
const handleApiResponse = async (res) => {
    if (!res.ok) {
        const error = new Error('An error occurred while fetching the data.');
        try {
            error.info = await res.json();
        }
        catch (e) {
            error.info = { message: await res.text() };
        }
        error.status = res.status;
        throw error;
    }
    return res.json();
};
const TalentPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const { data, error, isLoading } = useSWR(id ? `/api/talent/${id}` : null, (url) => fetch(url).then(handleApiResponse));
    if (isLoading || !router.isReady || !id) {
        return _jsx(TalentProfileSkeleton, {});
    }
    // Specific 404 error from API
    if (error && error.status === 404) {
        return _jsx(NotFound, {});
    }
    // Other errors (non-404)
    if (error) {
        const err = error;
        return (_jsxs("div", { className: "flex flex-col items-center justify-center py-20 text-center", children: [_jsx("h2", { className: "text-2xl font-semibold mb-2", children: "Error" }), _jsx("p", { children: "Failed to load talent profile." }), err.status && _jsxs("p", { children: ["Status: ", err.status] }), _jsxs("p", { children: ["Message: ", err.info?.error || err.info?.message || err.message] })] }));
    }
    // API call was successful (no error thrown) but no profile found
    // This also implies !isLoading at this point.
    if (!data) {
        return _jsx(NotFound, {});
    }
    // If we reach here, talent data is available
    return (_jsxs(_Fragment, { children: [_jsx(NextSeo, { title: data.name, description: data.bio ?? undefined, openGraph: {
                    images: undefined,
                    title: data.name,
                    description: data.bio ?? undefined // Ensure description is string or undefined
                } }), _jsx("main", { className: "min-h-screen bg-zion-blue py-8 text-white", "data-testid": "talent-details", children: _jsxs("div", { className: "container mx-auto px-4 space-y-6", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Avatar, { className: "h-20 w-20", children: _jsx(AvatarFallback, { children: data.name.charAt(0) }) }), _jsxs("div", { children: [_jsx("h1", { className: "text-3xl font-bold", "data-testid": "profile-name", children: data.name }), data.bio && _jsx("p", { className: "text-zion-slate-light", children: data.bio })] })] }), data.skills && data.skills.length > 0 && (_jsx("div", { className: "flex flex-wrap gap-2", "data-testid": "skills", children: data.skills.map((skill) => (_jsx(Badge, { variant: "secondary", children: skill }, skill))) })), data.portfolio && data.portfolio.length > 0 && (_jsxs("div", { children: [_jsx("h2", { className: "text-xl font-semibold mb-2", children: "Portfolio" }), _jsx("ul", { className: "list-disc ml-5 space-y-1", children: data.portfolio.map((item) => (_jsx("li", { children: item }, item))) })] })), _jsx(Button, { className: "bg-zion-purple text-white", children: "Hire" })] }) })] }));
};
export default TalentPage;
