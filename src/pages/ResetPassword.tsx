import { useState, useEffect } from 'react' // Added useEffect for router.isReady
import { useRouter } from 'next/router' // Changed from useParams, useNavigate
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { LoadingSpinner } from '@/components/ui/enhanced-loading-states'
import { toast } from '@/hooks/use-toast'
import { resetPassword } from '@/services/auth'


function strength(pw: string) {
  if (pw.length < 8) return 0
  if (pw.length < 10) return 1
  if (pw.length < 12) return 2
  return 3
}

export default function ResetPassword() {
  const router = useRouter()
  const [token, setToken] = useState('')
  // navigate is now router
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const s = strength(password)

  useEffect(() => {
    if (router.isReady) {
      const { token: rawToken } = router.query;
      setToken(typeof rawToken === 'string' ? rawToken : '');
    }
  }, [router.isReady, router.query]);

  if (!token && router.isReady) { // Check token only after router is ready
    return (
      <div className="flex min-h-screen items-center justify-center p-4 text-red-500">
        <p>Invalid or missing reset token.</p>
      </div>
    )
  }

  // Show loading or placeholder if router not ready and token not yet set.
  if (!router.isReady && !token) {
     return <div className="flex min-h-screen items-center justify-center p-4">Loading...</div>;
  }


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirm) {
      toast.error('Passwords do not match')
      return
    }
    setLoading(true)
    try {
      await resetPassword(token, password) // token is now from state, derived from router.query
      toast.success('Password has been reset successfully!')
      router.push('/login') // Changed to router.push
    } catch (err: any) {
      toast.error(err.message || 'Reset failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <Input
          type="password"
          placeholder="New password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="h-2 bg-zinc-200 rounded">
          <div
            className={`h-full rounded ${['bg-red-500','bg-yellow-500','bg-blue-500','bg-green-500'][s]}`}
            style={{ width: `${(s+1)*25}%` }}
          />
        </div>
        <Input
          type="password"
          placeholder="Confirm password"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        <Button type="submit" disabled={loading}>
          {loading ? (
            <>
              <LoadingSpinner size="sm" className="mr-2" />
              Saving...
            </>
          ) : (
            'Reset Password'
          )}
        </Button>
      </form>
    </div>
  )
}
