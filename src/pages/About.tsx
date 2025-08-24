

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple text-white">
      <div className="container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-holographic-gradient bg-clip-text text-transparent">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto">
            Leading the future of technology with innovative solutions and cutting-edge expertise
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
              <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                At Zion Tech Group, we're dedicated to transforming businesses through innovative technology solutions. 
                Our mission is to empower organizations with cutting-edge tools and expertise that drive growth, 
                efficiency, and competitive advantage.
              </p>
              <p className="text-zion-slate-light text-lg leading-relaxed">
                We believe in the power of technology to solve complex challenges and create opportunities 
                for businesses of all sizes. From AI and machine learning to cybersecurity and cloud infrastructure, 
                we provide comprehensive solutions that adapt to your unique needs.
              </p>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
              <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                We envision a future where technology seamlessly integrates with business operations, 
                creating intelligent, automated, and highly efficient systems that drive innovation 
                and sustainable growth.
              </p>
              <p className="text-zion-slate-light text-lg leading-relaxed">
                By staying at the forefront of emerging technologies and industry trends, 
                we help our clients navigate the digital landscape with confidence and achieve 
                their strategic objectives.
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-8">Why Choose Zion Tech Group?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-zion-cyan/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🚀</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                <p className="text-zion-slate-light">Cutting-edge solutions that keep you ahead of the competition</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-zion-purple/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">💡</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Expertise</h3>
                <p className="text-zion-slate-light">Deep knowledge across all major technology domains</p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-zion-blue/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-4xl">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Partnership</h3>
                <p className="text-zion-slate-light">Long-term relationships built on trust and results</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}