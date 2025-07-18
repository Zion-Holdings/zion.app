import type { GetServerSideProps } from 'next';

// export const _getServerSideProps: GetServerSideProps = async () => {
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
