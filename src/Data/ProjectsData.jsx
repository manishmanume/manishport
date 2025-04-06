import EcommImage from '../assets/images/E-comm.png';
import ContactApp from '../assets/images/Contact.png';
import PortImage from '../assets/images/portfolio.png';
import PorducttImage from '../assets/images/product.png';

const projects = [
    {
      id: 1,
      title: "E-Commerce Project",
      image: EcommImage,
      frontendLink: "https://github.com/yourusername/ecommerce-frontend",
      backendLink: "https://github.com/yourusername/ecommerce-backend",
      liveDemo: "https://onlineshopiing.netlify.app/",
      working: false, 
    },
    {
      id: 2,
      title: "Contact App",
      image: ContactApp,
      frontendLink: "https://github.com/manishmanume/mycontact",
      backendLink: "#",
      liveDemo: "https://mycontact-eta.vercel.app/",
      working: false, 
    },
    {
      id: 3,
      title: "PortFolio Website",
      image: PortImage,
      frontendLink: "https://github.com/manishmanume/manishport",
      liveDemo: "#",
      working: false,
    },
    {
      id: 4,
      title: "Product Managment",
      image: PorducttImage,
      frontendLink: "https://github.com/manishmanume/DirectoryListing_frontend",
      backendLink: "https://github.com/manishmanume/DirectoryListing_backend",
      liveDemo: "#",
      working: true,
    }
  ];

  export default projects;