
export const HowItWorksSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a comprehensive project plan',
      icon: '🔍'
    },
    {
      number: '02',
      title: 'Design & Development',
      description: 'Our expert team builds your solution using cutting-edge technologies',
      icon: '⚙️'
    },
    {
      number: '03',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing ensures your solution meets the highest standards',
      icon: '✅'
    },
    {
      number: '04',
      title: 'Deployment & Support',
      description: 'Smooth deployment with ongoing support and maintenance',
      icon: '🚀'
    }
  ];

  return (
    <section className="py-16 bg-zion-slate-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Our proven process ensures successful project delivery every time
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center relative">
              {/* Connection line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-zion-cyan to-zion-purple transform -translate-y-1/2 z-0"></div>
              )}
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-zion-gold rounded-full flex items-center justify-center text-sm font-bold text-white">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                <p className="text-zion-slate-light">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-zion-cyan hover:bg-zion-cyan-dark text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};
