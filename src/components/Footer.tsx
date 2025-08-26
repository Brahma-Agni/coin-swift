import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { Mail, Phone, MapPin, LinkedinIcon, TwitterIcon } from "lucide-react";

export function Footer() {
  const footerSections = [
    {
      title: "Solutions",
      links: [
        "Card Programs",
        "Digital Payments",
        "Cross-border QR",
        "Stablecoin Platform",
        "API Documentation"
      ]
    },
    {
      title: "Company",
      links: [
        "About Us",
        "Careers",
        "Newsroom",
        "Partners",
        "Contact"
      ]
    },
    {
      title: "Resources",
      links: [
        "Documentation",
        "API Reference",
        "Security",
        "Compliance",
        "Support"
      ]
    },
    {
      title: "Legal",
      links: [
        "Privacy Policy",
        "Terms of Service",
        "Cookie Policy",
        "Compliance",
        "Licenses"
      ]
    }
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        {/* Main footer content */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Company info */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {/* Logo */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-700 rounded-lg flex items-center justify-center">
                    <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                      <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-lg text-white">[Company Logo]</span>
                    <span className="text-xs text-gray-400 -mt-1">Fintech Solutions</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                  Enterprise-grade fintech infrastructure powering the future of digital payments. 
                  Secure, compliant, and scalable solutions for modern businesses.
                </p>

                <div className="space-y-3 text-sm text-gray-300">
                  <div className="flex items-center">
                    <Mail className="w-4 h-4 mr-3 text-blue-400" />
                    enterprise@company.com
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-4 h-4 mr-3 text-blue-400" />
                    +1 (555) 123-4567
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-3 text-blue-400" />
                    Singapore • New York • London
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Footer links */}
            {footerSections.map((section, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-white mb-6">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a 
                        href="#" 
                        className="text-gray-300 hover:text-white transition-colors text-sm"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>

        <Separator className="bg-gray-800" />

        {/* Bottom footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8 mb-4 md:mb-0"
            >
              <p className="text-sm text-gray-400">
                © 2024 [Company Name]. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 text-xs text-gray-500">
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  MAS Licensed
                </span>
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
                  SOC 2 Certified
                </span>
                <span className="flex items-center">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 animate-pulse"></div>
                  ISO 27001
                </span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <LinkedinIcon className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white p-2">
                <TwitterIcon className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="sm" className="border-gray-600 text-gray-300 hover:text-white hover:bg-gray-800">
                Contact Sales
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}