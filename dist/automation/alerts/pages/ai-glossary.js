"use strict";
(() => {
var exports = {};
exports.id = 362515;
exports.ids = [362515,890636];
exports.modules = {

/***/ 277061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AIGlossaryPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(849788);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(919918);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);




function AIGlossaryPage() {
  var [searchTerm, setSearchTerm] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('');
  var [selectedCategory, setSelectedCategory] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('all');
  var glossaryData = {
    'AI Fundamentals': [{
      term: 'Artificial Intelligence (AI)',
      definition: 'The simulation of human intelligence in machines that are programmed to think and learn like humans.',
      examples: 'Machine learning, natural language processing, computer vision'
    }, {
      term: 'Machine Learning (ML)',
      definition: 'A subset of AI that enables systems to automatically learn and improve from experience without being explicitly programmed.',
      examples: 'Predictive models, recommendation systems, fraud detection'
    }, {
      term: 'Deep Learning',
      definition: 'A subset of machine learning that uses neural networks with multiple layers to model and understand complex patterns.',
      examples: 'Image recognition, speech processing, autonomous vehicles'
    }, {
      term: 'Neural Network',
      definition: 'A computing system inspired by biological neural networks, consisting of interconnected nodes that process information.',
      examples: 'Convolutional neural networks, recurrent neural networks'
    }],
    'Automation & RPA': [{
      term: 'Robotic Process Automation (RPA)',
      definition: 'Technology that uses software robots to automate repetitive, rule-based digital tasks.',
      examples: 'Data entry, invoice processing, customer service responses'
    }, {
      term: 'Workflow Automation',
      definition: 'The automation of business processes and workflows to improve efficiency and reduce manual intervention.',
      examples: 'Approval processes, document routing, task assignments'
    }, {
      term: 'Intelligent Process Automation (IPA)',
      definition: 'Combines RPA with AI capabilities to handle more complex, cognitive tasks.',
      examples: 'Document analysis, decision making, process optimization'
    }, {
      term: 'Business Process Management (BPM)',
      definition: 'A systematic approach to making an organization\'s workflow more effective, efficient, and capable of adapting to changing environments.',
      examples: 'Process modeling, optimization, monitoring'
    }],
    'Data & Analytics': [{
      term: 'Big Data',
      definition: 'Extremely large datasets that can be analyzed computationally to reveal patterns, trends, and associations.',
      examples: 'Social media data, sensor data, transaction records'
    }, {
      term: 'Data Mining',
      definition: 'The process of discovering patterns and relationships in large datasets using statistical and machine learning techniques.',
      examples: 'Market basket analysis, customer segmentation, fraud detection'
    }, {
      term: 'Predictive Analytics',
      definition: 'The use of statistical techniques and machine learning to analyze current and historical facts to make predictions about future events.',
      examples: 'Sales forecasting, risk assessment, demand planning'
    }, {
      term: 'Business Intelligence (BI)',
      definition: 'Technologies, tools, and practices for collecting, integrating, analyzing, and presenting business information.',
      examples: 'Dashboards, reports, data visualization'
    }],
    'Cloud & Infrastructure': [{
      term: 'Cloud Computing',
      definition: 'The delivery of computing services over the internet, including servers, storage, databases, networking, and software.',
      examples: 'AWS, Azure, Google Cloud Platform'
    }, {
      term: 'Edge Computing',
      definition: 'A distributed computing paradigm that brings computation and data storage closer to the location where it is needed.',
      examples: 'IoT devices, autonomous vehicles, smart cities'
    }, {
      term: 'Containerization',
      definition: 'A lightweight alternative to full machine virtualization that involves encapsulating an application and its dependencies.',
      examples: 'Docker, Kubernetes, microservices'
    }, {
      term: 'Serverless Computing',
      definition: 'A cloud computing execution model where the cloud provider automatically manages the allocation of machine resources.',
      examples: 'AWS Lambda, Azure Functions, Google Cloud Functions'
    }],
    'AI Ethics & Governance': [{
      term: 'Algorithmic Bias',
      definition: 'Systematic and repeatable errors in a computer system that create unfair outcomes, such as privileging one arbitrary group of users over others.',
      examples: 'Discriminatory hiring algorithms, biased loan approval systems'
    }, {
      term: 'Explainable AI (XAI)',
      definition: 'AI systems that can explain their reasoning, decision-making processes, and recommendations in human-understandable terms.',
      examples: 'Interpretable machine learning models, transparent decision systems'
    }, {
      term: 'AI Governance',
      definition: 'The framework of rules, policies, and procedures that ensure AI systems are developed and deployed responsibly.',
      examples: 'Ethics committees, compliance frameworks, audit procedures'
    }, {
      term: 'Responsible AI',
      definition: 'The practice of designing, developing, and deploying AI systems in a way that is ethical, transparent, and accountable.',
      examples: 'Fairness testing, privacy protection, human oversight'
    }],
    'Emerging Technologies': [{
      term: 'Quantum Computing',
      definition: 'A type of computation that harnesses quantum mechanical phenomena to process information in ways that classical computers cannot.',
      examples: 'Cryptography, optimization problems, drug discovery'
    }, {
      term: 'Generative AI',
      definition: 'AI systems that can generate new content, such as text, images, audio, or video, based on training data.',
      examples: 'ChatGPT, DALL-E, music generation systems'
    }, {
      term: 'Computer Vision',
      definition: 'A field of AI that trains computers to interpret and understand visual information from the world.',
      examples: 'Facial recognition, object detection, medical imaging'
    }, {
      term: 'Natural Language Processing (NLP)',
      definition: 'A branch of AI that helps computers understand, interpret, and manipulate human language.',
      examples: 'Chatbots, language translation, sentiment analysis'
    }]
  };
  var allTerms = Object.values(glossaryData).flat();
  var filteredTerms = allTerms.filter(term => {
    var matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) || term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    var matchesCategory = selectedCategory === 'all' || Object.keys(glossaryData).includes(selectedCategory);
    return matchesSearch && matchesCategory;
  });
  var categories = ['all', ...Object.keys(glossaryData)];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("title", {
        children: "AI & Automation Glossary | Zion Tech Group"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
        name: "description",
        content: "Comprehensive glossary of AI, machine learning, automation, and technology terms. Understand key concepts and definitions in the world of artificial intelligence."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
        property: "og:title",
        content: "AI & Automation Glossary - Zion Tech Group"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
        property: "og:description",
        content: "Comprehensive glossary of AI and automation terms and definitions."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
      className: "min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("main", {
        className: "container mx-auto px-6 py-12",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "max-w-7xl mx-auto",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("nav", {
            className: "mb-8",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
              href: "/",
              className: "text-cyan-400 hover:text-cyan-300 transition-colors",
              children: "\u2190 Back to Home"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("header", {
            className: "text-center mb-16",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
              className: "text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent",
              children: "AI & Automation Glossary"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-xl text-white/80 max-w-4xl mx-auto",
              children: "A comprehensive reference guide to key terms, concepts, and definitions in artificial intelligence, machine learning, and automation technology."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "mb-12",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex flex-col md:flex-row gap-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "flex-1",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("input", {
                  type: "text",
                  placeholder: "Search terms and definitions...",
                  value: searchTerm,
                  onChange: e => setSearchTerm(e.target.value),
                  className: "w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-cyan-400/50 transition-colors"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "md:w-64",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("select", {
                  value: selectedCategory,
                  onChange: e => setSelectedCategory(e.target.value),
                  className: "w-full px-6 py-4 bg-white/10 border border-white/20 rounded-xl text-white focus:outline-none focus:border-cyan-400/50 transition-colors",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                    value: "all",
                    children: "All Categories"
                  }), Object.keys(glossaryData).map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("option", {
                    value: category,
                    children: category
                  }, category))]
                })
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "mb-8",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
              className: "text-white/60",
              children: ["Found ", filteredTerms.length, " term", filteredTerms.length !== 1 ? 's' : '', searchTerm && " matching \"".concat(searchTerm, "\""), selectedCategory !== 'all' && " in ".concat(selectedCategory)]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "space-y-6",
            children: filteredTerms.map((term, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-2xl font-bold mb-4 text-cyan-400",
                children: term.term
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "text-white/80 mb-4 text-lg leading-relaxed",
                children: term.definition
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "bg-white/5 rounded-lg p-4",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h4", {
                  className: "text-sm font-semibold text-cyan-300 mb-2",
                  children: "Examples:"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                  className: "text-white/70 text-sm",
                  children: term.examples
                })]
              })]
            }, index))
          }), filteredTerms.length === 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "text-center py-16",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "text-6xl mb-6",
              children: "\uD83D\uDD0D"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
              className: "text-2xl font-bold text-white mb-4",
              children: "No terms found"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-white/60 mb-8",
              children: "Try adjusting your search terms or category filter"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
              onClick: () => {
                setSearchTerm('');
                setSelectedCategory('all');
              },
              className: "px-6 py-3 bg-cyan-400 text-white rounded-lg hover:bg-cyan-500 transition-colors",
              children: "Clear Filters"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("section", {
            className: "mt-20",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
              className: "text-3xl font-bold mb-12 text-center text-white",
              children: "Browse by Category"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
              className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
              children: Object.entries(glossaryData).map(_ref => {
                var [category, terms] = _ref;
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:border-cyan-400/30 transition-all duration-300",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                    className: "text-xl font-bold mb-4 text-cyan-400",
                    children: category
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("p", {
                    className: "text-white/70 mb-4",
                    children: [terms.length, " term", terms.length !== 1 ? 's' : '', " in this category"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("ul", {
                    className: "space-y-2 text-sm text-white/60",
                    children: [terms.slice(0, 3).map((term, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
                      children: ["\u2022 ", term.term]
                    }, index)), terms.length > 3 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("li", {
                      className: "text-cyan-400",
                      children: ["... and ", terms.length - 3, " more"]
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("button", {
                    onClick: () => {
                      setSelectedCategory(category);
                      setSearchTerm('');
                    },
                    className: "mt-4 px-4 py-2 bg-cyan-400/20 text-cyan-400 rounded-lg hover:bg-cyan-400/30 transition-colors text-sm",
                    children: "View All Terms"
                  })]
                }, category);
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
            className: "mt-20 text-center",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "bg-gradient-to-r from-cyan-400/20 to-fuchsia-400/20 rounded-2xl p-12 border border-cyan-400/30",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
                className: "text-3xl font-bold mb-6 text-white",
                children: "Ready to Learn More?"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "text-xl text-white/80 mb-8 max-w-3xl mx-auto",
                children: "Explore our comprehensive resources to deepen your understanding of AI and automation, or contact our experts for personalized guidance."
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "flex flex-col sm:flex-row gap-4 justify-center",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/ai-insights",
                  className: "bg-gradient-to-r from-cyan-400 to-fuchsia-400 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-500 hover:to-fuchsia-500 transition-all duration-300",
                  children: "Explore AI Insights"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                  href: "/contact",
                  className: "border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300",
                  children: "Contact Our Experts"
                })]
              })]
            })
          })]
        })
      })
    })]
  });
}

