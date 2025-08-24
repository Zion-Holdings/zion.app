"use strict";
(() => {
var exports = {};
exports.id = 944158;
exports.ids = [890636,944158];
exports.modules = {

/***/ 333873:
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ 608732:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 627250:
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






var CareerDevelopmentPage = () => {
  var careerPaths = [{
    title: 'Individual Contributor',
    description: 'Deep technical expertise and individual excellence',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.Brain,
    color: 'from-purple-500 to-pink-500',
    levels: [{
      level: 'Junior',
      title: 'Junior Engineer',
      description: 'Learning and growing in your technical skills',
      requirements: ['Bachelor\'s degree or equivalent', 'Basic programming knowledge', 'Eagerness to learn'],
      responsibilities: ['Code development', 'Testing and debugging', 'Documentation', 'Team collaboration'],
      timeline: '0-2 years'
    }, {
      level: 'Mid',
      title: 'Software Engineer',
      description: 'Contributing significantly to technical projects',
      requirements: ['2+ years experience', 'Strong technical skills', 'Project delivery experience'],
      responsibilities: ['Feature development', 'Code reviews', 'Technical design', 'Mentoring juniors'],
      timeline: '2-5 years'
    }, {
      level: 'Senior',
      title: 'Senior Engineer',
      description: 'Technical leadership and complex problem solving',
      requirements: ['5+ years experience', 'Deep technical expertise', 'Leadership experience'],
      responsibilities: ['Technical architecture', 'System design', 'Team leadership', 'Innovation'],
      timeline: '5+ years'
    }]
  }, {
    title: 'Technical Leadership',
    description: 'Leading technical teams and driving technical strategy',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.Shield,
    color: 'from-blue-500 to-cyan-500',
    levels: [{
      level: 'Lead',
      title: 'Technical Lead',
      description: 'Leading technical direction for projects and teams',
      requirements: ['Senior-level technical skills', 'Team leadership experience', 'Strategic thinking'],
      responsibilities: ['Technical strategy', 'Team leadership', 'Architecture decisions', 'Project planning'],
      timeline: '5-8 years'
    }, {
      level: 'Principal',
      title: 'Principal Engineer',
      description: 'Setting technical direction across multiple teams',
      requirements: ['8+ years experience', 'Cross-team influence', 'Strategic vision'],
      responsibilities: ['Technical strategy', 'Cross-team coordination', 'Innovation leadership', 'Mentorship'],
      timeline: '8+ years'
    }, {
      level: 'Distinguished',
      title: 'Distinguished Engineer',
      description: 'Industry-recognized technical leadership',
      requirements: ['10+ years experience', 'Industry recognition', 'Strategic impact'],
      responsibilities: ['Company-wide technical strategy', 'Industry thought leadership', 'Innovation vision'],
      timeline: '10+ years'
    }]
  }, {
    title: 'Management',
    description: 'Leading teams and driving organizational success',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.Users,
    color: 'from-emerald-500 to-teal-500',
    levels: [{
      level: 'Manager',
      title: 'Engineering Manager',
      description: 'Leading engineering teams and delivering results',
      requirements: ['Technical background', 'People management skills', 'Project delivery experience'],
      responsibilities: ['Team management', 'Project delivery', 'Career development', 'Technical oversight'],
      timeline: '5-8 years'
    }, {
      level: 'Director',
      title: 'Engineering Director',
      description: 'Leading multiple teams and strategic initiatives',
      requirements: ['8+ years experience', 'Multi-team management', 'Strategic planning'],
      responsibilities: ['Multi-team leadership', 'Strategic planning', 'Process improvement', 'Stakeholder management'],
      timeline: '8+ years'
    }, {
      level: 'VP',
      title: 'VP of Engineering',
      description: 'Leading engineering organization and strategy',
      requirements: ['10+ years experience', 'Organizational leadership', 'Strategic vision'],
      responsibilities: ['Engineering strategy', 'Organizational leadership', 'Executive collaboration', 'Industry leadership'],
      timeline: '10+ years'
    }]
  }, {
    title: 'Specialist',
    description: 'Deep expertise in specific technical domains',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.Atom,
    color: 'from-indigo-500 to-purple-500',
    levels: [{
      level: 'Expert',
      title: 'Domain Expert',
      description: 'Deep expertise in specific technical areas',
      requirements: ['5+ years in domain', 'Deep technical knowledge', 'Industry recognition'],
      responsibilities: ['Technical expertise', 'Knowledge sharing', 'Innovation', 'Consultation'],
      timeline: '5+ years'
    }, {
      level: 'Architect',
      title: 'Solution Architect',
      description: 'Designing complex technical solutions',
      requirements: ['8+ years experience', 'System design expertise', 'Business understanding'],
      responsibilities: ['Solution design', 'Technical strategy', 'Stakeholder collaboration', 'Best practices'],
      timeline: '8+ years'
    }, {
      level: 'Fellow',
      title: 'Technical Fellow',
      description: 'Highest level of technical expertise and recognition',
      requirements: ['15+ years experience', 'Industry leadership', 'Innovation impact'],
      responsibilities: ['Technical vision', 'Innovation leadership', 'Industry influence', 'Strategic guidance'],
      timeline: '15+ years'
    }]
  }];
  var developmentPrograms = [{
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.GraduationCap,
    title: 'Technical Skills Development',
    description: 'Continuous learning in cutting-edge technologies',
    programs: ['Advanced AI and Machine Learning', 'Quantum Computing Fundamentals', 'Space Technology Applications', 'Cybersecurity Best Practices', 'Cloud Architecture & DevOps']
  }, {
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.Users,
    title: 'Leadership Development',
    description: 'Building leadership skills at all levels',
    programs: ['Team Leadership Fundamentals', 'Strategic Thinking & Planning', 'Communication & Influence', 'Change Management', 'Executive Leadership']
  }, {
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.Globe,
    title: 'Business Acumen',
    description: 'Understanding business context and strategy',
    programs: ['Business Strategy Fundamentals', 'Financial Literacy', 'Customer Understanding', 'Market Analysis', 'Product Management']
  }, {
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.Lightbulb,
    title: 'Innovation & Creativity',
    description: 'Fostering innovation and creative thinking',
    programs: ['Design Thinking', 'Innovation Methodologies', 'Creative Problem Solving', 'Research & Development', 'Patent & IP Strategy']
  }];
  var mentorshipPrograms = [{
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.Users,
    title: 'Formal Mentorship',
    description: 'Structured mentorship relationships with experienced leaders',
    benefits: ['One-on-one guidance', 'Career planning support', 'Skill development', 'Network building']
  }, {
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.Brain,
    title: 'Technical Mentorship',
    description: 'Deep technical guidance from domain experts',
    benefits: ['Technical skill development', 'Best practices sharing', 'Code review guidance', 'Architecture insights']
  }, {
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.Target,
    title: 'Career Mentorship',
    description: 'Strategic career guidance and planning',
    benefits: ['Career path planning', 'Goal setting', 'Performance improvement', 'Advancement strategies']
  }, {
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.Globe,
    title: 'Cross-functional Mentorship',
    description: 'Learning from different areas of the business',
    benefits: ['Broad perspective', 'Cross-functional skills', 'Business understanding', 'Network expansion']
  }];
  var growthMetrics = [{
    number: '95%',
    label: 'Internal Promotions',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.TrendingUp
  }, {
    number: '200+',
    label: 'Training Programs',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.GraduationCap
  }, {
    number: '50+',
    label: 'Mentorship Pairs',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.Users
  }, {
    number: '24/7',
    label: 'Learning Resources',
    icon: lucide_react__WEBPACK_IMPORTED_MODULE_4__.BookOpen
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
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.TrendingUp, {
                className: "w-4 h-4 mr-2"
              }), "Career Growth"]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
              className: "text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6",
              children: "Career Development"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed",
              children: "Your growth is our priority. We provide clear career paths, comprehensive development programs, and continuous learning opportunities to help you achieve your professional goals."
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("section", {
        className: "py-20 px-4",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
          className: "max-w-7xl mx-auto",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "grid grid-cols-2 md:grid-cols-4 gap-8",
            children: growthMetrics.map((metric, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
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
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(metric.icon, {
                  className: "w-8 h-8 text-blue-400"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-3xl md:text-4xl font-bold text-white mb-2",
                children: metric.number
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "text-gray-400",
                children: metric.label
              })]
            }, index))
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
              children: "Career Paths"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-xl text-gray-300 max-w-3xl mx-auto",
              children: "We offer multiple career paths to match your interests, skills, and aspirations. Choose the path that best fits your career goals."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "space-y-16",
            children: careerPaths.map((path, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
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
                  className: "inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ".concat(path.color, " mr-6"),
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(path.icon, {
                    className: "w-8 h-8 text-white"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                    className: "text-3xl font-bold text-white",
                    children: path.title
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                    className: "text-lg text-gray-400 mt-2",
                    children: path.description
                  })]
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "grid grid-cols-1 lg:grid-cols-3 gap-8",
                children: path.levels.map((level, levelIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "bg-gray-800/50 rounded-xl p-6 border border-gray-700/50",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "flex items-center justify-between mb-4",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                      className: "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ".concat(level.level === 'Junior' ? 'bg-green-500/20 text-green-400' : level.level === 'Mid' ? 'bg-blue-500/20 text-blue-400' : level.level === 'Senior' ? 'bg-purple-500/20 text-purple-400' : level.level === 'Lead' ? 'bg-orange-500/20 text-orange-400' : level.level === 'Principal' ? 'bg-red-500/20 text-red-400' : level.level === 'Distinguished' ? 'bg-yellow-500/20 text-yellow-400' : level.level === 'Manager' ? 'bg-emerald-500/20 text-emerald-400' : level.level === 'Director' ? 'bg-indigo-500/20 text-indigo-400' : level.level === 'VP' ? 'bg-pink-500/20 text-pink-400' : level.level === 'Expert' ? 'bg-cyan-500/20 text-cyan-400' : level.level === 'Architect' ? 'bg-violet-500/20 text-violet-400' : 'bg-gray-500/20 text-gray-400'),
                      children: level.level
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                      className: "text-sm text-gray-400",
                      children: level.timeline
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h4", {
                    className: "text-xl font-bold text-white mb-3",
                    children: level.title
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                    className: "text-gray-400 mb-4 leading-relaxed",
                    children: level.description
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    className: "mb-4",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h5", {
                      className: "text-sm font-semibold text-white mb-2",
                      children: "Requirements:"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                      className: "space-y-1",
                      children: level.requirements.map((req, reqIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        className: "flex items-center text-sm",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.CheckCircle, {
                          className: "w-3 h-3 text-emerald-400 mr-2 flex-shrink-0"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                          className: "text-gray-300",
                          children: req
                        })]
                      }, reqIndex))
                    })]
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h5", {
                      className: "text-sm font-semibold text-white mb-2",
                      children: "Responsibilities:"
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                      className: "space-y-1",
                      children: level.responsibilities.map((resp, respIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                        className: "flex items-center text-sm",
                        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.CheckCircle, {
                          className: "w-3 h-3 text-emerald-400 mr-2 flex-shrink-0"
                        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                          className: "text-gray-300",
                          children: resp
                        })]
                      }, respIndex))
                    })]
                  })]
                }, levelIndex))
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
              children: "Development Programs"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-xl text-gray-300 max-w-3xl mx-auto",
              children: "Our comprehensive development programs cover technical skills, leadership, business acumen, and innovation to support your growth in all areas."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "grid grid-cols-1 lg:grid-cols-2 gap-8",
            children: developmentPrograms.map((program, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
              initial: {
                opacity: 0,
                y: 20
              },
              whileInView: {
                opacity: 1,
                y: 0
              },
              transition: {
                duration: 0.6,
                delay: index * 0.1
              },
              className: "bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                className: "flex items-center mb-6",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                  className: "inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mr-4",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(program.icon, {
                    className: "w-6 h-6 text-blue-400"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                  className: "text-2xl font-bold text-white",
                  children: program.title
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "text-gray-400 mb-6 leading-relaxed",
                children: program.description
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "space-y-3",
                children: program.programs.map((prog, progIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "flex items-center",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.CheckCircle, {
                    className: "w-4 h-4 text-emerald-400 mr-3 flex-shrink-0"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    className: "text-gray-300",
                    children: prog
                  })]
                }, progIndex))
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
              children: "Mentorship Programs"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-xl text-gray-300 max-w-3xl mx-auto",
              children: "Connect with experienced professionals who can guide your career development, share knowledge, and help you navigate your professional journey."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
            className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
            children: mentorshipPrograms.map((program, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_5__.motion.div, {
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
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(program.icon, {
                  className: "w-8 h-8 text-blue-400"
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h3", {
                className: "text-xl font-bold text-white mb-3",
                children: program.title
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
                className: "text-gray-400 mb-6 leading-relaxed",
                children: program.description
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
                className: "space-y-2",
                children: program.benefits.map((benefit, benefitIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
                  className: "flex items-center text-sm",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.CheckCircle, {
                    className: "w-3 h-3 text-emerald-400 mr-2 flex-shrink-0"
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("span", {
                    className: "text-gray-300",
                    children: benefit
                  })]
                }, benefitIndex))
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
              children: "Ready to Grow Your Career?"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-xl text-gray-300 mb-8 leading-relaxed",
              children: "Join our team and take advantage of our comprehensive career development programs. We're committed to helping you achieve your professional goals."
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
              className: "flex flex-col sm:flex-row gap-4 justify-center",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/careers",
                className: "inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Target, {
                  className: "w-5 h-5 mr-2"
                }), "View Open Positions"]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                href: "/contact",
                className: "inline-flex items-center px-8 py-4 rounded-xl border border-blue-500/50 text-blue-400 font-semibold hover:bg-blue-500/10 transition-all duration-200",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Users, {
                  className: "w-5 h-5 mr-2"
                }), "Contact Us"]
              })]
            })]
          })
        })
      })]
    })
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CareerDevelopmentPage);

