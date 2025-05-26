import type { GetStaticPaths, GetStaticProps } from 'next';
import { EquipmentDetails, EQUIPMENT_DETAILS } from '@/data/equipmentDetails';

interface EquipmentProps {
  equipment: EquipmentDetails | null;
}

export default function EquipmentPage({ equipment }: EquipmentProps) {
  if (!equipment) {
    return <div>Equipment not found</div>;
  }

  return (
    <main className="prose dark:prose-invert mx-auto py-8">
      <h1>{equipment.name}</h1>
      <p>{equipment.price.toLocaleString('en-US', { style: 'currency', currency: equipment.currency })}</p>
      {equipment.images.map((img) => (
        <img key={img} src={img} alt={equipment.name} />
      ))}
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = Object.keys(EQUIPMENT_DETAILS).map((id) => ({ params: { slug: id } }));
  return { paths, fallback: 'blocking' };
};

export const getStaticProps: GetStaticProps<EquipmentProps> = async ({ params }) => {
  const slug = params?.slug as string;
  const equipment = EQUIPMENT_DETAILS[slug] || null;

  if (!equipment) {
    return { notFound: true };
  }

  return { props: { equipment }, revalidate: 60 };
};
