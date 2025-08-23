import React, { useEffect } from 'react';
import Head from 'next/head';

export default function FacebookRedirect() {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.location.replace('https://www.facebook.com/profile.php?id=ziontechgroup');
		}
	}, []);

	return (
		<>
			<Head>
				<title>Facebook | Zion Tech Group</title>
				<meta name="robots" content="noindex, nofollow" />
			</Head>
			<div className="min-h-screen bg-black text-white flex items-center justify-center p-8">
				<p>Redirecting to Facebook...</p>
			</div>
		</>
	);
}