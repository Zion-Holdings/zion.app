import type { NextPage } from 'next';

const AboutPage: NextPage = () => {
  return (
    <main className="min-h-screen flex items-center justify-center p-8">
      <div className="text-center max-w-2xl">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          This is a placeholder About page. Replace this content with real information about your
          company or project.
        </p>
      </div>
    </main>
  );
};

export default AboutPage;
