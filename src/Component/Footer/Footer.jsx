import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <h1 className="text-2xl font-bold mb-4 md:mb-0">Manish Mehta</h1>

        <ul className="flex space-x-6 mb-4 md:mb-0">
          <li><a href="#" className="hover:text-gray-400">Home</a></li>
          <li><a href="#" className="hover:text-gray-400">About</a></li>
          <li><a href="#" className="hover:text-gray-400">Services</a></li>
          <li><a href="#" className="hover:text-gray-400">Contact</a></li>
        </ul>

        <div className="flex space-x-4">
          <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
        </div>
      </div>

      <div className='flex'>
        

      </div>

      <div className="text-center mt-8 border-t border-gray-700 pt-4">
        <p>&copy; {new Date().getFullYear()} Manish Mehta. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;