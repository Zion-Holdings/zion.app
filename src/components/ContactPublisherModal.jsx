import React, { useState, useEffect, useRef } from 'react';
import { sendMessage } from '../services/messages';
import { toast } from '@/hooks/use-toast';


export function ContactPublisherModal({ isOpen, onClose, productId, sellerId }) {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false); // New loading state
  const firstInputRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e) {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    }

    firstInputRef.current?.focus();
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const handleSubmit = async (e) => {
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
      console.error('Failed to send message:', err);
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
              rows="4"
              className="w-full p-2 mb-4 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50"
            disabled={isLoading}
          >
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
          <button
            type="button"
            onClick={onClose}
            className="ml-2 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:opacity-50"
            disabled={isLoading}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
