import React from "react";
import type { NextPage } from "next";
import Head from "next/head";
import InteractiveStats from "../components/ui/InteractiveStats";

const AboutPage: NextPage = () => {
  const stats = [
    { value: 1000, label: "Happy Clients", icon: "👥", color: "blue" as const },
    {
      value: 500,
      label: "Projects Completed",
      icon: "✅",
      color: "green" as const,
    },
    { value: 50, label: "Team Members", icon: "👨‍💻", color: "purple" as const },
    { value: 24, label: "Hours Support", icon: "🕒", color: "pink" as const },
  ];

  return (
    <>
      <Head>
        <title>About Us - Zion</title>
        <meta
          name="description"
          content="Learn more about Zion, the first free AI-powered marketplace"
        />
      </Head>
      <div className="min-h-screen bg-gray-900 text-white">
        <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-center mb-8">About Zion</h1>
          <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
            We are the first free AI-powered marketplace connecting top-tier IT
            services, AI talents, and innovative products with businesses
            worldwide.
          </p>
          <InteractiveStats stats={stats} />
        </div>
      </div>
    </>
  );
};

export default AboutPage;
