import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import aboutImage from '../../assets/images/about.png'
import aboutImage1 from '../../assets/images/about1.avif'

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = target;
    const duration = 3000;
    const stepTime = duration / end;

    const counter = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(counter);
    }, stepTime);

    return () => clearInterval(counter);
  }, [target]);

  return <p className="text-purple-600 text-2xl font-semibold text-center">{count}</p>;
};

export default function About() {
  return (
    <section className="min-h-screen py-12 px-6 lg:px-20" id='about'>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
        >
          <div className='flex gap-x-8'>
            <h2 className="text-8xl font-bold text-gray-900 flex flex-col">
              <span className='text-yellow-400'>1+</span> <span className="text-2xl text-gray-600" style={{ letterSpacing: '1.2rem' }}>Years</span>
            </h2>
            <motion.h3
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl sm:text-2xl md:text-3xl lg:text-3xl font-semibold text-gray-800 mt-2 text-justify tracking-widest"
            >
              of working as MERN full-stack Developer including Internship & Training
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-gray-600 mt-4 text-justify"
          >
            I am a MERN full-stack developer with a passion for building dynamic and scalable web applications having knowledge of
            both front-end and back-end development. I worked as an intern at Softcron Technology where I worked on both frontend and
            backend development. On the frontend I enjoy creating user friendly and responsive interface using React.js along with
            Bootstrap and tailwind CSS and on the backend, I work with Node.js, Express.js to build secure, high-performing APIs while
            using RDBMS (MYSQL) and Mongodb to manage data effectively. I have completed my training at Code Pulse which
            strengthened my understanding of modern web technologies, best coding practices, and problem-solving approaches. I plan to
            continuously enhance my expertise in front-end, back-end, and automation tools to contribute to designing various websites
            that address emerging business challenges and user needs.
          </motion.p>
          <ul className="mt-4 flex gap-x-8 space-y-2">
            {["Clean Code", "Responsive Design", "Optimized Performance"].map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 * index }}
                className="flex items-center gap-2 text-gray-700"
              >
                ✅ {feature}
              </motion.li>
            ))}
          </ul>
          {/* <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-400"
          >
            Read More
          </motion.button> */}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 gap-4"
        >
          <motion.img
            src={aboutImage}
            alt="Happy Clients"
            className="rounded-lg"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
          <motion.img
            src={aboutImage1}
            alt="Project Discussion"
            className="rounded-lg shadow-md"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
          <motion.div
            className="col-span-2 flex justify-between bg-white p-6 rounded-lg shadow-lg mt-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div>
              <h4 className="text-xl font-bold text-gray-900">Projects</h4>
              <Counter target={4} />
            </div>
            <div>
              <h4 className="text-xl font-bold text-gray-900">Completed</h4>
              <Counter target={3} />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
