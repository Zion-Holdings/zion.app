import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/resume/preview',
      permanent: false,
    },
  };
};

export default function ResumeIndex() { return null; }