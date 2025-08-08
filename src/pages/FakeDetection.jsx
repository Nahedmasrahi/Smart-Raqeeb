import React, { useState } from 'react';
import { motion } from 'framer-motion';

const FakeDetection = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) setImage(URL.createObjectURL(file));
  };

  const handleCheck = () => {
    // نتيجة وهمية فقط للمحاكاة
    const fakeResults = [
      { status: 'أصلي ✅', confidence: 94, advice: 'المنتج يبدو أصليًا بناءً على التحليل.' },
      { status: 'مقلد ❌', confidence: 76, advice: 'ينصح بشراء المنتج من متجر موثوق.' },
    ];
    const randomResult = fakeResults[Math.floor(Math.random() * fakeResults.length)];
    setResult(randomResult);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-12 px-4">
      <motion.h2
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-3xl font-bold text-center mb-4"
      >
        🔍 كشف المنتجات المقلدة
      </motion.h2>

      <p className="text-center text-gray-300 mb-10">
        ارفع صورة المنتج لنقوم بتحليلها باستخدام الذكاء الاصطناعي.
      </p>

      <div className="max-w-md mx-auto bg-white/10 p-6 rounded-2xl shadow-lg backdrop-blur-md space-y-6">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full bg-gray-100 text-black p-2 rounded-md"
        />

        {image && (
          <div className="flex justify-center">
            <img src={image} alt="Product Preview" className="h-48 rounded-xl shadow-md object-contain" />
          </div>
        )}

        <button
          onClick={handleCheck}
          className="w-full bg-purple-600 hover:bg-purple-700 transition text-white py-2 px-4 rounded-md font-semibold"
        >
          🔎 ابدأ الفحص
        </button>

        {result && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className={`p-4 rounded-xl mt-4 text-center ${
              result.status.includes('أصلي') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
            }`}
          >
            <p className="text-xl font-bold">{result.status}</p>
            <p>نسبة التأكد: {result.confidence}%</p>
            <p className="text-sm mt-2">{result.advice}</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default FakeDetection;
