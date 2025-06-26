import { createServerClient } from '@supabase/ssr'
import { type NextApiRequest, type NextApiResponse } from 'next'
import { type GetServerSidePropsContext } from 'next'

// For API routes
export function createClient(req: NextApiRequest, res: NextApiResponse) {
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return Object.keys(req.cookies).map((name) => ({
            name,
            value: req.cookies[name] || '',
          }))
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            res.setHeader('Set-Cookie', [
              res.getHeader('Set-Cookie'),
              `${name}=${value}; Path=/; ${options?.httpOnly ? 'HttpOnly;' : ''} ${options?.secure ? 'Secure;' : ''} ${options?.sameSite ? `SameSite=${options.sameSite};` : ''} ${options?.maxAge ? `Max-Age=${options.maxAge};` : ''}`
            ].filter(Boolean).flat())
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
          return Object.keys(context.req.cookies).map((name) => ({
            name,
            value: context.req.cookies[name] || '',
          }))
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => {
            context.res.setHeader('Set-Cookie', [
              context.res.getHeader('Set-Cookie'),
              `${name}=${value}; Path=/; ${options?.httpOnly ? 'HttpOnly;' : ''} ${options?.secure ? 'Secure;' : ''} ${options?.sameSite ? `SameSite=${options.sameSite};` : ''} ${options?.maxAge ? `Max-Age=${options.maxAge};` : ''}`
            ].filter(Boolean).flat())
          })
        },
      },
    }
  )
} 