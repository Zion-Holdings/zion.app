import { GetServerSideProps } from 'next';
import TenantLanding from '../components/multiverse/TenantLanding';
import { getServerSideTenant } from '../utils/tenant';

export default function HomePage({ tenant }: any) {
  return <TenantLanding tenant={tenant ?? null} />;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { tenant } = await getServerSideTenant(ctx as any);
  return { props: { tenant } };
};