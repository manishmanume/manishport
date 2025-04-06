
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaTools, FaJira } from "react-icons/fa";
import { SiRedux, SiMongodb } from "react-icons/si";

const skillsData = [
  { name: "HTML5 & CSS3", icon: <FaHtml5 className='text-orange-500 text-3xl'/> },
  { name: "JavaScript", icon: <FaJs className='text-yellow-500 text-3xl'/> },
  { name: "React.js", icon: <FaReact className='text-blue-500 text-3xl'/> },
  { name: "Bootstrap", icon: <FaCss3Alt className='text-purple-500 text-3xl'/> },
  { name: "Tailwind CSS", icon: <FaCss3Alt className='text-cyan-500 text-3xl'/> },  
  { name: "Context APIs", icon: <SiRedux className='text-pink-500 text-3xl'/> },
  { name: "Redux", icon: <SiRedux className='text-purple-600 text-3xl'/> },
  { name: "Node.js", icon: <FaNodeJs className='text-green-500 text-3xl'/> },
  { name: "Express.js", icon: <FaNodeJs className='text-gray-500 text-3xl'/> },
  { name: "APIs Integration", icon: <FaTools className='text-blue-500 text-3xl'/> },
  { name: "JWT", icon: <FaTools className='text-yellow-500 text-3xl'/> },
  { name: "GitHub", icon: <FaTools className='text-red-500 text-3xl'/> },
  { name: "RDBMS (MySQL)", icon: <FaDatabase className='text-blue-500 text-3xl'/> },
  { name: "MongoDB", icon: <SiMongodb className='text-green-500 text-3xl'/> },
  { name: "Jira Tool", icon: <FaJira className='text-blue-500 text-3xl'/> },
  { name: "Agile", icon: <FaTools className='text-purple-500 text-3xl'/> },
];

export default skillsData;