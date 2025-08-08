import { createHash } from 'crypto';

export type SupportedChain = 'ethereum' | 'polygon' | 'base' | 'starknet' | 'arbitrum';

export interface OriginNftInput {
  title?: string;
  description?: string;
  manifestoLink?: string; // expected ipfs:// or https://
  genesisDaoHash?: string;
  coverArtLink?: string; // expected ipfs:// or https://
  firstFundingVoteLink?: string; // expected ipfs:// or https://
  founderAddress?: string; // 0x...
  chain?: SupportedChain;
  manifestoQuote?: string;
}

export interface BuiltOriginMetadata {
  metadata: Record<string, unknown>;
  computedZionHash: string;
  imageUrl: string;
  animationUrl: string;
}

export function computeZionLaunchHash(payload: OriginNftInput): string {
  const hasher = createHash('sha256');
  const stable = JSON.stringify(
    {
      title: payload.title ?? 'Zion Genesis Artifact #0001',
      description: payload.description ?? 'This NFT marks the moment Zion OS was born.',
      manifestoLink: payload.manifestoLink ?? '',
      genesisDaoHash: payload.genesisDaoHash ?? '',
      coverArtLink: payload.coverArtLink ?? '',
      firstFundingVoteLink: payload.firstFundingVoteLink ?? '',
      founderAddress: (payload.founderAddress ?? '').toLowerCase(),
      chain: payload.chain ?? 'ethereum',
      manifestoQuote: payload.manifestoQuote ?? ''
    },
    Object.keys(payload).sort()
  );
  hasher.update(stable);
  return 'ZION$-' + hasher.digest('hex');
}

export function normalizeLink(link?: string): string | undefined {
  if (!link) return undefined;
  const trimmed = link.trim();
  if (trimmed.startsWith('ipfs://') || trimmed.startsWith('https://') || trimmed.startsWith('http://')) {
    return trimmed;
  }
  // Treat bare CID as ipfs://CID
  if (/^[A-Za-z0-9]{46,}$/.test(trimmed)) {
    return `ipfs://${trimmed}`;
  }
  return trimmed;
}

export function buildOriginMetadata(baseUrl: string, input: OriginNftInput): BuiltOriginMetadata {
  const title = input.title ?? 'Zion Genesis Artifact #0001';
  const description = input.description ?? 'This NFT marks the moment Zion OS was born.';
  const manifestoLink = normalizeLink(input.manifestoLink);
  const genesisDaoHash = input.genesisDaoHash?.trim();
  const coverArtLink = normalizeLink(input.coverArtLink);
  const firstFundingVoteLink = normalizeLink(input.firstFundingVoteLink);
  const founderAddress = input.founderAddress?.trim();
  const chain = input.chain ?? 'ethereum';
  const manifestoQuote = input.manifestoQuote ?? 'Sovereign AI belongs to its creators and communities.';

  const computedZionHash = computeZionLaunchHash(input);

  const encodedQuote = encodeURIComponent(manifestoQuote);
  const imageUrl = `${baseUrl}/api/nft/origin-image?quote=${encodedQuote}`;
  const animationUrl = `${baseUrl}/api/nft/origin-image?quote=${encodedQuote}&animated=1`;

  const attributes = [
    { trait_type: 'Edition', value: '#0001' },
    { trait_type: 'Chain', value: chain },
    { trait_type: 'Founder', value: founderAddress ?? '' },
    { trait_type: 'ZION$', value: computedZionHash },
    { trait_type: 'Utility', value: 'Vault Access' },
    { trait_type: 'Utility', value: 'Founder Profile Display' },
    { trait_type: 'Utility', value: 'Signature on DAO Proposals' },
    { trait_type: 'Theme', value: 'Sovereign AI Protocol' }
  ];

  const metadata: Record<string, unknown> = {
    name: title,
    description,
    image: imageUrl,
    animation_url: animationUrl,
    external_url: baseUrl,
    attributes,
    properties: {
      category: 'Genesis',
      supply: 1,
      manifesto: manifestoLink,
      genesis_dao_hash: genesisDaoHash,
      book_cover_art: coverArtLink,
      first_funding_vote: firstFundingVoteLink,
      founder_sig: founderAddress,
      chain,
      zion_hash: computedZionHash
    }
  };

  return { metadata, computedZionHash, imageUrl, animationUrl };
}

