"use strict";
(() => {
var exports = {};
exports.id = 465964;
exports.ids = [465964,890636];
exports.modules = {

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 380992:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(882015);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(775927);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(682059);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(framer_motion__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(919918);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7887);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(608732);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__);






var BenefitsPage = () => {
  var benefitCategories = [{
    title: 'Health & Wellness',
    description: 'Comprehensive health coverage and wellness programs to keep you healthy and happy',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.Heart,
    color: 'from-red-500 to-pink-500',
    benefits: [{
      name: 'Medical, Dental & Vision',
      description: '100% employer-paid premium coverage for you and your family',
      details: ['Comprehensive medical coverage', 'Dental and vision plans', 'Prescription drug coverage', 'Mental health services']
    }, {
      name: 'Wellness Programs',
      description: 'Gym memberships, fitness classes, and wellness challenges',
      details: ['Free gym memberships', 'On-site fitness classes', 'Wellness challenges and rewards', 'Health coaching services']
    }, {
      name: 'Mental Health Support',
      description: 'Professional counseling and mental health resources',
      details: ['Employee assistance program', 'Mental health counseling', 'Stress management workshops', 'Meditation and mindfulness programs']
    }]
  }, {
    title: 'Financial Security',
    description: 'Competitive compensation and financial benefits to secure your future',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.DollarSign,
    color: 'from-green-500 to-emerald-500',
    benefits: [{
      name: 'Competitive Salary',
      description: 'Above-market compensation with regular performance reviews',
      details: ['Market-leading base salaries', 'Performance-based bonuses', 'Annual salary reviews', 'Equity participation']
    }, {
      name: '401(k) & Retirement',
      description: 'Generous retirement savings with employer matching',
      details: ['401(k) with 6% employer match', 'Roth 401(k) options', 'Financial planning services', 'Retirement education']
    }, {
      name: 'Stock Options & Equity',
      description: 'Ownership in the company through stock options and equity grants',
      details: ['Stock option grants', 'Restricted stock units', 'Performance equity awards', 'Employee stock purchase plan']
    }]
  }, {
    title: 'Learning & Development',
    description: 'Continuous learning opportunities to advance your career and skills',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.GraduationCap,
    color: 'from-blue-500 to-cyan-500',
    benefits: [{
      name: 'Professional Development',
      description: 'Courses, certifications, and learning resources',
      details: ['Unlimited learning budget', 'Professional certifications', 'Conference attendance', 'Online learning platforms']
    }, {
      name: 'Tuition Reimbursement',
      description: 'Support for advanced degrees and continuing education',
      details: ['Graduate degree support', 'Course reimbursement', 'Professional development', 'Industry certifications']
    }, {
      name: 'Internal Training',
      description: 'Company-sponsored training and skill development',
      details: ['Technical workshops', 'Leadership training', 'Soft skills development', 'Cross-functional training']
    }]
  }, {
    title: 'Work-Life Balance',
    description: 'Flexible work arrangements and time off to maintain work-life harmony',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.Clock,
    color: 'from-purple-500 to-pink-500',
    benefits: [{
      name: 'Flexible Work Arrangements',
      description: 'Remote work options and flexible scheduling',
      details: ['100% remote work option', 'Flexible start/end times', 'Hybrid work models', 'Work from anywhere']
    }, {
      name: 'Unlimited PTO',
      description: 'Take time off when you need it to recharge',
      details: ['Unlimited paid time off', 'Sick leave coverage', 'Personal days', 'Mental health days']
    }, {
      name: 'Family-Friendly Policies',
      description: 'Support for families and life events',
      details: ['Paid parental leave', 'Family medical leave', 'Childcare support', 'Elder care resources']
    }]
  }, {
    title: 'Office & Perks',
    description: 'Modern office amenities and daily perks to enhance your work experience',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.Coffee,
    color: 'from-orange-500 to-red-500',
    benefits: [{
      name: 'Modern Office Spaces',
      description: 'Beautiful, well-equipped offices with modern amenities',
      details: ['Open concept workspaces', 'Private meeting rooms', 'Collaboration areas', 'Quiet zones']
    }, {
      name: 'Daily Perks',
      description: 'Free meals, snacks, and beverages throughout the day',
      details: ['Free breakfast and lunch', 'Unlimited snacks', 'Premium coffee and tea', 'Healthy food options']
    }, {
      name: 'Technology & Equipment',
      description: 'Latest technology and equipment to do your best work',
      details: ['Latest laptops and devices', 'Dual monitors', 'Ergonomic furniture', 'Mobile phone plans']
    }]
  }, {
    title: 'Community & Culture',
    description: 'Team building, social events, and a supportive community',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.Users,
    color: 'from-indigo-500 to-purple-500',
    benefits: [{
      name: 'Team Building',
      description: 'Regular team events and social activities',
      details: ['Team offsites', 'Social events', 'Holiday parties', 'Team building activities']
    }, {
      name: 'Employee Resource Groups',
      description: 'Connect with colleagues who share your interests',
      details: ['Diversity groups', 'Professional networks', 'Interest-based clubs', 'Mentorship programs']
    }, {
      name: 'Recognition Programs',
      description: 'Celebrate achievements and contributions',
      details: ['Employee of the month', 'Performance awards', 'Innovation recognition', 'Peer recognition']
    }]
  }];
  var additionalPerks = [{
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.Plane,
    title: 'Travel & Transportation',
    description: 'Commuter benefits, travel allowances, and transportation support'
  }, {
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.Home,
    title: 'Home Office Setup',
    description: 'Ergonomic furniture and equipment for remote work'
  }, {
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.Car,
    title: 'Transportation Benefits',
    description: 'Commuter passes, parking, and ride-sharing credits'
  }, {
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.Wifi,
    title: 'Internet & Utilities',
    description: 'Home internet and utility reimbursements'
  }];
  var totalCompensation = [{
    label: 'Base Salary',
    value: 'Competitive'
  }, {
    label: 'Performance Bonus',
    value: 'Up to 25%'
  }, {
    label: 'Equity Value',
    value: '$50K-$200K'
  }, {
    label: 'Benefits Value',
    value: '$15K-$25K'
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)((_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1___default()), {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
      className: "min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
        className: "relative pt-32 pb-20 px-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "max-w-7xl mx-auto text-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
            initial: {
              opacity: 0,
              y: 20
            },
            animate: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 0.8
            },
            className: "mb-8",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Award, {
                className: "w-4 h-4 mr-2"
              }), "Employee Benefits"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
              className: "text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6",
              children: "Comprehensive Benefits"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed",
              children: "We believe in taking care of our people. Our comprehensive benefits package is designed to support your health, wealth, growth, and well-being both inside and outside of work."
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
        className: "py-20 px-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "max-w-7xl mx-auto",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
            initial: {
              opacity: 0,
              y: 20
            },
            whileInView: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 0.8
            },
            className: "text-center mb-16",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
              className: "text-4xl md:text-5xl font-bold text-white mb-6",
              children: "Total Compensation Package"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-xl text-gray-300 max-w-3xl mx-auto",
              children: "Our benefits add significant value to your total compensation, making Zion Tech Group one of the most attractive employers in the technology industry."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "grid grid-cols-2 md:grid-cols-4 gap-8",
            children: totalCompensation.map((item, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
              initial: {
                opacity: 0,
                y: 20
              },
              whileInView: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.5,
                delay: index * 0.1
              },
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-4",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.DollarSign, {
                  className: "w-8 h-8 text-blue-400"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-2xl font-bold text-white mb-2",
                children: item.value
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-gray-400",
                children: item.label
              })]
            }, index))
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
        className: "py-20 px-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "max-w-7xl mx-auto",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
            initial: {
              opacity: 0,
              y: 20
            },
            whileInView: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 0.8
            },
            className: "text-center mb-16",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
              className: "text-4xl md:text-5xl font-bold text-white mb-6",
              children: "Benefits by Category"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-xl text-gray-300 max-w-3xl mx-auto",
              children: "Explore our comprehensive benefits organized by category to understand how we support every aspect of your professional and personal life."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "space-y-16",
            children: benefitCategories.map((category, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
              initial: {
                opacity: 0,
                y: 20
              },
              whileInView: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.8,
                delay: index * 0.1
              },
              className: "bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "flex items-center mb-8",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ".concat(category.color, " mr-6"),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(category.icon, {
                    className: "w-8 h-8 text-white"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                    className: "text-3xl font-bold text-white",
                    children: category.title
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                    className: "text-lg text-gray-400 mt-2",
                    children: category.description
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                children: category.benefits.map((benefit, benefitIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "bg-gray-800/50 rounded-xl p-6 border border-gray-700/50",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h4", {
                    className: "text-xl font-bold text-white mb-3",
                    children: benefit.name
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                    className: "text-gray-400 mb-4 leading-relaxed",
                    children: benefit.description
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                    className: "space-y-2",
                    children: benefit.details.map((detail, detailIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                      className: "flex items-center text-sm",
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.CheckCircle, {
                        className: "w-4 h-4 text-emerald-400 mr-2 flex-shrink-0"
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                        className: "text-gray-300",
                        children: detail
                      })]
                    }, detailIndex))
                  })]
                }, benefitIndex))
              })]
            }, index))
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
        className: "py-20 px-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "max-w-7xl mx-auto",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
            initial: {
              opacity: 0,
              y: 20
            },
            whileInView: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 0.8
            },
            className: "text-center mb-16",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
              className: "text-4xl md:text-5xl font-bold text-white mb-6",
              children: "Additional Perks & Benefits"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-xl text-gray-300 max-w-3xl mx-auto",
              children: "Beyond our core benefits, we offer additional perks that make working at Zion Tech Group even more rewarding and enjoyable."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
            children: additionalPerks.map((perk, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
              initial: {
                opacity: 0,
                y: 20
              },
              whileInView: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.5,
                delay: index * 0.1
              },
              className: "text-center bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(perk.icon, {
                  className: "w-8 h-8 text-blue-400"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-xl font-bold text-white mb-3",
                children: perk.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "text-gray-400 leading-relaxed",
                children: perk.description
              })]
            }, index))
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
        className: "py-20 px-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
          className: "max-w-7xl mx-auto",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
            initial: {
              opacity: 0,
              y: 20
            },
            whileInView: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 0.8
            },
            className: "text-center mb-16",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
              className: "text-4xl md:text-5xl font-bold text-white mb-6",
              children: "Why Our Benefits Stand Out"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-xl text-gray-300 max-w-3xl mx-auto",
              children: "Our benefits package is designed to be comprehensive, competitive, and genuinely supportive of our employees' needs and aspirations."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
            children: [{
              icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.Shield,
              title: '100% Employer Paid',
              description: 'Most of our benefits are fully employer-paid, reducing your out-of-pocket costs'
            }, {
              icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.Globe,
              title: 'Global Coverage',
              description: 'Benefits that work for you regardless of where you live and work'
            }, {
              icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.Zap,
              title: 'Above Market',
              description: 'Our benefits package exceeds industry standards and competitor offerings'
            }, {
              icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.Users,
              title: 'Family Inclusive',
              description: 'Comprehensive coverage for your entire family, not just you'
            }, {
              icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.Clock,
              title: 'Immediate Eligibility',
              description: 'Most benefits start from day one, no waiting periods'
            }, {
              icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.Award,
              title: 'Regular Updates',
              description: 'We continuously improve our benefits based on employee feedback'
            }].map((feature, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
              initial: {
                opacity: 0,
                y: 20
              },
              whileInView: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.5,
                delay: index * 0.1
              },
              className: "text-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(feature.icon, {
                  className: "w-8 h-8 text-blue-400"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-xl font-bold text-white mb-3",
                children: feature.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "text-gray-400 leading-relaxed",
                children: feature.description
              })]
            }, index))
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
        className: "py-20 px-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "max-w-4xl mx-auto text-center",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
            initial: {
              opacity: 0,
              y: 20
            },
            whileInView: {
              opacity: 1,
              y: 0
            },
            transition: {
              duration: 0.8
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h2", {
              className: "text-4xl md:text-5xl font-bold text-white mb-6",
              children: "Ready to Experience These Benefits?"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-xl text-gray-300 mb-8 leading-relaxed",
              children: "Join our team and start enjoying these comprehensive benefits from day one. We're looking for talented individuals who are excited about our mission."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex flex-col sm:flex-row gap-4 justify-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/careers",
                className: "inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Award, {
                  className: "w-5 h-5 mr-2"
                }), "View Open Positions"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/culture",
                className: "inline-flex items-center px-8 py-4 rounded-xl border border-blue-500/50 text-blue-400 font-semibold hover:bg-blue-500/10 transition-all duration-200",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Users, {
                  className: "w-5 h-5 mr-2"
                }), "Learn About Our Culture"]
              })]
            })]
          })
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BenefitsPage);

/***/ }),

/***/ 608732:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 646060:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

/***/ }),

/***/ 737111:
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
/* harmony import */ var private_next_pages_benefits_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(380992);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_benefits_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_benefits_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_benefits_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_benefits_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_benefits_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_benefits_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_benefits_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_benefits_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_benefits_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_benefits_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_benefits_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/benefits",
        pathname: "/benefits",
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
    userland: private_next_pages_benefits_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/benefits",
    config,
    userland: private_next_pages_benefits_tsx__WEBPACK_IMPORTED_MODULE_5__,
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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(737111)));
module.exports = __webpack_exports__;

})();