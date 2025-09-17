import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";

export default function FooterSection() {
  return (
    <div className="flex flex-col min-h-screen justify-between bg-white">
      {/* Main Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-16 md:py-24">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-snug max-w-2xl">
          Ready to Experience the Future of AI Content?
        </h1>
        <p className="mt-4 text-gray-500 text-sm sm:text-base max-w-xl">
          Join thousands of users who are already creating human-like content
          with Viloi AI.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <button className="px-6 py-3 rounded-full bg-purple-600 text-white font-medium hover:bg-purple-700 transition w-full sm:w-auto">
            Get Started for Free
          </button>
          <button className="px-6 py-3 rounded-full border border-gray-400 text-gray-700 font-medium hover:bg-gray-100 transition w-full sm:w-auto">
            View Pricing
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-6 mx-20 flex flex-col md:flex-row items-center justify-between px-6 text-gray-600 text-sm">
        {/* Logo */}
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <img
            src="public\images\Untitled-1 1 (3).png"
            alt="logo"
            className="w-6 h-6"
          />
          <span className="font-medium">EveryGPT.AI</span>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4 text-lg">
          <a href="#">
            <img
              src="public\images\linkedin.png"
              alt="LinkedIn"
              className="w-6 h-6 hover:opacity-80 transition"
            />
          </a>
          <a href="#">
            <img
              src="public\images\twitter.png"
              alt="Twitter"
              className="w-6 h-6 hover:opacity-80 transition"
            />
          </a>
          <a href="#">
            <img
              src="public\images\instragram.png"
              alt="Instagram"
              className="w-6 h-6 hover:opacity-80 transition"
            />
          </a>
          <a href="#">
            <img
              src="public\images\facebook.png"
              alt="Facebook"
              className="w-6 h-6 hover:opacity-80 transition"
            />
          </a>
          <a href="#">
            <img
              src="public\images\youtube.png"
              alt="YouTube"
              className="w-6 h-6 hover:opacity-80 transition"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
