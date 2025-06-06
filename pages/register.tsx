import dynamic from 'next/dynamic';

const Signup = dynamic(() => import('../src/pages/Signup'));

export default Signup;
