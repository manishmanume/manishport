import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 },
};

const ContactMe = () => {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <div className="min-h-screen bg-gradient-to-br px-6 md:px-20 py-16 flex items-center justify-center">
      <motion.div
        ref={containerRef}
        variants={fadeIn}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        transition={{ duration: 0.8 }}
        className="backdrop-blur-xl bg-white/70 w-full max-w-6xl p-10 rounded-3xl shadow-2xl"
      >
        <h2 className="text-4xl font-extrabold text-center text-gray-600 mb-12">Let's Connect And Work</h2>

        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="bg-gradient-to-r from-orange-100 via-white to-yellow-100 p-6 rounded-xl shadow-inner border-l-4 border-yellow-500 mb-8">
              <h3 className="text-xl  font-semibold text-orange-500 mb-2">💼 Why Hire Me?</h3>
              <p className="text-gray-700 text-justify">
                I build clean, scalable, and high-performing web applications that make a real impact.
                With expertise in both frontend and backend development, I transform ideas into beautiful,
                user-focused digital experiences. I'm reliable, creative, and committed to delivering results — on time, every time.
              </p>
            </div>

            <div className="space-y-5 text-gray-800">
              <div>
                <p className="font-semibold text-blue-700">📍 Address</p>
                <p>Gohana, Distt. Sonipat, India </p>
              </div>
              <div>
                <p className="font-semibold text-blue-700">📞 Mobile</p>
                <p>+91 8307936116</p>
              </div>
              <div>
                <p className="font-semibold text-blue-700">📧 Email</p>
                <p>mehtamanish9176@gmail.com</p>
              </div>
            </div>
          </div>

          <form className="space-y-5">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 bg-white/80 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-3 bg-white/80 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none"
            />
            <textarea
              rows="6"
              placeholder="Your Message"
              className="w-full px-4 py-3 bg-white/80 rounded-xl border border-gray-300 focus:ring-2 focus:ring-yellow-400 outline-none"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-orange-300 to-yellow-300 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-all"
            >
              Send Message
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactMe;
