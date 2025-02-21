import React, { useState } from 'react';
import { motion } from 'framer-motion';

const NewsPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All News' },
    { id: 'market', name: 'Market Updates' },
    { id: 'tech', name: 'Agri-Tech' },
    { id: 'policy', name: 'Policy Changes' },
  ];

  const newsItems = [
    {
      id: 1,
      title: "New Sustainable Farming Methods Show Promise",
      category: "tech",
      image: "/images/news-1.jpg",
      date: "Feb 21, 2025",
      excerpt: "Revolutionary farming techniques are helping farmers reduce water usage while increasing crop yields."
    },
    {
      id: 2,
      title: "Global Agricultural Market Trends",
      category: "market",
      image: "/images/news-2.jpg",
      date: "Feb 20, 2025",
      excerpt: "Analysis of current market trends and predictions for agricultural commodities in the coming months."
    },
    {
      id: 3,
      title: "Government Announces New Farming Subsidies",
      category: "policy",
      image: "/images/news-3.jpg",
      date: "Feb 19, 2025",
      excerpt: "New policy changes aim to support small-scale farmers and promote sustainable agriculture."
    },
    // Add more news items as needed
  ];

  const filteredNews = activeCategory === 'all' 
    ? newsItems 
    : newsItems.filter(item => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Agricultural News & Updates
          </h1>
          <p className="text-xl text-gray-600">
            Stay informed with the latest developments in agriculture
          </p>
        </motion.div>

        {/* Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-green-50'
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((news, index) => (
            <motion.div
              key={news.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden"
            >
              <div className="relative h-48">
                <img
                  src={news.image}
                  alt={news.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-green-600 text-white text-sm rounded-full">
                    {categories.find(cat => cat.id === news.category)?.name}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{news.date}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {news.title}
                </h3>
                <p className="text-gray-600 mb-4">{news.excerpt}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-green-600 font-medium hover:text-green-700 transition-colors"
                >
                  Read More →
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