/***/ }),

/***/ 646060:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/no-fallback-error.external.js");

/***/ }),

/***/ 818047:
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
/* harmony import */ var private_next_pages_career_development_tsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(627250);
/* harmony import */ var next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(312289);



// Import the app and document modules.


// Import the userland code.


// Re-export the component (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_career_development_tsx__WEBPACK_IMPORTED_MODULE_5__, 'default'));
// Re-export methods.
const getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_career_development_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticProps');
const getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_career_development_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getStaticPaths');
const getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_career_development_tsx__WEBPACK_IMPORTED_MODULE_5__, 'getServerSideProps');
const config = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_career_development_tsx__WEBPACK_IMPORTED_MODULE_5__, 'config');
const reportWebVitals = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_career_development_tsx__WEBPACK_IMPORTED_MODULE_5__, 'reportWebVitals');
// Re-export legacy methods.
const unstable_getStaticProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_career_development_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticProps');
const unstable_getStaticPaths = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_career_development_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticPaths');
const unstable_getStaticParams = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_career_development_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getStaticParams');
const unstable_getServerProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_career_development_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerProps');
const unstable_getServerSideProps = (0,next_dist_build_templates_helpers__WEBPACK_IMPORTED_MODULE_2__.hoist)(private_next_pages_career_development_tsx__WEBPACK_IMPORTED_MODULE_5__, 'unstable_getServerSideProps');
// Create and export the route module that will be consumed.
const routeModule = new next_dist_server_route_modules_pages_module_compiled__WEBPACK_IMPORTED_MODULE_0__.PagesRouteModule({
    definition: {
        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.PAGES,
        page: "/career-development",
        pathname: "/career-development",
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
    userland: private_next_pages_career_development_tsx__WEBPACK_IMPORTED_MODULE_5__
});
const handler = (0,next_dist_server_route_modules_pages_pages_handler__WEBPACK_IMPORTED_MODULE_6__.getHandler)({
    srcPage: "/career-development",
    config,
    userland: private_next_pages_career_development_tsx__WEBPACK_IMPORTED_MODULE_5__,
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
var __webpack_exports__ = __webpack_require__.X(0, [618096,472076], () => (__webpack_exec__(818047)));
module.exports = __webpack_exports__;

})();