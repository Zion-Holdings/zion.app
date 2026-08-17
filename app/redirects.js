export default function redirects() {
  return [
    {
      source: '/services/:slug',
      destination: '/services/',
      permanent: true,
    },
  ];
}
