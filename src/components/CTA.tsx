import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ArrowRight, Download, Mail, Star, Shield, Zap, Globe } from "lucide-react";
import { useState } from "react";

export function CTA() {
  const [email, setEmail] = useState("");

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Enhanced background animations */}
      <div className="absolute inset-0">
        {[...Array(60)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-20"
            initial={{ 
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000), 
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800) 
            }}
            animate={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
            }}
            transition={{
              duration: Math.random() * 25 + 15,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Gradient orbs */}
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.1, 0.15, 0.1] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl"
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* Coinswift brand in CTA */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-flex items-center justify-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl flex items-center justify-center">
                <Zap className="w-6 h-6" />
              </div>
              <span className="text-2xl md:text-3xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Coinswift
              </span>
            </div>
          </motion.div>

          {/* Social proof stars */}
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="mb-8"
          >
            <div className="inline-flex items-center space-x-1 text-yellow-400 mb-4">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{ 
                    rotate: [0, 10, -10, 0],
                    scale: [1, 1.1, 1] 
                  }}
                  transition={{ 
                    delay: i * 0.1, 
                    duration: 2, 
                    repeat: Infinity,
                    repeatDelay: 3 
                  }}
                >
                  <Star className="w-7 h-7 fill-current drop-shadow-lg" />
                </motion.div>
              ))}
            </div>
            <p className="text-gray-300 text-lg">
              "Coinswift changed my entire gig workflow. Instant payments, zero hassle!" 
              <span className="block text-blue-300 mt-1">- Marcus R., Uber Driver</span>
            </p>
          </motion.div>

          <h2 className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-tight">
            Ready to Join the 
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"> Future?</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Over 500,000 gig workers trust Coinswift for instant payouts and seamless financial freedom. 
            Join the revolution and never wait for your money again.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          {/* Left side - Enhanced app download */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h3 className="text-3xl md:text-4xl mb-6">
              Download Coinswift Today
            </h3>
            <p className="text-gray-300 mb-8 text-xl leading-relaxed">
              Get the app that's revolutionizing gig payments. Available on all platforms 
              with instant setup and immediate earning potential.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12">
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 w-full sm:w-auto px-8 py-4 text-lg rounded-xl shadow-xl group-hover:shadow-2xl transition-all duration-300">
                  <Download className="w-6 h-6 mr-3 group-hover:animate-bounce" />
                  Download App
                </Button>
              </motion.div>
              <motion.div 
                whileHover={{ scale: 1.05, y: -2 }} 
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 w-full sm:w-auto px-8 py-4 text-lg rounded-xl transition-all duration-300">
                  Try Web Version
                </Button>
              </motion.div>
            </div>

            {/* Feature highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              {[
                { icon: Shield, label: "Secure", desc: "Bank-level encryption" },
                { icon: Zap, label: "Instant", desc: "2-second transfers" },
                { icon: Globe, label: "Global", desc: "190+ countries" }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="text-center p-4 rounded-xl bg-white bg-opacity-10 backdrop-blur-sm"
                >
                  <feature.icon className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                  <div className="text-lg mb-1">{feature.label}</div>
                  <div className="text-sm text-gray-400">{feature.desc}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side - Enhanced email signup */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white bg-opacity-10 backdrop-blur-xl rounded-3xl p-10 border border-white border-opacity-20 shadow-2xl">
              <div className="text-center mb-10">
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="mb-6"
                >
                  <Mail className="w-16 h-16 mx-auto text-blue-400 drop-shadow-lg" />
                </motion.div>
                <h3 className="text-3xl mb-4">Get Early Access</h3>
                <p className="text-gray-300 text-lg">
                  Be among the first to experience next-generation gig payments with exclusive features and zero fees.
                </p>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white bg-opacity-20 border-2 border-white border-opacity-30 text-white placeholder-gray-300 h-14 px-6 text-lg rounded-xl backdrop-blur-sm focus:border-blue-400 transition-all duration-300"
                  />
                </div>
                <motion.div 
                  whileHover={{ scale: 1.02 }} 
                  whileTap={{ scale: 0.98 }}
                  className="group"
                >
                  <Button 
                    size="lg" 
                    className="w-full bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 hover:from-blue-600 hover:via-purple-700 hover:to-pink-700 h-14 text-lg rounded-xl shadow-xl group-hover:shadow-2xl transition-all duration-300"
                  >
                    Start Earning Instantly
                    <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-2 transition-transform" />
                  </Button>
                </motion.div>
              </div>

              <div className="mt-8 text-center text-sm text-gray-400">
                <p>Join 500,000+ satisfied users • No hidden fees • Instant setup</p>
              </div>

              {/* Enhanced trust indicators */}
              <div className="mt-8 grid grid-cols-2 gap-4 text-center text-gray-400">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">FDIC Protected</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">256-bit SSL</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom stats banner */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl p-8 shadow-2xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "500K+", label: "Active Users" },
                { value: "$3.2B+", label: "Transferred" },
                { value: "2.1s", label: "Avg Transfer Time" },
                { value: "99.9%", label: "Satisfaction Rate" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="group cursor-default"
                >
                  <motion.div 
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    className="text-3xl md:text-4xl mb-2 group-hover:text-yellow-300 transition-colors"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-blue-100 group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}