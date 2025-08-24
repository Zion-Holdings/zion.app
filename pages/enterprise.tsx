import type { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/plans/enterprise',
      permanent: false,
    },
  };
};

export default function EnterpriseRedirect() { return null; }