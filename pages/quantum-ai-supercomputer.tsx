import { useEffect } from 'react';

export default function RedirectPage() {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.location.replace('/services/quantum-ai-supercomputer');
		}
	}, []);
	return null;
}
