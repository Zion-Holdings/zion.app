import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import NextHead from '@/components/NextHead';
import { useRouter } from 'next/router';
// Loader2 removed as TalentProfileSkeleton will be used
import TalentDetails from '@/components/talent/TalentDetails';
import TalentProfileSkeleton from '@/components/talent/TalentProfileSkeleton';
import NotFound from '@/components/NotFound';
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
    const [talent, setTalent] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (router.isReady && typeof id === 'string') {
            setIsLoading(true);
            setError(null);
            fetch(`/api/talent/${id}`)
                .then(handleApiResponse)
                .then(data => {
                if (data && data.profile) {
                    setTalent(data.profile);
                }
                else {
                    setTalent(null); // Explicitly set to null if profile is not in data
                }
            })
                .catch(err => {
                setError(err);
                setTalent(null);
            })
                .finally(() => {
                setIsLoading(false);
            });
        }
        else if (!router.isReady) {
            // Keep loading if router is not ready yet
            setIsLoading(true);
        }
        else {
            // Handle cases where id is not a string or router is ready but id is not set
            setIsLoading(false);
            setError(new Error("Invalid ID or router not ready."));
        }
    }, [router.isReady, id]);
    if (isLoading || !router.isReady) {
        return _jsx(TalentProfileSkeleton, {});
    }
    // Specific 404 error from API
    if (error && error.status === 404) {
        return _jsx(NotFound, {});
    }
    // Other errors (non-404)
    if (error) {
        return (_jsxs("div", { className: "flex flex-col items-center justify-center py-20 text-center", children: [_jsx("h2", { className: "text-2xl font-semibold mb-2", children: "Error" }), _jsx("p", { children: "Failed to load talent profile." }), error.status && _jsxs("p", { children: ["Status: ", error.status] }), _jsxs("p", { children: ["Message: ", error.info?.error || error.info?.message || error.message] })] }));
    }
    // API call was successful (no error thrown) but no profile found
    // This also implies !isLoading at this point.
    if (!talent) {
        return _jsx(NotFound, {});
    }
    // If we reach here, talent data is available
    return (_jsxs(_Fragment, { children: [_jsx(NextHead, { title: talent.full_name, description: talent.bio ?? undefined, openGraph: {
                    image: talent.profile_picture_url ?? undefined, // Ensure image is string or undefined
                    title: talent.full_name,
                    description: talent.bio ?? undefined // Ensure description is string or undefined
                } }), _jsx(TalentDetails, { talent: talent })] }));
};
export default TalentPage;
