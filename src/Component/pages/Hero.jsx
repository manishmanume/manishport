import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

const names = ["Manish Mehta", "Front-End Developer", "Back-End Developer"];

const Hero = () => {
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentNameIndex((prevIndex) => (prevIndex + 1) % names.length);
      setDisplayedText("");
      setLetterIndex(0);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const currentName = names[currentNameIndex];
    if (letterIndex < currentName.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + currentName[letterIndex]);
        setLetterIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [letterIndex, currentNameIndex]);

  return (
    <section className="container-xxl pt-20 mx-auto min-h-screen flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-12 lg:px-20 gap-6">
      <div className="text-center md:text-left flex flex-col items-center md:items-start space-y-4">
        <h1 className="text-xl md:text-2xl lg:text-5xl font-bold text-gray-900">
          Hi, I'm  
          <span className="text-amber-400 ml-2 animated-text">{displayedText}</span>
        </h1>
        <p className="text-sm md:text-[13px] lg:text-lg text-gray-500 md:w-[80%]">
          MERN Full-Stack Developer | React.js Developer | Node.js Developer | Version Control | MongoDB Developer | MySQL Developer
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <button className="flex items-center gap-2 text-sm sm:text-base lg:text-lg px-6 py-2 bg-yellow-500 rounded-full font-medium group text-white">
            Contact Me
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
          </button>
          <a
            href="https://drive.google.com/file/d/1m9k1bFD5cDocS03LMSQmFiXyWGlXh_NK/view?usp=drive_link"
            className="flex items-center gap-2 text-sm sm:text-base lg:text-lg px-6 py-2 bg-orange-500 rounded-full font-medium group text-white"
            download
            target="_blank"
          >
            Download CV
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
          </a>
        </div>
      </div>
      <div className="w-48 h-48 md:w-[350px] md:h-64 lg:w-[450px] lg:h-80 rounded-full mb-6 md:mb-0 flex items-center justify-center">
        <img src="/src/assets/images/Untitled design.png" alt="Manish Mehta" />
      </div>
    </section>
  );
};

export default Hero;
