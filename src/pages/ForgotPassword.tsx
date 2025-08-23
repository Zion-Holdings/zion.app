import { useState } from 'react'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { toast } from '@/hooks/use-toast'
import axios from 'axios'
import {logErrorToProduction} from '@/utils/productionLogger';


const API_URL = process.env.NEXT_PUBLIC_API_URL || ''

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await axios.post(`${API_URL}/auth/forgot`, { email })
      if (res.status === 200) {
        toast.success('Email sent')
      } else {
        throw new Error('Request failed')
      }
    } catch (err: any) {
      logErrorToProduction(err)
      const msg = err?.response?.data?.message || err.message || 'Failed to send reset link'
      setError(msg)
      toast.error(msg)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <Input
          type="email"
          name="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Button type="submit" disabled={loading}>
          {loading ? 'Sending...' : 'Submit'}
        </Button>
      </form>
    </div>
  )
}
