import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { Shield, Zap, Globe, CreditCard, Smartphone, TrendingUp, Lock, Clock, DollarSign } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Zap,
      title: "Lightning Speed",
      description: "Payments processed in under 2 seconds, available 24/7/365",
      benefit: "No more waiting days for bank transfers",
      color: "text-yellow-600",
      bgColor: "bg-gradient-to-br from-yellow-50 to-orange-100",
      borderColor: "border-yellow-200",
      stat: "2.1s avg"
    },
    {
      icon: Shield,
      title: "Military-Grade Security",
      description: "Advanced encryption, multi-factor auth, and fraud protection",
      benefit: "Your money is safer than traditional banks",
      color: "text-green-600",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
      borderColor: "border-green-200",
      stat: "99.99% secure"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Send and receive money in 190+ countries instantly",
      benefit: "Work anywhere, get paid everywhere",
      color: "text-blue-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-cyan-100",
      borderColor: "border-blue-200",
      stat: "190+ countries"
    },
    {
      icon: CreditCard,
      title: "Smart Cards",
      description: "Virtual and physical cards with real-time spending controls",
      benefit: "Complete financial freedom without banks",
      color: "text-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-100",
      borderColor: "border-purple-200",
      stat: "Instant issue"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Intuitive app designed specifically for gig workers",
      benefit: "Manage everything from your smartphone",
      color: "text-pink-600",
      bgColor: "bg-gradient-to-br from-pink-50 to-rose-100",
      borderColor: "border-pink-200",
      stat: "4.9★ rating"
    },
    {
      icon: TrendingUp,
      title: "Smart Analytics",
      description: "AI-powered insights to optimize your earnings potential",
      benefit: "Data-driven strategies for maximum income",
      color: "text-indigo-600",
      bgColor: "bg-gradient-to-br from-indigo-50 to-blue-100",
      borderColor: "border-indigo-200",
      stat: "+40% earnings"
    }
  ];

  const additionalFeatures = [
    { icon: Lock, title: "FDIC Insured", desc: "Up to $250K protected" },
    { icon: Clock, title: "24/7 Support", desc: "Always here to help" },
    { icon: DollarSign, title: "Zero Hidden Fees", desc: "What you see is what you pay" }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-blue-300 to-purple-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Badge variant="secondary" className="mb-6 px-6 py-3 text-lg bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 border-0 shadow-lg">
              <TrendingUp className="w-5 h-5 mr-2" />
              Why Choose Coinswift
            </Badge>
          </motion.div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
            Built for <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Modern Earners</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Everything you need to revolutionize your gig economy earnings in one powerful, 
            secure platform designed exclusively for independent workers and entrepreneurs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="group"
              >
                <Card className={`p-8 h-full bg-white border-2 ${feature.borderColor} shadow-lg group-hover:shadow-2xl transition-all duration-500 relative overflow-hidden`}>
                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 ${feature.bgColor} opacity-50 group-hover:opacity-70 transition-opacity`}></div>
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:shadow-xl transition-shadow ${feature.bgColor}`}
                    >
                      <Icon className={`w-8 h-8 ${feature.color}`} />
                    </motion.div>
                    
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-xl group-hover:text-gray-900 transition-colors">
                        {feature.title}
                      </h3>
                      <Badge className={`${feature.color} bg-opacity-10 ${feature.bgColor} border-0 text-xs px-2 py-1`}>
                        {feature.stat}
                      </Badge>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className={`text-sm ${feature.color} bg-opacity-20 ${feature.bgColor} px-4 py-3 rounded-xl inline-block transition-all group-hover:shadow-md`}>
                      ✓ {feature.benefit}
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced stats section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Card className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white p-12 md:p-16 border-0 shadow-2xl rounded-3xl overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              {[...Array(30)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  animate={{
                    scale: [1, 2, 1],
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: Math.random() * 3 + 2,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              {/* Coinswift branding */}
              <div className="text-center mb-12">
                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="inline-flex items-center space-x-3 mb-6"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-xl flex items-center justify-center">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <span className="text-2xl md:text-3xl bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                    Coinswift Impact
                  </span>
                </motion.div>
                <h3 className="text-3xl md:text-4xl mb-4 leading-tight">
                  Trusted by <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Half a Million</span> Gig Workers
                </h3>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                {[
                  { value: "500K+", label: "Active Users", icon: "👥" },
                  { value: "$3.2B+", label: "Total Processed", icon: "💰" },
                  { value: "190+", label: "Countries Served", icon: "🌍" },
                  { value: "99.9%", label: "Success Rate", icon: "✅" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    className="text-center group cursor-default"
                  >
                    <motion.div
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                      className="text-3xl md:text-4xl mb-2 group-hover:scale-110 transition-transform"
                    >
                      {stat.value}
                    </motion.div>
                    <div className="text-blue-200 group-hover:text-white transition-colors text-sm md:text-base mb-2">
                      {stat.label}
                    </div>
                    <div className="text-2xl">{stat.icon}</div>
                  </motion.div>
                ))}
              </div>

              {/* Additional features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {additionalFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2, duration: 0.6 }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-6 rounded-2xl bg-white bg-opacity-10 backdrop-blur-sm border border-white border-opacity-20 group"
                    >
                      <Icon className="w-10 h-10 mx-auto mb-3 text-blue-400 group-hover:text-white transition-colors" />
                      <div className="text-lg mb-2 group-hover:text-yellow-300 transition-colors">
                        {feature.title}
                      </div>
                      <div className="text-sm text-blue-200 group-hover:text-white transition-colors">
                        {feature.desc}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}