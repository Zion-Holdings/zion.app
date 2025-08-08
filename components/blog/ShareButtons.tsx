import { useMemo } from 'react';

export default function ShareButtons({ title, url, description, onShare }: { title: string; url: string; description?: string; onShare?: () => void }) {
  const links = useMemo(() => {
    const encodedUrl = encodeURIComponent(url);
    const encodedTitle = encodeURIComponent(title);
    const encodedDesc = encodeURIComponent(description || title);
    return {
      linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}&title=${encodedTitle}&summary=${encodedDesc}`,
      x: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
      email: `mailto:?subject=${encodedTitle}&body=${encodedUrl}`,
    };
  }, [title, url, description]);

  const handleClick = () => {
    try { onShare && onShare(); } catch {}
  };

  return (
    <div className="flex items-center gap-3">
      <a onClick={handleClick} href={links.linkedin} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded bg-blue-600 text-white">Share on LinkedIn</a>
      <a onClick={handleClick} href={links.x} target="_blank" rel="noopener noreferrer" className="px-3 py-2 rounded bg-black text-white">Share on X</a>
      <a onClick={handleClick} href={links.email} className="px-3 py-2 rounded bg-gray-200 dark:bg-zinc-800">Share via Email</a>
    </div>
  );
}