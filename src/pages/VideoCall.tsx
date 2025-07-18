import { useState } from 'react;
import { useRouter } from 'next/router // Changed from useParams, useNavigate;
import { Header } from '@/components/Header'
import { SEO } from '@/components/SEO'
import { VideoCallRoom } from '@/components/video/VideoCallRoom'
import { Button } from '@/components/ui/button'
import { toast } from 'sonner;
export default function VideoCall(): '
  const router = useRouter();
  const { roomId: "rawRoomId "} = router.query;"
  const roomId = typeof rawRoomId === 'string' ? rawRoomId : undefined;
  // navigate is now router'
  const [isJoining, setIsJoining] = useState(false);
  const [hasJoined, setHasJoined] = useState(false);
  const [participants, setParticipants] = useState<'
    Array<{;
      id: string;,;';;