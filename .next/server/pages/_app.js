"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 8046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ App)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "lucide-react"
var external_lucide_react_ = __webpack_require__(2423);
;// CONCATENATED MODULE: ./components/layout/Header.tsx




const Header = ()=>{
    const { 0: isMenuOpen , 1: setIsMenuOpen  } = (0,external_react_.useState)(false);
    const { 0: isServicesOpen , 1: setIsServicesOpen  } = (0,external_react_.useState)(false);
    const servicesRef = (0,external_react_.useRef)(null);
    const services = [
        {
            name: "AI Development",
            href: "/services/ai-development",
            description: "Custom AI solutions and ML models"
        },
        {
            name: "Cloud Architecture",
            href: "/services/cloud-services",
            description: "Scalable cloud infrastructure"
        },
        {
            name: "Data Analytics",
            href: "/services/data-analytics",
            description: "Business intelligence & insights"
        },
        {
            name: "Blockchain Solutions",
            href: "/services/blockchain",
            description: "Decentralized applications"
        },
        {
            name: "IoT Platforms",
            href: "/services/iot-platforms",
            description: "Connected device solutions"
        },
        {
            name: "Web Development",
            href: "/services/web-development",
            description: "Modern web applications"
        }, 
    ];
    // Close dropdowns when clicking outside
    (0,external_react_.useEffect)(()=>{
        const handleClickOutside = (event)=>{
            if (servicesRef.current && !servicesRef.current.contains(event.target)) {
                setIsServicesOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    // Handle escape key
    (0,external_react_.useEffect)(()=>{
        const handleEscapeKey = (event)=>{
            if (event.key === "Escape") {
                setIsServicesOpen(false);
                setIsMenuOpen(false);
            }
        };
        document.addEventListener("keydown", handleEscapeKey);
        return ()=>document.removeEventListener("keydown", handleEscapeKey);
    }, []);
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: "fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10",
        role: "banner",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container mx-auto px-4",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex items-center justify-between h-16",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            "aria-label": "Zion Tech Group - Homepage",
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center space-x-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-white font-bold text-lg",
                                            children: "Z"
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "text-white font-bold text-xl",
                                        children: "Zion Tech Group"
                                    })
                                ]
                            })
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                            className: "hidden md:flex items-center space-x-8",
                            role: "navigation",
                            "aria-label": "Main navigation",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    className: "text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1",
                                    "aria-label": "Home page",
                                    children: "Home"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "relative group",
                                    ref: servicesRef,
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                            className: "flex items-center text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1",
                                            onClick: ()=>setIsServicesOpen(!isServicesOpen),
                                            onKeyDown: (e)=>{
                                                if (e.key === "Enter" || e.key === " ") {
                                                    e.preventDefault();
                                                    setIsServicesOpen(!isServicesOpen);
                                                }
                                            },
                                            "aria-expanded": isServicesOpen,
                                            "aria-haspopup": "true",
                                            "aria-label": "Services menu",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "Services"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.ChevronDown, {
                                                    className: `ml-1 h-4 w-4 transition-transform ${isServicesOpen ? "rotate-180" : ""}`,
                                                    "aria-hidden": "true"
                                                })
                                            ]
                                        }),
                                        isServicesOpen && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "absolute top-full left-0 mt-2 w-80 bg-gray-900 border border-gray-700 rounded-lg shadow-xl py-2 animate-in fade-in-0 zoom-in-95 duration-200",
                                            role: "menu",
                                            "aria-label": "Services submenu",
                                            children: services.map((service, index)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                                                    href: service.href,
                                                    className: "block px-4 py-3 text-white hover:bg-gray-800 transition-colors focus:outline-none focus:bg-gray-800",
                                                    role: "menuitem",
                                                    tabIndex: isServicesOpen ? 0 : -1,
                                                    onClick: ()=>setIsServicesOpen(false),
                                                    children: [
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "font-medium",
                                                            children: service.name
                                                        }),
                                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                            className: "text-sm text-gray-400 mt-1",
                                                            children: service.description
                                                        })
                                                    ]
                                                }, service.href))
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/about",
                                    className: "text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1",
                                    "aria-label": "About us page",
                                    children: "About"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/contact",
                                    className: "text-white/80 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-md px-2 py-1",
                                    "aria-label": "Contact us page",
                                    children: "Contact"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/contact",
                                    className: "bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black",
                                    "aria-label": "Get started with your project",
                                    children: "Get Started"
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: "md:hidden text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-black rounded-md p-2",
                            onClick: ()=>setIsMenuOpen(!isMenuOpen),
                            "aria-expanded": isMenuOpen,
                            "aria-controls": "mobile-menu",
                            "aria-label": isMenuOpen ? "Close mobile menu" : "Open mobile menu",
                            children: isMenuOpen ? /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.X, {
                                className: "h-6 w-6",
                                "aria-hidden": "true"
                            }) : /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.Menu, {
                                className: "h-6 w-6",
                                "aria-hidden": "true"
                            })
                        })
                    ]
                }),
                isMenuOpen && /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                    id: "mobile-menu",
                    className: "md:hidden bg-gray-900 border-t border-gray-700 py-4 animate-in slide-in-from-top-5 duration-200",
                    role: "navigation",
                    "aria-label": "Mobile navigation",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col space-y-2",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/",
                                className: "text-white hover:bg-gray-800 px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900",
                                onClick: ()=>setIsMenuOpen(false),
                                "aria-label": "Home page",
                                children: "Home"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "px-4 py-2",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "text-white font-medium mb-2",
                                        children: "Services"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "pl-4 space-y-1",
                                        children: services.map((service)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: service.href,
                                                className: "block text-gray-300 hover:text-white hover:bg-gray-800 px-2 py-1 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900",
                                                onClick: ()=>setIsMenuOpen(false),
                                                children: service.name
                                            }, service.href))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/about",
                                className: "text-white hover:bg-gray-800 px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900",
                                onClick: ()=>setIsMenuOpen(false),
                                "aria-label": "About us page",
                                children: "About"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/contact",
                                className: "text-white hover:bg-gray-800 px-4 py-2 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900",
                                onClick: ()=>setIsMenuOpen(false),
                                "aria-label": "Contact us page",
                                children: "Contact"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "px-4 pt-2",
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/contact",
                                    className: "block bg-gradient-to-r from-blue-600 to-purple-600 text-white text-center px-6 py-3 rounded-lg font-medium hover:from-blue-700 hover:to-purple-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900",
                                    onClick: ()=>setIsMenuOpen(false),
                                    "aria-label": "Get started with your project",
                                    children: "Get Started"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const layout_Header = (Header);

