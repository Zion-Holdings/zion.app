
import React from "react";
import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight } from 'lucide-react';



export function EnterpriseCTA() {
  return (
    <section id="contact" className="py-20 px-4 md:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="rounded-xl bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-purple-light/20 p-1">
          <div className="bg-card rounded-lg shadow-sm p-8 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to transform your talent acquisition?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Schedule a personalized demo with our enterprise team to see how Zion AI can help you build your dream team.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="gap-2">
                    <Calendar className="h-5 w-5" />
                    Schedule a Demo
                  </Button>
                  <Button size="lg" variant="outline" className="gap-2">
                    Contact Sales
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </div>
              </div>
              <div className="rounded-lg bg-muted p-6">
                <h3 className="font-bold text-xl mb-4">What to expect in the demo</h3>
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-sm font-medium">1</span>
                    </div>
                    <p>Personalized walkthrough of the platform</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-sm font-medium">2</span>
                    </div>
                    <p>Custom pricing based on your team size</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-sm font-medium">3</span>
                    </div>
                    <p>Q&A with our enterprise solution experts</p>
                  </li>
                  <li className="flex gap-3">
                    <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-sm font-medium">4</span>
                    </div>
                    <p>Free consultation on implementation</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
