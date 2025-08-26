import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { CreditCard, ArrowRight, QrCode, Coins, Shield, Zap } from "lucide-react";

export function CoreSolutions() {
  const solutions = [
    {
      title: "Launch fiat or stablecoin card programs",
      description: "Deploy branded payment cards with multi-currency support. Enable your customers to spend fiat and stablecoins seamlessly across global networks with real-time conversion and competitive rates.",
      icon: CreditCard,
      features: ["Multi-currency support", "Real-time conversion", "Global acceptance", "Branded customization"],
      visual: "cards"
    },
    {
      title: "Accept and send fiat or stablecoins",
      description: "Process secure digital transactions with our regulated infrastructure. Accept payments in multiple currencies and stablecoins while maintaining full compliance and transparent reporting.",
      icon: Coins,
      features: ["Instant settlement", "Multi-asset support", "Regulatory compliance", "API integration"],
      visual: "gateway"
    },
    {
      title: "Cross-border QR payments",
      description: "Enable instant cross-border payments through QR codes. Streamline international transactions with automated processing, competitive rates, and real-time tracking capabilities.",
      icon: QrCode,
      features: ["Instant processing", "QR code generation", "Cross-border support", "Real-time tracking"],
      visual: "conveyor"
    }
  ];

  const renderVisual = (type: string, index: number) => {
    switch (type) {
      case "cards":
        return (
          <div className="relative h-48 flex items-center justify-center">
            {/* StraitsX-branded digital payment cards */}
            {[0, 1, 2].map((cardIndex) => (
              <motion.div
                key={cardIndex}
                initial={{ opacity: 0, x: 50, rotateY: 45 }}
                whileInView={{ opacity: 1, x: cardIndex * 20, rotateY: 0 }}
                transition={{ delay: cardIndex * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                className={`absolute w-56 h-36 rounded-xl shadow-lg transform ${
                  cardIndex === 0 ? 'bg-gradient-to-r from-blue-600 to-blue-800 z-30' :
                  cardIndex === 1 ? 'bg-gradient-to-r from-gray-700 to-gray-900 z-20' :
                  'bg-gradient-to-r from-purple-600 to-purple-800 z-10'
                }`}
                style={{ transform: `translateX(${cardIndex * 20}px) rotateY(${cardIndex * -5}deg)` }}
              >
                <div className="p-6 text-white h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="text-xs opacity-80">StraitsX</div>
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded-lg flex items-center justify-center">
                      <CreditCard className="w-4 h-4" />
                    </div>
                  </div>
                  <div>
                    <div className="text-lg mb-2">•••• •••• •••• {1234 + cardIndex}</div>
                    <div className="flex justify-between text-xs opacity-80">
                      <span>VALID THRU 12/27</span>
                      <span>{cardIndex === 0 ? 'USD' : cardIndex === 1 ? 'SGD' : 'EUR'}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute top-4 right-8 text-blue-600"
            >
              <Shield className="w-6 h-6" />
            </motion.div>
          </div>
        );

      case "gateway":
        return (
          <div className="relative h-48 flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl">
            {/* XUSD tokens passing through secure gate */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="w-32 h-40 bg-gradient-to-b from-blue-200 to-blue-300 rounded-lg opacity-30 absolute"
            />
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
              className="w-24 h-32 bg-gradient-to-b from-blue-300 to-blue-400 rounded-lg opacity-50 absolute"
            />
            
            {/* XUSD tokens */}
            {[0, 1, 2].map((tokenIndex) => (
              <motion.div
                key={tokenIndex}
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 100, opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 3,
                  delay: tokenIndex * 0.8,
                  repeat: Infinity,
                  repeatDelay: 2
                }}
                className="absolute w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg"
              >
                <span className="text-white text-xs">XUSD</span>
              </motion.div>
            ))}
            
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute text-blue-600"
            >
              <Shield className="w-8 h-8" />
            </motion.div>
          </div>
        );

      case "conveyor":
        return (
          <div className="relative h-48 bg-gradient-to-r from-gray-100 to-gray-200 rounded-xl overflow-hidden">
            {/* Automated conveyor belt */}
            <motion.div
              animate={{ x: [-20, 20] }}
              transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
              className="absolute bottom-0 w-full h-8 bg-gradient-to-r from-gray-300 to-gray-400"
            >
              <div className="h-full bg-gradient-to-r from-gray-400 to-gray-500 opacity-50"></div>
            </motion.div>
            
            {/* Moving currency icons */}
            {[
              { type: 'XSGD', color: 'from-blue-500 to-blue-600', delay: 0 },
              { type: '$', color: 'from-green-500 to-green-600', delay: 1 },
              { type: 'XSGD', color: 'from-blue-500 to-blue-600', delay: 2 },
              { type: '$', color: 'from-green-500 to-green-600', delay: 3 }
            ].map((item, itemIndex) => (
              <motion.div
                key={itemIndex}
                initial={{ x: -50 }}
                animate={{ x: 300 }}
                transition={{
                  duration: 6,
                  delay: item.delay,
                  repeat: Infinity,
                  repeatDelay: 4
                }}
                className={`absolute top-16 w-16 h-16 bg-gradient-to-r ${item.color} rounded-lg flex items-center justify-center shadow-lg`}
              >
                <span className="text-white">{item.type}</span>
              </motion.div>
            ))}
            
            {/* QR code scanner */}
            <motion.div
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute top-4 right-4 w-12 h-12 border-2 border-blue-500 rounded-lg flex items-center justify-center"
            >
              <QrCode className="w-6 h-6 text-blue-600" />
            </motion.div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <section id="solutions" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl mb-6 text-gray-900">
            Core Solutions for Modern Finance
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive fintech infrastructure designed to power your business growth 
            with secure, scalable, and compliant payment solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full hover:shadow-lg transition-shadow duration-300 border-gray-200">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-xl mb-4 text-gray-900">
                    {solution.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {solution.description}
                  </p>

                  {/* Visual component */}
                  <div className="mb-6">
                    {renderVisual(solution.visual, index)}
                  </div>

                  <div className="space-y-2 mb-6">
                    {solution.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button variant="outline" className="w-full group">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}