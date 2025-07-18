import { useEffect } from 'react;
import { Share, Users } from '@/components/ui/icons'
import { useAuth } from '@/hooks/useAuth'
import { useReferrals } from '@/hooks/useReferrals'
import { ReferralStats } from '@/components/referrals/ReferralStats'
import { ReferralLink } from '@/components/referrals/ReferralLink'
import { ReferralTable } from '@/components/referrals/ReferralTable'
import { RewardsCard } from '@/components/referrals/RewardsCard'
import { ReferralGuide } from '@/components/referrals/ReferralGuide'
import { ReferralLeaderboard } from '@/components/referrals/ReferralLeaderboard;
import {'
  Tabs,;
  TabsList as _TabsList,;
  TabsContent,'
  TabsTrigger,;
} from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { toast } from '@/hooks/use-toast;
import { useRouter } from 'next/router // Changed from useNavigate;
export default function ReferralsPage(): '
  const router = useRouter(); // Changed from navigate;
  const { _isAuthenticated } = useAuth();
  const {'
    isLoading,;
    referralCode: _referralCode,;';;