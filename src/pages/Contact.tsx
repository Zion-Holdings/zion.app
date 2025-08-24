import React, { useState } from 'react';
import { z } from 'zod';

// Simple toast function since the hook is not available
const toast = ({ title, description, variant }: { title: string; description: string; variant?: string }) => {
  console.log(`${title}: ${description}`);
  // In a real app, this would show a toast notification
};

export default function Contact() {
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
      toast({
        title: "Form Validation Error",
        description: result.error.errors[0].message,
        variant: "destructive",
      });
      return;
    }

    setErrors({});

    // Simulate form submission
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you soon.",
      });

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
      
      return Promise.resolve();
    } catch (error) {
      console.error("Error in AI chat:", error);
      toast({
        title: "Chat Error",
        description: "There was an error communicating with our AI assistant. Please try again.",
        variant: "destructive"
      });
      return Promise.resolve();
    }
  };

  const offices = [
    {
      name: "Headquarters",
      address: "364 E Main St STE 1008 Middletown DE 19709",
      phone: "+1 302 464 0950",
      email: "kleber@ziontechgroup.com"
    },
    {
      name: "Support Office",
      address: "364 E Main St STE 1008 Middletown DE 19709",
      phone: "+1 302 464 0950", 
      email: "support@ziontechgroup.com"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-zion-blue mb-8">Contact Us</h1>
        <p className="text-lg text-zion-slate-light mb-8">
          Get in touch with our team for any questions or support.
        </p>
        
        <div className="max-w-2xl">
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label className="block text-zion-slate mb-2">Name</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-zion-slate rounded-lg bg-background text-zion-slate"
                placeholder="Your name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>
            
            <div className="mb-6">
              <label className="block text-zion-slate mb-2">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-zion-slate rounded-lg bg-background text-zion-slate"
                placeholder="your@email.com"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>
            
            <div className="mb-6">
              <label className="block text-zion-slate mb-2">Subject</label>
              <input 
                type="text" 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full p-3 border border-zion-slate rounded-lg bg-background text-zion-slate"
              />
              {errors.subject && <p className="text-red-500 text-sm mt-1">{errors.subject}</p>}
            </div>
            
            <div className="mb-6">
              <label className="block text-zion-slate mb-2">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border border-zion-slate rounded-lg bg-background text-zion-slate h-32"
                placeholder="Your message..."
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className="bg-zion-blue hover:bg-zion-blue-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors disabled:opacity-50"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        <div className="mt-16 grid md:grid-cols-2 gap-8">
          {offices.map((office, index) => (
            <div key={index} className="bg-zion-slate/5 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-zion-blue mb-4">{office.name}</h3>
              <div className="space-y-2 text-zion-slate">
                <p><strong>Address:</strong> {office.address}</p>
                <p><strong>Phone:</strong> {office.phone}</p>
                <p><strong>Email:</strong> {office.email}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
