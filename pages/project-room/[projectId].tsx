import { useRouter } from 'next/router';

const ProjectRoomPage = () => {
  const router = useRouter();
  const { projectId } = router.query;

  return (
    <div>
      <h1>Project Room</h1>
      <p>Project ID: {projectId}</p>
    </div>
  );
};

export default ProjectRoomPage;