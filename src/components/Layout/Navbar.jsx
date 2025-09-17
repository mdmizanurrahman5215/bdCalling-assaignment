import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 inset-x-0 max-w-[1120px] h-[67px] border border-gray-300 rounded-full z-50 mx-auto my-4 px-6 flex items-center justify-between bg-white shadow-sm">
    
      <div className="flex items-center">
        <img
          src="public\images\Frame 1618873393.png"
          alt="Logo"
          className="w-8 h-8"
        />
      </div>

 
      <ul className="hidden md:flex items-center space-x-8 font-medium text-sm">
        <li><a href="#home" className="hover:text-purple-600">HOME</a></li>
        <li><a href="#chatbot" className="hover:text-purple-600">CHAT BOT</a></li>
        <li><a href="#pricing" className="hover:text-purple-600">PRICING</a></li>
        <li><a href="#blog" className="hover:text-purple-600">BLOG</a></li>
      </ul>

    
      <div className="hidden md:block">
      <Link to='login'> <button className="px-5 py-2 text-white rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition">
                JOIN
              </button></Link>
      </div>

 
      <button
        className="md:hidden flex flex-col space-y-1"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
        <span className="w-6 h-0.5 bg-black"></span>
      </button>

     
      {isOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-white shadow-md rounded-lg p-6 md:hidden">
          <ul className="flex flex-col items-center space-y-4 font-medium">
            <li><a href="#home" className="hover:text-purple-600">HOME</a></li>
            <li><a href="#chatbot" className="hover:text-purple-600">CHAT BOT</a></li>
            <li><a href="#pricing" className="hover:text-purple-600">PRICING</a></li>
            <li><a href="#blog" className="hover:text-purple-600">BLOG</a></li>
            <li>
             <Link to='login'> <button className="px-5 py-2 text-white rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition">
                JOIN
              </button></Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
