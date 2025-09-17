import React from "react";
import { Link } from "react-router-dom";
import GoogleButton from "../../components/ui/GoogleButton";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-2xl p-8">
        {/* Title */}
         <div className="flex justify-center mb-6">
          <img
            src="public\images\Untitled-1 1.png"
            alt="Logo"
            className="w-16 h-16"
          />
        </div>
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Sign in to your account
        </h2>

        {/* Form */}
        <form className="space-y-5">
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
              name="email"
              placeholder="Enter your email address here"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <div className="text-red-500 text-sm mt-1"></div>
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
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:outline-none"
            />
            <div className="text-red-500 text-sm mt-1"></div>
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="rememberPassword"
                name="rememberPassword"
                type="checkbox"
                className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
              />
              <label
                htmlFor="rememberPassword"
                className="ml-2 block text-sm text-gray-700"
              >
                Remember Password
              </label>
            </div>

            <Link
              to="/reset-passward"
              className="text-sm text-primary hover:text-primary/90"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-2 rounded-lg font-medium hover:bg-primary/90 transition"
          >
            Login
          </button>

          {/* Divider */}
          <div className="flex items-center py-2">
            <div className="flex-grow h-px bg-gray-200"></div>
            <span className="px-4 text-gray-500 text-sm">or</span>
            <div className="flex-grow h-px bg-gray-200"></div>
          </div>
          <GoogleButton/>

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-primary font-semibold hover:text-primary/90"
            >
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
