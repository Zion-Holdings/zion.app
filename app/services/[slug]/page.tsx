export const dynamic = 'force-dynamic';
export const revalidate = 0;

export async function generateStaticParams() {
  return [];
}

export default async function ServiceRedirect({ params }) {
  const { slug } = await params;
  const target = `/services/${slug}`;
  return new Response(null, {
    status: 307,
    headers: { Location: target },
  });
}
