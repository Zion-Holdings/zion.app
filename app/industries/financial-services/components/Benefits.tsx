// app/industries/financial-services/components/Benefits.tsx
import { Shield, TrendingUp, Clock, BarChart3, Users, Lock, Globe, CheckCircle } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: '99.8% Fraud Detection Accuracy',
    description: 'Our AI models identify fraudulent patterns with near-zero false positives, reducing losses and improving customer trust.',
  },
  {
    icon: TrendingUp,
    title: '25% Increase in Trading ROI',
    description: 'Algorithmic trading AI delivers consistent alpha through data-driven investment strategies and risk management.',
  },
  {
    icon: Clock,
    title: '80% Reduction in Compliance Time',
    description: 'Automate regulatory reporting, audit trails, and policy monitoring to focus on strategic initiatives.',
  },
  {
    icon: BarChart3,
    title: 'Predictive Analytics Accuracy',
    description: 'Forecast cash flow, credit risk, and market trends with 95%+ accuracy using machine learning models.',
  },
  {
    icon: Users,
    title: 'Customer 360° Visibility',
    description: 'Unify customer data across channels for personalized experiences and improved retention rates.',
  },
  {
    icon: Lock,
    title: 'Bank-Level Security',
    description: 'SOC 2 compliant infrastructure with end-to-end encryption and zero-trust architecture.',
  },
  {
    icon: Globe,
    title: 'Global Regulatory Coverage',
    description: 'Support for 15+ jurisdictions with real-time updates for changing financial regulations.',
  },
  {
    icon: CheckCircle,
    title: 'Proven ROI',
    description: 'Average 300% ROI within the first year through risk reduction and revenue optimization.',
  },
];

export default function FinancialServicesBenefits() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {benefits.map((benefit, index) => (
        <div
          key={index}
          className="glass-card p-6 border-l-4 border-purple-500/50 hover:border-purple-400 transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-purple-600/20 rounded-full flex items-center justify-center flex-shrink-0">
              <benefit.icon className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h3 className="font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-slate-400 text-sm">{benefit.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}