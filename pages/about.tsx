<<<<<<< HEAD
import Head from 'next/head';
import Link from 'next/link';

export default function Placeholder() {
  return (
    <main className="min-h-screen p-8">
      <Head>
        <title>About - Placeholder</title>
        <meta name="robots" content="noindex" />
      </Head>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-2xl font-semibold mb-2">About</h1>
        <p className="text-gray-600 mb-6">Auto-generated placeholder for missing route: <code>/about</code>.</p>
        <Link href="/"><a className="text-blue-600 hover:underline">Back to Home</a></Link>
      </div>
    </main>
=======
import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Clock, CheckCircle } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: TrendingUp,
      title: "Innovation First",
      description: "We push the boundaries of what's possible, constantly exploring new technologies and approaches."
    },
    {
      icon: CheckCircle,
      title: "Security & Trust",
      description: "Enterprise-grade security is built into everything we do, ensuring your data and systems are protected."
    },
    {
      icon: Clock,
      title: "Results Driven",
      description: "We measure success by the tangible impact our solutions have on your business outcomes."
    },
    {
      icon: Users,
      title: "Client Partnership",
      description: "We work as an extension of your team, deeply understanding your challenges and goals."
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Delivered" },
    { number: "50+", label: "Enterprise Clients" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      <Head>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to transform businesses through cutting-edge technology solutions and innovation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              We&apos;re a team of innovators, engineers, and visionaries dedicated to transforming businesses through cutting-edge technology solutions.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-6 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-white/70 mb-6 leading-relaxed">
                At Zion Tech Group, we believe that technology should be a force for good, driving innovation and creating value for businesses and society. Our mission is to democratize access to cutting-edge technology solutions, making them accessible to organizations of all sizes.
              </p>
              <p className="text-lg text-white/70 leading-relaxed">
                We&apos;re committed to building solutions that not only solve today&apos;s challenges but also anticipate tomorrow&apos;s opportunities. Through our expertise in AI, quantum computing, cybersecurity, and digital transformation, we help businesses stay ahead of the curve and achieve sustainable growth.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 p-8 backdrop-blur-xl"
            >
              <h3 className="text-2xl font-bold text-white mb-4">Why We Exist</h3>
              <ul className="space-y-3 text-white/70">
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>To bridge the gap between cutting-edge research and practical business applications</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>To democratize access to advanced technology solutions</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-cyan-400 mt-1">•</span>
                  <span>To create sustainable, scalable solutions that drive business transformation</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-6 bg-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Core Values</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 p-6 backdrop-blur-xl mb-4">
                  <value.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 bg-slate-800">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Our Impact</h2>
            <p className="text-xl text-white/70 max-w-3xl mx-auto">
              Numbers that tell the story of our commitment to excellence and innovation
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-white/70">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-cyan-600 to-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how our cutting-edge technology solutions can drive innovation and growth for your organization.
            </p>
            <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
              Get Started Today
            </button>
          </motion.div>
        </div>
      </section>
    </>
>>>>>>> a4b0ef56a21d1919a0e2729e4ba64fbc8c4b3f44
  );
}
