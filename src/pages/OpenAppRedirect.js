import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Button } from "@/components/ui/Button";
import { Link } from "react-router-dom";
// This component handles deep linking to the mobile app
const OpenAppRedirect = () => {
    const navigate = useNavigate();
    const [status, setStatus] = useState('redirecting');
    useEffect(() => {
        const attemptAppOpen = async () => {
            const isiOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
            const isAndroid = /Android/.test(navigator.userAgent);
            // App scheme URLs (these would be your actual app's URL schemes)
            const appScheme = "zion://";
            const androidAppUrl = "market://details?id=app.zion.marketplace";
            const iosAppUrl = "https://apps.apple.com/app/zion-ai-marketplace/id0000000000";
            const fallbackUrl = "/mobile-launch"; // Fallback to mobile launch page
            let timeout;
            // Try to open the app
            if (isAndroid || isiOS) {
                // Set a timeout to redirect to app store if the app doesn't open
                timeout = window.setTimeout(() => {
                    setStatus('timeout');
                    if (isAndroid) {
                        window.location.href = androidAppUrl;
                    }
                    else if (isiOS) {
                        window.location.href = iosAppUrl;
                    }
                }, 2500); // Wait 2.5 seconds before redirecting to store
                // Try to open the app
                window.location.href = appScheme;
            }
            else {
                // Not on mobile, redirect to mobile launch page
                setStatus('failed');
                setTimeout(() => {
                    navigate(fallbackUrl);
                }, 1500);
            }
            // Clear timeout if page visibility changes (meaning app opened successfully)
            document.addEventListener("visibilitychange", () => {
                if (document.hidden && timeout) {
                    clearTimeout(timeout);
                }
            });
        };
        attemptAppOpen();
    }, [navigate]);
    return (_jsxs("div", { className: "min-h-screen flex items-center justify-center bg-zion-blue", children: [_jsx(SEO, { title: "Opening Zion App", description: "Redirecting to the Zion AI Marketplace mobile app" }), _jsxs("div", { className: "text-center p-8", children: [_jsx("div", { className: "w-16 h-16 border-4 border-zion-cyan border-t-transparent rounded-full animate-spin mx-auto mb-6" }), status === 'redirecting' && (_jsxs(_Fragment, { children: [_jsx("h1", { className: "text-2xl font-bold mb-2", children: "Opening Zion App..." }), _jsx("p", { className: "text-gray-300", children: "If nothing happens, download the app first." })] })), status === 'timeout' && (_jsxs(_Fragment, { children: [_jsx("h1", { className: "text-2xl font-bold mb-2", children: "App Not Installed" }), _jsx("p", { className: "text-gray-300 mb-6", children: "We're redirecting you to download the Zion app." })] })), status === 'failed' && (_jsxs(_Fragment, { children: [_jsx("h1", { className: "text-2xl font-bold mb-2", children: "Opening App Failed" }), _jsx("p", { className: "text-gray-300 mb-6", children: "We're taking you to our mobile app page where you can download the app." }), _jsx(Link, { to: "/mobile-launch", children: _jsx(Button, { className: "bg-zion-cyan hover:bg-zion-cyan/80", children: "Go to Mobile App Page" }) })] }))] })] }));
};
export default OpenAppRedirect;
