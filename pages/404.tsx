import { Center } from '@chakra-ui/react';
import { NextSeo } from '@/components/NextSeo';

export default function Custom404() {
  return (
    <>
      <NextSeo
        title="Page Not Found"
        description="The requested page could not be found."
      />
      <Center minH="100vh">
        <h1>404 – Page Not Found</h1>
      </Center>
    </>
  );
}
