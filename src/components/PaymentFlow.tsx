import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

export function PaymentFlow() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const steps = [
    {
      title: "Gig Completed",
      description: "You finish your delivery, ride, or task",
      icon: "🚚",
      amount: "$45.50",
      color: "from-green-400 to-green-600"
    },
    {
      title: "Instant Processing",
      description: "Payment processes in real-time",
      icon: "⚡",
      amount: "Processing...",
      color: "from-yellow-400 to-orange-500"
    },
    {
      title: "Wallet Credited",
      description: "Money appears in your digital wallet",
      icon: "💰",
      amount: "+$45.50",
      color: "from-blue-400 to-blue-600"
    },
    {
      title: "Ready to Spend",
      description: "Use anywhere cards are accepted",
      icon: "💳",
      amount: "$1,234.50",
      color: "from-purple-400 to-purple-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">
            From Gig to Spending in <span className="text-blue-600">Seconds</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch how your earnings flow seamlessly from completion to your pocket, 
            ready to spend instantly without waiting for bank transfers.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Connection lines */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 -translate-y-1/2 z-0">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                initial={{ width: "0%" }}
                animate={{ width: `${(activeStep + 1) * 25}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                className="relative z-10"
              >
                <Card className={`p-6 text-center transition-all duration-500 ${
                  activeStep === index 
                    ? 'ring-2 ring-blue-500 shadow-lg scale-105' 
                    : activeStep > index 
                      ? 'bg-green-50 border-green-200' 
                      : 'bg-gray-50'
                }`}>
                  <motion.div
                    animate={activeStep === index ? { scale: [1, 1.2, 1] } : {}}
                    transition={{ duration: 0.5 }}
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${step.color} flex items-center justify-center text-2xl`}
                  >
                    {step.icon}
                  </motion.div>
                  
                  <h3 className="mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{step.description}</p>
                  
                  <Badge 
                    variant={activeStep === index ? "default" : "secondary"}
                    className={activeStep === index ? "bg-blue-600" : ""}
                  >
                    {step.amount}
                  </Badge>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Mobile timeline */}
          <div className="md:hidden mt-8">
            <div className="flex justify-center">
              <div className="flex space-x-2">
                {steps.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      activeStep >= index ? 'bg-blue-500' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}