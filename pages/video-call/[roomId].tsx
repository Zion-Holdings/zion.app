import { useRouter } from 'next/router';

const VideoCallPage = () => {
  const router = useRouter();
  const { roomId } = router.query;

  return (
    <div>
      <h1>Video Call</h1>
      <p>Room ID: {roomId}</p>
    </div>
  );
};

export default VideoCallPage;