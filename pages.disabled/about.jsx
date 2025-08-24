import React from 'react';

const AboutPage = () => (
  <main className="prose dark:prose-invert max-w-3xl mx-auto py-8">
    <h1>About Us</h1>
    <section>
      <h2>Our Mission</h2>
      <p>
        Zion Tech Group is dedicated to connecting innovators and businesses
        through an open marketplace for high‑tech and artificial
        intelligence solutions.
      </p>
    </section>
    <section>
      <h2>Our Team</h2>
      <p>
        We are a distributed team of engineers, designers and entrepreneurs
        passionate about building the future of AI.
      </p>
      <ul>
        <li>John Doe – CEO</li>
        <li>Jane Smith – CTO</li>
        <li>Alex Johnson – Lead Designer</li>
      </ul>
    </section>
    <section>
      <h2>Company Timeline</h2>
      <ol>
        <li>2023 – Zion founded</li>
        <li>2024 – Marketplace beta launch</li>
        <li>2025 – Global community reaches 50k members</li>
      </ol>
    </section>
  </main>
);

export default AboutPage;
