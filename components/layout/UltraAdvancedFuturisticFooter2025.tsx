import React from 'react';
import Link from 'next/link';

const UltraAdvancedFuturisticFooter2025: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center">
          <p>© 2025 Zion Tech Group. All rights reserved.</p>
          <div className="mt-4">
            <Link href="/about" className="text-gray-400 hover:text-white mx-2">
              About
            </Link>
            <Link href="/contact" className="text-gray-400 hover:text-white mx-2">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default UltraAdvancedFuturisticFooter2025;