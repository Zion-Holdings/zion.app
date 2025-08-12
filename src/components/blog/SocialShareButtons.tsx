import React from 'react';
import { Button } from '@/components/ui/button';
import { Twitter, Facebook, Linkedin, Link as LinkIcon } from 'lucide-react';




import { toast } from '@/hooks/use-toast';

interface SocialShareButtonsProps {
  title: string;
}

export function SocialShareButtons({ title }: SocialShareButtonsProps) {
  const shareUrl =
    typeof window !== 'undefined' ? encodeURIComponent(window.location.href) : '';
  const shareText = encodeURIComponent(title);

  const shareToTwitter = () => {
    window.open(
      `https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareText}`,
      '_blank'
    );
  };

  const shareToFacebook = () => {
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`, '_blank');
  };

  const shareToLinkedIn = () => {
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${shareUrl}`, '_blank');
  };

  const copyLink = () => {
    if (typeof window === 'undefined') return;
    navigator.clipboard
      .writeText(window.location.href)
      .then(() => toast.success('Link copied to clipboard'))
      .catch(() => toast.error('Failed to copy link'));
  };

  const buttons = [
    { icon: <Twitter className="h-4 w-4" />, label: 'Twitter', onClick: shareToTwitter },
    { icon: <Facebook className="h-4 w-4" />, label: 'Facebook', onClick: shareToFacebook },
    { icon: <Linkedin className="h-4 w-4" />, label: 'LinkedIn', onClick: shareToLinkedIn },
    { icon: <LinkIcon className="h-4 w-4" />, label: 'Copy Link', onClick: copyLink },
  ];

  return (
    <div className="mt-12 flex flex-wrap gap-2">
      {buttons.map((btn) => (
        <Button key={btn.label} variant="outline" size="sm" onClick={btn.onClick} aria-label={btn.label}>
          {btn.icon}
          <span>{btn.label}</span>
        </Button>
      ))}
    </div>
  );
}
