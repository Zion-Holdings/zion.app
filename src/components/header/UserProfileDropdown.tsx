import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react'; // Import User icon from lucide-react
import { useAuth } from '@/hooks/useAuth'; // Import actual useAuth hook

const UserProfileDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout, user } = useAuth(); // Destructure user as well, if needed for display or checks
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    logout();
    setIsOpen(false); // Close dropdown after logout
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div style={{ position: 'relative' }} ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'white' }} // Added color for visibility on dark header
        aria-label="User profile"
      >
        <User size={24} /> {/* Use Lucide icon */}
      </button>
      {isOpen && (
        <div
          style={{
            position: 'absolute',
            top: '100%',
            right: 0,
            backgroundColor: 'white',
            border: '1px solid #ccc',
            borderRadius: '4px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            zIndex: 1000,
            minWidth: '150px',
          }}
        >
          <ul style={{ listStyle: 'none', margin: 0, padding: '8px 0' }}>
            <li style={{ padding: '8px 16px', whiteSpace: 'nowrap' }}>
              <Link to="/profile" onClick={() => setIsOpen(false)} style={{ textDecoration: 'none', color: 'inherit' }}>
                Profile
              </Link>
            </li>
            <li style={{ padding: '8px 16px', whiteSpace: 'nowrap' }}>
              <Link to="/orders" onClick={() => setIsOpen(false)} style={{ textDecoration: 'none', color: 'inherit' }}>
                Orders
              </Link>
            </li>
            <li style={{ padding: '8px 16px', whiteSpace: 'nowrap' }}>
              <button
                onClick={handleLogout}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  margin: 0,
                  cursor: 'pointer',
                  width: '100%',
                  textAlign: 'left',
                  color: 'inherit',
                  font: 'inherit',
                  fontSize: 'inherit', // Ensure button text matches link text style
                }}
              >
                Logout
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default UserProfileDropdown;
