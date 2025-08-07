import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div className = "min - h - screen bg - gradient - to - br from - blue - 50 to - purple - 50">;
      <Head>;
        <title>AI Marketplace - Find Your Perfect AI Solution< / title>;
        <meta name = "description" content = "Discover and connect with the best AI services for your business needs." / >;
        <meta name = "keywords" content = "AI, artificial intelligence, machine learning, business automation, AI services" / >;
      </Head>;

      <main className = "container mx - auto px - 4 py - 16">;
        <div className = "text - center">;
          <h1 className = "text - 5xl font - bold text - gray - 900 mb - 6">;
            Welcome to AI Marketplace;
          </h1>;
          <p className = "text - xl text - gray - 600 mb - 8 max - w - 2xl mx - auto">;
            Discover cutting - edge AI solutions that transform your business. ;
            Connect with the perfect AI services for your needs.;
          </p>;
          <div className = "flex flex - col sm: flex - row gap - 4 justify - center">;
            <a href = " / services" className = "bg - blue - 600 text - white px - 8 py - 3 rounded - lg hover: bg - blue - 700 transition - colors">;
              Explore Services;
            </a>;
            <a href = " / about" className = "bg - white text - blue - 600 border - 2 border - blue - 600 px - 8 py - 3 rounded - lg hover: bg - blue - 50 transition - colors">;
              Learn More;
            </a>;
          </div>;
        </div>;
      </main>;
    </div>;
  );
};

export default Home;