/***/ }),

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 608732:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 646060:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

/***/ }),

/***/ 737499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getServerSideProps: () => (/* binding */ getServerSideProps),
/* harmony export */   getStaticPaths: () => (/* binding */ getStaticPaths),
/* harmony export */   getStaticProps: () => (/* binding */ getStaticProps),
/* harmony export */   handler: () => (/* binding */ handler),
/* harmony export */   reportWebVitals: () => (/* binding */ reportWebVitals),
/* harmony export */   routeModule: () => (/* binding */ routeModule),
/* harmony export */   unstable_getServerProps: () => (/* binding */ unstable_getServerProps),
/* harmony export */   unstable_getServerSideProps: () => (/* binding */ unstable_getServerSideProps),
/* harmony export */   unstable_getStaticParams: () => (/* binding */ unstable_getStaticParams),
/* harmony export */   unstable_getStaticPaths: () => (/* binding */ unstable_getStaticPaths),
/* harmony export */   unstable_getStaticProps: () => (/* binding */ unstable_getStaticProps)
/* harmony export */ });
/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(863885);
/* harmony import */ var next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(880237);
/* harmony import */ var next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(781413);
/* harmony import */ var private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(833932);
/* harmony import */ var private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(805164);
/* harmony import */ var private_next_pages_ai_glossary_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(277061);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ai_glossary_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ai_glossary_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ai_glossary_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ai_glossary_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ai_glossary_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ai_glossary_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ai_glossary_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ai_glossary_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ai_glossary_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ai_glossary_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_ai_glossary_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/ai-glossary",
        pathname: "/ai-glossary",
        // The following aren't used in production.
        bundlePath: '',
        filename: ''
    },
    distDir: ".next" || 0,
    relativeProjectDir:  false || '',
    components: {
        // default export might not exist when optimized for data only
        App: private_next_pages_app_tsx__WEBPACK_IMPORTED_MODULE_4__["default"],
        Document: (private_next_pages_document_tsx__WEBPACK_IMPORTED_MODULE_3___default())
    },
    userland: private_next_pages_ai_glossary_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/ai-glossary",
    config,
    userland: private_next_pages_ai_glossary_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


/***/ }),

/***/ 840361:
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.prod.js");

/***/ }),

/***/ 882015:
/***/ ((module) => {

module.exports = require("react");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(737499)));
module.exports = __webpack_exports__;

})();