// CRITICAL: Import immediate process polyfill FIRST to prevent process.env errors
import '../src/utils/immediate-process-polyfill';

export default function App({ Component, pageProps }: AppProps) {
	const renderedRef = useRef(false);
	return (
		<SEOContext.Provider value={{ renderedRef }}>
			<DefaultSEO />
			<Analytics />
			<a href="#main-content" className="skip-link">Skip to content</a>
			<Layout>
				<main id="main-content">
					<Component {...pageProps} />
				</main>
			</Layout>
		</SEOContext.Provider>
	);
}
