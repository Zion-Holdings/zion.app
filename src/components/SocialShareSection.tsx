import React from 'react';
import { Share2, Twitter, Facebook, Linkedin, Link as LinkIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const SocialShareSection: React.FC = () => {
  const shareUrl = window.location.href;
  const shareTitle = 'Zion Tech Group - AI-Powered Business Solutions';

  const shareToTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
  };

  const shareToFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
  };

  const shareToLinkedIn = () => {
    const url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
    window.open(url, '_blank');
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareUrl);
      // You could add a toast notification here
      console.log('Link copied to clipboard');
    } catch (err) {
      console.error('Failed to copy link:', err);
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center px-4">
        <div className="mb-8">
          <Share2 className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Share Zion Tech Group
          </h3>
          <p className="text-gray-600">
            Help others discover our innovative AI-powered business solutions
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <Button
            onClick={shareToTwitter}
            className="bg-blue-400 hover:bg-blue-500 text-white px-6 py-3 rounded-lg flex items-center space-x-2"
          >
            <Twitter className="w-5 h-5" />
            <span>Share on Twitter</span>
          </Button>
          
          <Button
            onClick={shareToFacebook}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg flex items-center space-x-2"
          >
            <Facebook className="w-5 h-5" />
            <span>Share on Facebook</span>
          </Button>
          
          <Button
            onClick={shareToLinkedIn}
            className="bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-lg flex items-center space-x-2"
          >
            <Linkedin className="w-5 h-5" />
            <span>Share on LinkedIn</span>
          </Button>
        </div>
        
        <div className="flex items-center justify-center space-x-2">
          <input
            type="text"
            value={shareUrl}
            readOnly
            className="px-4 py-2 border border-gray-300 rounded-l-lg bg-white text-gray-700 flex-1 max-w-md"
          />
          <Button
            onClick={copyToClipboard}
            className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-r-lg flex items-center space-x-2"
          >
            <LinkIcon className="w-4 h-4" />
            <span>Copy</span>
          </Button>
        </div>
        
        <p className="text-sm text-gray-500 mt-4">
          Share this page with your network and help spread the word about Zion Tech Group
        </p>
      </div>
    </section>
  );
};