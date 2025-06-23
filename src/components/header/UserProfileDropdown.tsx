import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from '@/hooks/useAuth';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const UserProfileDropdown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout, user } = useAuth(); // Destructure user as well, if needed for display or checks
  const dropdownRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

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
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleDropdown();
            setTimeout(() => menuRef.current?.querySelector<HTMLElement>('a,button')?.focus(), 0);
          }
        }}
        style={{ background: 'none', border: 'none', cursor: 'pointer' }}
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="User profile"
      >
        <Avatar className="h-8 w-8">
          {(user && typeof user !== 'boolean' && user.avatarUrl) ? (
            <AvatarImage src={user.avatarUrl} alt={(user && typeof user !== 'boolean' ? (user.displayName || user.name) : '') || 'User'} />
          ) : (
            <AvatarFallback>{((user && typeof user !== 'boolean' ? (user.displayName || user.name) : '') || 'U').charAt(0)}</AvatarFallback>
          )}
        </Avatar>
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
          <ul
            ref={menuRef}
            style={{ listStyle: 'none', margin: 0, padding: '8px 0' }}
            role="menu"
            onKeyDown={(e) => {
              const items = Array.from(menuRef.current?.querySelectorAll<HTMLElement>('a,button') || []);
              const index = items.indexOf(document.activeElement as HTMLElement);
              if (e.key === 'Escape') {
                setIsOpen(false);
                (e.target as HTMLElement).blur();
              } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                const next = items[(index + 1) % items.length];
                next?.focus();
              } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                const prev = items[(index - 1 + items.length) % items.length];
                prev?.focus();
              }
            }}
          >
            <li style={{ padding: '8px 16px', whiteSpace: 'nowrap' }} role="none">
              <Link href="/profile" onClick={() => setIsOpen(false)} style={{ textDecoration: 'none', color: 'inherit' }} role="menuitem">
                Profile
              </Link>
            </li>
            <li style={{ padding: '8px 16px', whiteSpace: 'nowrap' }} role="none">
              <Link href="/orders" onClick={() => setIsOpen(false)} style={{ textDecoration: 'none', color: 'inherit' }} role="menuitem">
                Orders
              </Link>
            </li>
            <li style={{ padding: '8px 16px', whiteSpace: 'nowrap' }} role="none">
              <Link href="/settings" onClick={() => setIsOpen(false)} style={{ textDecoration: 'none', color: 'inherit' }} role="menuitem">
                Settings
              </Link>
            </li>
            <li style={{ padding: '8px 0 8px 16px', borderTop: '1px solid #ccc' }} role="none">
              <button
                onClick={handleLogout}
                style={{ background: 'none', border: 'none', textAlign: 'left', width: '100%', padding: 0, cursor: 'pointer', color: 'inherit' }}
                role="menuitem"
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
