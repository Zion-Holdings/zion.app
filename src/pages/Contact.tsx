import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-white mb-8">Contact Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold text-zion-cyan mb-4">Get in Touch</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium text-white">Phone</h3>
                <p className="text-zion-slate-light">+1 302 464 0950</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Email</h3>
                <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
              </div>
              <div>
                <h3 className="text-lg font-medium text-white">Address</h3>
                <p className="text-zion-slate-light">364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-zion-cyan mb-4">Send us a Message</h2>
            <form className="space-y-4">
              <div>
                <label className="block text-white mb-2">Name</label>
                <input 
                  type="text" 
                  className="w-full p-3 bg-zion-blue-dark border border-zion-blue-light rounded text-white"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 bg-zion-blue-dark border border-zion-blue-light rounded text-white"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Message</label>
                <textarea 
                  className="w-full p-3 bg-zion-blue-dark border border-zion-blue-light rounded text-white h-32"
                  placeholder="Your message"
                ></textarea>
              </div>
              <button 
                type="submit"
                className="w-full bg-zion-cyan hover:bg-zion-cyan-dark text-white font-semibold py-3 px-6 rounded transition-colors"
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
