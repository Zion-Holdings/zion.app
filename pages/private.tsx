import type { GetServerSideProps, GetServerSidePropsContext } from 'next/types'
import { createServerSideClient } from '../src/utils/supabase/server'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { User, Mail, Calendar, Shield } from '@/components/ui/icons';




import Head from 'next/head'
import type { User as SupabaseUser } from '@supabase/supabase-js'
import { useRouter } from 'next/router'

interface PrivatePageProps {
  user: SupabaseUser
}

export default function PrivatePage({ user }: PrivatePageProps) {
  const router = useRouter();
  
  return (
    <>
      <Head>
        <title>Private Profile - Zion Tech Marketplace</title>
        <meta name="description" content="Private user profile page" />
      </Head>
      
      <div className="container max-w-4xl mx-auto py-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Shield className="h-5 w-5" />
              Private User Profile
            </CardTitle>
            <p className="text-muted-foreground">
              This page is only accessible to authenticated users
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/20">
                <User className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1 space-y-2">
                <h3 className="text-lg font-semibold">User Information</h3>
                <div className="grid gap-3">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      {typeof user === 'object' && user !== null && 'email' in user ? (user as { email?: string }).email : 'No email'}
                    </span>
                    <Badge variant={typeof user === 'object' && user !== null && 'email_confirmed_at' in user ? (user as { email_confirmed_at?: string }).email_confirmed_at ? "default" : "secondary" : "secondary"}>
                      {typeof user === 'object' && user !== null && 'email_confirmed_at' in user ? (user as { email_confirmed_at?: string }).email_confirmed_at ? "Verified" : "Unverified" : "Unverified"}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm">
                      Joined {typeof user === 'object' && user !== null && 'created_at' in user && typeof (user as { created_at?: unknown }).created_at === 'string' && (user as { created_at?: string }).created_at ? new Date((user as { created_at: string }).created_at).toLocaleDateString() : 'Unknown'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm">User ID: </span>
                    <code className="px-2 py-1 bg-muted rounded text-xs font-mono">
                      {typeof user === 'object' && user !== null && 'id' in user ? (user as { id?: string }).id || 'Unknown' : 'Unknown'}
                    </code>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 bg-muted/50 rounded-lg">
              <h4 className="font-medium mb-2">Authentication Details</h4>
              <div className="grid gap-2 text-sm">
                <div>
                  <span className="font-medium">Last Sign _In: </span>
                  {(() => {
                    if (
                      typeof user === 'object' &&
                      user !== null &&
                      'last_sign_in_at' in user &&
                      typeof (user as { last_sign_in_at?: unknown }).last_sign_in_at === 'string'
                    ) {
                      const lastSignIn = (user as { last_sign_in_at: string }).last_sign_in_at;
                      return lastSignIn ? new Date(lastSignIn).toLocaleString() : 'Never';
                    }
                    return 'Never';
                  })()}
                </div>
                <div>
                  <span className="font-medium">App Metadata: </span>
                  <code className="text-xs">
                    {JSON.stringify(
                      typeof user === 'object' && user !== null && 'app_metadata' in user && typeof (user as { app_metadata?: unknown }).app_metadata === 'object' && (user as { app_metadata?: object }).app_metadata
                        ? (user as { app_metadata: object }).app_metadata
                        : {},
                      null,
                      2
                    )}
                  </code>
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <Button onClick={() => router.push('/dashboard')}>
                Go to Dashboard
              </Button>
              <Button onClick={() => router.push('/')} variant="outline">
                Back to Home
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}

// export const _getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const supabase = createServerSideClient(context)

  const { data, error } = await supabase.auth.getUser()

  if (error || !data?.user) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: false,
      },
    }
  }

  return {
    props: {
      user: data.user,
    },
  }
} 