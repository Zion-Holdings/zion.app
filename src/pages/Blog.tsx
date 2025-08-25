

const Blog = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Our <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Blog</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Latest insights, news, and updates from Zion Tech Group.
        </p>
        <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50">
          <p className="text-gray-300 text-lg">
            Coming soon! We're working on bringing you the latest technology insights and company updates.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
