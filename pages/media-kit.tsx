import React from 'react';
import Layout from '../components/layout/Layout';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  Download, Image, FileText, Video, Globe, 
  ArrowRight, ExternalLink, Calendar, Users, 
  Building, Award, Star, CheckCircle, Eye,
  Mail, Phone, MapPin, Linkedin, Twitter,
  Github, Youtube, Instagram, Palette, Type,
  Layers, Grid, Zap, Shield, Rocket, Brain
} from 'lucide-react';

const MediaKitPage: React.FC = () => {
  const brandAssets = [
    {
      category: 'Primary Logos',
      items: [
        { 
          name: 'Primary Logo (PNG)', 
          format: 'PNG', 
          size: '2.1 MB', 
          description: 'High-resolution primary logo with transparent background',
          preview: '/assets/logo-primary.png',
          download: '/assets/logo-primary.png'
        },
        { 
          name: 'Primary Logo (SVG)', 
          format: 'SVG', 
          size: '45 KB', 
          description: 'Vector format logo for scalable use',
          preview: '/assets/logo-primary.svg',
          download: '/assets/logo-primary.svg'
        },
        { 
          name: 'Logo Stacked (PNG)', 
          format: 'PNG', 
          size: '1.8 MB', 
          description: 'Stacked version of primary logo',
          preview: '/assets/logo-stacked.png',
          download: '/assets/logo-stacked.png'
        },
        { 
          name: 'Logo Icon Only (PNG)', 
          format: 'PNG', 
          size: '1.2 MB', 
          description: 'Icon-only version for small spaces',
          preview: '/assets/logo-icon.png',
          download: '/assets/logo-icon.png'
        }
      ]
    },
    {
      category: 'Alternative Logos',
      items: [
        { 
          name: 'White Logo (PNG)', 
          format: 'PNG', 
          size: '1.9 MB', 
          description: 'White version for dark backgrounds',
          preview: '/assets/logo-white.png',
          download: '/assets/logo-white.png'
        },
        { 
          name: 'Black Logo (PNG)', 
          format: 'PNG', 
          size: '1.9 MB', 
          description: 'Black version for light backgrounds',
          preview: '/assets/logo-black.png',
          download: '/assets/logo-black.png'
        },
        { 
          name: 'Monochrome Logo (SVG)', 
          format: 'SVG', 
          size: '42 KB', 
          description: 'Single-color version for limited color applications',
          preview: '/assets/logo-monochrome.svg',
          download: '/assets/logo-monochrome.svg'
        }
      ]
    },
    {
      category: 'Brand Colors',
      items: [
        { 
          name: 'Primary Blue', 
          format: 'HEX', 
          size: '#06b6d4', 
          description: 'Main brand color for primary elements',
          preview: null,
          download: null
        },
        { 
          name: 'Secondary Cyan', 
          format: 'HEX', 
          size: '#0891b2', 
          description: 'Secondary brand color for accents',
          preview: null,
          download: null
        },
        { 
          name: 'Accent Purple', 
          format: 'HEX', 
          size: '#8b5cf6', 
          description: 'Accent color for highlights and special elements',
          preview: null,
          download: null
        },
        { 
          name: 'Neutral Gray', 
          format: 'HEX', 
          size: '#1f2937', 
          description: 'Neutral color for text and backgrounds',
          preview: null,
          download: null
        }
      ]
    },
    {
      category: 'Typography',
      items: [
        { 
          name: 'Primary Font', 
          format: 'Inter', 
          size: 'Variable', 
          description: 'Primary brand font family',
          preview: null,
          download: null
        },
        { 
          name: 'Heading Font', 
          format: 'Inter', 
          size: 'Variable', 
          description: 'Font for headings and titles',
          preview: null,
          download: null
        },
        { 
          name: 'Body Font', 
          format: 'Inter', 
          size: 'Variable', 
          description: 'Font for body text and content',
          preview: null,
          download: null
        }
      ]
    },
    {
      category: 'Product Imagery',
      items: [
        { 
          name: 'AI Platform Screenshots', 
          format: 'PNG', 
          size: 'Various', 
          description: 'High-quality screenshots of our AI consciousness platform',
          preview: '/assets/ai-platform-screenshots.png',
          download: '/assets/ai-platform-screenshots.zip'
        },
        { 
          name: 'Quantum Computing Interface', 
          format: 'PNG', 
          size: 'Various', 
          description: 'Screenshots of quantum computing solutions',
          preview: '/assets/quantum-interface.png',
          download: '/assets/quantum-interface.zip'
        },
        { 
          name: 'Space Technology Visuals', 
          format: 'PNG', 
          size: 'Various', 
          description: 'Visual representations of space resource intelligence',
          preview: '/assets/space-technology.png',
          download: '/assets/space-technology.zip'
        }
      ]
    },
    {
      category: 'Team & Office Photos',
      items: [
        { 
          name: 'Executive Team Photos', 
          format: 'JPG', 
          size: 'Various', 
          description: 'Professional photos of our leadership team',
          preview: '/assets/executive-team.jpg',
          download: '/assets/executive-team.zip'
        },
        { 
          name: 'Office & Workspace', 
          format: 'JPG', 
          size: 'Various', 
          description: 'Modern office and workspace images',
          preview: '/assets/office-workspace.jpg',
          download: '/assets/office-workspace.zip'
        },
        { 
          name: 'Team Collaboration', 
          format: 'JPG', 
          size: 'Various', 
          description: 'Team working and collaboration scenes',
          preview: '/assets/team-collaboration.jpg',
          download: '/assets/team-collaboration.zip'
        }
      ]
    }
  ];

  const mediaResources = [
    {
      icon: FileText,
      title: 'Company Fact Sheet',
      description: 'Key facts, figures, and information about Zion Tech Group',
      format: 'PDF',
      size: '2.3 MB',
      href: '/assets/fact-sheet.pdf',
      updated: '2024-12-15'
    },
    {
      icon: Building,
      title: 'Company Overview',
      description: 'Comprehensive company overview and mission statement',
      format: 'PDF',
      size: '1.8 MB',
      href: '/assets/company-overview.pdf',
      updated: '2024-12-10'
    },
    {
      icon: Users,
      title: 'Leadership Bios',
      description: 'Detailed biographies of our executive team',
      format: 'PDF',
      size: '3.1 MB',
      href: '/assets/leadership-bios.pdf',
      updated: '2024-12-05'
    },
    {
      icon: Award,
      title: 'Awards & Recognition',
      description: 'Complete list of awards and industry recognition',
      format: 'PDF',
      size: '1.5 MB',
      href: '/assets/awards-recognition.pdf',
      updated: '2024-11-30'
    },
    {
      icon: Globe,
      title: 'Global Operations',
      description: 'Information about our worldwide presence and operations',
      format: 'PDF',
      size: '2.7 MB',
      href: '/assets/global-operations.pdf',
      updated: '2024-11-25'
    },
    {
      icon: Zap,
      title: 'Technology Portfolio',
      description: 'Comprehensive overview of our technology solutions',
      format: 'PDF',
      size: '4.2 MB',
      href: '/assets/technology-portfolio.pdf',
      updated: '2024-11-20'
    }
  ];

  const brandGuidelines = [
    {
      icon: Palette,
      title: 'Color Usage',
      description: 'Guidelines for using our brand colors correctly',
      sections: ['Primary color applications', 'Secondary color usage', 'Accent color guidelines', 'Accessibility considerations']
    },
    {
      icon: Type,
      title: 'Typography',
      description: 'Rules for using our brand fonts and typography',
      sections: ['Font hierarchy', 'Size guidelines', 'Spacing rules', 'Readability standards']
    },
    {
      icon: Layers,
      title: 'Logo Usage',
      description: 'Proper ways to use and display our logos',
      sections: ['Clear space requirements', 'Minimum size limits', 'Background considerations', 'Prohibited modifications']
    },
    {
      icon: Grid,
      title: 'Layout & Spacing',
      description: 'Design principles for consistent brand presentation',
      sections: ['Grid system', 'Spacing standards', 'Alignment rules', 'Visual hierarchy']
    }
  ];

  const contactInfo = {
    pressEmail: 'press@ziontechgroup.com',
    generalEmail: 'info@ziontechgroup.com',
    phone: '+1-302-464-0950',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
    social: {
      linkedin: 'https://linkedin.com/company/zion-tech-group',
      twitter: 'https://twitter.com/ziontechgroup',
      github: 'https://github.com/ziontechgroup',
      youtube: 'https://youtube.com/@ziontechgroup'
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-8"
            >
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-300 text-sm font-medium mb-6">
                <Download className="w-4 h-4 mr-2" />
                Media Kit
              </div>
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 bg-clip-text text-transparent mb-6">
                Brand Assets & Resources
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Everything you need to represent Zion Tech Group accurately in your media coverage, 
                presentations, and communications. Download our official brand assets and guidelines.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Brand Assets */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Brand Assets</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Download our official brand assets including logos, colors, typography, and imagery 
                for use in your media coverage and communications.
              </p>
            </motion.div>
            
            <div className="space-y-12">
              {brandAssets.map((category, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50"
                >
                  <h3 className="text-2xl font-bold text-white mb-6">{category.category}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="bg-gray-800/50 rounded-xl p-6 border border-gray-700/50">
                        <div className="flex items-start justify-between mb-3">
                          <h4 className="text-lg font-semibold text-white">{item.name}</h4>
                          <span className="text-sm text-gray-400">{item.format}</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-3">{item.description}</p>
                        
                        {item.preview && (
                          <div className="mb-4">
                            <div className="w-full h-32 bg-gray-700/50 rounded-lg flex items-center justify-center">
                              <Image className="w-8 h-8 text-gray-400" />
                              <span className="text-gray-400 text-sm ml-2">Preview</span>
                            </div>
                          </div>
                        )}
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-500">{item.size}</span>
                          {item.download ? (
                            <button className="inline-flex items-center px-3 py-2 rounded-lg bg-blue-500/20 text-blue-400 hover:bg-blue-500/30 transition-all duration-200 text-sm">
                              <Download className="w-4 h-4 mr-2" />
                              Download
                            </button>
                          ) : (
                            <span className="text-sm text-gray-500">Reference Only</span>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Brand Guidelines */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Brand Guidelines</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Follow these guidelines to ensure consistent and professional representation of our brand 
                across all media and communications.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {brandGuidelines.map((guideline, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
                    <guideline.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{guideline.title}</h3>
                  <p className="text-gray-400 mb-6 leading-relaxed">{guideline.description}</p>
                  <ul className="space-y-2 text-left">
                    {guideline.sections.map((section, sectionIndex) => (
                      <li key={sectionIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {section}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Resources */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Media Resources</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Additional resources to help journalists and media professionals cover Zion Tech Group 
                accurately and comprehensively.
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {mediaResources.map((resource, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-6">
                    <resource.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{resource.title}</h3>
                  <p className="text-gray-400 mb-4 leading-relaxed">{resource.description}</p>
                  <div className="space-y-2 mb-4">
                    <div className="text-sm text-gray-500">Format: {resource.format}</div>
                    <div className="text-sm text-gray-500">Size: {resource.size}</div>
                    <div className="text-sm text-gray-500">Updated: {resource.updated}</div>
                  </div>
                  <button className="inline-flex items-center w-full justify-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-medium hover:from-blue-600 hover:to-cyan-600 transition-all duration-200">
                    <Download className="w-4 h-4 mr-2" />
                    Download
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Media Contact */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Media Contact</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our press team is available to help with media inquiries, interview requests, 
                and additional information needs.
              </p>
            </motion.div>
            
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-blue-400 mr-3" />
                      <div>
                        <div className="text-white font-medium">Press Inquiries</div>
                        <div className="text-gray-400">{contactInfo.pressEmail}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 text-blue-400 mr-3" />
                      <div>
                        <div className="text-white font-medium">General Inquiries</div>
                        <div className="text-gray-400">{contactInfo.generalEmail}</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 text-blue-400 mr-3" />
                      <div>
                        <div className="text-white font-medium">Phone</div>
                        <div className="text-gray-400">{contactInfo.phone}</div>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 text-blue-400 mr-3 mt-1" />
                      <div>
                        <div className="text-white font-medium">Address</div>
                        <div className="text-gray-400">{contactInfo.address}</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Follow Us</h3>
                  <div className="space-y-4">
                    <a href={contactInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                      <Linkedin className="w-5 h-5 mr-3" />
                      LinkedIn
                    </a>
                    <a href={contactInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                      <Twitter className="w-5 h-5 mr-3" />
                      Twitter
                    </a>
                    <a href={contactInfo.social.github} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                      <Github className="w-5 h-5 mr-3" />
                      GitHub
                    </a>
                    <a href={contactInfo.social.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center text-gray-400 hover:text-blue-400 transition-colors">
                      <Youtube className="w-5 h-5 mr-3" />
                      YouTube
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Need Additional Information?
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Can't find what you're looking for? Our press team is here to help with 
                any additional information or interview requests.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`mailto:${contactInfo.pressEmail}`}
                  className="inline-flex items-center px-8 py-4 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-200 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Press Team
                </a>
                <Link
                  href="/press"
                  className="inline-flex items-center px-8 py-4 rounded-xl border border-blue-500/50 text-blue-400 font-semibold hover:bg-blue-500/10 transition-all duration-200"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  View Press Releases
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default MediaKitPage;