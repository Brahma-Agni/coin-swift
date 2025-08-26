import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 backdrop-blur-sm bg-white/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center space-x-3"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-sm flex items-center justify-center">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg tracking-tight text-gray-900">COIN-SWIFT</span>
              <span className="text-xs text-gray-500 -mt-1"></span>
            </div>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#solutions" className="text-gray-600 hover:text-gray-900 transition-colors">
              Solutions
            </a>
            <a href="#platform" className="text-gray-600 hover:text-gray-900 transition-colors">
              Platform
            </a>
            <a href="#security" className="text-gray-600 hover:text-gray-900 transition-colors">
              Security
            </a>
            <a href="#newsroom" className="text-gray-600 hover:text-gray-900 transition-colors">
              Newsroom
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-4">
            <Badge variant="secondary" className="hidden sm:flex bg-blue-50 text-blue-700 border-blue-200">
              Regulated & Licensed
            </Badge>
            <Button variant="outline" className="hidden sm:inline-flex">
              Contact Sales
            </Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </div>
    </header>
  );
}