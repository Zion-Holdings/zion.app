import React, { useState, useEffect, useRef } from 'react';
import { sendMessage } from '../services/messages';
import { toast } from '@/hooks/use-toast';
import {logErrorToProduction} from '@/utils/productionLogger';



interface ContactPublisherModalProps {
  isOpen: boolean;
  onClose: () => void;
  productId: string;
  sellerId: string;
}

export function ContactPublisherModal({ isOpen, onClose, productId, sellerId }: ContactPublisherModalProps) {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // New loading state
  const firstInputRef = useRef<HTMLInputElement | null>(null);
  const lastFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      // If the modal is not open (or has just closed), focus the last focused element.
      if (lastFocusedRef.current) {
        lastFocusedRef.current.focus();
      }
      // No setup was performed if the modal wasn't open to begin with, or it just closed.
      // So, no cleanup function is necessary here.
      return;
    }

    // Modal is open, set up focus and event listener.
    lastFocusedRef.current = document.activeElement as HTMLElement;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    }

    firstInputRef.current?.focus();
    document.addEventListener('keydown', handleKeyDown);

    // Return the cleanup function that will be called when isOpen changes to false or the component unmounts.
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      // The logic to focus lastFocusedRef.current is handled when isOpen becomes false (top of this effect).
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!subject.trim() || !message.trim()) {
      setError('Subject and message are required.');
      return;
    }
    setError('');
    setIsLoading(true); // Set loading true

    try {
      await sendMessage({ productId, sellerId, subject, message });
      toast.success('Message sent!');
      onClose(); // Close modal
      setSubject(''); // Clear subject
      setMessage(''); // Clear message
    } catch (err) {
      logErrorToProduction('Failed to send message:', { data: err });
      toast.error('Failed to send message. Please try again.');
      // Optionally, set a specific error message state if needed
      // setError('Failed to send message. Please try again.');
    } finally {
      setIsLoading(false); // Set loading false
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-publisher-title"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-zion-blue-dark p-6 rounded-lg shadow-lg min-w-[300px]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 id="contact-publisher-title">Contact Publisher</h2>
        <form onSubmit={handleSubmit}>
          {error && <p className="text-red-500">{error}</p>}
          <div className="mb-4">
            <label htmlFor="subject" className="block mb-1 font-medium">
              Subject:
            </label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              ref={firstInputRef}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <div>
            <label htmlFor="message" className="block mb-1 font-medium">
              Message:
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={4}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            disabled={isLoading}
            aria-label="Send message"
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:opacity-50"
            disabled={isLoading}
            aria-label="Cancel"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
