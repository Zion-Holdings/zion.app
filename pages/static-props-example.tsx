import React from 'react';

interface StaticPropsExamplePageProps {
  data: any[];
}

const StaticPropsExamplePage: React.FC<StaticPropsExamplePageProps> = ({ data }) => {
  return (
    <main className="p-4">
      <h1>Static Props Example</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
};

export async function getStaticProps() {
  const API_URL = process.env.EXAMPLE_API_URL;

  if (!API_URL) {
    console.error("SSR fetch error: EXAMPLE_API_URL is not defined. Returning empty data for static-props-example page.");
    return { props: { data: [] } }; // Prevent build-time failure if URL is missing
  }

  try {
    const res = await fetch(API_URL);
    if (!res.ok) {
      console.error(`SSR fetch error: Failed to fetch ${API_URL}, status: ${res.status}`);
      return { notFound: true }; // Fail the page build if status is not ok
    }

    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      console.error(`SSR fetch error: Expected application/json but got ${contentType} from ${API_URL}`);
      // Try to read the response as text to log it, but still return notFound
      try {
        const textResponse = await res.text();
        console.error("SSR fetch error: Response body (text):", textResponse.substring(0, 200)); // Log first 200 chars
      } catch (textError) {
        console.error("SSR fetch error: Could not read response body as text.", textError);
      }
      return { notFound: true }; // Fail the page build
    }

    const data = await res.json(); // This might still fail if JSON is malformed
    return { props: { data } };
  } catch (error) {
    // Handle network errors or JSON parsing errors (if res.json() fails)
    console.error(`SSR fetch error: Error fetching or parsing data from ${API_URL}:`, error);
    return { notFound: true }; // Fail the page build
  }
}

export default StaticPropsExamplePage;
