import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const reasonsToHire = [
  {
    title: "Strong Problem Solver",
    image: "https://cdn-icons-png.flaticon.com/512/833/833472.png", // optional illustration
    description: "I love breaking down complex problems and building efficient, scalable solutions. Clean, thoughtful code is my thing.",
  },
  {
    title: "Reliable & Communicative",
    image: "https://cdn-icons-png.flaticon.com/512/1250/1250615.png",
    description: "I prioritize clear communication and consistent updates, making sure you're never left in the dark.",
  },
  {
    title: "Modern Tech Stack",
    image: "https://cdn-icons-png.flaticon.com/512/919/919828.png",
    description: "I work with the latest technologies like React, Tailwind, Node.js, Express, MongoDB, RDBMS (MySQL), and Framer Motion to deliver fast, responsive apps.",
  },
]

export default function WhyHireMe() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % reasonsToHire.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  const current = reasonsToHire[index]

  return (
    <section className="w-full py-16 ">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-700 underline underline-offset-4 decoration-emerald-400">
          Why Should You Hire Me
        </h2>
      </div>

      <div className="flex justify-center items-center px-4">
        <AnimatePresence mode="wait">
          <motion.article
            key={current.title}
            initial={{ opacity: 0, x:100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="bg-white max-w-3xl w-full mx-auto shadow-xl rounded-3xl px-8 py-10 md:px-16 flex flex-col items-center text-center border-l-4 border-emerald-300"
          >
            <img
              src={current.image}
              alt={current.title}
              className="w-20 h-20 object-contain border-4 border-emerald-200 rounded-full shadow-md mb-5 bg-white"
            />
            <blockquote className="text-gray-600 text-lg italic mb-6">
              “{current.description}”
            </blockquote>
            <h3 className="text-xl font-semibold text-gray-800">{current.title}</h3>
          </motion.article>
        </AnimatePresence>
      </div>
    </section>
  )
}
