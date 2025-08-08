import React from 'react';
import { siteInfo } from '../../data/site-info';

const EnhancedFooter: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-gray-300">
              Leading technology solutions for modern businesses.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="text-gray-300 space-y-2">
              <li>Web Development</li>
              <li>Mobile Apps</li>
              <li>Cloud Solutions</li>
              <li>AI Integration</li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="text-gray-300 space-y-2">
              <li>
                Email: <a className="underline hover:text-white" href={`mailto:${siteInfo.contact.email}`}>{siteInfo.contact.email}</a>
              </li>
              <li>
                Phone: <a className="underline hover:text-white" href={`tel:${siteInfo.contact.phone.replace(/\s+/g, '')}`}>{siteInfo.contact.phone}</a>
              </li>
              <li>
                Address: {siteInfo.contact.address}
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">Twitter</a>
              <a href="#" className="text-gray-300 hover:text-white">LinkedIn</a>
              <a href="#" className="text-gray-300 hover:text-white">GitHub</a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
          <p>&copy; 2024 Zion Tech Solutions. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default EnhancedFooter;
