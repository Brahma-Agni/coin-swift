import { motion } from "motion/react";
import { Globe, Send, TrendingUp } from "lucide-react";
import { Card } from "./ui/card";

export function GlobalTransfers() {
  const transfers = [
    { from: "New York", to: "London", amount: "$2,450", delay: 0 },
    { from: "Tokyo", to: "Sydney", amount: "$890", delay: 1 },
    { from: "Berlin", to: "São Paulo", amount: "$1,200", delay: 2 },
    { from: "Mumbai", to: "Dubai", amount: "$650", delay: 3 },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl mb-6">
            Send Money <span className="text-blue-600">Globally</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transfer funds instantly across borders with real-time exchange rates 
            and minimal fees. Your money moves as fast as you do.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* World Map Visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="relative w-full h-80 bg-gradient-to-br from-blue-100 to-purple-100 rounded-xl overflow-hidden">
                {/* Simplified world map background */}
                <div className="absolute inset-0 opacity-20">
                  <Globe className="w-full h-full text-blue-600" />
                </div>

                {/* Animated transfer lines */}
                {transfers.map((transfer, index) => (
                  <motion.div
                    key={index}
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ 
                      delay: transfer.delay * 0.5,
                      duration: 2,
                      repeat: Infinity,
                      repeatDelay: 4
                    }}
                    className="absolute inset-0"
                  >
                    <svg className="w-full h-full">
                      <motion.path
                        d={`M ${20 + index * 60} ${50 + index * 30} Q ${200} ${150} ${300 + index * 40} ${200 + index * 20}`}
                        stroke="url(#gradient)"
                        strokeWidth="2"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ 
                          delay: transfer.delay * 0.5,
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 4
                        }}
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#3B82F6" />
                          <stop offset="100%" stopColor="#8B5CF6" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </motion.div>
                ))}

                {/* Pulsing dots for cities */}
                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-3 h-3 bg-blue-500 rounded-full"
                    style={{
                      left: `${Math.random() * 80 + 10}%`,
                      top: `${Math.random() * 60 + 20}%`
                    }}
                    animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity,
                      delay: Math.random() * 2
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Transfer Stats */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <Send className="w-8 h-8 text-blue-600 mr-3" />
                  <h3>Instant Transfers</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Send money to over 190 countries in seconds, not days.
                </p>
                <div className="text-2xl">
                  <span className="text-blue-600">2.3s</span>
                  <span className="text-gray-500 text-base ml-2">average transfer time</span>
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <div className="flex items-center mb-4">
                  <TrendingUp className="w-8 h-8 text-green-600 mr-3" />
                  <h3>Best Exchange Rates</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Get competitive rates with transparent, low fees.
                </p>
                <div className="text-2xl">
                  <span className="text-green-600">0.5%</span>
                  <span className="text-gray-500 text-base ml-2">transfer fee</span>
                </div>
              </Card>
            </motion.div>

            {/* Live transfer feed */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="p-6">
                <h3 className="mb-4">Recent Transfers</h3>
                <div className="space-y-3">
                  {transfers.map((transfer, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.5, duration: 0.5 }}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <div className="text-sm">{transfer.from} → {transfer.to}</div>
                        <div className="text-xs text-gray-500">Just now</div>
                      </div>
                      <div className="text-green-600">{transfer.amount}</div>
                    </motion.div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}