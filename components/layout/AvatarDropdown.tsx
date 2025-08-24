import React, { useState } from 'react'
import Link from 'next/link'
import { useUser } from '../../providers/UserProvider'

export default function AvatarDropdown() {
  const { user, logout } = useUser()
  const [open, setOpen] = useState(false)

  if (!user) return null

  return (
    <div className="relative">
      <button onClick={() => setOpen(o => !o)} className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-cyan-500 text-white text-xs font-semibold grid place-items-center ring-1 ring-white/40">
        {user.name.split(' ').map(n => n[0]).slice(0,2).join('')}
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-black shadow-lg py-2 text-sm">
          <div className="px-3 pb-2 text-xs opacity-70">Signed in as<br/><span className="font-medium opacity-100">{user.name}</span></div>
          <Link href="/settings"><a className="block px-3 py-2 hover:bg-gray-50/60 dark:hover:bg-white/5">Settings</a></Link>
          <Link href="/onboarding"><a className="block px-3 py-2 hover:bg-gray-50/60 dark:hover:bg-white/5">Onboarding</a></Link>
          <button onClick={logout} className="w-full text-left px-3 py-2 hover:bg-gray-50/60 dark:hover:bg-white/5">Logout</button>
        </div>
      )}
    </div>
  )
}