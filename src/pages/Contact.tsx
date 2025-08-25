

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Contact <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Us</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Get in touch with our team of experts to discuss your technology needs.
        </p>
        <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Contact Information</h3>
              <div className="space-y-4 text-gray-300">
                <p><strong>Phone:</strong> +1 302 464 0950</p>
                <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
                <p><strong>Website:</strong> ziontechgroup.com</p>
                <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Get Started</h3>
              <p className="text-gray-300 mb-4">
                Ready to transform your business? Contact us today for a free consultation.
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
