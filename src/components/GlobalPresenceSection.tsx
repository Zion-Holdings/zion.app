import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Globe, 
  MapPin, 
  Users, 
  Award, 
  Star, 
  TrendingUp, 
  Building, 
  ArrowRight, 
  CheckCircle,
  Flag,
  Clock,
  Zap,
  Shield,
  Heart,
  Target
} from 'lucide-react';

const globalOffices = [
  {
    id: 1,
    city: "San Francisco",
    country: "United States",
    region: "North America",
    flag: "🇺🇸",
    established: "2018",
    teamSize: "45+",
    specialties: ["AI/ML", "Cloud Infrastructure", "Startup Innovation"],
    projects: 120,
    clients: 85,
    rating: 4.9,
    timezone: "PST (UTC-8)",
    address: "123 Innovation Drive, San Francisco, CA 94105"
  },
  {
    id: 2,
    city: "London",
    country: "United Kingdom",
    region: "Europe",
    flag: "🇬🇧",
    established: "2019",
    teamSize: "32+",
    specialties: ["FinTech", "Digital Banking", "RegTech"],
    projects: 95,
    clients: 67,
    rating: 4.8,
    timezone: "GMT (UTC+0)",
    address: "456 Tech Square, London, EC2A 4BX"
  },
  {
    id: 3,
    city: "Singapore",
    country: "Singapore",
    region: "Asia Pacific",
    flag: "🇸🇬",
    established: "2020",
    teamSize: "28+",
    specialties: ["E-commerce", "Digital Transformation", "Smart Cities"],
    projects: 78,
    clients: 54,
    rating: 4.9,
    timezone: "SGT (UTC+8)",
    address: "789 Digital Hub, Singapore 018956"
  },
  {
    id: 4,
    city: "Toronto",
    country: "Canada",
    region: "North America",
    flag: "🇨🇦",
    established: "2021",
    teamSize: "25+",
    specialties: ["Healthcare Tech", "AI Research", "Enterprise Solutions"],
    projects: 65,
    clients: 42,
    rating: 4.8,
    timezone: "EST (UTC-5)",
    address: "321 Innovation Center, Toronto, ON M5V 3A8"
  },
  {
    id: 5,
    city: "Berlin",
    country: "Germany",
    region: "Europe",
    flag: "🇩🇪",
    established: "2021",
    teamSize: "22+",
    specialties: ["IoT", "Manufacturing Tech", "Sustainability"],
    projects: 58,
    clients: 38,
    rating: 4.7,
    timezone: "CET (UTC+1)",
    address: "654 Tech District, Berlin, 10115"
  },
  {
    id: 6,
    city: "Sydney",
    country: "Australia",
    region: "Asia Pacific",
    flag: "🇦🇺",
    established: "2022",
    teamSize: "18+",
    specialties: ["EdTech", "Green Tech", "Digital Marketing"],
    projects: 42,
    clients: 29,
    rating: 4.8,
    timezone: "AEST (UTC+10)",
    address: "987 Innovation Bay, Sydney, NSW 2000"
  }
];

const globalStats = [
  { icon: <Globe className="w-6 h-6" />, value: "25+", label: "Countries Served" },
  { icon: <Building className="w-6 h-6" />, value: "6", label: "Global Offices" },
  { icon: <Users className="w-6 h-6" />, value: "170+", label: "Global Team" },
  { icon: <Award className="w-6 h-6" />, value: "500+", label: "Projects Delivered" },
  { icon: <Star className="w-6 h-6" />, value: "4.8/5", label: "Global Rating" },
  { icon: <TrendingUp className="w-6 h-6" />, value: "98%", label: "Client Satisfaction" }
];

