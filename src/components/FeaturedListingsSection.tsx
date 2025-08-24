import React from 'react';
<<<<<<< HEAD
import { Link } from 'react-router-dom';

export const FeaturedListingsSection: React.FC = () => {
  const featuredServices = [
    {
      id: 'ai-automation',
      title: 'AI Process Automation',
      description: 'Streamline your business operations with intelligent automation',
      category: 'AI Services',
      price: '$2,999',
      image: '/images/ai-automation.jpg'
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration Services',
      description: 'Seamlessly migrate your infrastructure to the cloud',
      category: 'IT Services',
      price: '$4,999',
      image: '/images/cloud-migration.jpg'
    },
    {
      id: 'cybersecurity-audit',
      title: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations',
      category: 'Cybersecurity',
      price: '$3,499',
      image: '/images/cybersecurity-audit.jpg'
    }
  ];

  return (
    <section className="py-16 bg-zion-blue-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Featured Services
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover our most popular and innovative solutions
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredServices.map((service) => (
            <div key={service.id} className="bg-zion-blue-light rounded-lg overflow-hidden border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300">
              <div className="h-48 bg-gradient-to-br from-zion-blue to-zion-purple flex items-center justify-center">
                <span className="text-6xl">🚀</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-zion-cyan font-medium">{service.category}</span>
                  <span className="text-2xl font-bold text-white">{service.price}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-zion-slate-light mb-4">{service.description}</p>
                <Link 
                  to={`/services/${service.id}`}
                  className="inline-block bg-zion-cyan hover:bg-zion-cyan-dark text-white px-6 py-2 rounded-lg transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link 
            to="/comprehensive-services"
            className="inline-block bg-gradient-to-r from-zion-purple to-zion-cyan text-white px-8 py-3 rounded-lg font-semibold hover:from-zion-purple-dark hover:to-zion-cyan-dark transition-all duration-300"
          >
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};
=======
import { motion } from 'framer-motion';
import { Star, MapPin, Clock, ArrowRight, Sparkles } from 'lucide-react';

export function FeaturedListingsSection() {
  const featuredListings = [
    {
      id: 1,
      title: 'Senior AI Developer',
      company: 'TechCorp Inc.',
      location: 'Remote',
      type: 'Full-time',
      salary: '$120K - $180K',
      rating: 4.8,
      reviews: 24,
      tags: ['AI/ML', 'Python', 'TensorFlow'],
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Engineer',
      company: 'CloudTech Solutions',
      location: 'San Francisco, CA',
      type: 'Contract',
      salary: '$80K - $120K',
      rating: 4.6,
      reviews: 18,
      tags: ['AWS', 'Docker', 'Kubernetes'],
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity Specialist',
      company: 'SecureNet Systems',
      location: 'New York, NY',
      type: 'Full-time',
      salary: '$100K - $150K',
      rating: 4.9,
      reviews: 31,
      tags: ['Security', 'Penetration Testing', 'Compliance'],
      featured: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-zion-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-zion-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div variants={itemVariants} className="mb-4">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/10 border border-zion-cyan/20 text-zion-cyan text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Featured Opportunities
            </span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured Listings
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            Discover top-tier opportunities from leading companies. Our featured listings showcase 
            the most exciting roles in tech, AI, and digital transformation.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
        >
          {featuredListings.map((listing) => (
            <motion.div
              key={listing.id}
              variants={itemVariants}
              className="group relative bg-zion-blue-light/10 border border-zion-blue-light/20 rounded-2xl p-6 backdrop-blur-sm hover:border-zion-cyan/40 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/20"
            >
              {/* Featured Badge */}
              {listing.featured && (
                <div className="absolute -top-3 left-6 bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-3 py-1 rounded-full text-xs font-semibold">
                  Featured
                </div>
              )}

              {/* Header */}
              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                  {listing.title}
                </h3>
                <p className="text-zion-slate-light text-sm">{listing.company}</p>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(listing.rating)
                          ? 'text-yellow-400 fill-current'
                          : 'text-zion-slate-light'
                      }`}
                    />
                  ))}
                </div>
                <span className="text-zion-slate-light text-sm ml-2">
                  {listing.rating} ({listing.reviews} reviews)
                </span>
              </div>

              {/* Details */}
              <div className="space-y-2 mb-4">
                <div className="flex items-center text-zion-slate-light text-sm">
                  <MapPin className="w-4 h-4 mr-2" />
                  {listing.location}
                </div>
                <div className="flex items-center text-zion-slate-light text-sm">
                  <Clock className="w-4 h-4 mr-2" />
                  {listing.type} • {listing.salary}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-4">
                {listing.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 bg-zion-blue-light/20 border border-zion-blue-light/30 rounded-md text-xs text-zion-slate-light"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <button className="w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white py-2 rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/20 flex items-center justify-center">
                View Details
                <ArrowRight className="w-4 h-4 ml-2" />
              </button>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Button */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <button className="inline-flex items-center px-8 py-3 bg-zion-blue-light/10 border border-zion-cyan/20 text-zion-cyan hover:bg-zion-cyan/10 hover:border-zion-cyan/40 rounded-xl font-semibold transition-all duration-300">
            View All Listings
            <ArrowRight className="w-5 h-5 ml-2" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
>>>>>>> 8ecb7b92b614d6c2cda5536f81725e29ef34b4e1
