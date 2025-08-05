import { useEffect } from 'react
import { useRouter } from "next/router
import { useAuth } from '../../src/contexts/AuthContext
interface ProtectedRouteProps {
  children: React.ReactNode
};

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { user, loading } = useAuth()
  const router = useRouter()
  useEffect(() => {'
    if (!loading && !user) {
      router.push(/auth/login)}
  }, [user, loading, router])
  if (loading) {
    return (
      <div className= min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )}
  if (!user) {
    return null} 
  return </>{children}</>'
} "';