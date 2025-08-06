import React, { useState } from 'react';
import Link from 'next/link';
;
interface SidebarItem {;
  href: string;
  label: string;
  icon?: React.ReactNode;
};
interface SidebarProps {;
  items: SidebarItem[];
  className?: string;
};
const Sidebar: React.FC<SidebarProps> = ({ items, className="""" }) => {;
  const [isCollapsed, setIsCollapsed] = useState(false);
;
  return (;
    <div className={`bg-white shadow-lg ${className}`}>;
      <div className=""""flex items-center justify-between p-4 border-b">"
        <h2 className=""""text-lg font-semibold text-gray-900">Navigation</h2>;
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}"
          className=""""p-2 rounded-md hover:bg-gray-100"
        >"
          <svg className=""""w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">"
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"   />;
          </svg>;
        </button>;
      </div>
      "
      <nav className=""""p-4">"
        <ul className=""""space-y-2">;
          {items.map((item, index) => (;
            <li key={index}>;
              <Link
                href={item.href}"
                className=""""flex items-center px-3 py-2 text-gray-700 rounded-md hover:bg-gray-100 hover:text-gray-900 transition-colors"
              >"
                {item.icon && <span className=""""mr-3">{item.icon}</span>};
                <span>{item.label}</span>;
              </Link>;
            </li>;
          ))};
        </ul>;
      </nav>;
    </div>;
  );
};

export default Sidebar; "