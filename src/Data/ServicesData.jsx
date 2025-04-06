import { FaCode, FaServer, FaLaptopCode, FaDatabase } from "react-icons/fa";

const ServicesData = [
  {
    title: "Frontend Development",
    icon: <FaCode className="text-yellow-500 text-4xl" />,
    description:
      "I create pixel-perfect, responsive, and dynamic user interfaces with modern frameworks and libraries.",
    skills: ["React.js", "Tailwind CSS", "Bootstrap", "GitHub"],
  },
  {
    title: "Backend Development",
    icon: <FaServer className="text-yellow-500 text-4xl" />,
    description:
      "Developing robust and scalable backend solutions using the latest technologies and databases.",
    skills: ["Node.js", "Express.js", "Third-Party APIs"],
  },
  {
    title: "Full Stack Development",
    icon: <FaLaptopCode className="text-yellow-500 text-4xl" />,
    description:
      "Building complete web applications with seamless integration of frontend and backend technologies.",
    skills: ["MERN Stack", "REST API", "API Integrations" , "Authentication"],
  },
  {
    title: "Database Management",
    icon: <FaDatabase className="text-yellow-500 text-4xl" />,
    description:
      "Managing and optimizing databases for high performance and scalability.",
    skills: ["MongoDB", "MySQL", "Firebase"],
  },
];

export default ServicesData;