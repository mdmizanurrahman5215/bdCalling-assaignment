import React from 'react';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Reset Your Password
        </h2>

        <form className="space-y-5">
        {/* Email field  */}
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
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          </div>

          {/* Reset Password Button */}
          <Link to="/verify-code">
            <button
              type="button"
              className="w-full bg-black text-white font-semibold py-2 rounded-md transition-colors"
            >
              Reset Password
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
