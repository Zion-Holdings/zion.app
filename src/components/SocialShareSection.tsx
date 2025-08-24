import React from 'react';
import { Button } from '@/components/ui/button';

interface SocialPlatform {
  name: string;
  icon: string;
  color: string;
  url: string;
}

const socialPlatforms: SocialPlatform[] = [
  {
    name: 'Twitter',
    icon: '🐦',
    color: 'bg-blue-500 hover:bg-blue-600',
    url: 'https://twitter.com/intent/tweet?text=Check%20out%20Zion%20Tech%20Group%20-%20amazing%20AI%20services%20and%20IT%20solutions!&url=https://ziontechgroup.com',
  },
  {
    name: 'LinkedIn',
    icon: '💼',
    color: 'bg-blue-700 hover:bg-blue-800',
    url: 'https://www.linkedin.com/sharing/share-offsite/?url=https://ziontechgroup.com',
  },
  {
    name: 'Facebook',
    icon: '📘',
    color: 'bg-blue-600 hover:bg-blue-700',
    url: 'https://www.facebook.com/sharer/sharer.php?u=https://ziontechgroup.com',
  },
  {
    name: 'WhatsApp',
    icon: '💬',
    color: 'bg-green-500 hover:bg-green-600',
    url: 'https://wa.me/?text=Check%20out%20Zion%20Tech%20Group%20-%20amazing%20AI%20services%20and%20IT%20solutions!%20https://ziontechgroup.com',
  },
  {
    name: 'Email',
    icon: '📧',
    color: 'bg-gray-500 hover:bg-gray-600',
    url: 'mailto:?subject=Zion%20Tech%20Group%20-%20AI%20Services%20and%20IT%20Solutions&body=Check%20out%20this%20amazing%20company:%20https://ziontechgroup.com',
  },
];

export function SocialShareSection() {
  const handleShare = (platform: SocialPlatform) => {
    window.open(platform.url, '_blank', 'width=600,height=400');
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText('https://ziontechgroup.com');
      // You could add a toast notification here
      alert('Link copied to clipboard!');
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <section className="py-16 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Share the Innovation
          </h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Help others discover the power of AI services, IT solutions, and micro SAAS platforms. 
            Share Zion Tech Group with your network and spread the word about cutting-edge technology.
          </p>

          <div className="bg-background rounded-2xl p-8 shadow-lg border border-border">
            <h3 className="text-xl font-semibold text-foreground mb-6">
              Share on Social Media
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
              {socialPlatforms.map((platform) => (
                <Button
                  key={platform.name}
                  onClick={() => handleShare(platform)}
                  className={`${platform.color} text-white border-0 hover:scale-105 transition-transform`}
                >
                  <div className="text-center">
                    <div className="text-2xl mb-1">{platform.icon}</div>
                    <div className="text-xs">{platform.name}</div>
                  </div>
                </Button>
              ))}
            </div>

            <div className="border-t border-border pt-6">
              <h4 className="text-lg font-medium text-foreground mb-4">
                Or Copy the Link
              </h4>
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="text"
                  value="https://ziontechgroup.com"
                  readOnly
                  className="flex-1 px-4 py-3 rounded-md border border-border bg-muted text-foreground text-center"
                />
                <Button onClick={handleCopyLink} variant="outline">
                  Copy Link
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-3xl mb-2">🚀</div>
              <h3 className="text-lg font-semibold mb-2">Spread Innovation</h3>
              <p className="text-muted-foreground">Help others discover cutting-edge technology solutions</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">🤝</div>
              <h3 className="text-lg font-semibold mb-2">Build Community</h3>
              <p className="text-muted-foreground">Connect with like-minded tech enthusiasts and professionals</p>
            </div>
            <div className="text-center">
              <div className="text-3xl mb-2">💡</div>
              <h3 className="text-lg font-semibold mb-2">Share Knowledge</h3>
              <p className="text-muted-foreground">Contribute to the growth of the tech ecosystem</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}