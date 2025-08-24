import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/hooks/use-toast";
import { SEO } from "@/components/SEO";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Clock, Link as LinkIcon, Github, Twitter, Linkedin, CheckCircle2, Mail, Phone, Globe } from "lucide-react";
import { HireNowCTA } from "@/components/profile/HireNowCTA";
export default function ProfileDetail() {
    const { profileId } = useParams();
    const [profileData, setProfileData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    useEffect(() => {
        const fetchProfile = async () => {
            setIsLoading(true);
            setError(null);
            try {
                if (!profileId) {
                    setError("Profile ID is missing.");
                    return;
                }
                const { data, error } = await supabase
                    .from("talent_profiles")
                    .select("*")
                    .eq("id", profileId)
                    .single();
                if (error) {
                    throw new Error(error.message);
                }
                if (!data) {
                    setError("Profile not found.");
                    return;
                }
                setProfileData(data);
            }
            catch (err) {
                setError(err.message || "Failed to fetch profile.");
                toast({
                    title: "Error",
                    description: err.message || "Failed to fetch profile.",
                    variant: "destructive",
                });
            }
            finally {
                setIsLoading(false);
            }
        };
        fetchProfile();
    }, [profileId]);
    if (isLoading) {
        return (_jsx("div", { className: "min-h-screen flex items-center justify-center", children: _jsx("p", { children: "Loading profile..." }) }));
    }
    if (error) {
        return (_jsx("div", { className: "min-h-screen flex items-center justify-center", children: _jsxs("p", { children: ["Error: ", error] }) }));
    }
    if (!profileData) {
        return (_jsx("div", { className: "min-h-screen flex items-center justify-center", children: _jsx("p", { children: "Profile not found." }) }));
    }
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: `${profileData.full_name} | Zion AI Marketplace`, description: profileData.bio || "Check out this talent's profile on Zion!" }), _jsx(Header, {}), _jsx("div", { className: "container mx-auto px-4 py-8", children: _jsxs("div", { className: "grid grid-cols-12 gap-6", children: [_jsxs("div", { className: "col-span-12 lg:col-span-8", children: [_jsxs(Card, { className: "mb-6 bg-zion-blue border-zion-blue-light", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx(Avatar, { className: "w-20 h-20", children: profileData.profile_picture_url ? (_jsx(AvatarImage, { src: profileData.profile_picture_url, alt: profileData.full_name })) : (_jsx(AvatarFallback, { children: profileData.full_name?.charAt(0) })) }), _jsxs("div", { children: [_jsxs(CardTitle, { className: "text-2xl font-bold text-white flex items-center gap-2", children: [profileData.full_name, profileData.is_verified && (_jsx(CheckCircle2, { className: "w-5 h-5 text-zion-cyan" }))] }), _jsx(CardDescription, { className: "text-zion-cyan", children: profileData.professional_title })] })] }) }), _jsx(CardContent, { children: _jsxs("div", { className: "flex flex-wrap gap-4 text-sm", children: [profileData.location && (_jsxs("div", { className: "flex items-center text-zion-slate-light", children: [_jsx(MapPin, { className: "h-4 w-4 mr-1" }), _jsx("span", { children: profileData.location })] })), profileData.availability && (_jsxs("div", { className: "flex items-center text-zion-slate-light", children: [_jsx(Clock, { className: "h-4 w-4 mr-1" }), _jsx("span", { children: profileData.availability })] })), profileData.hourly_rate && (_jsxs("div", { className: "text-white font-bold", children: ["$", profileData.hourly_rate, _jsx("span", { className: "text-zion-slate-light font-normal", children: "/hr" })] }))] }) })] }), _jsxs(Card, { className: "mb-6 bg-zion-blue border-zion-blue-light", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-xl font-bold text-white", children: "About Me" }) }), _jsx(CardContent, { children: _jsx("p", { className: "text-zion-slate-light", children: profileData.bio || "No bio provided." }) })] }), _jsxs(Card, { className: "mb-6 bg-zion-blue border-zion-blue-light", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-xl font-bold text-white", children: "Skills" }) }), _jsx(CardContent, { children: _jsx("div", { className: "flex flex-wrap gap-2", children: profileData.skills?.map((skill, index) => (_jsx(Badge, { className: "bg-zion-blue-light text-zion-slate-light border-none", children: skill }, index))) || _jsx("p", { className: "text-zion-slate-light", children: "No skills provided." }) }) })] }), _jsxs(Card, { className: "mb-6 bg-zion-blue border-zion-blue-light", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-xl font-bold text-white", children: "Experience" }) }), _jsx(CardContent, { children: profileData.experience ? (profileData.experience.map((exp, index) => (_jsxs("div", { className: "mb-4", children: [_jsx("h4", { className: "font-bold text-white", children: exp.title }), _jsx("p", { className: "text-zion-cyan", children: exp.company }), _jsxs("p", { className: "text-sm text-zion-slate-light", children: [exp.start_date, " - ", exp.end_date || "Present"] }), _jsx("p", { className: "text-zion-slate-light", children: exp.description })] }, index)))) : (_jsx("p", { className: "text-zion-slate-light", children: "No experience provided." })) })] }), _jsxs(Card, { className: "mb-6 bg-zion-blue border-zion-blue-light", children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-xl font-bold text-white", children: "Portfolio" }) }), _jsx(CardContent, { children: profileData.portfolio_links ? (_jsx("div", { className: "flex flex-col gap-3", children: profileData.portfolio_links.map((link, index) => (_jsxs("a", { href: link.url, target: "_blank", rel: "noopener noreferrer", className: "text-zion-cyan hover:text-white flex items-center gap-2", children: [_jsx(LinkIcon, { className: "h-4 w-4" }), link.title || link.url] }, index))) })) : (_jsx("p", { className: "text-zion-slate-light", children: "No portfolio links provided." })) })] })] }), _jsxs("div", { className: "col-span-4 lg:col-span-1", children: [_jsx(HireNowCTA, { talentProfile: {
                                        id: profileData?.id || '',
                                        full_name: profileData?.full_name || '',
                                        professional_title: profileData?.professional_title || '',
                                        hourly_rate: profileData?.hourly_rate || 0
                                    } }), _jsxs("div", { className: "bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mt-6", children: [_jsx("h3", { className: "text-xl font-bold mb-4", children: "Contact" }), _jsxs("div", { className: "flex flex-col space-y-3", children: [profileData.email && (_jsxs("div", { className: "flex items-center gap-2 text-zion-slate-light", children: [_jsx(Mail, { className: "h-4 w-4" }), _jsx("a", { href: `mailto:${profileData.email}`, className: "hover:text-zion-cyan", children: profileData.email })] })), profileData.phone && (_jsxs("div", { className: "flex items-center gap-2 text-zion-slate-light", children: [_jsx(Phone, { className: "h-4 w-4" }), _jsx("span", { children: profileData.phone })] })), profileData.website && (_jsxs("div", { className: "flex items-center gap-2 text-zion-slate-light", children: [_jsx(Globe, { className: "h-4 w-4" }), _jsx("a", { href: profileData.website, target: "_blank", rel: "noopener noreferrer", className: "hover:text-zion-cyan", children: "Website" })] }))] })] }), _jsxs("div", { className: "bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 mt-6", children: [_jsx("h3", { className: "text-xl font-bold mb-4", children: "Social" }), _jsxs("div", { className: "flex flex-col space-y-3", children: [profileData.github_url && (_jsxs("a", { href: profileData.github_url, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan", children: [_jsx(Github, { className: "h-4 w-4" }), "GitHub"] })), profileData.twitter_url && (_jsxs("a", { href: profileData.twitter_url, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan", children: [_jsx(Twitter, { className: "h-4 w-4" }), "Twitter"] })), profileData.linkedin_url && (_jsxs("a", { href: profileData.linkedin_url, target: "_blank", rel: "noopener noreferrer", className: "flex items-center gap-2 text-zion-slate-light hover:text-zion-cyan", children: [_jsx(Linkedin, { className: "h-4 w-4" }), "LinkedIn"] }))] })] })] })] }) }), _jsx(Footer, {})] }));
}
