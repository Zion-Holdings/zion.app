import React from 'react';

export function Contact() {
  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-6xl font-bold text-center mb-8">
          Contact Us
        </h1>
        <p className="text-xl text-center mb-12 max-w-3xl mx-auto">
          Ready to transform your business? Get in touch with our team of experts.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-zion-cyan">Get In Touch</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Phone</h3>
                <p className="text-zion-slate-light">+1 (302) 464-0950</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Email</h3>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-white">Address</h3>
                <p className="text-zion-slate-light">
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </p>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-zion-cyan">Send Message</h2>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
                />
              </div>
              <div>
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-zion-blue-light/20 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-zion-purple hover:bg-zion-purple-dark text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
