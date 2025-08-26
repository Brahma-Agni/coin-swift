import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Shield, Globe, ArrowRight, CheckCircle } from "lucide-react";

export function Hero() {
  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-20 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <Badge className="mb-6 bg-blue-50 text-blue-700 border-blue-200">
              <Shield className="w-4 h-4 mr-2" />
              Fully Licensed & Regulated
            </Badge>
            
            <h1 className="text-4xl lg:text-5xl xl:text-6xl mb-6 text-gray-900 leading-tight">
              Enterprise-Grade
              <span className="block text-blue-600">Digital Payment Infrastructure</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
              Empower your business with secure, compliant, and scalable fintech solutions. 
              Launch card programs, process digital currencies, and enable seamless cross-border payments.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Schedule Demo
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button size="lg" variant="outline">
                View Documentation
              </Button>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-col sm:flex-row items-center gap-6 text-sm text-gray-600">
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                SOC 2 Type II Certified
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                PCI DSS Compliant
              </div>
              <div className="flex items-center">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                ISO 27001 Certified
              </div>
            </div>
          </motion.div>

          {/* Visual - Global connectivity animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="relative"
          >
            <div className="relative w-full h-96 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl p-8 overflow-hidden">
              {/* Central hub */}
              <motion.div
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center shadow-xl"
              >
                <Globe className="w-10 h-10 text-white" />
              </motion.div>

              {/* Connection nodes */}
              {[
                { top: '20%', left: '20%', delay: 0 },
                { top: '20%', right: '20%', delay: 0.5 },
                { bottom: '20%', left: '20%', delay: 1 },
                { bottom: '20%', right: '20%', delay: 1.5 },
                { top: '50%', left: '10%', delay: 2 },
                { top: '50%', right: '10%', delay: 2.5 }
              ].map((node, index) => (
                <motion.div
                  key={index}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: node.delay, duration: 0.6 }}
                  className="absolute w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-blue-200"
                  style={{ ...node }}
                >
                  <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                  </div>
                </motion.div>
              ))}

              {/* Connection lines */}
              <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }}>
                {[
                  { x1: '50%', y1: '50%', x2: '20%', y2: '20%' },
                  { x1: '50%', y1: '50%', x2: '80%', y2: '20%' },
                  { x1: '50%', y1: '50%', x2: '20%', y2: '80%' },
                  { x1: '50%', y1: '50%', x2: '80%', y2: '80%' },
                  { x1: '50%', y1: '50%', x2: '10%', y2: '50%' },
                  { x1: '50%', y1: '50%', x2: '90%', y2: '50%' }
                ].map((line, index) => (
                  <motion.line
                    key={index}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 0.3 }}
                    transition={{ delay: index * 0.3 + 1, duration: 1 }}
                    x1={line.x1}
                    y1={line.y1}
                    x2={line.x2}
                    y2={line.y2}
                    stroke="#3B82F6"
                    strokeWidth="2"
                    strokeDasharray="4,4"
                  />
                ))}
              </svg>

              {/* Floating elements */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-60"
                  animate={{
                    x: [0, Math.random() * 200 - 100],
                    y: [0, Math.random() * 200 - 100],
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: Math.random() * 8 + 4,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: Math.random() * 2,
                  }}
                  style={{
                    left: `${Math.random() * 80 + 10}%`,
                    top: `${Math.random() * 80 + 10}%`,
                  }}
                />
              ))}
            </div>

            {/* Stats overlay */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              className="absolute -bottom-6 left-6 right-6"
            >
              <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-100">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl text-blue-600 mb-1">99.9%</div>
                    <div className="text-xs text-gray-600">Uptime</div>
                  </div>
                  <div>
                    <div className="text-2xl text-blue-600 mb-1">190+</div>
                    <div className="text-xs text-gray-600">Countries</div>
                  </div>
                  <div>
                    <div className="text-2xl text-blue-600 mb-1">&lt;2s</div>
                    <div className="text-xs text-gray-600">Processing</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}