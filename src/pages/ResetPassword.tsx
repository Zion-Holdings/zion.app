import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from '@/hooks/use-toast'
import { resetPassword } from '@/services/auth'


function strength(pw: string) {
  if (pw.length < 8) return 0
  if (pw.length < 10) return 1
  if (pw.length < 12) return 2
  return 3
}

export default function ResetPassword() {
  const { token = '' } = useParams()
  const navigate = useNavigate()
  const [password, setPassword] = useState('')
  const [confirm, setConfirm] = useState('')
  const [loading, setLoading] = useState(false)
  const s = strength(password)

  if (!token) {
    return (
      <div className="flex min-h-screen items-center justify-center p-4 text-red-500">
        <p>Invalid or missing reset token.</p>
      </div>
    )
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (password !== confirm) {
      toast.error('Passwords do not match')
      return
    }
    setLoading(true)
    try {
      await resetPassword(token, password)
      toast.success('Password has been reset successfully!')
      navigate('/login')
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
        <Button type="submit" disabled={loading}>{loading ? 'Saving...' : 'Reset Password'}</Button>
      </form>
    </div>
  )
}
