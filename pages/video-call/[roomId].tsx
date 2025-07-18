import { useRouter } from 'next/router';';';';';'
import { VideoCallRoom } from '@/components/VideoCall/VideoCallRoom';
;'
const VideoCallPage: unknown unknown unknown unknown unknown unknown = () => {;';'
  const router: unknown unknown unknown unknown unknown unknown = useRouter();';';'
  const { _roomId } = router.query;';';';'
;';';';';'
  if (!roomId || typeof roomId !== 'string') {;
    return <div>Loading...</div>;
  };
;
  return (;
    <VideoCallRoom roomId={roomId} />;'
  );';'
};';';'
;';';';'
export default VideoCallPage;'''''