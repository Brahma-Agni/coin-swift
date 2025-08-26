import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Calendar, ArrowRight, Newspaper } from "lucide-react";

export function Newsroom() {
  // Placeholder news items
  const newsItems = [
    {
      date: "2024-01-15",
      category: "Product Update",
      title: "Enhanced Security Features Now Available",
      excerpt: "New multi-factor authentication and advanced fraud detection capabilities.",
      type: "announcement"
    },
    {
      date: "2024-01-10",
      category: "Partnership",
      title: "Strategic Partnership with Leading Bank",
      excerpt: "Expanding our network to serve more enterprise clients globally.",
      type: "partnership"
    },
    {
      date: "2024-01-05",
      category: "Compliance",
      title: "Regulatory Approval in New Jurisdiction",
      excerpt: "Licensed to operate in additional markets across Europe.",
      type: "regulatory"
    }
  ];

  return (
    <section id="newsroom" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mr-4">
              <Newspaper className="w-6 h-6 text-blue-600" />
            </div>
            <h2 className="text-3xl lg:text-4xl text-gray-900">
              Newsroom
            </h2>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest developments, partnerships, and announcements 
            from our platform and the broader fintech ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300 bg-white border-gray-200">
                <div className="flex items-center justify-between mb-4">
                  <Badge 
                    variant="secondary" 
                    className={`text-xs ${
                      item.type === 'announcement' ? 'bg-blue-100 text-blue-700' :
                      item.type === 'partnership' ? 'bg-green-100 text-green-700' :
                      'bg-purple-100 text-purple-700'
                    }`}
                  >
                    {item.category}
                  </Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {new Date(item.date).toLocaleDateString()}
                  </div>
                </div>
                
                <h3 className="text-lg mb-3 text-gray-900 leading-tight">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                  {item.excerpt}
                </p>

                <Button variant="ghost" size="sm" className="p-0 h-auto group">
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Newsletter signup */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <Card className="bg-white p-8 md:p-12 text-center border-gray-200">
            <h3 className="text-2xl mb-6 text-gray-900">
              Stay Informed
            </h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Subscribe to our newsletter to receive the latest updates, 
              product announcements, and industry insights directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 px-6">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}