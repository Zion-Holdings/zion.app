import Link from 'next/link';
import React, { useState } from 'react'
import { useUser } from '../../providers/UserProvider'
import AvatarDropdown from './AvatarDropdown'

export default function EnhancedNavigation() {
  const { user } = useUser()
  const [mobileOpen, setMobileOpen] = useState(false)

  const NavLinks = () => (
    <>
      <Link href="/"><a className="hover:opacity-80">Home</a></Link>
      {user?.role === 'client' && <Link href="/jobs/post"><a className="hover:opacity-80">Post a Job</a></Link>}
      <Link href="/talent"><a className="hover:opacity-80">Browse Talent</a></Link>
      <Link href="/dashboard"><a className="hover:opacity-80">Dashboard</a></Link>
      <Link href="/messages"><a className="hover:opacity-80">Messages</a></Link>
    </>
  )

  return (
    <nav className="border-b border-gray-200 dark:border-gray-800 bg-white/70 dark:bg-black/40 backdrop-blur supports-backdrop-blur:bg-white/50 sticky top-0 z-40">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button className="md:hidden" onClick={() => setMobileOpen(o => !o)} aria-label="Toggle Menu">
            <span className="i i-hamburger h-5 w-5" />
          </button>
          <Link href="/">
            <a className="font-semibold tracking-wide">Zion</a>
          </Link>
        </div>
        <div className="hidden md:flex items-center gap-5 text-sm">
          <NavLinks />
          <AvatarDropdown />
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-gray-800 bg-white/90 dark:bg-black/70">
          <div className="container mx-auto px-4 py-3 flex flex-col gap-3 text-sm">
            <NavLinks />
            <div className="pt-2 border-t border-gray-200 dark:border-gray-800">
              <AvatarDropdown />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}