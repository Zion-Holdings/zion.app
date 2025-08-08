import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/academy/founder-course',
      permanent: false,
    },
  };
};

export default function LaunchRedirect() {
  return null;
}