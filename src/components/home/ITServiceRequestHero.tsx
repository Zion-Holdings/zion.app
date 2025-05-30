import React, { useState } from "react";
import Image from "next/image";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

export function ITServiceRequestHero() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !email || !location) {
      toast({
        title: "Missing Information",
        description: "Name, email and location are required.",
        variant: "destructive",
      });
      return;
    }

    try {
      const { error } = await supabase.functions.invoke(
        "onsite-service-request",
        {
          body: { name, email, phone, company, location, details },
        }
      );

      if (error) throw error;

      toast({
        title: "Request Submitted",
        description:
          "We've received your request. Our team will reach out shortly.",
      });

      setName("");
      setEmail("");
      setPhone("");
      setCompany("");
      setLocation("");
      setDetails("");
    } catch (err: any) {
      console.error(err);
      toast({
        title: "Submission Failed",
        description: "There was an error submitting your request.",
        variant: "destructive",
      });
    }
  };

  return (
    <section
      className="py-16 md:py-24 border-b border-zion-purple/20 bg-[radial-gradient(#0f172a,_#020617)]"
    >
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="md:flex md:flex-col md:items-center md:justify-center">
          <GradientHeading className="mb-6 text-4xl md:text-5xl text-center">
            24x7 Global IT Onsite Services
          </GradientHeading>
          <p className="text-lg text-zion-slate-light mb-8 max-w-md text-center">
            Worldwide coverage and rapid dispatch of certified technicians.
          </p>
        </div>
        <div className="bg-zion-blue-light p-6 rounded-lg shadow-lg w-full max-w-md md:ml-auto">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <Image
              src="/vite.svg"
              alt="Technician"
              width={200}
              height={200}
              className="w-full h-auto md:w-40"
              priority
            />
            <form onSubmit={handleSubmit} className="space-y-4 flex-1">
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Your name"
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
                required
              />
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email"
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
                required
              />
              <Input
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone number"
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
              />
              <Input
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                placeholder="Company"
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
              />
              <Input
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Service location"
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white"
                required
              />
              <Textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Describe the issue or service needed"
                className="bg-zion-blue-dark border-zion-blue-light focus:border-zion-purple focus:ring-zion-purple text-white min-h-[80px]"
              />
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-3 px-6 transition-transform hover:scale-105"
              >
                Request Service
              </Button>
            </form>
          </div>
          <p className="text-xs text-center text-zion-slate-light mt-3">
            Available worldwide, 24 hours a day
          </p>
        </div>
      </div>
    </section>
  );
}
