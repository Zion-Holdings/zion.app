import { useEffect, useMemo, useState } from 'react';
import {
  LinkedinShareButton,
  TwitterShareButton,
  FacebookShareButton,
  LinkedinIcon,
  TwitterIcon,
  FacebookIcon,
} from 'react-share';

interface ShareBarProps {
  title?: string;
  summary?: string;
  imageUrl?: string;
}

function withUtm(url: string, source: string): string {
  try {
    const u = new URL(url, typeof window !== 'undefined' ? window.location.origin : 'https://zion.app');
    u.searchParams.set('utm_source', source);
    u.searchParams.set('utm_medium', 'social');
    u.searchParams.set('utm_campaign', 'listing_share');
    return u.toString();
  } catch {
    return url;
  }
}

export default function ShareBar({ title, summary, imageUrl }: ShareBarProps) {
  const [currentUrl, setCurrentUrl] = useState<string>('https://zion.app');
  const [pageTitle, setPageTitle] = useState<string>('');
  const [pageDesc, setPageDesc] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setCurrentUrl(window.location.href);
      setPageTitle(document.title || '');
      const descMeta = document.querySelector('meta[name="description"]') as HTMLMetaElement | null;
      setPageDesc(descMeta?.content || '');
    }
  }, []);

  const computedTitle = title || pageTitle.replace(/\s*-\s*Zion Tech Solutions\s*$/i, '').trim() || 'Zion';
  const computedDesc = (summary || pageDesc || '').slice(0, 100);
  const computedImage = imageUrl || '/og/default.svg';

  const shareUrlLinkedIn = useMemo(() => withUtm(currentUrl, 'linkedin'), [currentUrl]);
  const shareUrlTwitter = useMemo(() => withUtm(currentUrl, 'x'), [currentUrl]);
  const shareUrlFacebook = useMemo(() => withUtm(currentUrl, 'facebook'), [currentUrl]);

  const logShare = async (platform: 'linkedin' | 'x' | 'facebook') => {
    try {
      await fetch('/api/analytics/share', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ platform, url: window.location.pathname, title: computedTitle })
      });
    } catch { /* noop */ }
  };

  return (
    <div className="mt-8 flex items-center gap-3">
      <span className="text-sm text-gray-600">Share:</span>
      <LinkedinShareButton url={shareUrlLinkedIn} title={computedTitle} summary={computedDesc} source="Zion" onClick={() => logShare('linkedin')}>
        <LinkedinIcon size={32} round />
      </LinkedinShareButton>
      <TwitterShareButton url={shareUrlTwitter} title={`${computedTitle} — ${computedDesc}`} via="zion" onClick={() => logShare('x')}>
        <TwitterIcon size={32} round />
      </TwitterShareButton>
      <FacebookShareButton url={shareUrlFacebook} hashtag="#Zion" onClick={() => logShare('facebook')}>
        <FacebookIcon size={32} round />
      </FacebookShareButton>
      <link rel="preload" as="image" href={computedImage} />
    </div>
  );
}