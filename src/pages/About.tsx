

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Zion Tech Group</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          We are a leading technology company specializing in AI, IT services, and micro SAAS solutions.
        </p>
        <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
          <p className="text-gray-300 text-lg leading-relaxed">
            Zion Tech Group is dedicated to transforming businesses through innovative technology solutions. 
            Our team of experts combines cutting-edge AI with proven IT infrastructure to deliver results 
            that drive growth and efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;