import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-b from-green-50 to-white min-h-screen flex items-center">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              The Easiest Way to Invest in Agriculture
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Farmvest provides investors, farmers, and agriculture enthusiasts with the best experience in agricultural investment.
            </p>
            <div className="flex gap-4">
              <button className="bg-green-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-700 transition-colors">
                Get Started
              </button>
              <button className="border-2 border-green-600 text-green-600 px-8 py-4 rounded-full font-semibold hover:bg-green-50 transition-colors">
                Learn More
              </button>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="/images/hero-image.png"
              alt="Farming Investment"
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center gap-4">
                <div className="bg-green-100 p-3 rounded-full">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Total Investment</p>
                  <p className="text-xl font-bold text-gray-900">$1.5M+</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
