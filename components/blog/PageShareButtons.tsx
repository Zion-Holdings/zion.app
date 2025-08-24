import { useMemo } from 'react';
import {
  LinkedinShareButton,
  LinkedinIcon,
  FacebookShareButton,
  FacebookIcon,
  TwitterShareButton,
  TwitterIcon,
} from 'react-share';

export default function PageShareButtons({
  title,
  url,
  description,
  onShare,
  utm = 'utm_source=social&utm_medium=share&utm_campaign=blog',
}: {
  title: string;
  url: string;
  description?: string;
  onShare?: (network: string) => void;
  utm?: string;
}) {
  const withUtm = useMemo(() => {
    if (!utm) return url;
    return url.includes('?') ? `${url}&${utm}` : `${url}?${utm}`;
  }, [url, utm]);

  const handle = (network: string) => () => {
    try { onShare && onShare(network); } catch {}
  };

  return (
    <div className="flex items-center gap-3">
      <LinkedinShareButton url={withUtm} title={title} summary={description} onClick={handle('linkedin')}>
        <LinkedinIcon size={36} round />
      </LinkedinShareButton>
      <TwitterShareButton url={withUtm} title={title} onClick={handle('x')}>
        <TwitterIcon size={36} round />
      </TwitterShareButton>
      <FacebookShareButton url={withUtm} quote={title} hashtag="#ZionAI" onClick={handle('facebook')}>
        <FacebookIcon size={36} round />
      </FacebookShareButton>
    </div>
  );
}