import dynamic from 'next/dynamic';

const Signup = dynamic(() => import('@/pages/Signup'));

export default Signup;
