// ✅ HomePage.jsx
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';


function HomePage({ language, setLanguage, t }) {
  const navigate = useNavigate();
const [username, setUsername] = useState(localStorage.getItem('username'));
  return (
    <div className="font-sans">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-black bg-opacity-70 backdrop-blur-md text-white px-6 py-4 flex justify-between items-center shadow-md">
        <div className="text-xl font-bold text-indigo-400">{t.projectName}</div>
        <div className="flex items-center gap-4 text-sm">
         <button
  onClick={() => {
    if (!username) navigate('/login');
  }}
  className="hover:text-indigo-400 transition"
>
  {username ? ` ${username}` : t.login}
</button>

          <select
            className="bg-transparent text-white border-none focus:outline-none"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="ar">عربي</option>
            <option value="en">EN</option>
          </select>
        </div>
      </nav>

      {/* سكشن الفيديو */}
      <div id="home" className="relative w-full h-screen overflow-hidden">
        <video autoPlay loop muted className="absolute w-full h-full object-cover">
          <source src="/video2.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center text-white text-center px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">{t.welcome}</h1>
          <p className="text-lg md:text-2xl max-w-2xl">{t.description}</p>
        </div>
      </div>

      {/* سكشن من نحن + البوكسات */}
<section
  id="about"
  className="relative py-28 px-6 md:px-20 text-white bg-cover bg-center bg-no-repeat"
  style={{ backgroundImage: "url('/n1.jpg')" }}
>
  <div className="absolute inset-0 bg-black/70 backdrop-blur-sm z-0" />
  <motion.div
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    viewport={{ once: true }}
    className="relative z-10 max-w-4xl mx-auto text-center mb-16"
  >
    <h2 className="text-3xl md:text-4xl font-bold mb-6 text-indigo-400">{t.whatIs}</h2>
    <p className="text-lg md:text-xl leading-relaxed text-gray-200">{t.aboutDesc}</p>
  </motion.div>

  {/* البوكسات التفاعلية */}
  <div id="services" className="relative z-10 max-w-4xl mx-auto grid gap-8">
    {t.serviceBoxes.map((title, index) => {
      const paths = [
        '/price-analysis',
        '/fake-detection',
        '/dashboard',
        '/assistant',
      ];

      return (
        <motion.div
          key={index}
          onClick={() => navigate(paths[index])}
          className={`cursor-pointer bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-xl shadow-lg text-white ${
            index % 2 === 0 ? "ml-auto" : "mr-auto"
          } w-full sm:w-2/3 hover:bg-white/20 transition duration-300`}
          initial={{ opacity: 0, x: index % 2 === 0 ? 100 : -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          <div className="text-3xl mb-2">
            {['💰', '🔍', '📊', '🧠'][index]}
          </div>
          <h3 className="text-xl font-semibold">{title}</h3>
        </motion.div>
      );
    })}
  </div>
</section>

      {/* Footer */}
      <footer className="bg-[#0c1321] text-white py-16 px-6 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-right">
          <div>
            <h3 className="text-indigo-400 text-xl font-bold mb-2">{t.projectName}</h3>
            <p className="text-gray-400 leading-relaxed">{t.futureVision}</p>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">{t.links}</h4>
            <ul className="flex flex-col gap-2 text-gray-300 text-sm">
              <li><a href="#about" className="hover:text-indigo-400">{t.about}</a></li>
              <li><a href="#services" className="hover:text-indigo-400">{t.services}</a></li>
              <li><a href="#contact" className="hover:text-indigo-400">{t.contact}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-4">{t.followUs}</h4>
            <ul className="flex flex-col gap-2 text-gray-300 text-sm">
              <li><a href="https://x.com/NAHEDmansour200?t=UP1_tj8a9-dT3Yn01JYMYQ&s=09">X</a></li>
              <li><a href="https://www.instagram.com/swenahed?igsh=OGQ5ZDc2ODk2ZA==">Instagram</a></li>
              <li><a href="https://linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=nahed-mansour-707911316">LinkedIn</a></li>
            </ul>
          </div>
        </div>
        <p className="text-xs text-gray-500 mt-12 text-center">{t.footerText}</p>
      </footer>
    </div>
  );
}

export default HomePage;

