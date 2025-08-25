import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Contact Us</h1>
        <p className="text-lg mb-6">
          Get in touch with Zion Tech Group for your technology needs.
        </p>
        <div className="space-y-4">
          <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
          <p><strong>Phone:</strong> +1 (302) 464-0950</p>
          <p><strong>Address:</strong> Delaware, United States</p>
        </div>
      </div>
    </div>
  );
}