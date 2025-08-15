import Link from 'next/link';

interface NavigationProps {
  className?: string;
}

export default function Navigation({ className = '' }: NavigationProps) {
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/explore', label: 'Explore' },
    { href: '/automation', label: 'Automation' }
  ];
  
  return (
    <nav className={`${className}`}>
      <ul className="flex space-x-6">
        {navItems.map((item) => (
          <li key={item.href}>
            <Link 
              href={item.href}
              className="text-white/80 hover:text-cyan-400 transition-colors"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}