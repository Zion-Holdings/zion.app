import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function ContributingPage() {
  return (
    <>
      <Head>
        <title>Contributing — Zion Tech Group</title>
        <meta name="description" content="Learn how to contribute to Zion Tech Group's open-source projects and autonomous technology initiatives." />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <section className="text-center mb-16">
              <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
                Contributing
              </h1>
              <p className="text-xl text-white/80 max-w-4xl mx-auto">
                Join our community of developers and help shape the future of autonomous technology.
              </p>
            </section>

            {/* Why Contribute */}
            <section className="mb-16">
              <div className="bg-white/10 rounded-3xl p-8 border border-white/20">
                <h2 className="text-3xl font-bold mb-6 text-cyan-400">Why Contribute?</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🚀</div>
                    <h3 className="text-xl font-bold mb-3 text-fuchsia-400">Shape the Future</h3>
                    <p className="text-white/80">
                      Help develop cutting-edge autonomous systems that will revolutionize 
                      how technology operates.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl mb-4">🤝</div>
                    <h3 className="text-xl font-bold mb-3 text-green-400">Join the Community</h3>
                    <p className="text-white/80">
                      Connect with like-minded developers and experts in autonomous 
                      technology and AI.
                    </p>
                  </div>
                  
                  <div className="text-center">
                    <div className="text-4xl mb-4">💡</div>
                    <h3 className="text-xl font-bold mb-3 text-yellow-400">Learn & Grow</h3>
                    <p className="text-white/80">
                      Gain hands-on experience with the latest technologies and 
                      best practices in the field.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* How to Contribute */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-fuchsia-400">How to Contribute</h2>
              
              <div className="space-y-6">
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold mb-4 text-cyan-400">1. Find a Project</h3>
                  <p className="text-white/80 mb-4">
                    Browse our open-source repositories and find a project that interests you. 
                    Look for issues labeled "good first issue" or "help wanted" to get started.
                  </p>
                  <div className="bg-white/5 p-4 rounded-lg">
                    <h4 className="font-semibold mb-2 text-green-400">Popular Repositories:</h4>
                    <ul className="space-y-2 text-white/70">
                      <li>• <a href="https://github.com/Zion-Holdings/zion.app" className="text-cyan-400 hover:text-cyan-300">zion.app</a> - Main application and website</li>
                      <li>• <a href="#" className="text-cyan-400 hover:text-cyan-300">zion-automation</a> - Core automation engine</li>
                      <li>• <a href="#" className="text-cyan-400 hover:text-cyan-300">zion-sdk</a> - Client libraries and SDKs</li>
                    </ul>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold mb-4 text-green-400">2. Set Up Your Environment</h3>
                  <p className="text-white/80 mb-4">
                    Clone the repository and set up your development environment following 
                    the project's README and contribution guidelines.
                  </p>
                  <div className="bg-white/5 p-4 rounded-lg font-mono text-sm">
                    <div className="text-green-400">git clone https://github.com/Zion-Holdings/zion.app.git</div>
                    <div className="text-green-400">cd zion.app</div>
                    <div className="text-green-400">npm install</div>
                    <div className="text-green-400">npm run dev</div>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold mb-4 text-yellow-400">3. Make Your Changes</h3>
                  <p className="text-white/80 mb-4">
                    Create a new branch for your changes, make your improvements, and ensure 
                    all tests pass before submitting.
                  </p>
                  <div className="bg-white/5 p-4 rounded-lg font-mono text-sm">
                    <div className="text-green-400">git checkout -b feature/your-feature-name</div>
                    <div className="text-green-400"># Make your changes</div>
                    <div className="text-green-400">npm test</div>
                    <div className="text-green-400">git add .</div>
                    <div className="text-green-400">git commit -m "Add your feature description"</div>
                  </div>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold mb-4 text-blue-400">4. Submit a Pull Request</h3>
                  <p className="text-white/80 mb-4">
                    Push your branch and create a pull request with a clear description 
                    of your changes and any related issues.
                  </p>
                  <div className="bg-white/5 p-4 rounded-lg font-mono text-sm">
                    <div className="text-green-400">git push origin feature/your-feature-name</div>
                    <div className="text-white/70"># Then create a PR on GitHub</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Contribution Areas */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-green-400">Areas to Contribute</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-cyan-400">Frontend Development</h3>
                  <p className="text-white/80 mb-4">
                    Help improve our user interfaces and user experience with modern web technologies.
                  </p>
                  <ul className="space-y-2 text-white/70">
                    <li>• React components and hooks</li>
                    <li>• UI/UX improvements</li>
                    <li>• Responsive design</li>
                    <li>• Accessibility enhancements</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-fuchsia-400">Backend & APIs</h3>
                  <p className="text-white/80 mb-4">
                    Contribute to our server-side logic, API development, and automation systems.
                  </p>
                  <ul className="space-y-2 text-white/70">
                    <li>• API endpoints and services</li>
                    <li>• Database optimization</li>
                    <li>• Authentication & security</li>
                    <li>• Performance improvements</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-green-400">Automation & AI</h3>
                  <p className="text-white/80 mb-4">
                    Work on our core autonomous systems and artificial intelligence capabilities.
                  </p>
                  <ul className="space-y-2 text-white/70">
                    <li>• Machine learning models</li>
                    <li>• Automation workflows</li>
                    <li>• Monitoring systems</li>
                    <li>• Self-healing algorithms</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-yellow-400">Documentation & Testing</h3>
                  <p className="text-white/80 mb-4">
                    Help improve our documentation, write tests, and ensure code quality.
                  </p>
                  <ul className="space-y-2 text-white/70">
                    <li>• API documentation</li>
                    <li>• Code examples</li>
                    <li>• Unit and integration tests</li>
                    <li>• User guides</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Development Guidelines */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-blue-400">Development Guidelines</h2>
              
              <div className="space-y-6">
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-cyan-400">Code Standards</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• Follow the existing code style and conventions</li>
                    <li>• Write clear, descriptive commit messages</li>
                    <li>• Include appropriate tests for new features</li>
                    <li>• Ensure all tests pass before submitting</li>
                    <li>• Use TypeScript for type safety</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-fuchsia-400">Pull Request Guidelines</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• Create descriptive pull request titles</li>
                    <li>• Include a detailed description of changes</li>
                    <li>• Reference related issues or discussions</li>
                    <li>• Request reviews from appropriate team members</li>
                    <li>• Respond promptly to review feedback</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-green-400">Communication</h3>
                  <ul className="space-y-2 text-white/70">
                    <li>• Be respectful and inclusive in all interactions</li>
                    <li>• Ask questions when you need clarification</li>
                    <li>• Share your knowledge and help others</li>
                    <li>• Participate in community discussions</li>
                    <li>• Report issues and suggest improvements</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Getting Help */}
            <section className="mb-16">
              <h2 className="text-3xl font-bold mb-8 text-center text-purple-400">Getting Help</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-cyan-400">Community Resources</h3>
                  <ul className="space-y-3 text-white/70">
                    <li>• <strong>GitHub Discussions:</strong> Ask questions and share ideas</li>
                    <li>• <strong>Discord Server:</strong> Real-time chat and collaboration</li>
                    <li>• <strong>Documentation:</strong> Comprehensive guides and tutorials</li>
                    <li>• <strong>Issue Tracker:</strong> Report bugs and request features</li>
                  </ul>
                </div>
                
                <div className="bg-white/10 rounded-2xl p-6 border border-white/20">
                  <h3 className="text-xl font-bold mb-4 text-fuchsia-400">Mentorship</h3>
                  <p className="text-white/80 mb-4">
                    New to autonomous technology? We offer mentorship programs to help 
                    you get started and grow your skills.
                  </p>
                  <ul className="space-y-2 text-white/70">
                    <li>• One-on-one guidance</li>
                    <li>• Code review sessions</li>
                    <li>• Learning resources</li>
                    <li>• Project recommendations</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Recognition */}
            <section className="mb-16">
              <div className="bg-gradient-to-r from-cyan-500/20 to-fuchsia-500/20 rounded-3xl p-8 border border-white/20 text-center">
                <h2 className="text-3xl font-bold mb-6 text-cyan-400">Contributor Recognition</h2>
                <p className="text-lg text-white/80 mb-6 max-w-3xl mx-auto">
                  We value every contribution and recognize our contributors in multiple ways:
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl mb-2">🏆</div>
                    <h3 className="text-xl font-bold mb-2 text-fuchsia-400">Hall of Fame</h3>
                    <p className="text-white/70">Featured on our website and documentation</p>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">🎁</div>
                    <h3 className="text-xl font-bold mb-2 text-green-400">Swag & Rewards</h3>
                    <p className="text-white/70">Exclusive merchandise for top contributors</p>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">💼</div>
                    <h3 className="text-xl font-bold mb-2 text-yellow-400">Career Opportunities</h3>
                    <p className="text-white/70">Potential job opportunities and partnerships</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Call to Action */}
            <section className="text-center">
              <h2 className="text-3xl font-bold mb-6 text-cyan-400">Ready to Contribute?</h2>
              <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
                Join our community and help build the future of autonomous technology. 
                Every contribution, no matter how small, makes a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="https://github.com/Zion-Holdings/zion.app" className="bg-gradient-to-r from-cyan-500 to-fuchsia-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-fuchsia-600 transition-all">
                  View on GitHub
                </a>
                <Link href="/contact" className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all">
                  Get in Touch
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}