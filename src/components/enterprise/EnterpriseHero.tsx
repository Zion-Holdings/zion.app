import React from "react";
import Image from "next/image"; // Import Image
import { Button } from "@/components/ui/button";
import { GradientHeading } from "@/components/GradientHeading";

export function EnterpriseHero() {
  return (
    <section className="py-20 px-4 md:px-6 bg-gradient-to-b from-background to-background/80">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Enterprise <GradientHeading className="inline">Talent Solutions</GradientHeading>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Scale your talent acquisition with a custom-branded hiring portal, dedicated talent pool, and powerful admin controls.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="w-full sm:w-auto">
                Schedule a Demo
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto">
                Download Brochure
              </Button>
            </div>
            <div className="mt-10 flex items-center gap-4">
              <p className="text-sm text-muted-foreground">Trusted by leading enterprises:</p>
              <div className="flex gap-6 opacity-70 items-center"> {/* Added items-center for better alignment */}
                <Image src="/logos/zion-logo.png" alt="Enterprise 1" width={32} height={32} className="h-8 w-auto" />
                <Image src="/logos/zion-logo.png" alt="Enterprise 2" width={32} height={32} className="h-8 w-auto" />
                <Image src="/logos/zion-logo.png" alt="Enterprise 3" width={32} height={32} className="h-8 w-auto" />
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-lg bg-gradient-to-br from-zion-cyan/20 to-zion-purple/20 p-1">
              <div className="w-full h-full bg-card rounded-md flex items-center justify-center relative overflow-hidden"> {/* Added relative and overflow-hidden */}
                <Image
                  src="/placeholder.svg"
                  alt="Enterprise Dashboard"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded" // className applies to the wrapper if fill is true
                />
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 bg-card p-4 rounded-lg shadow-lg border border-border">
              <p className="text-sm font-medium">Custom branding & white labeling</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
