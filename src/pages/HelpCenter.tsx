import { Header } from "@/components/header/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/Button";
import { Search, BookOpen, MessageCircle, Phone, Mail, FileText, Users, Settings, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";

export default function HelpCenter() {
  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics of using Zion's platform",
      icon: BookOpen,
      color: "from-zion-cyan to-zion-blue",
      link: "/help/getting-started"
    },
    {
      title: "Account & Profile",
      description: "Manage your account settings and profile",
      icon: Settings,
      color: "from-zion-purple to-zion-purple-dark",
      link: "/help/account-profile"
    },
    {
      title: "Marketplace",
      description: "How to buy, sell, and navigate the marketplace",
      icon: Zap,
      color: "from-zion-green to-zion-cyan",
      link: "/help/marketplace"
    },
    {
      title: "Talent & Hiring",
      description: "Find talent and get hired on the platform",
      icon: Users,
      color: "from-zion-orange to-zion-red",
      link: "/help/talent-hiring"
    },
    {
      title: "Payments & Billing",
      description: "Understanding payment methods and billing",
      icon: Shield,
      color: "from-zion-blue to-zion-purple",
      link: "/help/payments-billing"
    },
    {
      title: "API & Integration",
      description: "Developer resources and API documentation",
      icon: FileText,
      color: "from-zion-purple to-zion-cyan",
      link: "/help/api-integration"
    }
  ];

  const quickActions = [
    {
      title: "Contact Support",
      description: "Get help from our support team",
      icon: MessageCircle,
      action: "mailto:support@ziontechgroup.com",
      external: true
    },
    {
      title: "Schedule a Call",
      description: "Book a consultation with our experts",
      icon: Phone,
      action: "/contact",
      external: false
    },
    {
      title: "Live Chat",
      description: "Chat with us in real-time",
      icon: MessageCircle,
      action: "#",
      external: false
    }
  ];

  return (
    <>
      <SEO 
        title="Help Center - Zion Tech Group Support" 
        description="Get help and support for using Zion's AI and technology marketplace platform." 
        keywords="help center, support, Zion Tech Group, customer service, FAQ, documentation"
        canonical="https://ziontechgroup.com/help"
      />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <GradientHeading>Help Center</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">
              Find answers, get support, and learn how to make the most of Zion's platform
            </p>
          </div>

          {/* Search Section */}
          <div className="max-w-2xl mx-auto mb-16">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
              <input
                type="text"
                placeholder="Search for help articles, guides, and support..."
                className="w-full pl-12 pr-4 py-4 bg-zion-blue-dark border border-zion-blue-light rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-purple"
              />
            </div>
          </div>

          {/* Quick Actions */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {quickActions.map((action, index) => (
                <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:border-zion-purple transition-colors">
                  <div className="flex items-center mb-4">
                    <action.icon className="w-8 h-8 text-zion-cyan mr-3" />
                    <h3 className="text-xl font-semibold text-white">{action.title}</h3>
                  </div>
                  <p className="text-zion-slate-light mb-4">{action.description}</p>
                  {action.external ? (
                    <a
                      href={action.action}
                      className="inline-flex items-center text-zion-cyan hover:text-zion-purple transition-colors"
                    >
                      Get Started →
                    </a>
                  ) : (
                    <Link
                      to={action.action}
                      className="inline-flex items-center text-zion-cyan hover:text-zion-purple transition-colors"
                    >
                      Get Started →
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Help Categories */}
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-white mb-8 text-center">Help Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {helpCategories.map((category, index) => (
                <div key={index} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-6 hover:border-zion-purple transition-all hover:shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className={`p-3 rounded-lg bg-gradient-to-r ${category.color} mr-4`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                  </div>
                  <p className="text-zion-slate-light mb-4">{category.description}</p>
                  <Link
                    to={category.link}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-purple transition-colors"
                  >
                    Learn More →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-zion-blue-dark border border-zion-blue-light rounded-xl p-8 md:p-12 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Still need help?</h2>
            <p className="text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto">
              Our support team is here to help you succeed. Don't hesitate to reach out for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple" asChild>
                <Link to="/contact">Contact Support</Link>
              </Button>
              <Button variant="outline" className="border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white" asChild>
                <Link to="/faq">View FAQ</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}