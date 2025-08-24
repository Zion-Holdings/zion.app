export function ITServiceRequestHero() {
  return (
    <section className="py-16 bg-gradient-to-r from-zion-blue to-zion-purple">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          Need IT Services?
        </h2>
        <p className="text-xl text-zion-cyan mb-8 max-w-3xl mx-auto">
          Get expert IT support, cybersecurity, and digital transformation services from our certified professionals.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors">
            Request Quote
          </button>
          <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}