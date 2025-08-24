import { motion } from 'framer-motion';
import { Mail, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    setIsSubmitting(true);
    
    // Simulate subscription
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubscribed(true);
      setEmail('');
    } catch (error) {
      console.error('Subscription error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-zion-cyan to-transparent opacity-50"></div>
        <div className="absolute bottom-0 right-0 w-full h-1 bg-gradient-to-r from-transparent via-zion-purple to-transparent opacity-50"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-zion-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-zion-purple/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-flex items-center px-4 py-2 rounded-full bg-zion-cyan/10 border border-zion-cyan/20 text-zion-cyan text-sm font-medium">
              <Sparkles className="w-4 h-4 mr-2" />
              Stay Updated
            </span>
          </motion.div>

          <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-white mb-6">
            Never Miss Tech Opportunities
          </motion.h2>

          <motion.p variants={itemVariants} className="text-xl text-zion-slate-light mb-8 leading-relaxed">
            Subscribe to our newsletter and get exclusive access to the latest AI developments, 
            tech job opportunities, and industry insights delivered straight to your inbox.
          </motion.p>

          <motion.div variants={itemVariants} className="bg-zion-blue-light/10 border border-zion-blue-light/20 rounded-2xl p-8 backdrop-blur-sm">
            {!isSubscribed ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                  <div className="flex-1 relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light w-5 h-5" />
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="pl-10 pr-4 py-3 bg-zion-blue-light/10 border-zion-blue-light/20 text-white placeholder-zion-slate-light focus:border-zion-cyan focus:ring-zion-cyan/20"
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting || !email.trim()}
                    className="bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan/90 hover:to-zion-purple/90 text-white px-8 py-3 font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center">
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Subscribing...
                      </div>
                    ) : (
                      <>
                        Subscribe
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </>
                    )}
                  </Button>
                </div>
                
                <p className="text-sm text-zion-slate-light">
                  By subscribing, you agree to receive marketing emails from Zion Tech Group. 
                  You can unsubscribe at any time.
                </p>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Welcome to the Family!</h3>
                <p className="text-zion-slate-light mb-4">
                  You've successfully subscribed to our newsletter. Check your email for a confirmation message.
                </p>
                <button
                  onClick={() => setIsSubscribed(false)}
                  className="text-zion-cyan hover:text-zion-cyan/80 transition-colors"
                >
                  Subscribe another email
                </button>
              </div>
            )}
          </motion.div>

          <motion.div variants={itemVariants} className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-zion-cyan/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Mail className="w-6 h-6 text-zion-cyan" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Weekly Updates</h4>
              <p className="text-zion-slate-light text-sm">Get the latest tech news and opportunities every week</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-zion-purple/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Sparkles className="w-6 h-6 text-zion-purple" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Exclusive Content</h4>
              <p className="text-zion-slate-light text-sm">Access to premium insights and early access to features</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-zion-blue/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <ArrowRight className="w-6 h-6 text-zion-blue" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">No Spam</h4>
              <p className="text-zion-slate-light text-sm">We respect your inbox and only send valuable content</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}