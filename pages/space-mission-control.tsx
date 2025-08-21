import { useEffect } from 'react';

export default function RedirectPage() {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.location.replace('/services/space-mission-control');
		}
	}, []);
	return null;
}
