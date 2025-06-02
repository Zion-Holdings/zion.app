import React, { useState, useEffect, useRef } from 'react';
import { sendMessage } from '../../services/messages';
import { toast } from '@/hooks/use-toast';

// Basic styling (assuming Tailwind or similar utility classes might be available)
const modalOverlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 1000, // Ensure it's above other content
};

const modalContentStyle = {
  backgroundColor: 'white',
  padding: '20px',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  minWidth: '300px', // Or a responsive width
};


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
      style={modalOverlayStyle}
      role="dialog"
      aria-modal="true"
      aria-labelledby="contact-publisher-title"
      onClick={onClose}
    >
      <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
        <h2 id="contact-publisher-title">Contact Publisher</h2>
        <form onSubmit={handleSubmit}>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          <div>
            <label htmlFor="subject">Subject:</label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              ref={firstInputRef}
              style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              style={{ width: '100%', padding: '8px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
          <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }} disabled={isLoading}>
            {isLoading ? 'Sending...' : 'Send Message'}
          </button>
          <button
            type="button"
            onClick={onClose}
            style={{
              marginLeft: '10px',
              padding: '10px 15px',
              backgroundColor: '#555',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
            disabled={isLoading}
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
}
