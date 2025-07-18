;
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/docs/sample-code','
      permanent: false,
    },