const partnerships = [
  {
    name: "Microsoft",
    type: "Technology Partner",
    logo: "/logos/microsoft.svg",
    description: "Strategic partnership for Azure cloud solutions and enterprise services",
    established: "2020",
    projects: 25,
    status: "Active"
  },
  {
    name: "AWS",
    type: "Cloud Partner",
    logo: "/logos/aws.svg",
    description: "Premier consulting partner for AWS cloud infrastructure and solutions",
    established: "2019",
    projects: 42,
    status: "Active"
  },
  {
    name: "Google Cloud",
    type: "Cloud Partner",
    logo: "/logos/google-cloud.svg",
    description: "Partner for AI/ML solutions and cloud-native applications",
    established: "2021",
    projects: 18,
    status: "Active"
  },
  {
    name: "Salesforce",
    type: "Business Partner",
    logo: "/logos/salesforce.svg",
    description: "Consulting partner for CRM implementations and custom solutions",
    established: "2020",
    projects: 31,
    status: "Active"
  },
  {
    name: "Oracle",
    type: "Enterprise Partner",
    logo: "/logos/oracle.svg",
    description: "Partner for enterprise database and business applications",
    established: "2021",
    projects: 15,
    status: "Active"
  },
  {
    name: "IBM",
    type: "Technology Partner",
    logo: "/logos/ibm.svg",
    description: "Strategic partner for AI, blockchain, and enterprise solutions",
    established: "2022",
    projects: 12,
    status: "Active"
  }
];

const industries = [
  { name: "Financial Services", projects: 120, countries: 18, satisfaction: "99%" },
  { name: "Healthcare", projects: 85, countries: 15, satisfaction: "98%" },
  { name: "Manufacturing", projects: 95, countries: 22, satisfaction: "97%" },
  { name: "Retail & E-commerce", projects: 110, countries: 20, satisfaction: "98%" },
  { name: "Technology", projects: 150, countries: 25, satisfaction: "99%" },
  { name: "Education", projects: 65, countries: 12, satisfaction: "96%" }
];

