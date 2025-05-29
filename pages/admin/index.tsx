import { GetServerSideProps } from 'next';
import { createClient } from '@supabase/supabase-js';
import AdminDashboard from '../../src/pages/AdminDashboard';

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const supabaseUrl =
    process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL || '';
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
  const token = req.cookies['sb-access-token'];

  if (!supabaseUrl || !serviceRoleKey || !token) {
    return { redirect: { destination: '/login', permanent: false } };
  }

  const supabase = createClient(supabaseUrl, serviceRoleKey);
  const {
    data: { user },
  } = await supabase.auth.getUser(token);

  if (!user) {
    return { redirect: { destination: '/login', permanent: false } };
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('user_type')
    .eq('id', user.id)
    .single();

  if (profile?.user_type !== 'staff') {
    return { redirect: { destination: '/unauthorized', permanent: false } };
  }

  return { props: {} };
};

export default AdminDashboard;
