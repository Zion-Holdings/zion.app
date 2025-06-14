import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
const StaticPropsExamplePage = ({ data }) => {
    return (_jsxs("main", { className: "p-4", children: [_jsx("h1", { children: "Static Props Example" }), _jsx("pre", { children: JSON.stringify(data, null, 2) })] }));
};
export async function getStaticProps() {
    const API_URL = process.env.EXAMPLE_API_URL;
    if (!API_URL) {
        console.error("SSR fetch error: EXAMPLE_API_URL is not defined. Returning empty data for static-props-example page.");
        return { props: { data: [] } }; // Prevent build-time failure if URL is missing
    }
    try {
        const res = await fetch(API_URL); // No longer using '!' as we've checked API_URL
        if (!res.ok) {
            // Handle HTTP errors like 404 or 500
            console.error(`SSR fetch error: Failed to fetch ${API_URL}, status: ${res.status}`);
            return { props: { data: [] } };
        }
        const data = await res.json();
        return { props: { data } };
    }
    catch (error) {
        // Handle network errors or JSON parsing errors
        console.error(`SSR fetch error: Error fetching or parsing data from ${API_URL}:`, error);
        return { props: { data: [] } }; // Prevent build-time failure
    }
}
export default StaticPropsExamplePage;
