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
  Rocket,
  Calculator,
  FileText,
  ShoppingCart,
  Headphones,
  Truck,
  UserCheck,
  Scale,
  Server,
  PieChart,
  Building2,
  Utensils
} from 'lucide-react';

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const solutions = [
    {
      icon: Calculator,
      title: "Finance & Accounting",
      description: "Automate invoices, expense tracking, reporting, and financial forecasting.",
      examples: [
        "AI Expense Tracker (Telegram + Google Sheets)",
        "Automated Invoice Processing",
        "Stripe Revenue Predictions with AI",
        "QuickBooks Online Automations"
      ]
    },
    {
      icon: TrendingUp,
      title: "Sales",
      description: "Turn cold outreach into warm leads with AI-powered scoring and follow-ups.",
      examples: [
        "LinkedIn Lead Generation & Outreach Bot",
        "AI Proposal Generator",
        "Automated Lead Qualification",
        "Sales Agent with Telegram Approvals"
      ]
    },
    {
      icon: Target,
      title: "Marketing",
      description: "Scale content without scaling your team.",
      examples: [
        "LinkedIn Content Engine",
        "Blog-to-Social Media Repurposing",
        "Automated Ad Performance Analyzer",
        "AI SEO Blog Generator"
      ]
    },
    {
      icon: Headphones,
      title: "Customer Service",
      description: "Support that never sleeps.",
      examples: [
        "WhatsApp AI Chatbot",
        "Gmail Auto-Responder with FAQ Lookup",
        "Multi-Channel Telegram/Slack Support Agent",
        "Ticket Routing + Escalation"
      ]
    },
    {
      icon: Truck,
      title: "Logistics & Operations",
      description: "Smart automation for supply chains and delivery.",
      examples: [
        "Order Sync & Delivery Updates Bot",
        "Route Planning with OpenRoute API",
        "CO₂ Emissions Tracking for Shipments",
        "Warehouse & Inventory Sync"
      ]
    },
    {
      icon: UserCheck,
      title: "HR & Talent",
      description: "Hire and onboard faster with AI.",
      examples: [
        "CV Screening & Candidate Shortlisting Bot",
        "Automated Interview Scheduling",
        "HR Service System",
        "Employee Onboarding Document Assistant"
      ]
    },
    {
      icon: Scale,
      title: "Legal & Compliance",
      description: "Reduce risks, save time.",
      examples: [
        "AI Contract Review",
        "Compliance Alert Bot",
        "Legal Document Summarizer",
        "AI Translation for Legal Files"
      ]
    },
    {
      icon: Server,
      title: "IT & Infrastructure",
      description: "Automate monitoring, security, and DevOps workflows.",
      examples: [
        "IT Ops SlackBot Workflow",
        "Automated Downtime Alerts",
        "AWS IAM Key Compromise Response",
        "Elastic Security AI Assistant"
      ]
    },
    {
      icon: ShoppingCart,
      title: "E-Commerce & Retail",
      description: "Smarter shops, happier customers.",
      examples: [
        "Shopify Order Management Bot",
        "AI Blog Generator for Product Listings",
        "Abandoned Cart WhatsApp Reminder",
        "Competitor Price Monitoring"
      ]
    },
    {
      icon: FileText,
      title: "Content & Media",
      description: "AI-powered creation and publishing.",
      examples: [
        "Podcast Generator",
        "TikTok Video Creation Pipeline",
        "YouTube Video Summarizer + Auto Poster",
        "AI Avatar Video Generator"
      ]
    },
    {
      icon: BarChart3,
      title: "Research & Analytics",
      description: "Insights without the manual grind.",
      examples: [
        "AI Market Intelligence Bot",
        "Competitor Monitoring",
        "AI Stock Market Digest",
        "Research Paper Scraper & Summarizer"
      ]
    },
    {
      icon: Brain,
      title: "Admin & Productivity",
      description: "Focus on growth, let AI handle the busywork.",
      examples: [
        "AI Meeting Notes & Summaries",
        "Gmail Categorization + Draft Generator",
        "Notion Task Manager with AI Assistant",
        "Slack Reminders & Notifications"
      ]
    }
  ];

  const proofPoints = [
    {
      icon: ShoppingCart,
      industry: "Retail",
      result: "Cut order processing by 70%"
    },
    {
      icon: Building2,
      industry: "Agencies",
      result: "Saved 25 hours/week on admin"
    },
    {
      icon: Utensils,
      industry: "Restaurants",
      result: "Reduced missed bookings by 90%"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "from $500",
      period: "/month",
      description: "1–2 automations, single system setup",
      features: [
        "1-2 automation workflows",
        "Single system integration",
        "Basic setup & training",
        "Email support"
      ]
    },
    {
      name: "Pro",
      price: "from $1,500",
      period: "/month",
      description: "3–5 automations, multi-system integration, ongoing support",
      features: [
        "3-5 automation workflows",
        "Multi-system integration",
        "Advanced workflow design",
        "Priority support",
        "Monthly optimization calls"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "Unlimited workflows, cross-department automation, dedicated support",
      features: [
        "Unlimited automation workflows",
        "Cross-department integration",
        "Dedicated account manager",
        "24/7 priority support",
        "Custom development"
      ]
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
              <a href="#solutions" className="text-slate-300 hover:text-white transition-colors">Solutions</a>
              <a href="#roi" className="text-slate-300 hover:text-white transition-colors">ROI</a>
              <a href="#pricing" className="text-slate-300 hover:text-white transition-colors">Pricing</a>
              <a href="#audit" className="text-slate-300 hover:text-white transition-colors">Audit</a>
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
                <a href="#solutions" className="block text-slate-300 hover:text-white transition-colors">Solutions</a>
                <a href="#roi" className="block text-slate-300 hover:text-white transition-colors">ROI</a>
                <a href="#pricing" className="block text-slate-300 hover:text-white transition-colors">Pricing</a>
                <a href="#audit" className="block text-slate-300 hover:text-white transition-colors">Audit</a>
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
            <span className="text-blue-400 text-sm font-medium">AI-Powered Business Automation</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"> Your 24/7 AI Workforce</span>
           
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Always on, always accurate — automation that works around the clock so you don't have to.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center space-x-2">
              <Shield className="h-5 w-5" />
              <span>Book Your Automation Audit</span>
            </button>
            <button className="border-2 border-slate-600 hover:border-slate-500 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:bg-slate-800/50">
              See Example Automations
            </button>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">80%</div>
              <div className="text-slate-400">Time Saved</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-slate-400">Operations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">90%</div>
              <div className="text-slate-400">Fewer Errors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white mb-1">0%</div>
              <div className="text-slate-400">Extra Overhead</div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What's Slowing Your Business Down
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-8 text-center">
              <Clock className="h-12 w-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Too Much Admin</h3>
              <p className="text-slate-300">Repetitive tasks steal hours every week.</p>
            </div>
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-8 text-center">
              <DollarSign className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">High Costs</h3>
              <p className="text-slate-300">Extra hires raise expenses instead of efficiency.</p>
            </div>
            <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-8 text-center">
              <TrendingUp className="h-12 w-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-3">Scaling Issues</h3>
              <p className="text-slate-300">Outdated processes block sustainable growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section id="solutions" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Automation for Every Part of Your Business
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, index) => {
              const IconComponent = solution.icon;
              return (
                <div 
                  key={index}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 hover:border-blue-500/30 hover:shadow-xl group relative overflow-hidden"
                >
                  <div className="bg-blue-500/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4 group-hover:bg-blue-500/20 transition-colors">
                    <IconComponent className="h-6 w-6 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-slate-300 text-sm mb-4">{solution.description}</p>
                  
                  {/* Examples - shown on hover */}
                  <div className="absolute inset-0 bg-slate-800/95 backdrop-blur-sm p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
                    <div className="bg-blue-500/10 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                      <IconComponent className="h-6 w-6 text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-3">{solution.title}</h3>
                    <p className="text-slate-300 text-sm mb-4">{solution.description}</p>
                    
                    <div className="space-y-2">
                      <h4 className="text-blue-400 font-medium text-sm">Examples:</h4>
                      <ul className="space-y-2">
                        {solution.examples.map((example, exampleIndex) => (
                          <li key={exampleIndex} className="text-slate-300 text-sm flex items-start">
                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5 mr-3 flex-shrink-0"></span>
                            <span>{example}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ROI Section */}
      <section id="roi" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Save Time. Cut Costs. Scale Smarter.
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Automation pays for itself from day one.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">15+</div>
              <div className="text-white font-semibold mb-2">Hours Saved Weekly</div>
              <div className="text-slate-300">Retail stores save 15+ hours per week</div>
            </div>
            <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-blue-400 mb-2">40%</div>
              <div className="text-white font-semibold mb-2">Cost Reduction</div>
              <div className="text-slate-300">Agencies cut admin costs by 40%</div>
            </div>
            <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">90%</div>
              <div className="text-white font-semibold mb-2">Fewer Errors</div>
              <div className="text-slate-300">E-commerce brands reduce order errors by 90%</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Flexible Plans for Any Business
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`rounded-2xl p-8 ${
                  plan.popular 
                    ? 'bg-gradient-to-br from-blue-500/20 to-purple-500/20 border-2 border-blue-500/30 relative' 
                    : 'bg-slate-800/50 border border-slate-700/50'
                } hover:shadow-xl transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}<span className="text-lg text-slate-400">{plan.period}</span>
                  </div>
                  <p className="text-slate-300">{plan.description}</p>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white'
                    : 'border-2 border-slate-600 hover:border-slate-500 text-white hover:bg-slate-800/50'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>

          <div className="text-center">
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
              Book Your Automation Audit – $199
            </button>
          </div>
        </div>
      </section>

      {/* Audit Offer Section */}
      <section id="audit" className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
Your Blueprint for Smarter Growth          </h2>
          
          <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-blue-500/20 rounded-2xl p-12 mb-12">
            <div className="inline-flex items-center space-x-2 bg-blue-500/20 rounded-full px-4 py-2 mb-6">
              <PieChart className="h-4 w-4 text-blue-400" />
              <span className="text-blue-400 text-sm font-medium">Premium Analysis</span>
            </div>
            
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Kickstart your automation journey with a clear roadmap. Discover which workflows to automate first, how to unlock savings, and how to scale without extra overhead.
            </p>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <Brain className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">Business Analysis</h4>
                <p className="text-slate-300 text-sm">Deep dive into your current processes</p>
              </div>
              <div className="text-center">
                <Target className="h-8 w-8 text-purple-400 mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">Priority Roadmap</h4>
                <p className="text-slate-300 text-sm">Ranked list of automation opportunities</p>
              </div>
              <div className="text-center">
                <BarChart3 className="h-8 w-8 text-green-400 mx-auto mb-3" />
                <h4 className="font-semibold text-white mb-2">ROI Projections</h4>
                <p className="text-slate-300 text-sm">Exact savings calculations</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                Book Audit Now
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/10 transition-all duration-300">
                Talk to an Expert
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Proof Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Results Across Every Industry
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {proofPoints.map((proof, index) => {
              const IconComponent = proof.icon;
              return (
                <div 
                  key={index}
                  className="bg-slate-800/50 border border-slate-700/50 rounded-xl p-8 text-center hover:bg-slate-800/70 transition-all duration-300"
                >
                  <div className="bg-green-500/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-green-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{proof.industry}</h3>
                  <p className="text-slate-300 text-lg font-medium">{proof.result}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Automate Your Business
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Start small, grow big. Automate today and see results tomorrow.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-50 transition-all duration-300 transform hover:scale-105">
              Book Your Audit
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
                AI-powered automation solutions that help businesses save time, 
                reduce costs, and scale faster without the overhead.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-4">Solutions</h3>
              <div className="space-y-2">
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Finance Automation</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Sales Workflows</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Customer Service</a>
                <a href="#" className="block text-slate-400 hover:text-white transition-colors">Operations</a>
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
            <p className="text-slate-400">© 2025 AutomateAI. All rights reserved. Automate smarter, scale faster.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;