import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Logo } from './Logo';
import { UserMenu } from './UserMenu';
import { LanguageSelector } from './LanguageSelector';
import { MainNavigation } from '@/layout/MainNavigation';
import { useAuth } from '@/hooks/useAuth';
import { useWhitelabel } from '@/context/WhitelabelContext';
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { generateSearchSuggestions } from "@/data/marketplaceData";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
export function Header({ hideLogin = false, customLogo, customTheme }) {
    const { user } = useAuth();
    const { isWhitelabel, primaryColor } = useWhitelabel();
    const navigate = useNavigate();
    const [query, setQuery] = useState("");
    const searchSuggestions = generateSearchSuggestions();
    // If we have a white-label tenant and no specific customTheme is provided,
    // use the tenant's primary color
    const effectiveTheme = customTheme || (isWhitelabel ? {
        primaryColor,
        backgroundColor: '#000000', // Default dark background
        textColor: '#ffffff', // Default light text
    } : undefined);
    const headerStyle = effectiveTheme ? {
        backgroundColor: effectiveTheme.backgroundColor,
        color: effectiveTheme.textColor,
        borderColor: `${effectiveTheme.primaryColor}20`
    } : {};
    const handleSubmit = (e) => {
        e.preventDefault();
        if (query.trim()) {
            navigate(`/search?q=${encodeURIComponent(query)}`);
            setQuery("");
        }
    };
    return (_jsxs("header", { className: "sticky top-0 z-50 w-full border-b border-zion-purple/20 bg-zion-blue-dark/90 backdrop-blur-md shadow-lg shadow-zion-cyan/10", style: headerStyle, children: [_jsxs("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: [_jsx("div", { className: "absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-50" }), _jsx("div", { className: "absolute top-0 left-1/4 w-1 h-full bg-gradient-to-b from-transparent via-zion-purple to-transparent opacity-30" }), _jsx("div", { className: "absolute top-0 right-1/4 w-1 h-full bg-gradient-to-b from-transparent via-zion-cyan to-transparent opacity-30" })] }), _jsxs("div", { className: "relative container flex h-16 items-center px-4 sm:px-6", children: [_jsx(Logo, { customLogo: customLogo, customColor: effectiveTheme === null || effectiveTheme === void 0 ? void 0 : effectiveTheme.primaryColor }), _jsx("div", { className: "ml-6 flex-1", children: _jsx(MainNavigation, {}) }), _jsx("form", { onSubmit: handleSubmit, className: "hidden md:block w-64 mx-4", children: _jsx(EnhancedSearchInput, { value: query, onChange: setQuery, onSelectSuggestion: (text) => {
                                navigate(`/search?q=${encodeURIComponent(text)}`);
                                setQuery("");
                            }, searchSuggestions: searchSuggestions }) }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(LanguageSelector, {}), !hideLogin && _jsx(UserMenu, {})] })] })] }));
}
