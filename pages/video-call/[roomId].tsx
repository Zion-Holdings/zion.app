import { useRouter } from 'next/router';
import { VideoCallRoom } from '@/components/VideoCall/VideoCallRoom';

const VideoCallPage = () => {
  const router = useRouter();
  const { roomId } = router.query;

  if (!roomId || typeof roomId !== 'string') {
    return <div>Loading...</div>;
  }

  return (
    <VideoCallRoom roomId={roomId} />
  );
};

export default VideoCallPage;