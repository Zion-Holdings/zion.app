import type { NextPage } from 'next';
import Link from 'next/link';

const ServicesPage: NextPage = () => {
  const services = [
    { id: 1, name: 'Web Development', description: 'Building performant web applications.' },
    { id: 2, name: 'Mobile Apps', description: 'Creating cross-platform mobile experiences.' },
    { id: 3, name: 'UI/UX Design', description: 'Designing intuitive user interfaces.' },
  ];

  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <div
            key={service.id}
            className="border rounded-lg p-6 shadow transition hover:shadow-lg"
          >
            <h2 className="text-2xl font-semibold mb-2">{service.name}</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {service.description}
            </p>
            <Link
              href={"#"}
              className="text-blue-600 hover:underline font-medium"
            >
              Learn more
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ServicesPage;

