import React from 'react';

const Assistant = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
        🧠 مساعد رقيب الذكي
      </h2>

      <div className="w-full max-w-4xl h-[600px] shadow-xl rounded-xl overflow-hidden border border-gray-300 bg-white">
        <iframe
          src="https://www.chatbase.co/chatbot-iframe/AtLmR66hnxqrTOEf2ZZL1"
          width="100%"
          height="100%"
          style={{ border: "none" }}
          title="Raqeeb AI Assistant"
        ></iframe>
      </div>
    </div>
  );
};

export default Assistant;
