import React from 'react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-foreground mb-8">
            Contact Us
          </h1>
          <p className="text-xl text-muted-foreground mb-12">
            Get in touch with the Zion Tech Group team
          </p>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              <p className="text-muted-foreground mb-6">
                Have questions about our services? Need technical support? 
                We're here to help you succeed.
              </p>
              
              <div className="space-y-4">
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">contact@ziontechgroup.com</p>
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
                <div>
                  <h3 className="font-medium">Support Hours</h3>
                  <p className="text-muted-foreground">24/7 Technical Support</p>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-semibold mb-4">Quick Contact Form</h2>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full p-3 border border-input rounded-md bg-background"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-3 border border-input rounded-md bg-background"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea 
                    className="w-full p-3 border border-input rounded-md bg-background h-32"
                    placeholder="How can we help you?"
                  />
                </div>
                <button 
                  type="submit"
                  className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-md hover:bg-primary/90 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}