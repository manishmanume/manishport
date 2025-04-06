import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-6 py-8 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        
        <div className="text-center md:text-left">
          <h2 className="text-xl font-semibold mb-2">Manish Mehta.</h2>
          <p className="flex items-center justify-center md:justify-start gap-2">
            <FaEnvelope /> mehtamanish9176@gmail.com
          </p>
          <p className="flex items-center justify-center md:justify-start gap-2 mt-1">
            <FaPhoneAlt /> +91 8307936116
          </p>
        </div>

        <div className="flex gap-6 text-xl">
          <a
            href="https://github.com/manishmanume"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/manish-mehtaa/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="text-center text-sm text-gray-400 mt-6">
        © {new Date().getFullYear()} Your Name. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
