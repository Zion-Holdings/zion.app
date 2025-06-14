import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useRouter } from 'next/router';
import Home from '@/pages/Home';
import * as Sentry from '@sentry/nextjs';
// import { withSentryGetServerSideProps } from '@sentry/nextjs'; // Removed
import { ErrorBanner } from '@/components/talent/ErrorBanner';
// Check if Sentry is likely initialized (basic check, mirrors sentry.server.config.js)
const sentryDsnAvailable = process.env.SENTRY_DSN || process.env.NEXT_PUBLIC_SENTRY_DSN;
const isSentryActive = sentryDsnAvailable && !sentryDsnAvailable.startsWith('YOUR_');
export async function fetchHomeData() {
    // Placeholder async function. Real implementation would fetch data.
    return Promise.resolve(null);
}
export const getServerSideProps = async (ctx) => {
    // Sentry.addBreadcrumb can be kept if it provides useful context not automatically captured
    // However, withSentryGetServerSideProps will automatically capture route information.
    // For this example, let's assume automatic breadcrumbs are sufficient unless specific ones are needed.
    // if (isSentryActive) { // No longer need isSentryActive check here for Sentry calls
    //   Sentry.addBreadcrumb({ category: 'route', message: '/', level: 'info' });
    // }
    try {
        await fetchHomeData();
        return { props: {} };
    }
    catch (error) {
        Sentry.captureException(error);
        // console.error("Error in getServerSideProps for /:", error); // Sentry will capture this
        // Sentry.captureException(error); // This is now handled by withSentryGetServerSideProps
        // It's good practice to re-throw the error or handle it as per application logic
        // For instance, setting a status code and returning error props.
        // withSentryGetServerSideProps will ensure the error is captured by Sentry.
        ctx.res.statusCode = 500; // Still useful for Next.js to render an error page or behave accordingly
        // The error will be captured by Sentry automatically by the HOC.
        // You might still want to return error props for your UI to handle.
        return { props: { hasError: true, errorMessage: error.message || 'An unexpected error occurred.' } };
    }
};
const ErrorTestButton = () => {
    const throwTestError = () => {
        throw new Error("This is a test error from the homepage button!");
    };
    return (_jsx("button", { onClick: throwTestError, style: {
            position: 'fixed',
            bottom: '20px',
            right: '20px',
            padding: '10px 20px',
            backgroundColor: 'red',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            zIndex: 1000
        }, children: "Throw Test Error" }));
};
const IndexPage = (props) => {
    const router = useRouter();
    const showDebug = router.query.debug === 'true';
    const showButton = process.env.NODE_ENV === 'development' || showDebug;
    return (_jsxs(_Fragment, { children: [props.hasError && (_jsx("div", { className: "container mx-auto px-4 py-4", children: _jsx(ErrorBanner, { msg: props.errorMessage || "Failed to load home page." }) })), _jsx(Home, {}), showButton && _jsx(ErrorTestButton, {})] }));
};
export default IndexPage;
