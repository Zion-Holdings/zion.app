import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Suspense } from "react";
import CreatePostButton from "@/components/community/CreatePostButton";
import { Input } from "@/components/ui/input";
import { SEO } from "@/components/SEO";
import PostCard from "@/components/community/PostCard";
import { usePostsByCategory } from "@/hooks/usePostsByCategory";
import NotFound from "./NotFound";
import { useAuth } from "@/hooks/useAuth";
import { MessageSquare, Briefcase, Code, FileText, Megaphone, Search } from "@/components/icons";
// Mock category data
const categoriesInfo = {
    "getting-hired": {
        id: "getting-hired",
        name: "Getting Hired",
        description: "Tips, strategies, and questions about getting hired on the platform.",
        adminOnly: false,
        icon: "Briefcase"
    },
    "project-help": {
        id: "project-help",
        name: "Project Help",
        description: "Get help with your ongoing projects and collaboration.",
        adminOnly: false,
        icon: "MessageSquare"
    },
    "ai-tools": {
        id: "ai-tools",
        name: "AI Tools Discussion",
        description: "Discuss AI tools, frameworks, and best practices.",
        adminOnly: false,
        icon: "Code"
    },
    "feedback": {
        id: "feedback",
        name: "Feedback & Feature Requests",
        description: "Share your feedback and suggest new features.",
        adminOnly: false,
        icon: "FileText"
    },
    "announcements": {
        id: "announcements",
        name: "Announcements",
        description: "Official announcements from the Zion team.",
        adminOnly: true,
        icon: "Megaphone"
    }
};
const iconMap = {
    "Briefcase": Briefcase,
    "MessageSquare": MessageSquare,
    "Code": Code,
    "FileText": FileText,
    "Megaphone": Megaphone
};
function CategoryContent({ categoryId, category, IconComponent, user, }) {
    const [searchQuery, setSearchQuery] = useState("");
    const { data: posts = [], isPending: loading, error, } = usePostsByCategory(categoryId);
    const errorMessage = error instanceof Error ? error.message : null;
    const filteredPosts = searchQuery
        ? posts.filter((post) => post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.content.toLowerCase().includes(searchQuery.toLowerCase()) ||
            post.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase())))
        : posts;
    const canCreatePost = categoryId !== "announcements" || ((user === null || user === void 0 ? void 0 : user.userType) === "admin" || (user === null || user === void 0 ? void 0 : user.role) === "admin");
    return (_jsxs("div", { className: "container py-8", children: [_jsxs("div", { className: "flex items-center gap-3 mb-6", children: [_jsx(Link, { to: "/community", className: "text-sm text-muted-foreground hover:text-foreground", children: "Forum" }), _jsx("span", { className: "text-muted-foreground", children: "/" }), _jsx("span", { className: "font-medium", children: category.name })] }), _jsxs("div", { className: "flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "p-3 bg-zion-purple/10 rounded-full", children: _jsx(IconComponent, { className: "h-8 w-8 text-zion-purple" }) }), _jsxs("div", { children: [_jsx("h1", { className: "text-3xl font-bold", children: category.name }), _jsx("p", { className: "text-muted-foreground mt-1", children: category.description })] })] }), canCreatePost && _jsx(CreatePostButton, { categoryId: categoryId })] }), _jsx("div", { className: "mb-6", children: _jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-3 h-4 w-4 text-muted-foreground" }), _jsx(Input, { placeholder: "Search posts in this category...", className: "pl-10", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value) })] }) }), loading ? (_jsx("div", { className: "text-center py-16", children: "Loading..." })) : errorMessage ? (_jsx("div", { className: "text-center py-16 text-destructive", children: errorMessage })) : posts.length > 0 ? (_jsx("div", { className: "space-y-4", children: filteredPosts.map((post) => (_jsx(PostCard, { post: post }, post.id))) })) : (_jsxs("div", { className: "text-center py-16", children: [_jsx("h2", { className: "text-xl font-medium mb-2", children: "No posts yet" }), _jsx("p", { className: "text-muted-foreground mb-6", children: "Be the first to start a discussion in this category!" }), canCreatePost && _jsx(CreatePostButton, { categoryId: categoryId })] }))] }));
}
export default function ForumCategoryPage() {
    const { categoryId } = useParams();
    const { user } = useAuth();
    if (!categoryId || !categoriesInfo[categoryId]) {
        return _jsx(NotFound, {});
    }
    const category = categoriesInfo[categoryId];
    const IconComponent = iconMap[category.icon] || MessageSquare;
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: `${category.name} | Community Forum | Zion AI Marketplace`, description: category.description, keywords: `community, forum, ${category.id}, discussion, AI marketplace, questions, answers`, canonical: `https://ziontechgroup.com/community/category/${categoryId}` }), _jsx(Suspense, { fallback: _jsx("div", { className: "text-center py-16", children: "Loading..." }), children: _jsx(CategoryContent, { categoryId: categoryId, category: category, IconComponent: IconComponent, user: user }) })] }));
}
