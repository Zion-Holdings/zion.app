import { GetServerSideProps } from 'next';

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/docs/sample-code',
      permanent: false,
    },
  };
};

export default function SamplesRedirect() {
  return null;
}
