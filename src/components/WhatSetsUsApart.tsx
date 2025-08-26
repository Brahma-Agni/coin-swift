import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Shield, Globe, TrendingUp, Search } from "lucide-react";

export function WhatSetsUsApart() {
  const advantages = [
    {
      icon: Shield,
      title: "Regulated for your peace of mind",
      description: "Fully licensed and regulated by leading financial authorities. Our compliance framework ensures your business operates within all regulatory requirements while maintaining the highest security standards.",
      features: ["MAS Licensed", "SOC 2 Type II", "PCI DSS Level 1", "ISO 27001 Certified"]
    },
    {
      icon: Globe,
      title: "Global reliability and security",
      description: "Enterprise-grade infrastructure with 99.9% uptime across 190+ countries. Our multi-region deployment ensures consistent performance and reliability for your global operations.",
      features: ["99.9% Uptime SLA", "Global Coverage", "24/7 Monitoring", "Enterprise Security"]
    },
    {
      icon: TrendingUp,
      title: "Scalable payment solutions",
      description: "Built to grow with your business from startup to enterprise. Our modular architecture adapts to your needs while maintaining performance and security at any scale.",
      features: ["Elastic Scaling", "API-First Design", "Microservices", "High Availability"]
    },
    {
      icon: Search,
      title: "In-built screening and monitoring",
      description: "Advanced AML and fraud detection systems with real-time monitoring. Our AI-powered risk management ensures compliance while minimizing false positives and operational overhead.",
      features: ["Real-time AML", "Fraud Detection", "Risk Scoring", "Compliance Reporting"]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl mb-6 text-gray-900">
            What Sets Us Apart
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our commitment to security, compliance, and reliability makes us the trusted choice 
            for businesses requiring enterprise-grade fintech infrastructure.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="p-8 h-full bg-white hover:shadow-lg transition-shadow duration-300 border-gray-200">
                  <div className="flex items-start mb-6">
                    <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mr-4 flex-shrink-0">
                      <Icon className="w-7 h-7 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-xl mb-3 text-gray-900">
                        {advantage.title}
                      </h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {advantage.description}
                  </p>

                  <div className="grid grid-cols-2 gap-3">
                    {advantage.features.map((feature, featureIndex) => (
                      <div 
                        key={featureIndex}
                        className="flex items-center text-sm text-gray-700 bg-gray-50 px-3 py-2 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional trust section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-12 text-center border-0">
            <h3 className="text-2xl lg:text-3xl mb-6">
              Trusted by Leading Financial Institutions
            </h3>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join the growing ecosystem of banks, fintechs, and enterprises 
              who rely on our infrastructure for their critical payment operations.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl mb-2">500+</div>
                <div className="text-blue-200">Enterprise Clients</div>
              </div>
              <div>
                <div className="text-3xl mb-2">$50B+</div>
                <div className="text-blue-200">Transaction Volume</div>
              </div>
              <div>
                <div className="text-3xl mb-2">190+</div>
                <div className="text-blue-200">Countries Supported</div>
              </div>
              <div>
                <div className="text-3xl mb-2">99.9%</div>
                <div className="text-blue-200">System Uptime</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}