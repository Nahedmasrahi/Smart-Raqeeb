import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
} from 'recharts';

const Dashboard = () => {
  const username = localStorage.getItem('username') || 'مستخدم';

  const stats = [
    { title: 'عدد التحليلات', value: 120 },
    { title: 'منتجات مقلدة', value: 34 },
    { title: 'دقة النظام', value: '92%' },
    { title: 'عدد المستخدمين', value: 14 },
  ];

  const chartData = [
    { store: 'Amazon', price: 123 },
    { store: 'eBay', price: 117 },
    { store: 'Noon', price: 119 },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white py-12 px-4 md:px-12">
      <motion.h2
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold mb-8 text-center text-indigo-400"
      >
        مرحبًا، {username}
      </motion.h2>

      {/* بطاقات إحصائية */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md text-center"
          >
            <p className="text-2xl font-bold text-indigo-300">{stat.value}</p>
            <p className="mt-2 text-sm text-gray-300">{stat.title}</p>
          </motion.div>
        ))}
      </div>

      {/* رسم بياني تجريبي */}
      <div className="bg-white/10 backdrop-blur-md p-6 rounded-xl shadow-md">
        <h3 className="text-xl font-semibold mb-4 text-center text-indigo-300">مقارنة الأسعار بين المتاجر</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} />
            <XAxis dataKey="store" stroke="#fff" />
            <YAxis stroke="#fff" />
            <Tooltip />
            <Bar dataKey="price" fill="#6366f1" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
