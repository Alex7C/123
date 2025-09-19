import React, { useState } from 'react';
import { 
  Bot, 
  Zap, 
  Users, 
  TrendingUp, 
  MessageCircle, 
  BarChart3, 
  Clock, 
  DollarSign, 
  CheckCircle, 
  ArrowRight,
  Menu,
  X,
  Star,
  Sparkles,
  Brain,
  Target,
  Shield,
  Rocket
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const automationCapabilities = [
    {
      icon: MessageCircle,
      title: "Support Management",
      description: "24/7 customer support with intelligent ticket routing, automated responses, and escalation management"
    },
    {
      icon: TrendingUp,
      title: "Forecasting & Analytics",
      description: "Predictive analytics, trend analysis, and automated reporting that outperforms traditional analysts"
    },
    {
      icon: BarChart3,
      title: "Data Intelligence",
      description: "Real-time data processing, insight generation, and automated decision-making systems"
    },
    {
      icon: Users,
      title: "Team Coordination",
      description: "Automated project management, resource allocation, and performance monitoring"
    },
    {
      icon: Target,
      title: "Sales Operations",
      description: "Lead qualification, pipeline management, and automated follow-up sequences"
    },
    {
      icon: Brain,
      title: "Strategic Planning",
      description: "Market analysis, competitive intelligence, and automated strategy recommendations"
    }
  ];

  const benefits = [
    { text: "Reduce operational costs by up to 80%" },
    { text: "24/7 availability without breaks or sick days" },
    { text: "Consistent performance and zero human error" },
    { text: "Instant scalability during peak periods" },
    { text: "Complete audit trail and compliance reporting" },
    { text: "Continuous learning and improvement" }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, TechFlow Inc",
      content: "We replaced our entire support team with this AI solution. Response times improved 10x and customer satisfaction is at an all-time high.",
      rating: 5
    },
    {
      name: "Marcus Rodriguez", 
      role: "CFO, GrowthLabs",
      content: "The forecasting accuracy is incredible. Our AI analyst consistently outperforms what our human team could deliver.",
      rating: 5
    },
    {
      name: "Jennifer Park",
      role: "COO, StreamlineHQ", 
      content: "Complete game-changer. We've automated 90% of our operations and can focus on strategic growth instead of day-to-day management.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header */}
      <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-800/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Bot className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold text-white">AutomateAI</span>
            </div>
            
            <nav className="hidden md:flex space-x-8">
              <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
              <a href="#benefits" className="text-slate-300 hover:text-white transition-colors">Benefits</a>
              <a href="#testimonials" className="text-slate-300 hover:text-white transition-colors">Reviews</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
            </nav>

            <button
              className="md:hidden text-slate-300 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden absolute top-16 left-0 right-0 bg-slate-900/95 backdrop-blur-sm border-b border-slate-800/50">
              <nav className="px-4 py-4 space-y-3">
                <a href="#features" className="block text-slate-300 hover:text-white transition-colors">Features</a>
                <a href="#benefits" className="block text-slate-300 hover:text-white transition-colors">Benefits</a>
                <a href="#testimonials" className="block text-slate-300 hover:text-white transition-colors">Reviews</a>
                <a href="#pricing" className="block text-slate-300 hover:text-white transition-colors">Pricing</a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span className="text-blue-400 text-sm font-medium">Revolutionary AI Workforce</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Replace Your Entire
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Team</span>
            <br />
            With AI Automation
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Why hire support managers, analysts, and forecasters when one AI solution can outperform them all? 
            Automate every role, eliminate human error, and scale infinitely.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2">
              <Rocket className="h-5 w-5" />
              <span>Start Automating Today</span>
            </button>
            <button className="border-2 border-slate-600 hover:border-slate-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-slate-800/50">
              Watch Demo
            </button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">80%</div>
              <div className="text-slate-400">Cost Reduction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-slate-400">Availability</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">10x</div>
              <div className="text-slate-400">Faster Response</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">0%</div>
              <div className="text-slate-400">Human Error</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Tired of Managing People Instead of Growth?
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Every day you spend managing human teams is a day not spent scaling your business. 
              Human limitations are holding you back.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-8 text-center">
              <Clock className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Human Limitations</h3>
              <p className="text-slate-300">8-hour workdays, sick leaves, vacations, and inconsistent performance</p>
            </div>
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-8 text-center">
              <DollarSign className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Massive Overhead</h3>
              <p className="text-slate-300">Salaries, benefits, training, turnover costs, and management overhead</p>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-8 text-center">
              <TrendingUp className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Scaling Bottleneck</h3>
              <p className="text-slate-300">Hiring, training, and managing teams becomes exponentially complex</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              One AI Solution. Every Role Automated.
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Why hire a team when you can deploy a comprehensive AI workforce that never sleeps, 
              never makes mistakes, and continuously improves?
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {automationCapabilities.map((capability, index) => {
              const IconComponent = capability.icon;
              return (
                <div 
                  key={index}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300 hover:border-blue-500/30 hover:shadow-xl group"
                >
                  <div className="bg-blue-500/10 rounded-lg w-16 h-16 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{capability.title}</h3>
                  <p className="text-slate-300">{capability.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Why Choose AI Over Human Teams?
              </h2>
              <p className="text-xl text-slate-300 mb-8">
                Every successful business will eventually automate their workforce. 
                The question is: will you lead or follow?
              </p>
              
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-slate-300">{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">ROI Calculator</h3>
              <div className="space-y-6">
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">Current Team Cost (Annual)</span>
                    <span className="text-white font-semibold">$500,000</span>
                  </div>
                </div>
                <div className="bg-slate-800/50 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-300">AI Solution Cost (Annual)</span>
                    <span className="text-white font-semibold">$99,000</span>
                  </div>
                </div>
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-green-400 font-semibold">Your Annual Savings</span>
                    <span className="text-green-400 font-bold text-xl">$401,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Companies That Made the Switch
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Don't just take our word for it. See how forward-thinking companies 
              transformed their operations.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 hover:bg-slate-800/70 transition-all duration-300"
              >
                <div className="flex items-center space-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-slate-400">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Replace Your Team. Not Your Budget.
          </h2>
          
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-12 mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 rounded-full px-4 py-2 mb-6">
              <Shield className="h-4 w-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">Enterprise Solution</span>
            </div>
            
            <div className="text-6xl font-bold text-white mb-4">$8,250<span className="text-2xl text-slate-400">/month</span></div>
            <p className="text-xl text-slate-300 mb-8">Complete AI workforce replacement</p>
            
            <div className="grid md:grid-cols-2 gap-4 text-left mb-8">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-slate-300">Unlimited automation workflows</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-slate-300">24/7 support & monitoring</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-slate-300">Custom integrations</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-green-400" />
                <span className="text-slate-300">Advanced analytics & reporting</span>
              </div>
            </div>

            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-4 rounded-lg font-semibold text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center space-x-2 mx-auto">
              <ArrowRight className="h-6 w-6" />
              <span>Start Your AI Transformation</span>
            </button>
          </div>

          <p className="text-slate-400">
            Compare: The average mid-size team costs $500K+ annually. Our AI solution delivers superior results for 80% less.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            The Future of Work is Here
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Stop managing people. Start scaling with AI. Join the companies already dominating 
            their markets with automated operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
              Schedule Demo
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
              Get Free Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Bot className="h-8 w-8 text-blue-400" />
                <span className="text-2xl font-bold text-white">AutomateAI</span>
              </div>
              <p className="text-slate-400 max-w-md">
                The complete AI workforce solution that replaces human teams with superior, 
                24/7 automated operations.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Solution</h3>
              <div className="space-y-2">
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Support Automation</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Analytics AI</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Forecasting</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Workflow Builder</a>
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Company</h3>
              <div className="space-y-2">
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">About</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Careers</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Contact</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Privacy</a>
              </div>
            </div>
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-slate-400">© 2025 AutomateAI. All rights reserved. The future of work starts here.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;