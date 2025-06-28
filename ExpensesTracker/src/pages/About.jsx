import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-300 flex items-center justify-center px-4">
      <div className="max-w-3xl bg-white p-8 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-slate-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-700 leading-relaxed mb-3">
          Welcome to our web application! We are passionate React developers focused on building fast, responsive, and accessible web interfaces.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-3">
          Our team specializes in modern JavaScript frameworks like React.js and integrates Tailwind CSS to ensure beautiful and responsive designs.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed mb-3">
          This project is part of our learning journey during the summer training at Cipher Schools. We’ve implemented features using React Hooks such as <strong>useState</strong>, <strong>useEffect</strong>, <strong>useRef</strong>, and <strong>useCallback</strong> to create a seamless user experience.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Thank you for visiting! Feel free to explore more of our work and get in touch through our LinkedIn or GitHub profiles.
        </p>
      </div>
    </div>
  );
}
