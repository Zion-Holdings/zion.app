import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next / link';

const BlockchainSolutions: NextPage = () => {
  const solutions = [;
    {
      title: 'Smart Contract Development', ;
      description: 'Custom smart contracts for DeFi, NFTs, and enterprise applications', ;
      icon: '🔗', ;
      features: ['Solidity & Vyper', 'Security Audits', 'Gas Optimization', 'Multi - chain Support'];
    }, ;
    {
      title: 'DeFi Protocols', ;
      description: 'Decentralized finance solutions for lending, trading, and yield farming', ;
      icon: '💰', ;
      features: ['AMM DEX', 'Lending Platforms', 'Yield Aggregators', 'Staking Protocols'];
    }, ;
    {
      title: 'NFT Marketplaces', ;
      description: 'Complete NFT creation, trading, and management platforms', ;
      icon: '🎨', ;
      features: ['Minting Engine', 'Marketplace UI', 'Royalty System', 'Metadata Standards'];
    }, ;
    {
      title: 'Enterprise Blockchain', ;
      description: 'Private and consortium blockchain solutions for businesses', ;
      icon: '🏢', ;
      features: ['Hyperledger', 'Consortium Networks', 'Supply Chain', 'Identity Management'];
    }
  ];

  return (
    <div className = "min - h - screen bg - gradient - to - br from - blue - 50 to - purple - 50">;
      <Head>;
        <title>Blockchain Solutions - AI Marketplace< / title>;
        <meta name = "description" content = "Comprehensive blockchain development services for DeFi, NFTs, and enterprise applications." / >;
      </Head>;

      <main className = "container mx - auto px - 4 py - 16">;
        <div className = "text - center mb - 16">;
          <h1 className = "text - 5xl font - bold text - gray - 900 mb - 6">;
            Blockchain Solutions;
          </h1>;
          <p className = "text - xl text - gray - 600 max - w - 3xl mx - auto">;
            Transform your business with cutting - edge blockchain technology. ;
            From DeFi protocols to enterprise solutions, we deliver secure, ;
            scalable, and innovative blockchain applications.;
          </p>;
        </div>;

        <div className = "grid grid - cols - 1 md: grid - cols - 2 lg: grid - cols - 2 gap - 8 mb - 16">;
          {solutions.map((solution, index) => (
            <div key = {index} className = "bg - white rounded - xl shadow - lg p - 8 hover: shadow - xl transition - shadow duration - 300">;
              <div className = "text - 4xl mb - 4">{solution.icon}< / div>;
              <h3 className = "text - 2xl font - bold text - gray - 900 mb - 4">{solution.title}< / h3>;
              <p className = "text - gray - 600 mb - 6">{solution.description}< / p>;
              <ul className = "space - y - 2">;
                {solution.features.map((feature, featureIndex) => (
                  <li key = {featureIndex} className = "flex items - center text - gray - 700">;
                    <span className = "text - green - 500 mr - 2">✓< / span>;
                    {feature}
                  </li>;
                ))}
              </ul>;
            </div>;
          ))}
        </div>;

        <div className = "bg - white rounded - xl shadow - lg p - 8 mb - 16">;
          <h2 className = "text - 3xl font - bold text - gray - 900 mb - 6 text - center">;
            Why Choose Our Blockchain Solutions?;
          </h2>;
          <div className = "grid grid - cols - 1 md: grid - cols - 3 gap - 8">;
            <div className = "text - center">;
              <div className = "text - 3xl mb - 4">🔒< / div>;
              <h3 className = "text - xl font - semibold mb - 2">Security First< / h3>;
              <p className = "text - gray - 600">Comprehensive security audits and best practices for all blockchain applications< / p>;
            </div>;
            <div className = "text - center">;
              <div className = "text - 3xl mb - 4">⚡< / div>;
              <h3 className = "text - xl font - semibold mb - 2">High Performance< / h3>;
              <p className = "text - gray - 600">Optimized smart contracts and efficient blockchain infrastructure< / p>;
            </div>;
            <div className = "text - center">;
              <div className = "text - 3xl mb - 4">🌐< / div>;
              <h3 className = "text - xl font - semibold mb - 2">Multi - Chain< / h3>;
              <p className = "text - gray - 600">Support for Ethereum, Polygon, BSC, and other major blockchain networks< / p>;
            </div>;
          </div>;
        </div>;

        <div className = "text - center">;
          <Link;
            href = " / contact";
            className = "inline - block bg - blue - 600 text - white px - 8 py - 4 rounded - lg text - lg font - semibold hover: bg - blue - 700 transition - colors";
          >;
            Get Started with Blockchain;
          </Link>;
        </div>;
      </main>;
    </div>;
  );
};

export default BlockchainSolutions;
