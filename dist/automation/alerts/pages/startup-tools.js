"use strict";
(() => {
var exports = {};
exports.id = 153717;
exports.ids = [153717,890636];
exports.modules = {

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 346087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ StartupToolsPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(849788);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_ui_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(338423);
/* harmony import */ var _components_ui_Button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(416729);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7887);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);






function StartupToolsPage() {
  var startupTools = [{
    name: 'HubSpot',
    description: 'All-in-one inbound marketing, sales, and customer service platform designed to help businesses grow better.',
    category: 'Marketing & Sales',
    pricing: 'Free - $45/month',
    rating: 4.7,
    users: '135K+',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Target, {
      className: "w-8 h-8 text-orange-400"
    }),
    color: 'bg-gradient-to-br from-orange-500 to-red-600',
    features: ['CRM system', 'Email marketing', 'Lead generation', 'Analytics & reporting', 'Marketing automation', 'Free tier available'],
    website: 'https://hubspot.com',
    useCase: 'Perfect for startups that want to implement inbound marketing strategies and manage customer relationships effectively.',
    pros: ['Free tier', 'All-in-one solution', 'Great for beginners', 'Excellent support'],
    cons: ['Can get expensive', 'Complex for small teams', 'Limited customization'],
    bestFor: 'B2B startups, SaaS companies, marketing teams'
  }, {
    name: 'Mailchimp',
    description: 'Email marketing platform that helps businesses create, send, and track email campaigns with ease.',
    category: 'Email Marketing',
    pricing: 'Free - $59/month',
    rating: 4.5,
    users: '12M+',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Mail, {
      className: "w-8 h-8 text-yellow-400"
    }),
    color: 'bg-gradient-to-br from-yellow-500 to-orange-600',
    features: ['Email templates', 'Automation workflows', 'A/B testing', 'Analytics & reporting', 'Integration ecosystem', 'Free tier available'],
    website: 'https://mailchimp.com',
    useCase: 'Ideal for startups that need to build email lists, nurture leads, and communicate with customers.',
    pros: ['Free tier', 'Easy to use', 'Good templates', 'Affordable'],
    cons: ['Limited free features', 'Basic automation', 'Can be expensive'],
    bestFor: 'E-commerce, content creators, small businesses'
  }, {
    name: 'Calendly',
    description: 'Scheduling automation platform that eliminates the back-and-forth of scheduling meetings and calls.',
    category: 'Productivity',
    pricing: 'Free - $12/month',
    rating: 4.8,
    users: '10M+',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Calendar, {
      className: "w-8 h-8 text-blue-400"
    }),
    color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    features: ['Automated scheduling', 'Calendar integration', 'Custom booking pages', 'Team scheduling', 'Analytics & reporting', 'Free tier available'],
    website: 'https://calendly.com',
    useCase: 'Essential for startups that need to schedule sales calls, investor meetings, and team collaborations efficiently.',
    pros: ['Free tier', 'Easy integration', 'Professional appearance', 'Time-saving'],
    cons: ['Limited free features', 'Basic customization', 'Can be expensive'],
    bestFor: 'Sales teams, consultants, remote teams'
  }, {
    name: 'Canva',
    description: 'Graphic design platform that makes it easy to create professional designs without design skills.',
    category: 'Design',
    pricing: 'Free - $12.99/month',
    rating: 4.6,
    users: '100M+',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Lightbulb, {
      className: "w-8 h-8 text-blue-400"
    }),
    color: 'bg-gradient-to-br from-blue-500 to-cyan-600',
    features: ['Design templates', 'Stock photos & icons', 'Brand kit', 'Team collaboration', 'Social media formats', 'Free tier available'],
    website: 'https://canva.com',
    useCase: 'Perfect for startups that need to create marketing materials, social media content, and presentations.',
    pros: ['Free tier', 'Easy to use', 'Great templates', 'Affordable'],
    cons: ['Limited customization', 'Watermark on free', 'Basic features'],
    bestFor: 'Marketing teams, content creators, small businesses'
  }, {
    name: 'Buffer',
    description: 'Social media management platform that helps businesses schedule posts, analyze performance, and manage multiple accounts.',
    category: 'Social Media',
    pricing: 'Free - $15/month',
    rating: 4.4,
    users: '140K+',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Globe, {
      className: "w-8 h-8 text-green-400"
    }),
    color: 'bg-gradient-to-br from-green-500 to-emerald-600',
    features: ['Social media scheduling', 'Analytics & reporting', 'Team collaboration', 'Content calendar', 'Multiple platforms', 'Free tier available'],
    website: 'https://buffer.com',
    useCase: 'Ideal for startups that want to maintain a consistent social media presence and grow their audience.',
    pros: ['Free tier', 'Easy to use', 'Good analytics', 'Affordable'],
    cons: ['Limited free features', 'Basic scheduling', 'Limited platforms'],
    bestFor: 'Social media managers, small businesses, content creators'
  }, {
    name: 'Notion',
    description: 'All-in-one workspace for notes, docs, projects, and team collaboration. Organize everything in one place.',
    category: 'Productivity',
    pricing: 'Free - $8/month',
    rating: 4.7,
    users: '20M+',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Zap, {
      className: "w-8 h-8 text-gray-400"
    }),
    color: 'bg-gradient-to-br from-gray-500 to-gray-700',
    features: ['Note-taking & docs', 'Project management', 'Team collaboration', 'Database & tables', 'Templates library', 'API integration'],
    website: 'https://notion.so',
    useCase: 'Perfect for startup teams that need a flexible workspace for documentation, project management, and knowledge sharing.',
    pros: ['Highly flexible', 'Beautiful interface', 'Great templates', 'Free tier'],
    cons: ['Learning curve', 'Limited offline access', 'Can be overwhelming'],
    bestFor: 'Remote teams, project managers, knowledge workers'
  }, {
    name: 'Stripe',
    description: 'Complete payment processing platform for online businesses. Accept payments, manage subscriptions, and handle compliance.',
    category: 'Payments',
    pricing: '2.9% + 30¢ per transaction',
    rating: 4.9,
    users: '1M+',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.DollarSign, {
      className: "w-8 h-8 text-blue-400"
    }),
    color: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    features: ['Global payment methods', 'Subscription billing', 'Fraud protection', 'Compliance tools', 'Developer-friendly API', 'Analytics dashboard'],
    website: 'https://stripe.com',
    useCase: 'Essential for any startup that needs to accept payments, especially SaaS companies and e-commerce businesses.',
    pros: ['Developer-friendly', 'Global reach', 'Excellent docs', 'Reliable'],
    cons: ['Higher fees than some alternatives', 'Complex for beginners', 'Strict requirements'],
    bestFor: 'SaaS companies, e-commerce, online businesses'
  }, {
    name: 'Intercom',
    description: 'Customer messaging platform that helps businesses build better customer relationships through personalized experiences.',
    category: 'Customer Support',
    pricing: '$39 - $999/month',
    rating: 4.6,
    users: '25K+',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Users, {
      className: "w-8 h-8 text-green-400"
    }),
    color: 'bg-gradient-to-br from-green-500 to-emerald-600',
    features: ['Live chat', 'Customer messaging', 'Help desk', 'User onboarding', 'Analytics & reporting', 'Integration ecosystem'],
    website: 'https://intercom.com',
    useCase: 'Perfect for SaaS startups and online businesses that want to provide excellent customer support and user engagement.',
    pros: ['Great UX', 'Powerful features', 'Good integrations', 'Mobile apps'],
    cons: ['Expensive', 'Complex pricing', 'Can be overwhelming'],
    bestFor: 'SaaS companies, online businesses, customer support teams'
  }, {
    name: 'Mixpanel',
    description: 'Product analytics platform that helps you understand how users interact with your product and make data-driven decisions.',
    category: 'Analytics',
    pricing: 'Free - $25/month',
    rating: 4.5,
    users: '26K+',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.BarChart3, {
      className: "w-8 h-8 text-purple-400"
    }),
    color: 'bg-gradient-to-br from-purple-500 to-pink-600',
    features: ['User behavior tracking', 'Funnel analysis', 'A/B testing', 'Real-time data', 'Custom events', 'Mobile analytics'],
    website: 'https://mixpanel.com',
    useCase: 'Essential for product teams that need to understand user behavior, optimize conversion funnels, and make data-driven decisions.',
    pros: ['Powerful analytics', 'Real-time data', 'Good documentation', 'Flexible'],
    cons: ['Complex setup', 'Expensive at scale', 'Steep learning curve'],
    bestFor: 'Product teams, growth hackers, data analysts'
  }, {
    name: 'Vercel',
    description: 'Platform for deploying and hosting frontend applications with automatic scaling, global CDN, and zero configuration.',
    category: 'Development',
    pricing: 'Free - $20/month',
    rating: 4.8,
    users: '100K+',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Rocket, {
      className: "w-8 h-8 text-black"
    }),
    color: 'bg-gradient-to-br from-gray-800 to-black',
    features: ['Zero-config deployment', 'Global CDN', 'Automatic scaling', 'Git integration', 'Preview deployments', 'Edge functions'],
    website: 'https://vercel.com',
    useCase: 'Ideal for startup development teams that want to deploy modern web applications quickly with excellent performance.',
    pros: ['Zero config', 'Excellent performance', 'Great DX', 'Free tier'],
    cons: ['Limited backend features', 'Can be expensive for high traffic', 'Vendor lock-in'],
    bestFor: 'Frontend developers, startup teams, modern web apps'
  }];
  var categories = ['All', 'Marketing & Sales', 'Email Marketing', 'Productivity', 'Design', 'Social Media', 'Payments', 'Customer Support', 'Analytics', 'Development'];
  var [selectedCategory, setSelectedCategory] = react__WEBPACK_IMPORTED_MODULE_0___default().useState('All');
  var filteredTools = selectedCategory === 'All' ? startupTools : startupTools.filter(tool => tool.category === selectedCategory);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("title", {
        children: "Startup Tools & Resources - Zion Tech Group"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta", {
        name: "description",
        content: "Essential tools and resources for startups and entrepreneurs. Curated selection of SaaS services to help your business grow."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta", {
        property: "og:title",
        content: "Startup Tools & Resources - Zion Tech Group"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta", {
        property: "og:description",
        content: "Essential tools and resources for startups and entrepreneurs to accelerate growth."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
      className: "relative min-h-screen flex items-center justify-center overflow-hidden bg-black",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "absolute inset-0",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(34,197,94,0.08),transparent_50%)]"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(168,85,247,0.06),transparent_50%)]"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.1)_1px,transparent_1px)] bg-[size:50px_50px] opacity-20"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "mb-20 animate-fade-in",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "mb-8",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "inline-flex items-center px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-medium mb-6 animate-scale-in",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Rocket, {
                className: "w-4 h-4 mr-2"
              }), "Startup Growth Tools"]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
            className: "text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-8 text-white leading-tight tracking-tight",
            children: "Startup Tools & Resources"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "text-xl sm:text-2xl md:text-3xl text-gray-300 max-w-4xl mx-auto mb-16 leading-relaxed font-light",
            children: "Essential tools and resources to help your startup grow faster. Expert-curated selection of SaaS services for entrepreneurs and growing businesses."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "flex flex-col sm:flex-row gap-6 justify-center items-center mb-20",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
              href: "#tools",
              size: "lg",
              className: "animate-scale-in shadow-2xl shadow-orange-500/25 hover:shadow-orange-500/40",
              style: {
                animationDelay: '0.2s'
              },
              children: ["Explore Tools", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.ArrowRight, {
                className: "w-5 h-5 ml-2"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
              href: "/contact",
              variant: "outline",
              size: "lg",
              className: "animate-scale-in border-white/20 hover:border-white/40 hover:bg-white/5",
              style: {
                animationDelay: '0.4s'
              },
              children: "Get Startup Advice"
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto animate-fade-in",
          style: {
            animationDelay: '0.6s'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "text-center group",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "text-3xl md:text-4xl font-bold mb-3 text-orange-400 group-hover:scale-110 transition-transform duration-300",
              children: [startupTools.length, "+"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "text-gray-400 text-sm",
              children: "Essential Tools"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "text-center group",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "text-3xl md:text-4xl font-bold mb-3 text-blue-400 group-hover:scale-110 transition-transform duration-300",
              children: "10"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "text-gray-400 text-sm",
              children: "Categories"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "text-center group",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "text-3xl md:text-4xl font-bold mb-3 text-green-400 group-hover:scale-110 transition-transform duration-300",
              children: "4.6+"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "text-gray-400 text-sm",
              children: "Avg Rating"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "text-center group",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "text-3xl md:text-4xl font-bold mb-3 text-purple-400 group-hover:scale-110 transition-transform duration-300",
              children: "130M+"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "text-gray-400 text-sm",
              children: "Total Users"
            })]
          })]
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
      className: "py-16 bg-gray-900",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "flex flex-wrap justify-center gap-4",
          children: categories.map(category => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("button", {
            onClick: () => setSelectedCategory(category),
            className: "px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ".concat(selectedCategory === category ? 'bg-orange-600 text-white shadow-lg' : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'),
            children: category
          }, category))
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
      id: "tools",
      className: "py-24 bg-black",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "text-center mb-20",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight",
            children: selectedCategory === 'All' ? 'All Startup Tools' : "".concat(selectedCategory, " Tools")
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed",
            children: selectedCategory === 'All' ? 'Discover the essential tools that successful startups use to grow and scale their businesses.' : "Explore the best ".concat(selectedCategory.toLowerCase(), " tools to accelerate your startup's growth.")
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
          children: filteredTools.map((tool, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "group border border-gray-800 hover:border-orange-500/30 hover:bg-gray-900/80 transition-all duration-300 hover:-translate-y-1",
            style: {
              animationDelay: "".concat(index * 0.1, "s")
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              className: "flex items-start space-x-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "relative",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "w-20 h-20 rounded-2xl flex items-center justify-center text-3xl bg-gradient-to-br ".concat(tool.color, " shadow-xl group-hover:scale-110 transition-transform duration-300"),
                  children: tool.icon
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "flex-1",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "flex items-center justify-between mb-2",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
                    className: "text-2xl font-bold text-white group-hover:text-orange-400 transition-colors duration-300",
                    children: tool.name
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "flex items-center space-x-2",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Star, {
                      className: "w-4 h-4 text-yellow-400 fill-current"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                      className: "text-sm text-gray-300",
                      children: tool.rating
                    })]
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "flex items-center space-x-4 mb-3 text-sm text-gray-400",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "px-2 py-1 bg-gray-800 rounded-full",
                    children: tool.category
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("span", {
                    children: [tool.users, " users"]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "text-green-400",
                    children: tool.pricing
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                  className: "text-gray-400 leading-relaxed mb-4",
                  children: tool.description
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "mb-4",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h4", {
                    className: "text-sm font-semibold text-gray-300 mb-2",
                    children: "Key Features:"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                    className: "grid grid-cols-2 gap-2",
                    children: tool.features.slice(0, 4).map((feature, featureIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                      className: "flex items-center text-sm text-gray-400",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Check, {
                        className: "w-3 h-3 text-green-400 mr-2 flex-shrink-0"
                      }), feature]
                    }, featureIndex))
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "mb-4",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h4", {
                    className: "text-sm font-semibold text-gray-300 mb-2",
                    children: "Best For:"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                    className: "text-sm text-gray-400",
                    children: tool.bestFor
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "flex items-center justify-between",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
                    href: tool.website,
                    variant: "outline",
                    size: "sm",
                    className: "group-hover:border-orange-500 group-hover:text-orange-400",
                    children: ["Visit Website", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.ExternalLink, {
                      className: "w-4 h-4 ml-2"
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "text-right",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                      className: "text-xs text-gray-500 mb-1",
                      children: "Use Case:"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                      className: "text-sm text-gray-300 max-w-xs",
                      children: tool.useCase
                    })]
                  })]
                })]
              })]
            })
          }, index))
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
      className: "py-24 bg-gray-900",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "text-center mb-20",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "text-4xl sm:text-5xl font-bold mb-8 text-white leading-tight",
            children: "Additional Startup Resources"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed",
            children: "Beyond tools, here are additional resources to help your startup succeed."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "grid grid-cols-1 md:grid-cols-3 gap-8",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Users, {
                className: "w-8 h-8 text-white"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              className: "text-xl font-bold mb-4 text-white",
              children: "Startup Communities"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-gray-400 mb-4",
              children: "Join startup communities like Y Combinator Startup School, Indie Hackers, and local startup meetups."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
              href: "https://www.startupschool.org",
              variant: "outline",
              size: "sm",
              children: "Explore Communities"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-green-500 to-emerald-600",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.BookOpen, {
                className: "w-8 h-8 text-white"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              className: "text-xl font-bold mb-4 text-white",
              children: "Educational Resources"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-gray-400 mb-4",
              children: "Access free courses from platforms like Coursera, edX, and startup-specific learning resources."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
              href: "https://www.coursera.org",
              variant: "outline",
              size: "sm",
              children: "Start Learning"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "text-center",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-600",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.TrendingUp, {
                className: "w-8 h-8 text-white"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              className: "text-xl font-bold mb-4 text-white",
              children: "Growth Strategies"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-gray-400 mb-4",
              children: "Learn proven growth strategies from successful entrepreneurs and growth hackers."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
              href: "/resources",
              variant: "outline",
              size: "sm",
              children: "View Resources"
            })]
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
      className: "py-24 bg-gradient-to-r from-orange-600 to-orange-700 relative overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
          className: "text-4xl sm:text-5xl font-bold text-white mb-8",
          children: "Ready to Scale Your Startup?"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "text-xl text-orange-100 mb-12 max-w-4xl mx-auto leading-relaxed",
          children: "Our startup experts can help you choose the right tools, implement growth strategies, and accelerate your business growth."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex flex-col sm:flex-row gap-6 justify-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
            href: "/contact",
            variant: "secondary",
            size: "lg",
            className: "bg-white text-orange-600 hover:bg-gray-100 shadow-2xl",
            children: ["Get Startup Consultation", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.ArrowRight, {
              className: "w-5 h-5 ml-2"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
            href: "/saas-marketplace",
            variant: "outline",
            size: "lg",
            className: "border-white text-white hover:bg-white hover:text-orange-600 shadow-2xl",
            children: "Explore More Tools"
          })]
        })]
      })]
    })]
  });
}

/***/ }),

/***/ 396451:
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
/* harmony import */ var private_next_pages_startup_tools_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(346087);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_startup_tools_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_startup_tools_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_startup_tools_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_startup_tools_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_startup_tools_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_startup_tools_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_startup_tools_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_startup_tools_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_startup_tools_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_startup_tools_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_startup_tools_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/startup-tools",
        pathname: "/startup-tools",
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
    userland: private_next_pages_startup_tools_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/startup-tools",
    config,
    userland: private_next_pages_startup_tools_tsx__WEBPACK_IMPORTED_MODULE_5__,
    routeModule,
    getStaticPaths,
    getStaticProps,
    getServerSideProps
});

//# sourceMappingURL=pages.js.map


/***/ }),

/***/ 608732:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 646060:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(396451)));
module.exports = __webpack_exports__;

})();