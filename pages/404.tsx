import { Center } from '@chakra-ui/react';
import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Custom404() {
  const router = useRouter();
  const path = router.asPath || '';
  const title = path && path !== '/' ? `404 – ${path} not found` : '404 – Page Not Found';
  const description = `The page at ${path || 'this URL'} could not be found.`;
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || '';
  const canonical = baseUrl && path ? `${baseUrl}${path}` : undefined;

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {canonical && <meta property="og:url" content={canonical} />}
      </Head>
      <Center minH="100vh">
        <h1>404 – Page Not Found</h1>
      </Center>
    </>
  );
}
