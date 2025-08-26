import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Wallet, ArrowUpDown, Shield, Zap, CheckCircle, TrendingUp } from "lucide-react";

export function PlatformWallet() {
  const features = [
    {
      icon: Shield,
      title: "Regulatory Compliance",
      description: "Fully compliant with local and international regulations"
    },
    {
      icon: Zap,
      title: "Instant Settlement",
      description: "Real-time processing and settlement capabilities"
    },
    {
      icon: TrendingUp,
      title: "Competitive Rates",
      description: "Best-in-class pricing with transparent fee structure"
    }
  ];

  const benefits = [
    "Licensed stablecoin ecosystem",
    "Multi-currency support",
    "Enterprise-grade security",
    "24/7 technical support",
    "Comprehensive API documentation",
    "White-label solutions available"
  ];

  return (
    <section id="platform" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
                <Wallet className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-3xl lg:text-4xl text-gray-900">
                Wallet - Buy and sell stablecoins
              </h2>
            </div>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Our comprehensive platform serves as the foundation for fintechs and financial institutions 
              looking to integrate stablecoin capabilities. Built on a licensed stablecoin ecosystem, 
              we provide the infrastructure, compliance framework, and operational support needed to 
              launch and scale digital currency services with confidence.
            </p>

            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Whether you're looking to offer stablecoin trading, integrate digital payments, or 
              build custom financial products, our platform provides the regulated environment 
              and enterprise-grade tools necessary for institutional success.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="flex items-center"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Request Platform Demo
              </Button>
              <Button size="lg" variant="outline">
                Download Whitepaper
              </Button>
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <Card className="p-8 bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
              {/* Wallet interface mockup */}
              <div className="bg-white rounded-xl p-6 shadow-lg mb-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg text-gray-900">Stablecoin Wallet</h3>
                  <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                    <Wallet className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[
                    { symbol: 'XUSD', name: 'StraitsX USD', balance: '125,420.50', change: '+2.4%' },
                    { symbol: 'XSGD', name: 'StraitsX SGD', balance: '89,750.25', change: '+1.8%' },
                    { symbol: 'XEUR', name: 'StraitsX EUR', balance: '65,320.75', change: '+0.9%' }
                  ].map((coin, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                    >
                      <div className="flex items-center">
                        <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mr-3">
                          <span className="text-white text-xs">{coin.symbol}</span>
                        </div>
                        <div>
                          <div className="text-gray-900">{coin.name}</div>
                          <div className="text-sm text-gray-600">{coin.balance}</div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-green-600 text-sm">{coin.change}</div>
                        <ArrowUpDown className="w-4 h-4 text-gray-400 ml-auto" />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="mt-6 p-4 bg-blue-600 text-white rounded-lg text-center cursor-pointer"
                >
                  <div className="flex items-center justify-center">
                    <ArrowUpDown className="w-5 h-5 mr-2" />
                    <span>Buy / Sell Stablecoins</span>
                  </div>
                </motion.div>
              </div>

              {/* Feature highlights */}
              <div className="grid grid-cols-1 gap-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 + 0.5, duration: 0.6 }}
                      viewport={{ once: true }}
                      className="flex items-center p-4 bg-white rounded-lg shadow-sm"
                    >
                      <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <div className="text-gray-900 mb-1">{feature.title}</div>
                        <div className="text-sm text-gray-600">{feature.description}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </Card>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
              viewport={{ once: true }}
              className="absolute -top-4 -right-4"
            >
              <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-100">
                <div className="text-center">
                  <div className="text-2xl text-blue-600 mb-1">$2.5B+</div>
                  <div className="text-xs text-gray-600">Total Volume</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}