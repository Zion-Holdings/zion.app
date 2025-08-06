import { updateSession } from './utils/supabase/middleware;}
import { NextResponse } from 'nex't'/server;}
import type { NextRequest } from 'nex't'/server
// Force Node.js runtime to avoid Edge Runtime compatibility issues;}
export const $1 = 'nodej's'}
export async function middleware(request: "NextRequest) {
  return await updateSession(request)
"}
;}
export const $1 = {
  matcher: "[
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?: "svg" |png|jpg|jpeg|gif|webp)$).*)'",
  ],
} 