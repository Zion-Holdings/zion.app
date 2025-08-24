import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ServicesPage() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to comprehensive services
    navigate('/comprehensive-services');
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">Redirecting...</h1>
        <p className="text-gray-600">Taking you to our comprehensive services page.</p>
      </div>
    </div>
  );
}