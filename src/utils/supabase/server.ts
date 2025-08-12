import { createServerClient } from '@supabase/ssr'
import { type NextApiRequest, type NextApiResponse } from 'next'
import { type GetServerSidePropsContext } from 'next/types'

// For API routes
export function createClient(req: NextApiRequest, res: NextApiResponse) {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          const cookies = req.cookies || {};
          return Object.keys(cookies as Record<string, string>).map((name) => ({
            name,
            value: (cookies as Record<string, string>)[name] || '',
          }))
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            let cookieString = `${name}=${value}; Path=/`
            if (options?.httpOnly) cookieString += '; HttpOnly'
            if (options?.secure) cookieString += '; Secure'
            if (options?.sameSite) cookieString += `; SameSite=${options.sameSite}`
            if (options?.maxAge) cookieString += `; Max-Age=${options.maxAge}`
            
            res.setHeader('Set-Cookie', cookieString)
          })
        },
      },
    }
  )
}

// For getServerSideProps
export function createServerSideClient(context: GetServerSidePropsContext) {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          const cookies = context.req.cookies || {};
          return Object.keys(cookies as Record<string, string>).map((name) => ({
            name,
            value: (cookies as Record<string, string>)[name] || '',
          }))
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            let cookieString = `${name}=${value}; Path=/`
            if (options?.httpOnly) cookieString += '; HttpOnly'
            if (options?.secure) cookieString += '; Secure'
            if (options?.sameSite) cookieString += `; SameSite=${options.sameSite}`
            if (options?.maxAge) cookieString += `; Max-Age=${options.maxAge}`
            
            context.res.setHeader('Set-Cookie', cookieString)
          })
        },
      },
    }
  )
} 