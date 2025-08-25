import React from 'react';

export default function Services() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Our Services</h1>
        <p className="text-lg mb-6">
          Zion Tech Group offers comprehensive technology solutions including:
        </p>
        <ul className="list-disc list-inside space-y-2 text-lg">
          <li>AI & Machine Learning Solutions</li>
          <li>Cloud Infrastructure & DevOps</li>
          <li>Cybersecurity & Compliance</li>
          <li>Web & Mobile Development</li>
          <li>Data Analytics & Business Intelligence</li>
          <li>Blockchain & Web3 Development</li>
        </ul>
      </div>
    </div>
  );
}