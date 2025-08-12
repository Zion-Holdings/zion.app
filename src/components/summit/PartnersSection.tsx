import Image from "next/image";
import Link from "next/link";

const partners = [
  { name: 'Partner A', logo: 'https://placehold.co/150x80' },
  { name: 'Partner B', logo: 'https://placehold.co/150x80' },
];

export function PartnersSection() {
  return (
    <section className="py-12 bg-background" id="partners">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Partners</h2>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {partners.map((p) => (
            <Image
              key={p.name}
              src={p.logo}
              alt={p.name}
              width={150}
              height={80}
              className="h-16 w-auto"
              loading="lazy"
            />
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="#register" className="text-zion-cyan underline">Become a Sponsor</Link>
        </div>
      </div>
    </section>
  );
}
