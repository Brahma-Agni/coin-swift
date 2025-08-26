import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { MessageCircle, Video, Users, Briefcase, ArrowRight, Share2, TrendingUp, Zap } from "lucide-react";

export function PromotionChannels() {
  const channels = [
    {
      title: "Gig Platforms",
      description: "Connect your Uber, DoorDash, TaskRabbit, and 50+ other platforms",
      icon: Briefcase,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-gradient-to-br from-blue-50 to-blue-100",
      borderColor: "border-blue-200",
      stats: "50+ platforms",
      earnings: "$2,500+/mo average",
      badge: "Most Popular"
    },
    {
      title: "WhatsApp Business",
      description: "Share payment links, request money, and manage clients instantly",
      icon: MessageCircle,
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-gradient-to-br from-green-50 to-emerald-100",
      borderColor: "border-green-200",
      stats: "2B+ users",
      earnings: "40% faster payments",
      badge: "Instant"
    },
    {
      title: "Video Content",
      description: "Create engaging content about your earnings journey and success",
      icon: Video,
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-pink-100",
      borderColor: "border-purple-200",
      stats: "Viral potential",
      earnings: "Build your brand",
      badge: "Trending"
    },
    {
      title: "Referral Network",
      description: "Earn $25 for every friend who joins plus ongoing bonuses",
      icon: Users,
      color: "from-orange-500 to-red-600",
      bgColor: "bg-gradient-to-br from-orange-50 to-red-100",
      borderColor: "border-orange-200",
      stats: "Up to $2,500/mo",
      earnings: "Passive income",
      badge: "High Reward"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* Coinswift branding */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Badge variant="secondary" className="mb-6 px-6 py-2 text-lg bg-gradient-to-r from-blue-100 to-purple-100 text-gray-700 border-0">
              <TrendingUp className="w-4 h-4 mr-2" />
              Coinswift Ecosystem
            </Badge>
          </motion.div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-8 leading-tight">
            Multiply Your <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent">Income Streams</span>
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Coinswift's integrated ecosystem helps you maximize earning potential across multiple channels. 
            Connect, share, promote, and earn more through our comprehensive platform network.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {channels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15, duration: 0.7 }}
                viewport={{ once: true }}
                whileHover={{ y: -15, scale: 1.02 }}
                className="group relative"
              >
                {/* Badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -45 }}
                  whileInView={{ scale: 1, rotate: 0 }}
                  transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="absolute -top-3 -right-3 z-10"
                >
                  <Badge className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 text-xs shadow-lg">
                    {channel.badge}
                  </Badge>
                </motion.div>

                <Card className={`p-8 h-full transition-all duration-500 group-hover:shadow-2xl ${channel.bgColor} ${channel.borderColor} border-2 relative overflow-hidden`}>
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                  
                  <div className="relative z-10">
                    <motion.div
                      whileHover={{ scale: 1.15, rotate: 10 }}
                      transition={{ type: "spring", stiffness: 300 }}
                      className={`w-20 h-20 rounded-2xl bg-gradient-to-r ${channel.color} flex items-center justify-center mb-6 group-hover:shadow-xl shadow-lg transition-shadow`}
                    >
                      <Icon className="w-10 h-10 text-white" />
                    </motion.div>
                    
                    <h3 className="mb-4 text-xl group-hover:text-gray-900 transition-colors">
                      {channel.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                      {channel.description}
                    </p>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">Reach:</span>
                        <span className="text-sm font-medium bg-white px-3 py-1 rounded-full shadow-sm">
                          {channel.stats}
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-gray-500">Potential:</span>
                        <span className="text-sm font-medium bg-white px-3 py-1 rounded-full shadow-sm">
                          {channel.earnings}
                        </span>
                      </div>
                    </div>
                    
                    <motion.div
                      whileHover={{ x: 10 }}
                      className="flex items-center justify-between"
                    >
                      <span className="text-sm text-gray-600 group-hover:text-gray-800 transition-colors">
                        Get Started
                      </span>
                      <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center group-hover:shadow-lg transition-shadow">
                        <ArrowRight className="w-5 h-5 text-gray-600 group-hover:text-gray-800 group-hover:translate-x-1 transition-all" />
                      </div>
                    </motion.div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced integration showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 md:p-16 text-white text-center overflow-hidden relative">
            {/* Background animations */}
            <div className="absolute inset-0">
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full opacity-20"
                  animate={{
                    x: [0, Math.random() * 200 - 100],
                    y: [0, Math.random() * 200 - 100],
                    scale: [1, Math.random() + 0.5],
                  }}
                  transition={{
                    duration: Math.random() * 10 + 5,
                    repeat: Infinity,
                    repeatType: "reverse",
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                />
              ))}
            </div>

            <div className="relative z-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 mx-auto mb-8 bg-gradient-to-r from-blue-400 to-purple-400 bg-opacity-20 rounded-full flex items-center justify-center backdrop-blur-sm"
              >
                <Share2 className="w-12 h-12" />
              </motion.div>
              
              <h3 className="text-3xl md:text-5xl mb-6 leading-tight">
                One Platform, <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Unlimited Potential</span>
              </h3>
              <p className="text-xl md:text-2xl opacity-90 mb-10 max-w-4xl mx-auto leading-relaxed">
                Connect all your income sources and promotional channels through Coinswift's unified ecosystem. 
                Track earnings, manage payments, and scale your gig business like never before.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100 px-8 py-4 text-lg rounded-xl shadow-xl">
                    <Zap className="w-5 h-5 mr-2" />
                    Start Integration
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg rounded-xl">
                    Explore Platforms
                  </Button>
                </motion.div>
              </div>

              {/* Success metrics */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                {[
                  { metric: "300%", label: "Average Income Increase" },
                  { metric: "50+", label: "Integrated Platforms" },
                  { metric: "24/7", label: "Real-time Sync" },
                  { metric: "500K+", label: "Success Stories" }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="group"
                  >
                    <motion.div 
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 4, repeat: Infinity, delay: index * 0.5 }}
                      className="text-3xl md:text-4xl mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-yellow-400 group-hover:to-pink-400 transition-all duration-300"
                    >
                      {stat.metric}
                    </motion.div>
                    <div className="text-blue-200 group-hover:text-white transition-colors text-sm md:text-base">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}