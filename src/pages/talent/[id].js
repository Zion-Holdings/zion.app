import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { ProfileLoadingState } from '@/components/profile/ProfileLoadingState';
import { ProfileErrorState } from '@/components/profile/ProfileErrorState';
export default function TalentProfilePage() {
    const { id } = useParams();
    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchProfile = async () => {
            if (!id) {
                setError('Profile not found');
                setLoading(false);
                return;
            }
            try {
                const res = await fetch(`/api/talent/${id}`);
                if (!res.ok)
                    throw new Error('Failed to load profile');
                const data = await res.json();
                setProfile(data.profile);
            }
            catch (err) {
                setError('Profile not found');
            }
            finally {
                setLoading(false);
            }
        };
        fetchProfile();
    }, [id]);
    if (loading)
        return _jsx(ProfileLoadingState, {});
    if (error || !profile)
        return _jsx(ProfileErrorState, { error: error });
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: profile.full_name, description: profile.bio || '' }), _jsx("main", { className: "min-h-screen bg-zion-blue py-8 text-white", children: _jsxs("div", { className: "container mx-auto px-4 space-y-4", children: [_jsx("h1", { className: "text-3xl font-bold", "data-testid": "profile-name", children: profile.full_name }), profile.bio && _jsx("p", { children: profile.bio }), profile.hourly_rate && _jsxs("p", { children: ["Hourly Rate: $", profile.hourly_rate, "/hr"] }), profile.skills && (_jsxs("div", { children: [_jsx("h2", { className: "font-semibold", children: "Skills" }), _jsx("ul", { className: "list-disc ml-5", children: profile.skills.map(skill => (_jsx("li", { children: skill }, skill))) })] })), profile.social && (_jsxs("div", { children: [_jsx("h2", { className: "font-semibold", children: "Social Links" }), _jsx("ul", { className: "list-disc ml-5", children: Object.entries(profile.social).map(([platform, url]) => (_jsx("li", { children: _jsx("a", { href: url, className: "text-zion-cyan", target: "_blank", rel: "noopener noreferrer", children: platform }) }, platform))) })] }))] }) })] }));
}
