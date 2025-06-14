import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import Head from 'next/head';
import { getSupportEmail } from '../src/config/env';
// Placeholder for Zion Tech Logo - replace with actual logo component or URL
const ZionTechLogo = () => (
// In Next.js, files inside the `public` folder are served from the root path
// so the correct URL does not include the `public` prefix.
_jsx("img", { src: "/logos/zion-logo.png", alt: "Zion Tech Logo", style: { height: '50px', marginBottom: '20px' } }));
// Placeholder for status page URL and support email - replace with actual values
const STATUS_PAGE_URL = 'https://status.ziontech.com'; // Example URL
const CustomErrorPage = ({ statusCode }) => {
    const supportEmail = getSupportEmail();
    const handleReload = () => {
        if (typeof window !== 'undefined') {
            window.location.reload();
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(Head, { children: _jsx("title", { children: "Error - Zion Tech" }) }), _jsxs("div", { style: {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    minHeight: '100vh',
                    textAlign: 'center',
                    fontFamily: 'Arial, sans-serif',
                    padding: '20px',
                    backgroundColor: '#f0f2f5' // A light background color
                }, children: [_jsx(ZionTechLogo, {}), _jsx("h1", { style: { fontSize: '2em', color: '#333', marginBottom: '0.5em' }, children: statusCode
                            ? `An error ${statusCode} occurred on server`
                            : 'Oops! Something went wrong.' }), _jsx("p", { style: { fontSize: '1.2em', color: '#555', marginBottom: '1.5em' }, children: "We apologize for the inconvenience. Our team has been notified." }), _jsx("button", { onClick: handleReload, style: {
                            padding: '10px 20px',
                            fontSize: '1em',
                            color: 'white',
                            backgroundColor: '#007bff', // A primary button color
                            border: 'none',
                            borderRadius: '5px',
                            cursor: 'pointer',
                            marginBottom: '1em',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                        }, children: "Reload Page" }), _jsxs("div", { style: { marginTop: '20px', fontSize: '0.9em', color: '#666' }, children: [_jsxs("p", { children: ["If the problem persists, please check our ", _jsx("a", { href: STATUS_PAGE_URL, target: "_blank", rel: "noopener noreferrer", style: { color: '#007bff', textDecoration: 'underline' }, children: "status page" }), "."] }), _jsxs("p", { children: ["You can also contact our support team at ", _jsx("a", { href: `mailto:${supportEmail}`, style: { color: '#007bff', textDecoration: 'underline' }, children: supportEmail }), "."] })] })] })] }));
};
CustomErrorPage.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
    return { statusCode };
};
export default CustomErrorPage;
