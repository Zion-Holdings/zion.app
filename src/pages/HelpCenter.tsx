
  const helpCategories = [
    {
      icon: <BookOpen className="h-8 w-8" />,
      title: "Getting Started",
    }
  ];

  const quickActions = [
    {
    }
  ];

  const popularArticles = [
    "How to create your first project",
    "Understanding billing and pricing",
    "Common technical issues and solutions",
    "AI model training and deployment",
    "Frontend development best practices"
  ];

  const categories = [
    { id: 'all', label: 'All Categories', icon: '📚' },
    ...helpCategories.map(cat => ({ id: cat.title, label: cat.title, icon: cat.icon }))
  ];

  // Filter help data based on search term and active category
  const filteredHelpData = helpCategories.filter(category => {
    if (activeCategory !== 'all' && category.title !== activeCategory) {
      return false;
    }
    
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      const hasMatchingTitle = category.title.toLowerCase().includes(searchLower);
      const hasMatchingDescription = category.description.toLowerCase().includes(searchLower);
      const hasMatchingArticles = category.articles.some(article => 
        article.title.toLowerCase().includes(searchLower) ||
        article.content.toLowerCase().includes(searchLower)
      );
      return hasMatchingTitle || hasMatchingDescription || hasMatchingArticles;
    }
    
    return true;
  });

  const handleArticleClick = (articleTitle: string) => {
    setSelectedArticle(selectedArticle === articleTitle ? null : articleTitle);
  };

  return (
            </p>

            </div>
          </div>

          {/* Contact Support */}
          <div className="text-center">
            <Card className="bg-zion-blue-dark border-zion-purple/20 max-w-2xl mx-auto">
              <CardHeader>
                <CardTitle className="text-2xl text-zion-cyan">
                  Need more help?
                </CardTitle>
                <CardDescription className="text-zion-slate-light">
                  Our support team is available 24/7 to assist you.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-zion-slate-light">
                    Can't find what you're looking for? Contact our support team directly.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                      to="/contact"
                      className="inline-flex items-center justify-center px-6 py-3 bg-zion-purple text-white font-medium rounded-lg hover:bg-zion-purple-light transition-colors"
                    >
                      Contact Support
                    </Link>
                    <Link
                      to="/faq"
                      className="inline-flex items-center justify-center px-6 py-3 border border-zion-purple text-zion-cyan font-medium rounded-lg hover:bg-zion-purple/10 transition-colors"
                    >
                      View FAQ
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Quick Actions Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quick Actions
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Get immediate help or access resources quickly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickActions.map((action, index) => (
              <div 
                key={index} 
                className={`bg-gradient-to-br ${action.color} rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105 card-hover ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="p-6 text-center">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {action.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{action.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{action.description}</p>
                  <a
                    href={action.href}
                    className="inline-block bg-cyan-500 text-white px-4 py-2 rounded-lg font-medium hover:bg-cyan-400 transition-colors"
                  >
                    {action.action}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Help Categories Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Help Categories
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              {filteredHelpData.length > 0 
                ? `Browse ${filteredHelpData.length} categories of help articles and guides.`
                : 'No categories match your current search criteria. Try adjusting your search terms.'
              }
            </p>
          </div>

          {filteredHelpData.length > 0 ? (
            <div className="space-y-8">
              {filteredHelpData.map((category, categoryIndex) => (
                <div 
                  key={categoryIndex}
                  className={`bg-gradient-to-br ${category.color} rounded-2xl border border-white/20 overflow-hidden ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${categoryIndex * 0.1}s` }}
                >
                  {/* Category Header */}
                  <div className="p-6 border-b border-white/20">
                    <div className="flex items-center">
                      <div className="text-4xl mr-4">{category.icon}</div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{category.title}</h3>
                        <p className="text-gray-300">{category.description}</p>
                      </div>
                    </div>
                  </div>

                  {/* Articles */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {category.articles.map((article, articleIndex) => (
                        <div 
                          key={articleIndex}
                          className="bg-white/10 rounded-lg p-4 hover:bg-white/20 transition-colors cursor-pointer"
                          onClick={() => handleArticleClick(article.title)}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="text-lg font-semibold text-white mb-2">{article.title}</h4>
                            <div className="flex items-center gap-2">
                              <span className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">
                                {article.readTime}
                              </span>
                              <span className={`px-2 py-1 rounded-full text-xs ${
                                article.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-300' :
                                article.difficulty === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                                'bg-red-500/20 text-red-300'
                              }`}>
                                {article.difficulty}
                              </span>
                            </div>
                          </div>
                          
                          {selectedArticle === article.title && (
                            <div className="mt-3 p-3 bg-white/10 rounded border-l-4 border-cyan-400">
                              <p className="text-gray-300 text-sm">{article.content}</p>
                              <button className="mt-2 text-cyan-400 text-sm hover:text-cyan-300">
                                Read Full Article →
                              </button>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-4">No help articles found</h3>
              <p className="text-gray-300 mb-8">
                Try adjusting your search terms or browse all categories.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('all');
                }}
                className="bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-400 transition-colors"
              >
                View All Articles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Popular Articles Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Popular Articles
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Most frequently accessed help articles and guides
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {popularArticles.map((article, index) => (
              <div 
                key={index}
                className="bg-gradient-to-br from-slate-800/50 to-blue-900/50 rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105 card-hover p-6"
              >
                <div className="flex items-center mb-4">
                  <div className="text-2xl mr-3 group-hover:scale-110 transition-transform duration-300">
                    📖
                  </div>
                  <h3 className="text-lg font-bold text-white">{article}</h3>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  Quick access to this popular help article with detailed information and step-by-step guidance.
                </p>
                <button className="text-cyan-400 text-sm hover:text-cyan-300 group-hover:underline">
                  Read Article →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-white text-center">
            <h3 className="text-4xl font-bold mb-4">
              Still Need Help?
            </h3>
            <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
              Can't find what you're looking for? Our support team is here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Support
              </a>
              <a
                href="/request-quote"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HelpCenter;