"use strict";
(() => {
var exports = {};
exports.id = 826484;
exports.ids = [826484,890636];
exports.modules = {

/***/ 696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BusinessToolsPage)
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






function BusinessToolsPage() {
  var businessTools = [{
    category: 'Project Management',
    tools: [{
      name: 'Notion',
      description: 'All-in-one workspace for notes, docs, projects, and team collaboration.',
      features: ['Templates', 'Database views', 'Real-time editing', 'Integrations', 'Team spaces'],
      pricing: 'Free - $8/month',
      website: 'https://notion.so',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.FileText, {
        className: "w-6 h-6"
      }),
      color: 'bg-gradient-to-br from-gray-800 to-black',
      popular: true
    }, {
      name: 'Asana',
      description: 'Work management platform for teams to organize, track, and manage their work.',
      features: ['Task management', 'Project timelines', 'Team collaboration', 'Workflow automation', 'Reporting'],
      pricing: 'Free - $10.99/month',
      website: 'https://asana.com',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.CheckCircle, {
        className: "w-6 h-6"
      }),
      color: 'bg-gradient-to-br from-pink-500 to-red-600'
    }, {
      name: 'Monday.com',
      description: 'Visual project management platform with customizable workflows and automation.',
      features: ['Visual boards', 'Automation', 'Time tracking', 'Integrations', 'Analytics'],
      pricing: '$8/month - $16/month',
      website: 'https://monday.com',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Calendar, {
        className: "w-6 h-6"
      }),
      color: 'bg-gradient-to-br from-red-500 to-pink-600'
    }]
  }, {
    category: 'Communication & Collaboration',
    tools: [{
      name: 'Slack',
      description: 'Team communication platform for modern businesses with channels and integrations.',
      features: ['Channels', 'Direct messages', 'File sharing', 'Integrations', 'Search'],
      pricing: 'Free - $7.25/month',
      website: 'https://slack.com',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.MessageSquare, {
        className: "w-6 h-6"
      }),
      color: 'bg-gradient-to-br from-purple-500 to-pink-600',
      popular: true
    }, {
      name: 'Microsoft Teams',
      description: 'Unified communication platform with chat, video meetings, and file collaboration.',
      features: ['Chat', 'Video meetings', 'File sharing', 'Office integration', 'Security'],
      pricing: 'Free - $6/month',
      website: 'https://teams.microsoft.com',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Users, {
        className: "w-6 h-6"
      }),
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600'
    }, {
      name: 'Zoom',
      description: 'Video conferencing platform for meetings, webinars, and team collaboration.',
      features: ['HD video', 'Screen sharing', 'Recording', 'Webinars', 'Breakout rooms'],
      pricing: 'Free - $14.99/month',
      website: 'https://zoom.us',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Video, {
        className: "w-6 h-6"
      }),
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600'
    }]
  }, {
    category: 'Marketing & Sales',
    tools: [{
      name: 'HubSpot',
      description: 'All-in-one inbound marketing, sales, and customer service platform.',
      features: ['CRM', 'Email marketing', 'Lead generation', 'Analytics', 'Automation'],
      pricing: 'Free - $45/month',
      website: 'https://hubspot.com',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Target, {
        className: "w-6 h-6"
      }),
      color: 'bg-gradient-to-br from-orange-500 to-red-600',
      popular: true
    }, {
      name: 'Mailchimp',
      description: 'Email marketing platform for growing businesses and creators.',
      features: ['Email templates', 'Automation', 'Analytics', 'Audience segmentation', 'A/B testing'],
      pricing: 'Free - $13/month',
      website: 'https://mailchimp.com',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Mail, {
        className: "w-6 h-6"
      }),
      color: 'bg-gradient-to-br from-yellow-500 to-orange-600'
    }, {
      name: 'Salesforce',
      description: 'Customer relationship management platform for sales, service, and marketing.',
      features: ['Sales CRM', 'Service cloud', 'Marketing automation', 'Analytics', 'AppExchange'],
      pricing: '$25/month - $300/month',
      website: 'https://salesforce.com',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.TrendingUp, {
        className: "w-6 h-6"
      }),
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600'
    }]
  }, {
    category: 'Finance & Accounting',
    tools: [{
      name: 'QuickBooks',
      description: 'Small business accounting software for invoicing, expenses, and financial reporting.',
      features: ['Invoicing', 'Expense tracking', 'Financial reports', 'Tax preparation', 'Bank integration'],
      pricing: '$30/month - $200/month',
      website: 'https://quickbooks.intuit.com',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.CreditCard, {
        className: "w-6 h-6"
      }),
      color: 'bg-gradient-to-br from-green-500 to-emerald-600',
      popular: true
    }, {
      name: 'Stripe',
      description: 'Payment processing platform for internet businesses.',
      features: ['Global payments', 'Subscription billing', 'Fraud prevention', 'Developer APIs', 'Analytics'],
      pricing: '2.9% + 30¢ per transaction',
      website: 'https://stripe.com',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.CreditCard, {
        className: "w-6 h-6"
      }),
      color: 'bg-gradient-to-br from-purple-500 to-blue-600'
    }, {
      name: 'Xero',
      description: 'Cloud-based accounting software for small businesses and accountants.',
      features: ['Bank reconciliation', 'Invoicing', 'Expense claims', 'Multi-currency', 'Payroll'],
      pricing: '$13/month - $70/month',
      website: 'https://xero.com',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.ChartBar, {
        className: "w-6 h-6"
      }),
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600'
    }]
  }, {
    category: 'Design & Creative',
    tools: [{
      name: 'Figma',
      description: 'Collaborative interface design tool for teams building digital products.',
      features: ['Real-time collaboration', 'Design systems', 'Prototyping', 'Developer handoff', 'Plugins'],
      pricing: 'Free - $12/month',
      website: 'https://figma.com',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Palette, {
        className: "w-6 h-6"
      }),
      color: 'bg-gradient-to-br from-purple-500 to-pink-600',
      popular: true
    }, {
      name: 'Canva',
      description: 'Create professional designs with drag-and-drop simplicity.',
      features: ['Templates library', 'Stock photos', 'Brand kit', 'Team collaboration', 'Video editing'],
      pricing: 'Free - $12.99/month',
      website: 'https://canva.com',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Image, {
        className: "w-6 h-6"
      }),
      color: 'bg-gradient-to-br from-blue-500 to-cyan-600'
    }, {
      name: 'Adobe Creative Cloud',
      description: 'Complete creative software suite for design, photography, and video.',
      features: ['Photoshop', 'Illustrator', 'InDesign', 'Premiere Pro', 'After Effects'],
      pricing: '$52.99/month',
      website: 'https://adobe.com/creativecloud',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Palette, {
        className: "w-6 h-6"
      }),
      color: 'bg-gradient-to-br from-orange-500 to-red-600'
    }]
  }, {
    category: 'Analytics & Business Intelligence',
    tools: [{
      name: 'Google Analytics',
      description: 'Free web analytics service that tracks and reports website traffic.',
      features: ['Real-time data', 'Audience insights', 'Conversion tracking', 'E-commerce', 'Goals'],
      pricing: 'Free',
      website: 'https://analytics.google.com',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.BarChart3, {
        className: "w-6 h-6"
      }),
      color: 'bg-gradient-to-br from-blue-500 to-green-600',
      popular: true
    }, {
      name: 'Tableau',
      description: 'Data visualization and business intelligence platform for analytics.',
      features: ['Interactive dashboards', 'Data blending', 'Real-time analytics', 'Mobile support', 'Collaboration'],
      pricing: '$70/month - $35/month',
      website: 'https://tableau.com',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.ChartBar, {
        className: "w-6 h-6"
      }),
      color: 'bg-gradient-to-br from-blue-500 to-indigo-600'
    }, {
      name: 'Mixpanel',
      description: 'Product analytics platform for understanding user behavior and product usage.',
      features: ['Event tracking', 'Funnel analysis', 'Cohort analysis', 'A/B testing', 'Real-time data'],
      pricing: 'Free - $25/month',
      website: 'https://mixpanel.com',
      icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.TrendingUp, {
        className: "w-6 h-6"
      }),
      color: 'bg-gradient-to-br from-purple-500 to-pink-600'
    }]
  }];
  var businessInsights = [{
    title: 'Remote Work Tools',
    description: 'Essential tools for distributed teams and hybrid work environments.',
    trend: '📈 Growing Demand',
    color: 'text-green-400'
  }, {
    title: 'AI-Powered Solutions',
    description: 'Business tools leveraging AI for automation and intelligent insights.',
    trend: '🚀 High Growth',
    color: 'text-blue-400'
  }, {
    title: 'Cloud-Native Platforms',
    description: 'Business applications built for scalability and global accessibility.',
    trend: '☁️ Mainstream',
    color: 'text-cyan-400'
  }, {
    title: 'Security & Compliance',
    description: 'Tools ensuring data protection and regulatory compliance.',
    trend: '🔒 Critical',
    color: 'text-orange-400'
  }];
  var productivityTips = [{
    title: 'Start with Free Tiers',
    description: 'Most tools offer free versions to test before committing to paid plans.',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.CheckCircle, {
      className: "w-6 h-6 text-green-400"
    })
  }, {
    title: 'Focus on Integration',
    description: 'Choose tools that work well together to avoid data silos and manual work.',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Cog, {
      className: "w-6 h-6 text-blue-400"
    })
  }, {
    title: 'Measure ROI',
    description: 'Track how each tool improves your team\'s productivity and business outcomes.',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.ChartBar, {
      className: "w-6 h-6 text-purple-400"
    })
  }, {
    title: 'Train Your Team',
    description: 'Invest in proper training to maximize the value of your chosen tools.',
    icon: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Users, {
      className: "w-6 h-6 text-orange-400"
    })
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("title", {
        children: "Business Tools & Productivity - Zion Tech Group"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta", {
        name: "description",
        content: "Essential business tools for project management, communication, marketing, finance, and productivity. Real pricing and features for growing businesses."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta", {
        property: "og:title",
        content: "Business Tools & Productivity - Zion Tech Group"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta", {
        property: "og:description",
        content: "Comprehensive business tools directory with pricing and features."
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("meta", {
        name: "twitter:card",
        content: "summary_large_image"
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
      className: "relative section-padding bg-gradient-cursor overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,122,204,0.08),transparent_50%)]"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,122,204,0.06),transparent_50%)]"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "absolute inset-0 bg-grid opacity-10"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "relative z-10 container-cursor text-center",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "inline-flex items-center px-4 py-2 rounded-full bg-cursor-blue/10 border border-cursor-blue/20 text-cursor-blue text-sm font-medium mb-6",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
            className: "w-2 h-2 bg-cursor-blue rounded-full mr-2 animate-pulse"
          }), "Business Solutions"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
          className: "text-responsive-xl font-black mb-8 gradient-text text-shadow-lg",
          children: "Essential Business Tools & Productivity"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "text-responsive-md text-gray-300 max-w-5xl mx-auto leading-relaxed",
          children: "Discover the most powerful business tools that successful companies use to manage projects, communicate effectively, market their products, and grow their operations. Real pricing and features."
        })]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
      className: "section-padding bg-gradient-cursor-accent",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "container-cursor",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "text-center mb-16",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "text-responsive-lg font-bold mb-8 gradient-text text-shadow",
            children: "Business Tool Trends & Insights"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed",
            children: "Stay ahead of the curve with our analysis of the business tools landscape and emerging opportunities."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
          children: businessInsights.map((insight, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "card-hover border-gradient-blue text-center",
            style: {
              animationDelay: "".concat(index * 0.1, "s")
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              className: "text-xl font-bold text-white mb-3",
              children: insight.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-gray-400 text-sm mb-4 leading-relaxed",
              children: insight.description
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ".concat(insight.color, " bg-gray-800/50"),
              children: insight.trend
            })]
          }, index))
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
      className: "section-padding bg-gradient-cursor",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "container-cursor",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "text-center mb-20",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "text-responsive-lg font-bold mb-8 gradient-text text-shadow",
            children: "Essential Business Tools"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed",
            children: "Hand-picked business tools that deliver real value for your organization. Each tool has been evaluated for features, pricing, and business impact."
          })]
        }), businessTools.map((category, categoryIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "mb-20",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "text-center mb-12",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              className: "text-3xl font-bold text-white mb-4",
              children: category.category
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "w-24 h-1 bg-gradient-to-r from-cursor-blue to-purple-500 mx-auto rounded-full"
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
            children: category.tools.map((tool, toolIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
              className: "card-hover border-gradient-blue group ".concat(tool.popular ? 'ring-2 ring-cursor-blue/50' : ''),
              style: {
                animationDelay: "".concat(categoryIndex * 0.2 + toolIndex * 0.1, "s")
              },
              children: [tool.popular && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "absolute -top-3 left-1/2 transform -translate-x-1/2",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "inline-flex items-center px-3 py-1 rounded-full bg-cursor-blue text-white text-xs font-medium",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Star, {
                    className: "w-3 h-3 mr-1"
                  }), "Popular Choice"]
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "text-center mb-6",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "w-16 h-16 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 ".concat(tool.color, " shadow-xl group-hover:scale-110 transition-transform duration-300"),
                  children: tool.icon
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h4", {
                  className: "text-xl font-bold text-white mb-2",
                  children: tool.name
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
                  className: "text-gray-400 text-sm leading-relaxed",
                  children: tool.description
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                className: "mb-6",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "text-center mb-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("span", {
                    className: "text-2xl font-bold text-cursor-blue",
                    children: tool.pricing
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("ul", {
                  className: "space-y-2",
                  children: tool.features.map((feature, featureIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li", {
                    className: "flex items-center text-gray-300 text-sm",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.Check, {
                      className: "w-4 h-4 text-cursor-blue mr-3 flex-shrink-0"
                    }), feature]
                  }, featureIndex))
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
                href: tool.website,
                variant: "primary",
                size: "sm",
                className: "w-full group-hover:scale-105 transition-transform duration-300",
                external: true,
                children: ["Visit Website", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_5__.ExternalLink, {
                  className: "w-4 h-4 ml-2"
                })]
              })]
            }, toolIndex))
          })]
        }, categoryIndex))]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("section", {
      className: "section-padding bg-gradient-cursor-accent",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "container-cursor",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "text-center mb-16",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            className: "text-responsive-lg font-bold mb-8 gradient-text text-shadow",
            children: "Productivity Tips & Best Practices"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: "text-responsive-md text-gray-400 max-w-4xl mx-auto leading-relaxed",
            children: "Maximize the value of your business tools with these proven strategies and best practices."
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6",
          children: productivityTips.map((tip, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_components_ui_Card__WEBPACK_IMPORTED_MODULE_2__["default"], {
            className: "card-hover border-gradient-blue text-center",
            style: {
              animationDelay: "".concat(index * 0.1, "s")
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "flex justify-center mb-4",
              children: tip.icon
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h3", {
              className: "text-xl font-bold text-white mb-3",
              children: tip.title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              className: "text-gray-400 text-sm leading-relaxed",
              children: tip.description
            })]
          }, index))
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
      className: "section-padding bg-gradient-to-r from-cursor-blue to-purple-600 relative overflow-hidden",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-10"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "container-cursor text-center relative z-10",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
          className: "text-responsive-lg font-bold text-white mb-8",
          children: "Ready to Transform Your Business Operations?"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
          className: "text-xl text-blue-100 mb-12 max-w-4xl mx-auto leading-relaxed",
          children: "These business tools can streamline your operations, improve team collaboration, and drive growth. Start with the essentials and build your tech stack strategically."
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "flex flex-col sm:flex-row gap-6 justify-center",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
            href: "/micro-saas",
            variant: "secondary",
            size: "lg",
            className: "bg-white text-cursor-blue hover:bg-gray-100 shadow-2xl",
            children: "Explore Micro SaaS"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_components_ui_Button__WEBPACK_IMPORTED_MODULE_3__["default"], {
            href: "/contact",
            variant: "outline",
            size: "lg",
            className: "border-white text-white hover:bg-white hover:text-cursor-blue shadow-2xl",
            children: "Get Business Consultation"
          })]
        })]
      })]
    })]
  });
}

/***/ }),

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 487655:
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
/* harmony import */ var private_next_pages_business_tools_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(696);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_business_tools_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_business_tools_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_business_tools_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_business_tools_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_business_tools_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_business_tools_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_business_tools_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_business_tools_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_business_tools_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_business_tools_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_business_tools_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/business-tools",
        pathname: "/business-tools",
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
    userland: private_next_pages_business_tools_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/business-tools",
    config,
    userland: private_next_pages_business_tools_tsx__WEBPACK_IMPORTED_MODULE_5__,
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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(487655)));
module.exports = __webpack_exports__;

})();