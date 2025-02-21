import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { userContext } from '../../context/userContext';

const ProfilePage = () => {
  const { user } = useContext(userContext);
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', name: 'Overview' },
    { id: 'investments', name: 'Investments' },
    { id: 'settings', name: 'Settings' },
  ];

  const investmentStats = [
    { label: 'Total Invested', value: '$15,000' },
    { label: 'Active Projects', value: '3' },
    { label: 'Total Returns', value: '$2,500' },
    { label: 'ROI', value: '16.7%' },
  ];

  const activeInvestments = [
    {
      id: 1,
      name: 'Organic Farm Project',
      amount: '$5,000',
      progress: 75,
      status: 'In Progress',
    },
    {
      id: 2,
      name: 'Sustainable Agriculture',
      amount: '$7,000',
      progress: 40,
      status: 'Growing',
    },
    {
      id: 3,
      name: 'Urban Farming Initiative',
      amount: '$3,000',
      progress: 90,
      status: 'Near Harvest',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          <div className="flex items-center space-x-6">
            <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center">
              <span className="text-4xl text-green-600">
                {user?.name?.[0] || 'U'}
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">
                {user?.name || 'User Name'}
              </h1>
              <p className="text-gray-600">
                {user?.email || 'user@example.com'}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Tabs */}
        <div className="flex space-x-4 mb-8">
          {tabs.map((tab) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-green-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-green-50'
              }`}
            >
              {tab.name}
            </motion.button>
          ))}
        </div>

        {/* Tab Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          {/* Investment Stats */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {investmentStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white p-6 rounded-2xl shadow-lg"
                >
                  <div className="text-gray-600 text-sm mb-2">{stat.label}</div>
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Active Investments */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                Active Investments
              </h2>
              <div className="space-y-6">
                {activeInvestments.map((investment, index) => (
                  <motion.div
                    key={investment.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-b border-gray-100 last:border-0 pb-6 last:pb-0"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <h3 className="font-medium text-gray-900">
                        {investment.name}
                      </h3>
                      <span className="text-green-600 font-medium">
                        {investment.amount}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${investment.progress}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="bg-green-600 h-2 rounded-full"
                      />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">{investment.status}</span>
                      <span className="text-gray-600">
                        {investment.progress}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-6">
              Quick Actions
            </h2>
            <div className="space-y-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-green-600 text-white rounded-xl font-medium hover:bg-green-700 transition-colors"
              >
                Add Investment
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-white text-green-600 border-2 border-green-600 rounded-xl font-medium hover:bg-green-50 transition-colors"
              >
                Withdraw Funds
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-3 bg-white text-gray-600 border-2 border-gray-200 rounded-xl font-medium hover:bg-gray-50 transition-colors"
              >
                Generate Report
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfilePage;
