import { motion } from "framer-motion";
import ProjectsData from "../../Data/ProjectsData";

const Project = () => {
  return (
    <div className="px-4 py-6 max-w-7xl mx-auto min-h-screen">
      <h2 className="text-3xl font-bold mb-8 text-center">✨ My Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ProjectsData.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            viewport={{ once: true }}
            className={`bg-white shadow-md rounded-xl p-4 flex flex-col items-center text-center ${
              index === 3 ? "border-4 border-yellow-400" : ""
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-36 object-cover rounded-md mb-3 hover:scale-105 transition-transform duration-500"
            />

            <h3 className="text-xl font-semibold text-gray-800">{project.title}</h3>

            {index === 3 && (
              <span className="mt-1 mb-2 inline-block bg-yellow-100 text-yellow-800 font-medium px-3 py-1 rounded-full text-xs">
                🚧 Currently Working...
              </span>
            )}

            <p className="text-gray-600 text-sm mt-1">
              <strong>Tech:</strong>{" "}
              {project.title === "E-Commerce"
                ? "React, Context API, Node.js, MySQL, Bootstrap"
                : project.title === "Contact App"
                ? "React, Firebase, CSS3"
                : project.title === "PortFolio Website"
                ? "React, Framer Motion, Tailwind"
                : project.title === "Product Managment"
                ? "React, Redux, Tailwind CSS, Node, Express, MongoDB, Mongoose "
                : "React, Bootstrap, Context API, Node.js, MySQL"}
            </p>

            <p className="text-gray-600 text-sm mt-1">
              <strong>Purpose:</strong>{" "}
              {project.title === "E-Commerce"
                ? "Simulate a full online store with cart & Orders."
                : project.title === "Contact App"
                ? "Manage and store contacts with a clean UI."
                : project.title === "PortFolio Website"
                ? "Showcase personal projects and skills."
                : project.title === "Product Managment"
                ? "Manage products, track inventory, handle CRUD operations, and streamline product-related workflows."
                : "Simulate a full online store with cart & Orders."}
            </p>

            <div className="flex flex-wrap gap-2 justify-center pt-3">
              {project.frontendLink && (
                <a
                  href={project.frontendLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-full text-xs"
                >
                  Frontend Code
                </a>
              )}
              {project.backendLink && (
                <a
                  href={project.backendLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-3 py-1 rounded-full text-xs"
                >
                  Backend Code
                </a>
              )}
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 hover:bg-purple-700 text-white px-3 py-1 rounded-full text-xs"
                >
                  Live Demo
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Project;
