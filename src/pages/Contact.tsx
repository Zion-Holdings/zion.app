import { useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import z from "zod";
import { ChatAssistant } from "@/components/ChatAssistant";
import { Mail, MessageSquare, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    subject?: string;
    message?: string;
  }>({});
  const [isChatOpen, setIsChatOpen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    setErrors(prev => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const schema = z.object({
      name: z.string().min(2, "Name must be at least 2 characters"),
      email: z.string().email("Invalid email address"),
      subject: z.string().min(2, "Subject must be at least 2 characters"),
      message: z.string().min(10, "Message must be at least 10 characters"),
    });

    const result = schema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Record<string, string> = {};
      for (const err of result.error.errors) {
        if (err.path[0]) {
          fieldErrors[err.path[0] as string] = err.message;
        }
      }
      setErrors(fieldErrors);
      toast("error", result.error.errors[0].message, {});
      return;
    }

    setErrors({});

    // Simulate form submission
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast("success", "We've received your message and will get back to you soon.", {});

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    }, 1500);
  };

  // Handle sending messages to the AI chat assistant
  const handleSendMessage = async (message: string): Promise<void> => {
    try {
      const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          messages: [{ role: "user", content: message }] 
        }),
      });
      
      if (!response.ok) {
        throw new Error("Failed to get response from AI assistant");
      }
      
      const data = await response.json();
      return data.response;
    } catch (error) {
      console.error("Error communicating with AI assistant:", error);
      throw error;
    }
  };

  return (
    <>
      <SEO
        title="Contact Us | Zion Tech Group"
        description="Get in touch with the Zion team for support, partnerships, or any questions about our AI and tech marketplace."
        keywords="contact, support, Zion Tech Group, AI marketplace, tech services"
        canonical="https://ziontechgroup.com/contact"
      />
              <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Contact Us</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Get in touch with our team for support, partnerships, or any questions about our platform
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
            {/* Contact Form */}
            <div>
              <Card className="p-8 bg-zion-blue-dark border-zion-blue-light">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-zion-slate-light mb-2">Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate"
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name}</p>}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-zion-slate-light mb-2">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate"
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-zion-slate-light mb-2">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate"
                      placeholder="What's this about?"
                    />
                    {errors.subject && <p className="text-red-400 text-sm mt-1">{errors.subject}</p>}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-zion-slate-light mb-2">Message</label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate min-h-[120px]"
                      placeholder="Tell us more about your inquiry..."
                    />
                    {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message}</p>}
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Information */}
            <div>
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-white mb-6">Get in touch</h2>
                  <p className="text-zion-slate-light text-lg mb-6">
                    We're here to help and answer any questions you might have. We look forward to hearing from you.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center text-zion-slate-light">
                    <Mail className="h-5 w-5 mr-3 text-zion-cyan" />
                    <span>contact@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-center text-zion-slate-light">
                    <Phone className="h-5 w-5 mr-3 text-zion-cyan" />
                    <span>+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center text-zion-slate-light">
                    <MapPin className="h-5 w-5 mr-3 text-zion-cyan" />
                    <span>San Francisco, CA</span>
                  </div>
                </div>

                <div className="pt-6">
                  <Button
                    onClick={() => setIsChatOpen(true)}
                    className="bg-gradient-to-r from-zion-cyan to-zion-cyan-dark hover:from-zion-cyan-light hover:to-zion-cyan text-white"
                  >
                    <MessageSquare className="w-4 h-4 mr-2" />
                    Chat with AI Assistant
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Contact Options */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-zion-blue-dark border-zion-blue-light text-center">
              <div className="bg-zion-blue inline-flex p-3 rounded-full mb-4">
                <MessageSquare className="h-6 w-6 text-zion-cyan" />
              </div>
              <h3 className="text-white font-semibold mb-2">General Support</h3>
              <p className="text-zion-slate-light text-sm">
                Get help with platform features and general questions
              </p>
            </Card>

            <Card className="p-6 bg-zion-blue-dark border-zion-blue-light text-center">
              <div className="bg-zion-blue inline-flex p-3 rounded-full mb-4">
                <Mail className="h-6 w-6 text-zion-purple" />
              </div>
              <h3 className="text-white font-semibold mb-2">Partnerships</h3>
              <p className="text-zion-slate-light text-sm">
                Explore collaboration opportunities and strategic partnerships
              </p>
            </Card>

            <Card className="p-6 bg-zion-blue-dark border-zion-blue-light text-center">
              <div className="bg-zion-blue inline-flex p-3 rounded-full mb-4">
                <Phone className="h-6 w-6 text-zion-cyan" />
              </div>
              <h3 className="text-white font-semibold mb-2">Enterprise Sales</h3>
              <p className="text-zion-slate-light text-sm">
                Discuss enterprise solutions and custom implementations
              </p>
            </Card>
          </div>
        </div>
      </main>

      {/* AI Chat Assistant */}
      <ChatAssistant />

      <Footer />
    </>
  );
}