;// CONCATENATED MODULE: ./components/layout/Footer.tsx



const Footer = ()=>{
    const currentYear = new Date().getFullYear();
    const services = [
        {
            name: "AI Development",
            href: "/services/ai-development"
        },
        {
            name: "Cloud Architecture",
            href: "/services/cloud-services"
        },
        {
            name: "Data Analytics",
            href: "/services/data-analytics"
        },
        {
            name: "Blockchain Solutions",
            href: "/services/blockchain"
        },
        {
            name: "IoT Platforms",
            href: "/services/iot-platforms"
        },
        {
            name: "Web Development",
            href: "/services/web-development"
        }, 
    ];
    const company = [
        {
            name: "About Us",
            href: "/about"
        },
        {
            name: "Our Team",
            href: "/about#team"
        },
        {
            name: "Careers",
            href: "/careers"
        },
        {
            name: "Blog",
            href: "/blog"
        },
        {
            name: "Case Studies",
            href: "/case-studies"
        }, 
    ];
    const support = [
        {
            name: "Contact Support",
            href: "/contact"
        },
        {
            name: "Documentation",
            href: "/docs"
        },
        {
            name: "API Reference",
            href: "/api"
        },
        {
            name: "Status Page",
            href: "/status"
        }, 
    ];
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "bg-black text-white",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container mx-auto px-4 py-16",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex items-center space-x-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                            className: "w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                className: "text-white font-bold text-xl",
                                                children: "Z"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            className: "text-white font-bold text-xl",
                                            children: "Zion Tech Group"
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "text-gray-400 text-sm leading-relaxed",
                                    children: "Leading technology solutions provider helping businesses transform their digital presence with cutting-edge AI, cloud architecture, and innovative development services."
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex space-x-4 pt-4",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "https://linkedin.com",
                                            className: "text-gray-400 hover:text-blue-400 transition-colors",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.Linkedin, {
                                                className: "w-5 h-5"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "https://twitter.com",
                                            className: "text-gray-400 hover:text-blue-400 transition-colors",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.Twitter, {
                                                className: "w-5 h-5"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "https://github.com",
                                            className: "text-gray-400 hover:text-blue-400 transition-colors",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.Github, {
                                                className: "w-5 h-5"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: "https://facebook.com",
                                            className: "text-gray-400 hover:text-blue-400 transition-colors",
                                            children: /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.Facebook, {
                                                className: "w-5 h-5"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "text-lg font-semibold text-white",
                                    children: "Our Services"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "space-y-2",
                                    children: services.map((service)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: service.href,
                                                className: "text-gray-400 hover:text-white transition-colors text-sm",
                                                children: service.name
                                            })
                                        }, service.name))
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "text-lg font-semibold text-white",
                                    children: "Company"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    className: "space-y-2",
                                    children: company.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: item.href,
                                                className: "text-gray-400 hover:text-white transition-colors text-sm",
                                                children: item.name
                                            })
                                        }, item.name))
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                    className: "text-lg font-semibold text-white",
                                    children: "Contact & Support"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "space-y-3",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex items-center space-x-3 text-gray-400 text-sm",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.Mail, {
                                                    className: "w-4 h-4 text-blue-400"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "info@ziontechgroup.com"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex items-center space-x-3 text-gray-400 text-sm",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.Phone, {
                                                    className: "w-4 h-4 text-blue-400"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "+1 (555) 123-4567"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "flex items-center space-x-3 text-gray-400 text-sm",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx(external_lucide_react_.MapPin, {
                                                    className: "w-4 h-4 text-blue-400"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                    children: "San Francisco, CA"
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "pt-2",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                            className: "text-sm font-medium text-white mb-2",
                                            children: "Support"
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                            className: "space-y-1",
                                            children: support.map((item)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                        href: item.href,
                                                        className: "text-gray-400 hover:text-white transition-colors text-sm",
                                                        children: item.name
                                                    })
                                                }, item.name))
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "border-t border-gray-800",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container mx-auto px-4 py-8",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "max-w-2xl mx-auto text-center",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                                className: "text-xl font-semibold text-white mb-2",
                                children: "Stay Updated with Our Latest Insights"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-gray-400 mb-6",
                                children: "Get the latest technology trends, case studies, and company updates delivered to your inbox."
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex flex-col sm:flex-row gap-3 max-w-md mx-auto",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                        type: "email",
                                        placeholder: "Enter your email",
                                        className: "flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                        className: "px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25",
                                        children: "Subscribe"
                                    })
                                ]
                            })
                        ]
                    })
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "border-t border-gray-800",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "container mx-auto px-4 py-6",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "text-gray-400 text-sm",
                                children: [
                                    "\xa9 ",
                                    currentYear,
                                    " Zion Tech Group. All rights reserved."
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex space-x-6 text-sm",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/privacy",
                                        className: "text-gray-400 hover:text-white transition-colors",
                                        children: "Privacy Policy"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/terms",
                                        className: "text-gray-400 hover:text-white transition-colors",
                                        children: "Terms of Service"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "/cookies",
                                        className: "text-gray-400 hover:text-white transition-colors",
                                        children: "Cookie Policy"
                                    })
                                ]
                            })
                        ]
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const layout_Footer = (Footer);

;// CONCATENATED MODULE: ./components/Layout.tsx




const Layout = ({ children  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "min-h-screen bg-black text-white",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Header, {}),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "pt-16",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layout_Footer, {})
        ]
    });
};
/* harmony default export */ const components_Layout = (Layout);

;// CONCATENATED MODULE: ./pages/_app.tsx



function App({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(components_Layout, {
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}


/***/ }),

/***/ 2423:
/***/ ((module) => {

module.exports = require("lucide-react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1897:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-bot.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [676,664], () => (__webpack_exec__(8046)));
module.exports = __webpack_exports__;

})();