export interface SvgOptions {
  width?: number;
  height?: number;
  quote?: string;
  animated?: boolean;
}

export function generateOriginSvg(options: SvgOptions = {}): string {
  const width = options.width ?? 1200;
  const height = options.height ?? 1200;
  const quote = (options.quote ?? 'Sovereign AI Protocol').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  const animated = options.animated ?? true;

  const animationDefs = animated
    ? `
    <style>
      @keyframes glow { 0% { opacity: 0.7 } 50% { opacity: 1 } 100% { opacity: 0.7 } }
      @keyframes reveal { from { opacity: 0 } to { opacity: 1 } }
      .glow { animation: glow 4s ease-in-out infinite; }
      .reveal { animation: reveal 2.2s ease forwards; }
      .float { animation: float 8s ease-in-out infinite; }
      @keyframes float { 0% { transform: translateY(0px) } 50% { transform: translateY(-8px) } 100% { transform: translateY(0px) } }
    </style>
  `
    : '';

  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <radialGradient id="bg" cx="50%" cy="50%" r="60%">
      <stop offset="0%" stop-color="#0ff" stop-opacity="0.25"/>
      <stop offset="50%" stop-color="#6a00ff" stop-opacity="0.35"/>
      <stop offset="100%" stop-color="#000" stop-opacity="1"/>
    </radialGradient>
    <linearGradient id="tri" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#aaf2ff"/>
      <stop offset="50%" stop-color="#6a00ff"/>
      <stop offset="100%" stop-color="#00ffd1"/>
    </linearGradient>
    <filter id="blurGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="20" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>
  ${animationDefs}
  <rect width="100%" height="100%" fill="url(#bg)"/>

  <!-- Multiverse circles -->
  <g opacity="0.45">
    <circle cx="${width * 0.2}" cy="${height * 0.25}" r="140" fill="#00ffd1" filter="url(#blurGlow)" class="glow"/>
    <circle cx="${width * 0.8}" cy="${height * 0.3}" r="120" fill="#6a00ff" filter="url(#blurGlow)" class="glow"/>
    <circle cx="${width * 0.5}" cy="${height * 0.8}" r="180" fill="#aaf2ff" filter="url(#blurGlow)" class="glow"/>
  </g>

  <!-- Triangle -->
  <g transform="translate(${width / 2}, ${height / 2 - 40})" class="float">
    <polygon points="0,-260 -225,190 225,190" fill="url(#tri)" opacity="0.85" />
    <polygon points="0,-210 -180,150 180,150" fill="none" stroke="#00ffd1" stroke-width="2" opacity="0.75"/>
    <polygon points="0,-160 -135,110 135,110" fill="none" stroke="#aaf2ff" stroke-width="2" opacity="0.55"/>

    <!-- Eye -->
    <ellipse cx="0" cy="-60" rx="75" ry="42" fill="#000" stroke="#aaf2ff" stroke-width="2" opacity="0.85"/>
    <circle cx="0" cy="-60" r="14" fill="#00ffd1" class="glow"/>
  </g>

  <!-- Title -->
  <text x="50%" y="${height - 220}" text-anchor="middle" font-family="ui-sans-serif,system-ui,Segoe UI,Roboto,Ubuntu" font-size="42" fill="#eaffff" opacity="0.9">Zion Genesis Artifact #0001</text>

  <!-- Quote reveal -->
  <g class="reveal">
    <text x="50%" y="${height - 160}" text-anchor="middle" font-family="ui-serif,Georgia,serif" font-size="28" fill="#bfefff" opacity="0.95">“${quote}”</text>
    <text x="50%" y="${height - 110}" text-anchor="middle" font-family="ui-sans-serif,system-ui,Segoe UI,Roboto,Ubuntu" font-size="18" fill="#8de3ff" opacity="0.8">Sovereign AI Protocol</text>
  </g>
</svg>`;
}