export function GlobalPresenceSection() {
  const [selectedOffice, setSelectedOffice] = useState<number | null>(null);
  const [selectedPartnership, setSelectedPartnership] = useState<number | null>(null);
  const [hoveredIndustry, setHoveredIndustry] = useState<number | null>(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-zion-purple via-zion-slate-dark to-zion-blue relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-32 h-32 border border-zion-cyan rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-24 h-24 border border-zion-purple rounded-full"></div>
        <div className="absolute top-1/2 left-1/2 w-16 h-16 border border-zion-cyan-light rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Global <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Presence</span>
          </h2>
          <p className="text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed mb-8">
            From Silicon Valley to Singapore, Zion Tech Group operates across six continents, 
            serving clients worldwide with localized expertise and global innovation.
          </p>

          {/* Global stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-5xl mx-auto">
            {globalStats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-4 rounded-xl bg-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/20"
              >
                <div className="text-zion-cyan mb-2 flex justify-center">
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-zion-slate-light text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Global Offices */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Our <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Global Offices</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {globalOffices.map((office, index) => (
              <motion.div
                key={office.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative"
              >
                <div 
                  className="h-full p-6 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/20 group cursor-pointer"
                  onClick={() => setSelectedOffice(selectedOffice === office.id ? null : office.id)}
                >
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-3xl">{office.flag}</span>
                      <div>
                        <h4 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                          {office.city}
                        </h4>
                        <div className="text-zion-cyan text-sm">{office.country}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-zion-purple-light text-xs">{office.region}</div>
                      <div className="text-zion-slate-light text-xs">Est. {office.established}</div>
                    </div>
                  </div>

                  {/* Quick info */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                      <div className="text-zion-cyan font-bold text-sm">{office.teamSize}</div>
                      <div className="text-zion-slate-light text-xs">Team</div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                      <div className="text-zion-cyan font-bold text-sm">{office.projects}</div>
                      <div className="text-zion-slate-light text-xs">Projects</div>
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <div className="text-zion-cyan font-semibold text-sm mb-2">Specialties:</div>
                    <div className="flex flex-wrap gap-1">
                      {office.specialties.map((specialty, idx) => (
                        <span key={idx} className="px-2 py-1 bg-zion-blue-light/20 text-zion-cyan text-xs rounded-full border border-zion-cyan/30">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex items-center justify-between">
                    <span className="text-zion-purple-light font-medium text-sm group-hover:text-zion-purple transition-colors">
                      View Office Details
                    </span>
                    <ArrowRight className="w-4 h-4 text-zion-purple-light group-hover:text-zion-purple group-hover:translate-x-1 transition-all duration-300" />
                  </div>

                  {/* Expanded details */}
                  <AnimatePresence>
                    {selectedOffice === office.id && (
                      <motion.div 
                        className="mt-6 p-4 rounded-xl bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/30"
                        initial={{ opacity: 0, height: 0, y: 10 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="space-y-3 mb-4">
                          <div className="flex items-center gap-2 text-zion-slate-light/80 text-sm">
                            <MapPin className="w-4 h-4 text-zion-cyan" />
                            <span>{office.address}</span>
                          </div>
                          <div className="flex items-center gap-2 text-zion-slate-light/80 text-sm">
                            <Clock className="w-4 h-4 text-zion-cyan" />
                            <span>{office.timezone}</span>
                          </div>
                          <div className="flex items-center gap-2 text-zion-slate-light/80 text-sm">
                            <Users className="w-4 h-4 text-zion-cyan" />
                            <span>{office.clients} clients served</span>
                          </div>
                          <div className="flex items-center gap-2 text-zion-slate-light/80 text-sm">
                            <Star className="w-4 h-4 text-yellow-400" />
                            <span>{office.rating} rating</span>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Strategic Partnerships */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Strategic <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Partnerships</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partnerships.map((partnership, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                whileHover={{ y: -4 }}
                className="relative"
              >
                <div 
                  className="h-full p-6 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/20 group cursor-pointer"
                  onClick={() => setSelectedPartnership(selectedPartnership === index ? null : index)}
                >
                  {/* Header */}
                  <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-zion-cyan to-zion-purple mb-3 shadow-lg group-hover:shadow-xl transition-all duration-300">
                      <Building className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors">
                      {partnership.name}
                    </h4>
                    <div className="text-zion-cyan text-sm mb-1">{partnership.type}</div>
                    <div className="text-zion-slate-light text-xs">Since {partnership.established}</div>
                  </div>

                  <p className="text-zion-slate-light text-sm mb-4 leading-relaxed">
                    {partnership.description}
                  </p>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                      <div className="text-zion-cyan font-bold text-sm">{partnership.projects}</div>
                      <div className="text-zion-slate-light text-xs">Projects</div>
                    </div>
                    <div className="text-center p-2 rounded-lg bg-zion-blue-light/20 border border-zion-cyan/30">
                      <div className="text-zion-cyan font-bold text-sm">{partnership.status}</div>
                      <div className="text-zion-slate-light text-xs">Status</div>
                    </div>
                  </div>

                  {/* Expanded details */}
                  <AnimatePresence>
                    {selectedPartnership === index && (
                      <motion.div 
                        className="mt-4 p-3 rounded-xl bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-cyan/30"
                        initial={{ opacity: 0, height: 0, y: 10 }}
                        animate={{ opacity: 1, height: "auto", y: 0 }}
                        exit={{ opacity: 0, height: 0, y: 10 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="flex items-center gap-2 text-zion-cyan text-sm">
                          <CheckCircle className="w-4 h-4" />
                          <span>Partnership Active</span>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Industry Presence */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Industry <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">Presence</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onHoverStart={() => setHoveredIndustry(index)}
                onHoverEnd={() => setHoveredIndustry(null)}
                whileHover={{ y: -4 }}
                className="p-6 rounded-2xl bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm border border-zion-blue-light/30 hover:border-zion-cyan/50 transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/20"
              >
                <h4 className="text-xl font-bold text-white mb-4">{industry.name}</h4>
                
                <div className="grid grid-cols-3 gap-4 text-center mb-4">
                  <div>
                    <div className="text-zion-cyan font-bold text-lg">{industry.projects}</div>
                    <div className="text-zion-slate-light text-xs">Projects</div>
                  </div>
                  <div>
                    <div className="text-zion-purple font-bold text-lg">{industry.countries}</div>
                    <div className="text-zion-slate-light text-xs">Countries</div>
                  </div>
                  <div>
                    <div className="text-zion-cyan-light font-bold text-lg">{industry.satisfaction}</div>
                    <div className="text-zion-slate-light text-xs">Satisfaction</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <div className="inline-block p-1 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl">
            <div className="px-8 py-6 bg-zion-blue-dark rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">
                Ready to Go Global with Zion?
              </h3>
              <p className="text-zion-slate-light mb-6 max-w-2xl mx-auto">
                Whether you're in San Francisco or Singapore, our global team is ready to help you 
                scale your business worldwide with cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-3 bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-dark hover:to-zion-purple-dark text-white rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-cyan/25">
                  Find Your Local Office
                </button>
                <button className="px-8 py-3 bg-zion-blue-light/20 hover:bg-zion-blue-light/30 text-zion-cyan border border-zion-cyan/30 hover:border-zion-cyan/50 rounded-xl font-medium transition-all duration-300">
                  View Global Projects
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}