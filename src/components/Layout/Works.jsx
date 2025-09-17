import React from "react";

const Works = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-0 py-12 mt-[50px]">
      <div className="max-w-[911px] mx-auto grid gap-[88px]">
        {/* Header Section */}
        <div className="flex flex-col items-center justify-center text-center">
          <div className="flex w-[243px] h-[40px] border rounded-full bg-gradient-to-r from-[#DBEAFE] to-[#E0E7FF] items-center justify-center py-[9px] my-[8px]">
            <img src="/images/⚡.png" alt="icon" className="mr-2" />
            <p className="text-[14px] text-[#1447E6] leading-[20px] tracking-[-0.16px]">
              Works
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            How It <span className="text-purple-600">Works</span>
          </h1>

          <p className="text-gray-600 text-base sm:text-lg max-w-[600px]">
            Experience the simplicity and power of our AI assistant in just
            three easy steps.
          </p>
        </div>

        {/* Steps Section */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {/* Step 1 */}
          <div className="flex flex-col items-center text-center p-4">
            <img
              src="/images/Frame 2147224289 (1).png"
              alt="Start a Conversation"
              className="w-20 h-20 mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Start a Conversation</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Begin by typing your question or request in the chat interface.
              Our AI assistant is ready to help with any topic.
            </p>
          </div>

          {/* Step 2 */}
          <div className="flex flex-col items-center text-center p-4">
            <img
              src="/images/Frame 2147224329.png"
              alt="Get AI-Powered Responses"
              className="w-20 h-20 mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">
              Get AI-Powered Responses
            </h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Receive intelligent, context-aware responses instantly. Our
              advanced AI understands your needs and provides relevant
              information.
            </p>
          </div>

          {/* Step 3 */}
          <div className="flex flex-col items-center text-center p-4">
            <img
              src="/images/Frame 2147224330.png"
              alt="Achieve Your Goals"
              className="w-20 h-20 mb-4"
            />
            <h2 className="text-xl font-semibold mb-2">Achieve Your Goals</h2>
            <p className="text-gray-600 text-sm sm:text-base">
              Whether it's completing assignments, or getting creative ideas,
              our AI helps you accomplish more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
