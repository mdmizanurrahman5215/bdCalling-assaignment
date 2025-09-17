import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import GoogleButton from "../../components/ui/GoogleButton";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <img
            src="public\images\Untitled-1 1.png"
            alt="Logo"
            className="w-16 h-16"
          />
        </div>

        {/* Title */}
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Create your free account
        </h2>

        {/* Form */}
        <form className="space-y-5">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Full Name
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="Enter your full name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email address here"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          {/* Dropdown */}
          <div>
            <label
              htmlFor="source"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Where did you hear about us?
            </label>
            <select
              id="source"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            >
              <option value="facebook">Facebook</option>
              <option value="google">Google</option>
              <option value="friends">Friends</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Enter your password again"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
          </div>

          {/* Checkbox */}
          <div className="flex items-start">
            <input
              id="updates"
              type="checkbox"
              className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded mt-1"
            />
            <label
              htmlFor="updates"
              className="ml-2 text-sm text-gray-600"
            >
              I’d like to receive updates, exclusive offers, and product news via email.
            </label>
          </div>

          {/* Sign Up Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 rounded-lg font-medium hover:bg-primary/90 transition"
          >
            Sign Up
          </button>

          {/* Divider */}
          <div className="flex items-center py-2">
            <div className="flex-grow h-px bg-gray-200"></div>
            <span className="px-4 text-gray-500 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>

          {/* Already have an account */}
          <p className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary font-semibold hover:text-primary/90"
            >
              Sign in
            </Link>
          </p>

          {/* Google Sign In */}
       <GoogleButton/>
        </form>
      </div>
    </div>
  );
};

export default Signup;
