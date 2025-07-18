;
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: '/resources/docs','
      permanent: false,
    },