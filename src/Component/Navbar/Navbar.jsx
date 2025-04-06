import React, { useState } from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-scroll';

const menuItems = [
  { label: 'Home', to: 'home' },
  { label: 'About', to: 'about' },
  { label: 'Skills', to: 'skill' },
  { label: 'Services', to: 'services' },
  { label: 'Projects', to: 'project' },
  { label: 'Contact', to: 'contact' }
];

const socialLinks = [
  { icon: FaGithub, link: 'https://github.com/manishmanume' },
  { icon: FaLinkedin, link: 'https://www.linkedin.com/in/manish-mehtaa/' },
  { icon: FaInstagram, link: 'https://www.instagram.com/' }
];

const MenuItem = ({ label, to, closeMenu }) => (
  <li>
    <Link
      to={to}
      smooth={true}
      duration={500}
      offset={-70}
      className="cursor-pointer text-sm md:text-base lg:text-lg xs:text-xs relative group overflow-hidden text-gray-700 font-semibold"
      onClick={closeMenu}
    >
      {label}
      <span className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-blue-800 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
    </Link>
  </li>
);

const SocialIcon = ({ icon: Icon, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer" className="hidden lg:flex text-3xl md:text-base text-gray-700 hover:text-orange-400 transition-colors duration-300">
    <Icon />
  </a>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="relative font-['Poppins', sans-serif]">
      <nav className="flex items-center justify-between p-4 bg-white text-gray-700 fixed top-0 w-full z-50 shadow-md">
        <h1 className="text-xl md:text-2xl font-bold tracking-wide">Manish Mehta</h1>
        <ul className="hidden lg:flex space-x-8">
          {menuItems.map((item, index) => (
            <MenuItem key={index} label={item.label} to={item.to} />
          ))}
        </ul>
        <div className="hidden lg:flex space-x-5">
          {socialLinks.map(({ icon, link }, index) => (
            <SocialIcon key={index} icon={icon} link={link} />
          ))}
        </div>
        <button onClick={toggleMenu} className="lg:hidden" aria-label="Toggle Menu">
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </nav>

      <aside
        className={`fixed top-0 left-0 h-full w-3/4 bg-gray-50 text-gray-900 transform transition-transform duration-300 z-50 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='flex items-center justify-between p-4'>
          <h3 className='text-lg md:text-xl font-semibold text-blue-400'>Menu</h3>
          <button onClick={toggleMenu}>
            <FaTimes size={24} />
          </button>
        </div>
        <ul className="mt-10 space-y-6 text-center">
          {menuItems.map((item, index) => (
            <MenuItem key={index} label={item.label} to={item.to} closeMenu={closeMenu} />
          ))}
        </ul>
        <div className="mt-8 flex justify-center space-x-3">
          {socialLinks.map(({ icon, link }, index) => (
            <SocialIcon key={index} icon={icon} link={link} />
          ))}
        </div>
      </aside>

      {isMenuOpen && <div className="fixed inset-0 bg-black bg-opacity-40 z-40" onClick={toggleMenu}></div>}
    </header>
  );
};

export default Navbar;
