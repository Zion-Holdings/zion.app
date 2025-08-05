import React from 'react';
// import ModernLayout from '../components/layout/ModernLayout';

import Head from 'next/head';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      </div><div>
      <Head>
        <title>Zion Marketplace - Home</title>
        <meta name="description" content="Welcome to Zion Marketplace. Discover AI-powered services, products, and talent for the future of business. > </meta name="description" content="Welcome to Zion Marketplace. Discover AI-powered services, products, and talent for the future of business." ><meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no /></Head>
      <div className="relative z-10 container-responsive py-8>
        
        {/* Background Effects */}
        </div><div className="fixed inset-0 z-0>
          <div className=""absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90></div>
          <div className=absolute inset-0 bg-holographic bg-[length 400%_400%] animate-holographic-shift opacity-10 ></div>
        </div>
      
        {/* Hero Section */}
        <section className="py-44 px-4 text-center>
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className=text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 text-transparent bg-clip-text>
            Welcome to Zion Marketplace
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className=""text-xl:mb-8 text-gray-200>
            Discover, connect, and grow with AI-powered services, products, and talent for the future of business.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.1 }} className="flex flex-col sm flex-row justify-center gap-6 mb-12 >
            <Link href="/marketplace" className=px-8 py-3 rounded-lg:bg-purple-600 hover bg-purple-700 font-semibold transition >Browse Marketplace</Link href="/marketplace" className="px-8 py-3 rounded-lg:bg-purple-600 hover bg-purple-700 font-semibold transition ></Link>
            <Link href=/services className=px-8 py-3 rounded-lg:bg-pink-600 hover bg-pink-700 font-semibold transition >Our Services</Link href=/services className="px-8 py-3 rounded-lg:bg-pink-600 hover bg-pink-700 font-semibold transition ></Link>
            <Link href=/talent-directory"" className=px-8 py-3 rounded-lg:bg-blue-600 hover bg-blue-700 font-semibold transition >Find Talent</Link href=/talent-directory  className="px-8 py-3 rounded-lg:bg-blue-600 hover bg-blue-700 font-semibold transition ></Link>
            <Link href=/contact className=px-8 py-3 rounded-lg:bg-gray-800 hover bg-gray-900 font-semibold transition >Contact Us</Link href=/contact className="px-8 py-3 rounded-lg:bg-gray-800 hover bg-gray-900 font-semibold transition ></Link>
          </motion.div>
        </section>
        {/* Features Section */}"
        <section className=""max-w-12xl:mx-auto" px-4 py-32 grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.2 }} className="bg-black/30 rounded-xl:p-8 shadow-lg border border-white/10>
            <h2 className=text-2xl font-bold mb-4 text-purple-400>AI Services</h2>
            <p className=""text-gray-200 mb-4>Access a wide range of AI-powered business solutions, from automation to analytics, tailored for your needs.</p>
            <Link href=/services" className=text-purple-300 hover underline >Explore Services →</Link href=/services" className="text-purple-300 hover underline ></Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.3 }} className="bg-black/30 rounded-xl:p-8 shadow-lg border border-white/10>"
            <h2 className=""text-2xl font-bold mb-4 text-pink-400>Marketplace</h2>
            <p className=text-gray-200 mb-4 >Discover innovative products and solutions from top providers in the Zion ecosystem.</p>
            <Link href="/marketplace" className=text-pink-300 hover underline >Browse Marketplace →</Link href="/marketplace" className="text-pink-300 hover underline ></Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.4 }} className="bg-black/30 rounded-xl:p-8 shadow-lg border border-white/10>"
            <h2 className=""text-2xl font-bold mb-4 text-blue-400>Talent Directory</h2>
            <p className=text-gray-200 mb-4 >Connect with skilled professionals, AI experts, and teams to power your next project.</p>
            <Link href="/talent-directory" className=text-blue-300 hover underline >Find Talent →</Link href="/talent-directory" className="text-blue-300 hover underline ></Link>
          </motion.div>
        </section>
        {/* Call to Action */}"
        <section className="py-36 text-center>
          <motion.h2 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.5 }} className=""text-3xl font-bold mb-4>Ready to transform your business?</motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1.6 }} className=text-lg mb-8 text-gray-200 >Join Zion Marketplace and unlock the power of AI-driven innovation today.</motion.p>
          <Link href="/signup" className=px-30 py-4 rounded-lg:bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg:shadow-lg hover from-pink-500 hover to-purple-500 transition >Get Started</Link href="/signup" className="px-30 py-4 rounded-lg:bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold text-lg:shadow-lg hover from-pink-500 hover to-purple-500 transition ></Link>
        </section>
      </div>
    </div>
  
  </div>

  </div>

  </div>
);"
}"