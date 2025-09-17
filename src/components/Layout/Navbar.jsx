import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-10 md:mx-20">
    <div className="fixed items-center justify-between top-0 inset-x-0 max-w-[1120px] h-[67px] border border-gray-300 rounded-full z-50 mx-auto mb-4 px-6 flex  bg-white shadow-sm">
       <div className="flex items-center">
        <img
          src="public\images\Untitled-1 1.png"
          alt="Logo"
          className="w-8 h-8"
        />
      </div>

 
      <ul className="hidden md:flex items-center space-x-8 font-medium text-sm">
        <li><NavLink to="/">HOME</NavLink></li>
        <li><NavLink to="/chatbot">CHAT BOT</NavLink></li>
        <li><NavLink to="/pricing">PRICING</NavLink></li>
        <li><NavLink to="/blog">BLOG</NavLink></li>
       
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
    </div>
     
    </nav>
  );
};

export default Navbar;
