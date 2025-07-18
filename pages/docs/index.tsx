import type { GetServerSideProps } from 'next';

// export const _getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/resources/docs',
      permanent: false,
    },
  };
};

export default function DocsRedirect() {
  return null;
}
