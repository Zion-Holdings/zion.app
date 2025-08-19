
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar } from "@/components/ui/avatar";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Zion has revolutionized how we source AI talent. We found three machine learning specialists within just one week!",
    author: "Sarah Chen",
    role: "CTO, DataMind Solutions",
    avatar: "https://i.pravatar.cc/150?img=32",
    company: "DataMind",
  },
  {
    quote: "The IT equipment rentals saved us thousands compared to buying outright. Their 24/7 support is unmatched in the industry.",
    author: "Michael Rodriguez",
    role: "IT Director, GlobalTech",
    avatar: "https://i.pravatar.cc/150?img=12",
    company: "GlobalTech",
  },
  {
    quote: "As an AI developer, Zion has become my primary platform for showcasing work and finding new clients. The free publishing is a game-changer.",
    author: "Aanya Patel",
    role: "Independent AI Consultant",
    avatar: "https://i.pravatar.cc/150?img=28",
    company: "AI Systems",
  },
  {
    quote: "Their green IT recycling program helped us meet our sustainability goals while upgrading our server infrastructure.",
    author: "Thomas Klein",
    role: "Operations Manager, EcoTech Systems",
    avatar: "https://i.pravatar.cc/150?img=67",
    company: "EcoTech",
  },
];

export function TestimonialCarousel() {
  return (
    <section className="py-20 bg-zion-blue-dark">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-3">What Our Users Say</h3>
          <p className="text-zion-slate-light text-lg max-w-2xl mx-auto">
            Discover how Zion is transforming the tech and AI marketplace ecosystem
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto px-8">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/1 lg:basis-1/1">
                  <Card className="bg-zion-blue-light border border-zion-purple/20 hover:border-zion-purple/40 transition-all duration-300">
                    <CardContent className="p-8 flex flex-col md:flex-row gap-6">
                      <div className="flex-shrink-0 flex flex-col items-center">
                        <Avatar className="h-20 w-20 border-2 border-zion-cyan mb-3">
                          <img src={testimonial.avatar} alt={testimonial.author} />
                        </Avatar>
                        <div className="text-center md:text-left">
                          <p className="font-bold text-zion-cyan">{testimonial.author}</p>
                          <p className="text-zion-slate-light text-sm">{testimonial.role}</p>
                        </div>
                      </div>
                      <div className="flex-1">
                        <Quote className="h-10 w-10 text-zion-cyan opacity-30 mb-3" />
                        <p className="text-white text-lg mb-6">"{testimonial.quote}"</p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="relative static left-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />
              <CarouselNext className="relative static right-0 translate-y-0 bg-zion-blue-dark border-zion-purple/30 text-zion-cyan hover:bg-zion-blue-light hover:text-zion-cyan hover:border-zion-purple" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}
