import './index.css';
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import PriceAnalysis from './pages/PriceAnalysis';
import FakeDetection from './pages/FakeDetection';
import Dashboard from './pages/Dashboard';
import Assistant from './pages/Assistant';

function App() {
  const [language, setLanguage] = useState('ar');

  const texts = {
    ar: {
      projectName: "رقيب الذكي",
      home: 'الرئيسية',
      about: 'من نحن',
      services: 'الخدمات',
      contact: 'تواصل معنا',
      login: 'تسجيل الدخول',
      welcome: 'مرحبًا بك في رقيب الذكي',
      description: 'نظام ذكي لتحليل الأسعار وكشف المنتجات المقلدة بدقة واحترافية',
      whatIs: 'ما هو رقيب الذكي؟',
      aboutDesc: 'رقيب الذكي هو نظام مطور بأحدث تقنيات الذكاء الاصطناعي لمساعدة الجهات المختصة في تحليل الأسعار بدقة، واكتشاف المنتجات المقلدة عبر واجهة تفاعلية متقدمة وسهلة الاستخدام.',
      footerText: '© 2025 رقيب الذكي. جميع الحقوق محفوظة.',
      futureVision: 'نحو مستقبل أكثر ذكاءً لمراقبة الأسواق',
      followUs: 'تابعنا',
      links: 'روابط',
      serviceBoxes: ['تحليل الأسعار', 'كشف التقليد', 'لوحة التحكم', 'مساعد ذكي'],
    },
    en: {
      projectName: "Raqeep Smart",
      home: 'Home',
      about: 'About',
      services: 'Services',
      contact: 'Contact Us',
      login: 'Login',
      welcome: 'Welcome to Raqeep Smart',
      description: 'An AI-powered system for price analysis and counterfeit detection.',
      whatIs: 'What is Raqeep Smart?',
      aboutDesc: 'Raqeep Smart is an advanced AI-based system designed to help authorities analyze prices and detect counterfeit products via an easy and interactive interface.',
      footerText: '© 2025 Raqeep Smart. All rights reserved.',
      futureVision: 'Toward a smarter future for market monitoring',
      followUs: 'Follow us',
      links: 'Links',
      serviceBoxes: ['Price Analysis', 'Counterfeit Detection', 'Dashboard', 'Smart Assistant'],
    },
  };

  const t = texts[language];

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage language={language} setLanguage={setLanguage} t={t} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/price-analysis" element={<PriceAnalysis />} />
        <Route path="/fake-detection" element={<FakeDetection />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/assistant" element={<Assistant />} />
        {/* أي مسار غير موجود يرجع للرئيسية */}
        <Route path="*" element={<HomePage language={language} setLanguage={setLanguage} t={t} />} />
      </Routes>
    </Router>
  );
}

export default App;

