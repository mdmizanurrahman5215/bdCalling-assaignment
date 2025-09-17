import React from 'react';
import { Link } from 'react-router-dom';

const VerifyCode = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6 sm:p-8">
        <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
          Enter Verification Code
        </h2>

        <div className="mb-4 text-center">
          <span className="text-sm text-gray-600">OTP</span>
        </div>

        <form className="space-y-5">
          {/* Verification Code Field */}
          <div>
            <input
              id="verificationCode"
              name="verificationCode"
              type="text"
              placeholder="Enter Verification Code"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none text-center"
            />
          </div>

          {/* Submit Button */}
          <Link to="/update-password">
            <button
              type="button"
              className="w-full bg-black text-white font-semibold py-2 rounded-md transition-colors"
            >
              Submit
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default VerifyCode;
