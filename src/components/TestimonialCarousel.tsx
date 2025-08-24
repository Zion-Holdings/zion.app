import React from 'react';

export function TestimonialCarousel() {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CTO at TechCorp',
      content: 'Zion Tech Group has revolutionized how we find AI talent. The platform is intuitive and the quality of candidates is exceptional.',
      avatar: '/avatars/sarah.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'AI Engineer',
      content: 'As a freelancer, Zion Tech Group has opened up incredible opportunities. The marketplace is well-organized and the clients are top-tier.',
      avatar: '/avatars/michael.jpg'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          What Our Users Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <p className="text-zion-slate-light mb-4 italic">"{testimonial.content}"</p>
              <div className="flex items-center space-x-3">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-sm text-zion-slate-light">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}