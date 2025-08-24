export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
            <p className="text-xl text-zion-slate-light">
              Get in touch with our team for any questions or support.
            </p>
          </div>
          
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold text-white mb-2">Phone</h3>
              <p className="text-zion-slate-light">+1 302 464 0950</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
              <div className="text-3xl mb-4">✉️</div>
              <h3 className="text-xl font-semibold text-white mb-2">Email</h3>
              <p className="text-zion-slate-light">kleber@ziontechgroup.com</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20">
              <div className="text-3xl mb-4">📍</div>
              <h3 className="text-xl font-semibold text-white mb-2">Address</h3>
              <p className="text-zion-slate-light">364 E Main St STE 1008<br />Middletown DE 19709</p>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">Send us a Message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white mb-2">First Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:border-zion-cyan placeholder-white/50"
                    placeholder="Your first name"
                  />
                </div>
                
                <div>
                  <label className="block text-white mb-2">Last Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:border-zion-cyan placeholder-white/50"
                    placeholder="Your last name"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white mb-2">Email</label>
                <input 
                  type="email" 
                  className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:border-zion-cyan placeholder-white/50"
                  placeholder="your@email.com"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">Company</label>
                <input 
                  type="text" 
                  className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:border-zion-cyan placeholder-white/50"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label className="block text-white mb-2">Service Interest</label>
                <select className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:border-zion-cyan">
                  <option value="">Select a service</option>
                  <option value="enterprise">Enterprise Solutions</option>
                  <option value="ai">AI Services</option>
                  <option value="cybersecurity">Cybersecurity</option>
                  <option value="consulting">IT Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white mb-2">Message</label>
                <textarea 
                  rows={5}
                  className="w-full p-3 rounded-lg bg-white/20 text-white border border-white/30 focus:outline-none focus:border-zion-cyan placeholder-white/50"
                  placeholder="Tell us about your project or inquiry..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button 
                  type="submit" 
                  className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
          
          {/* Additional Info */}
          <div className="mt-12 text-center">
            <p className="text-zion-slate-light mb-4">
              Prefer to call? We're available 24/7 for urgent inquiries.
            </p>
            <a 
              href="https://ziontechgroup.com" 
              className="text-zion-cyan hover:text-zion-cyan-light underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit our main website
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}