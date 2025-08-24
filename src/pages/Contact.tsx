import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock, MessageSquare, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <>
      <SEO 
        title="Contact Zion - Get in Touch" 
        description="Contact Zion Tech Group for support, partnerships, or any questions about our AI and tech marketplace platform." 
        keywords="contact Zion, support, help, partnership, inquiry"
        canonical="https://ziontechgroup.com/contact"
      />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Contact Us</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Get in touch with our team. We're here to help with any questions about our platform, 
              partnerships, or support you might need.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            <Card className="bg-zion-blue-dark border-zion-blue-light">
              <CardHeader className="text-center">
                <div className="bg-zion-blue inline-flex p-3 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-zion-cyan" />
                </div>
                <CardTitle className="text-white">Email Us</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Send us a message and we'll get back to you within 24 hours
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-zion-cyan font-medium">support@ziontechgroup.com</p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-blue-light">
              <CardHeader className="text-center">
                <div className="bg-zion-blue inline-flex p-3 rounded-full mb-4">
                  <Phone className="h-6 w-6 text-zion-cyan" />
                </div>
                <CardTitle className="text-white">Call Us</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Speak directly with our support team
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-zion-cyan font-medium">+1 (555) 123-4567</p>
              </CardContent>
            </Card>

            <Card className="bg-zion-blue-dark border-zion-blue-light">
              <CardHeader className="text-center">
                <div className="bg-zion-blue inline-flex p-3 rounded-full mb-4">
                  <MessageSquare className="h-6 w-6 text-zion-cyan" />
                </div>
                <CardTitle className="text-white">Live Chat</CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Chat with us in real-time for immediate assistance
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <Button className="bg-zion-purple hover:bg-zion-purple-dark">
                  Start Chat
                </Button>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-zion-slate-light mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-zion-blue-dark border-zion-blue-light text-white placeholder:text-zion-slate-light"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-zion-slate-light mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-zion-blue-dark border-zion-blue-light text-white placeholder:text-zion-slate-light"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-zion-slate-light mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-zion-blue-dark border-zion-blue-light text-white placeholder:text-zion-slate-light"
                    placeholder="What is this about?"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-zion-slate-light mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-zion-blue-dark border-zion-blue-light text-white placeholder:text-zion-slate-light"
                    placeholder="Tell us more about your inquiry..."
                    required
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-zion-blue inline-flex p-3 rounded-full">
                    <MapPin className="h-5 w-5 text-zion-cyan" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Office Location</h3>
                    <p className="text-zion-slate-light">
                      123 Tech Innovation Drive<br />
                      Silicon Valley, CA 94025<br />
                      United States
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-zion-blue inline-flex p-3 rounded-full">
                    <Clock className="h-5 w-5 text-zion-cyan" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-2">Business Hours</h3>
                    <p className="text-zion-slate-light">
                      Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                      Saturday: 10:00 AM - 4:00 PM PST<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6">
                  <h3 className="text-white font-semibold mb-3">Need Immediate Help?</h3>
                  <p className="text-zion-slate-light mb-4">
                    Check out our comprehensive help center and FAQ section for quick answers to common questions.
                  </p>
                  <Button variant="outline" className="border-zion-purple text-zion-cyan hover:bg-zion-purple/10">
                    Visit Help Center
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
