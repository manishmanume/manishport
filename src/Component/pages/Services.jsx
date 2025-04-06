import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ServicesData from "../../Data/ServicesData";

const ServiceCard = ({ service }) => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.2 });

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    } else {
      controls.start({ opacity: 0, y: 50 });
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={controls}
      transition={{ duration: 0.6 }}
      className="p-6 bg-white rounded-lg shadow-xl hover:shadow-2xl transition"
    >
      <div className="flex items-center gap-4">
        {service.icon}
        <h3 className="text-2xl font-semibold text-gray-700">{service.title}</h3>
      </div>
      <p className="text-gray-600 mt-2">{service.description}</p>
      <ul className="mt-3 flex flex-wrap gap-2">
        {service.skills.map((skill, i) => (
          <li
            key={i}
            className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-lg text-sm"
          >
            {skill}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

const Services = () => {
  return (
    <section className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex justify-between items-center"
        >
          <h2 className="font-bold text-4xl text-gray-700 underline decoration-amber-400 underline-offset-8">
            My Services
          </h2>
          <a
            href="#"
            className="bg-yellow-500 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition font-semibold"
          >
            Hire Me
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-12">
          {ServicesData.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
