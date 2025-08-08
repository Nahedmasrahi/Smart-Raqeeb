import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const COLORS = ['#6366f1', '#22d3ee', '#facc15'];

const logoMap = {
  Amazon: '/icons/amazon.png',
  eBay: '/icons/ebay.png',
  Noon: '/icons/noon.png',
};

export default function PriceAnalysis() {
  const [product, setProduct] = useState('');
  const [results, setResults] = useState(null);

  const handleAnalyze = (e) => {
    e.preventDefault();
    setResults([
      { store: 'Amazon', price: 123 },
      { store: 'eBay', price: 117 },
      { store: 'Noon', price: 119 },
    ]);
  };

  const downloadPDF = () => {
    const element = document.getElementById('result-section');
    if (!element) return;

    element.classList.add('print-bg');

    import('html2canvas').then((html2canvas) => {
      import('jspdf').then((jsPDFModule) => {
        html2canvas.default(element, { scale: 2 }).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDFModule.jsPDF('p', 'mm', 'a4');
          const pageWidth = pdf.internal.pageSize.getWidth();
          const pageHeight = pdf.internal.pageSize.getHeight();

          const imgProps = {
            width: canvas.width,
            height: canvas.height,
          };
          const ratio = imgProps.height / imgProps.width;
          const imgHeight = pageWidth * ratio;

          const yOffset = imgHeight < pageHeight ? (pageHeight - imgHeight) / 2 : 0;

          pdf.addImage(imgData, 'PNG', 0, yOffset, pageWidth, imgHeight);
          pdf.save(`تحليل_${product}.pdf`);
          element.classList.remove('print-bg');
        });
      });
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-tr from-[#0f172a] to-[#1e293b] text-white flex flex-col items-center justify-center px-4 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl md:text-4xl font-bold text-indigo-400 mb-10 text-center"
      >
        تحليل الأسعار
      </motion.h1>

      <form onSubmit={handleAnalyze} className="flex flex-col sm:flex-row items-center gap-4 mb-10">
        <input
          type="text"
          placeholder="أدخل اسم المنتج"
          className="px-4 py-2 rounded-lg bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
        />
        <button
          type="submit"
          className="px-6 py-2 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-bold transition"
        >
          تحليل
        </button>
      </form>

      {results && (() => {
        const min = Math.min(...results.map(r => r.price));
        const best = results.find(r => r.price === min);
        const avg = results.reduce((sum, r) => sum + r.price, 0) / results.length;
        const diff = (avg - min).toFixed(2);

        return (
          <motion.div
            id="result-section"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-xl p-6 w-full max-w-3xl"
          >
            <h2 className="text-xl font-semibold mb-6 text-center">
              نتائج التحليل لـ <span className="text-indigo-300">{product}</span>
            </h2>

            <ul className="divide-y divide-white/20 mb-6">
              {results.map((res, index) => (
                <li
                  key={index}
                  className={`py-3 px-2 flex justify-between items-center text-lg ${
                    res.store === best.store ? 'text-green-400 font-bold' : ''
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <img src={logoMap[res.store]} alt={res.store} className="w-6 h-6 rounded" />
                    {res.store}
                  </span>
                  <span>{res.price} ريال</span>
                </li>
              ))}
            </ul>

            <div className="h-64 mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={results}
                    dataKey="price"
                    nameKey="store"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label
                  >
                    {results.map((_, index) => (
                      <Cell key={index} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <button
              onClick={downloadPDF}
              className="mx-auto mt-4 mb-4 block bg-yellow-400 text-black font-semibold px-5 py-2 rounded hover:bg-yellow-500 transition"
            >
              تحميل النتائج كـ PDF 📄
            </button>

            <p className="text-center text-yellow-300 font-medium">
              💡 الأفضل شراء المنتج من <span className="font-bold">{best.store}</span> لأن سعره أقل بـ <span className="font-bold">{diff} ريال</span> عن المتوسط.
            </p>
          </motion.div>
        );
      })()}
    </div>
  );
}
