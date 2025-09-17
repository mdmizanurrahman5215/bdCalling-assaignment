import React from "react";

const HeroSection = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
      {/* Left Image */}
      <div className="flex justify-center">
        <img
          src="https://i.ibb.co/T2rL6Sg/color-ball.png" // replace with your image
          alt="AI Illustration"
          className="w-72 h-72 object-contain"
        />
      </div>

      {/* Right Content */}
      <div className="flex flex-col space-y-6">
        {/* Badge */}
        <div className="inline-block bg-gradient-to-r from-blue-100 to-purple-100 text-blue-600 font-medium px-4 py-1 rounded-full shadow-sm">
          ⚡ GPT Insights
        </div>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
          Revolutionizing Learning with AI
        </h2>

        {/* Subtitle */}
        <p className="text-gray-600 text-base">
          Explore our specialized AI tools designed to enhance your writing
          experience.
        </p>

        {/* Description */}
        <p className="text-gray-500 text-sm leading-relaxed">
          Leveraging GPT technology, our platform provides personalized,
          real-time assistance. Get instant feedback and tailored resources to
          enhance your learning experience.
        </p>

        {/* Feature Pills */}
        <div className="flex flex-col space-y-3">
          <button className="px-5 py-2 border border-purple-500 rounded-full text-gray-800 hover:bg-purple-50 transition">
            AI-Powered Conversations
          </button>
          <button className="px-5 py-2 border border-purple-500 rounded-full text-gray-800 hover:bg-purple-50 transition">
            Personalized Learning Paths
          </button>
          <button className="px-5 py-2 border border-purple-500 rounded-full text-gray-800 hover:bg-purple-50 transition">
            Instant Feedback & Guidance
          </button>
        </div>

        {/* CTA Button */}
        <div>
          <button className="mt-4 px-6 py-3 rounded-md text-white font-medium bg-gradient-to-r from-blue-500 to-purple-600 hover:opacity-90 transition">
            Try for free now
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
