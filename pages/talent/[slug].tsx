import React from "react";
import { useRouter } from "next/router";

export default function TalentSlugPage() {
  const router = useRouter();
  const { slug } = router.query as { slug?: string };
  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Talent: {slug}</h1>
      <p className="text-gray-600">Profile details coming soon.</p>
    </main>
  );
}