import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export interface LayoutProps {
  children: React.ReactNode;
  title?: string;
  description?: string;
  showNavigation?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  title = 'Zion Tech Group — Autonomous Innovation Hub',
  description = 'Leading-edge technology solutions and autonomous innovation systems.',
  showNavigation = true,
}) => {
  const navigationItems = [
    { href: '/about', label: 'About Us', color: 'hover:border-cyan-400/50' },
    {
      href: '/services',
      label: 'Our Services',
      color: 'hover:border-fuchsia-400/50',
    },
    {
      href: '/resources',
      label: 'Resources',
      color: 'hover:border-blue-400/50',
    },
    {
      href: '/case-studies',
      label: 'Case Studies',
      color: 'hover:border-yellow-400/50',
    },
    { href: '/blog', label: 'Blog', color: 'hover:border-purple-400/50' },
    { href: '/contact', label: 'Contact', color: 'hover:border-green-400/50' },
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta property='og:title' content={title} />
        <meta property='og:description' content={description} />
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white'>
        {showNavigation && (
          <nav className='border-b border-white/10 backdrop-blur-xl bg-black/20'>
            <div className='container mx-auto px-6 py-4'>
              <div className='flex items-center justify-between'>
                <Link
                  href='/'
                  className='text-2xl font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent'
                >
                  Zion Tech Group
                </Link>

                <div className='hidden md:flex items-center space-x-6'>
                  {navigationItems.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`px-4 py-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-lg text-white transition-all duration-200 ${item.color}`}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* Mobile menu button */}
                <button className='md:hidden p-2 rounded-lg bg-white/10 hover:bg-white/20 border border-white/20'>
                  <svg
                    className='w-6 h-6'
                    fill='none'
                    stroke='currentColor'
                    viewBox='0 0 24 24'
                  >
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth={2}
                      d='M4 6h16M4 12h16M4 18h16'
                    />
                  </svg>
                </button>
              </div>
            </div>
          </nav>
        )}

        <main className='container mx-auto px-6 py-12'>{children}</main>

        {showNavigation && (
          <footer className='border-t border-white/10 backdrop-blur-xl bg-black/20 mt-20'>
            <div className='container mx-auto px-6 py-8'>
              <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
                <div>
                  <h3 className='text-lg font-semibold mb-4'>
                    Zion Tech Group
                  </h3>
                  <p className='text-white/70 text-sm'>
                    Autonomous innovation hub delivering cutting-edge technology
                    solutions.
                  </p>
                </div>

                <div>
                  <h4 className='text-md font-semibold mb-4'>Services</h4>
                  <ul className='space-y-2 text-sm text-white/70'>
                    <li>
                      <Link
                        href='/services'
                        className='hover:text-cyan-400 transition-colors'
                      >
                        Technology Solutions
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/services'
                        className='hover:text-cyan-400 transition-colors'
                      >
                        Automation Systems
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/services'
                        className='hover:text-cyan-400 transition-colors'
                      >
                        Innovation Consulting
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className='text-md font-semibold mb-4'>Resources</h4>
                  <ul className='space-y-2 text-sm text-white/70'>
                    <li>
                      <Link
                        href='/blog'
                        className='hover:text-cyan-400 transition-colors'
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/case-studies'
                        className='hover:text-cyan-400 transition-colors'
                      >
                        Case Studies
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/resources'
                        className='hover:text-cyan-400 transition-colors'
                      >
                        Documentation
                      </Link>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className='text-md font-semibold mb-4'>Contact</h4>
                  <ul className='space-y-2 text-sm text-white/70'>
                    <li>
                      <Link
                        href='/contact'
                        className='hover:text-cyan-400 transition-colors'
                      >
                        Get in Touch
                      </Link>
                    </li>
                    <li>
                      <Link
                        href='/about'
                        className='hover:text-cyan-400 transition-colors'
                      >
                        About Us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='border-t border-white/10 mt-8 pt-8 text-center text-sm text-white/50'>
                <p>
                  &copy; {new Date().getFullYear()} Zion Tech Group. All rights
                  reserved.
                </p>
              </div>
            </div>
          </footer>
        )}
      </div>
    </>
  );
};

export default Layout;
