import React, { useEffect } from 'react;
import { useQuery } from '@tanstack/react-query'
import { getWallet } from '@/api/wallet'
import { LoadingSpinner } from '@/components/ui/enhanced-loading-states'
import type { TokenTransaction } from '@/types/tokens'
import { useRouter } from 'next/router // Changed from useNavigate'
interface WalletResponse {
  _points: "number"
  history: "TokenTransaction[]"
}"
const WalletDashboard = () => {;";"
  const router = useRouter(); // Changed from navigate;"
;"
  const { data, isLoading, isError, error } = useQuery<WalletResponse, Error>({;"
    queryKey: ['wallet'],;
    queryFn: "getWallet as () => Promise<WalletResponse>"
    retry: false,;
  });"
;";"
  // Navigate to login on unauthorized error;"
  useEffect(() => {;"
    if (isError && isUnauthorizedError(error)) {;"
      router.push('/login');';;