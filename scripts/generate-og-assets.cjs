const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

function ensureDir(dirPath) {
	if (!fs.existsSync(dirPath)) {
		fs.mkdirSync(dirPath, { recursive: true });
	}
}

function buildOgSvg() {
	const width = 1200;
	const height = 630;
	const title = 'Zion Tech Group';
	const subtitle = 'AI, Quantum &amp; Micro SAAS Solutions';
	return `
		<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stop-color="#06b6d4"/>
					<stop offset="50%" stop-color="#8b5cf6"/>
					<stop offset="100%" stop-color="#ec4899"/>
				</linearGradient>
			</defs>
			<rect width="100%" height="100%" fill="url(#g)"/>
			<rect x="40" y="40" width="${width-80}" height="${height-80}" rx="24" fill="rgba(0,0,0,0.25)" />
			<text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="88" font-weight="800" fill="#ffffff">${title}</text>
			<text x="50%" y="62%" dominant-baseline="middle" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="36" font-weight="600" fill="#e5e7eb">${subtitle}</text>
		</svg>
	`;
}

function buildLogoSvg() {
	const size = 512;
	const initials = 'ZTG';
	return `
		<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
			<defs>
				<linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
					<stop offset="0%" stop-color="#06b6d4"/>
					<stop offset="100%" stop-color="#8b5cf6"/>
				</linearGradient>
			</defs>
			<rect width="100%" height="100%" rx="128" fill="url(#lg)"/>
			<text x="50%" y="52%" dominant-baseline="middle" text-anchor="middle" font-family="Inter, Arial, sans-serif" font-size="200" font-weight="900" fill="#ffffff">${initials}</text>
		</svg>
	`;
}

async function generate() {
	const outDir = path.join(process.cwd(), 'public');
	ensureDir(outDir);

	const ogSvg = buildOgSvg();
	const logoSvg = buildLogoSvg();

	await sharp(Buffer.from(ogSvg)).png().toFile(path.join(outDir, 'og-image.png'));
	await sharp(Buffer.from(logoSvg)).png().toFile(path.join(outDir, 'logo.png'));

	console.log('[assets] Generated public/og-image.png and public/logo.png');
}

if (require.main === module) {
	generate().catch((err) => {
		console.error('[assets] generation failed:', err);
		process.exit(1);
	});
}