import { TUTORIALS } from "@/data/tutorials";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Tutorials() {
  return (
    <>
      <SEO title="Tutorials" description="Step-by-step guides to help you build with Zion" />
      <div className="min-h-screen bg-zion-blue pt-12 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <GradientHeading>Tutorials</GradientHeading>
            <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
              Learn how to use Zion with these in-depth tutorials
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TUTORIALS.map((tutorial) => (
              <Card
                key={tutorial.id}
                className="bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300 flex flex-col"
              >
                <CardContent className="p-6 flex-1 flex flex-col gap-4">
                  <h3 className="text-xl font-bold text-white">{tutorial.title}</h3>
                  <p className="text-zion-slate-light line-clamp-3">{tutorial.excerpt}</p>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Button variant="link" className="text-zion-cyan p-0" asChild>
                    <Link href={`/tutorials/${tutorial.slug}`}>Read More →</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
