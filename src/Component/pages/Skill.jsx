import React, { useState } from "react";
import { motion } from "framer-motion";
import skillsData from "./../../Data/Data";
import Experiences from "../../Data/Experience";
import Educations from "../../Data/Educations";

const Skill = () => {
  const [activeTab, setActiveTab] = useState("experience");

  return (
    <section className="min-h-screen text-gray-800 py-20  md:px-16 lg:px-24 flex flex-col items-center gap-10 overflow-hidden">

      <div className="flex flex-col md:flex-row gap-10 w-full max-w-6xl">
        <motion.div 
          className="flex-1 grid grid-cols-3 md:grid-cols-4 gap-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.2 },
            },
          }}
        >
          {skillsData.map((skill, index) => (
            <motion.div 
              key={index} 
              className="flex flex-col items-center gap-2"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <span className="text-5xl">{skill.icon}</span>
              <p className="text-lg font-semibold text-gray-700">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="flex-1 flex flex-col gap-8"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="flex gap-4">
            <motion.button
              onClick={() => setActiveTab("experience")}
              className={`text-lg font-bold px-4 py-2 rounded-md transition-all duration-300 ${
                activeTab === "experience" ? "bg-yellow-400 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              Experience
            </motion.button>
            <motion.button
              onClick={() => setActiveTab("education")}
              className={`text-lg font-bold px-4 py-2 rounded-md transition-all duration-300 ${
                activeTab === "education" ? "bg-orange-500 text-white" : "bg-gray-200 text-gray-700"
              }`}
            >
              Education
            </motion.button>
          </div>

          <motion.div 
            key={activeTab}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {activeTab === "experience" ? (
              <motion.ul className="space-y-4">
                {Experiences.map((exp, index) => (
                  <motion.li 
                    key={index} 
                    className="text-lg font-medium"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {exp.title} - <span className="text-gray-500">{exp.company} ({exp.year})</span>
                    <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-gray-800 mt-2 text-justify"
                    style={{fontSize:'15px'}}
                    >
                      {exp.Description}
                    </motion.p>
                  </motion.li>
                ))}
              </motion.ul>
            ) : (
              <motion.ul className="space-y-4">
                {Educations.map((edu, index) => (
                  <motion.li 
                    key={index} 
                    className="text-lg font-medium"
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {edu.degree} - <span className="text-gray-500">{edu.institution} ({edu.year})</span>
                    <motion.p
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-gray-800 mt-2 text-justify"
                    style={{fontSize:'15px'}}
                    >
                      {edu.description}
                    </motion.p>
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skill;