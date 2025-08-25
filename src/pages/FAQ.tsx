
  const faqData = [
    {
      category: "General",
        }
      ]
    },
    {
        }
      ]
    },
    {
        }
      ]
    },
    {
        }
      ]
    },
    {
        }
      ]
    }
  ];

  // Filter FAQ data based on search term and active category
  const filteredFAQData = faqData.filter(category => {
    if (activeCategory !== 'all' && category.category !== activeCategory) {
      return false;
    }
    
    if (searchTerm) {
      const hasMatchingQuestion = category.questions.some(q => 
        q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.answer.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return hasMatchingQuestion;
    }
    
    return true;
  });

  const categories = [
    { id: 'all', label: 'All Categories', icon: '📚' },
    ...faqData.map(cat => ({ id: cat.category, label: cat.category, icon: cat.icon }))
  ];

  return (
          </div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {filteredFAQData.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-6">🤔</div>
              <h3 className="text-2xl font-bold text-white mb-4">No questions found</h3>
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
                View All Questions
              </button>
            </div>
          ) : (
            <div className="space-y-8">
              {filteredFAQData.map((category, categoryIndex) => (
                <div 
                  key={categoryIndex}
                  className={`bg-gradient-to-br ${category.color} rounded-2xl border border-white/20 overflow-hidden ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${categoryIndex * 0.1}s` }}
                >
                  {/* Category Header */}
                  <div className="p-6 border-b border-white/20">
                    <h2 className="text-2xl font-bold text-white flex items-center">
                      <span className="mr-3 text-3xl">{category.icon}</span>
                      {category.category}
                    </h2>
                  </div>

                  {/* Questions */}
                  <Accordion.Root type="single" collapsible className="divide-y divide-white/10">
                    {category.questions.map((item, questionIndex) => (
                      <Accordion.Item
                        key={questionIndex}
                        value={`${categoryIndex}-${questionIndex}`}
                        className="transition-all duration-200 hover:bg-white/5"
                      >
                        <Accordion.Header>
                          <Accordion.Trigger className="w-full px-6 py-4 text-left hover:bg-white/5 transition-colors duration-200 group">
                            <div className="flex items-center justify-between">
                              <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                                {item.question}
                              </h3>
                              <svg
                                className="w-5 h-5 text-gray-400 group-hover:text-cyan-300 transition-all duration-200 group-data-[state=open]:rotate-180"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                              </svg>
                            </div>
                          </Accordion.Trigger>
                        </Accordion.Header>
                        <Accordion.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                          <div className="px-6 pb-4">
                            <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                          </div>
                        </Accordion.Content>
                      </Accordion.Item>
                    ))}
                  </Accordion.Root>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Still Have Questions Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-white">
            <h3 className="text-4xl font-bold mb-4">
              Still Have Questions?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Can't find what you're looking for? Our team is here to help!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
              <a
                href="/request-quote"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Get Free Quote
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;