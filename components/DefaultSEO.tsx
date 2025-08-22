import React, { useRef } from 'react';
import SEO from './SEO';
import { SEOContext } from './SEOContext';

export default function DefaultSEO() {
	const localRenderedRef = useRef(false);
	return (
		<SEOContext.Consumer>
			{(ctx) => {
				if (ctx?.renderedRef?.current) return null;
				if (!localRenderedRef.current) localRenderedRef.current = true;
				return <SEO />;
			}}
		</SEOContext.Consumer>
	);
}