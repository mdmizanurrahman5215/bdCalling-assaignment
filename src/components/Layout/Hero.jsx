import React from "react";

const Hero = () => {
  return (
    <section className="text-center px-6 md:px-16 lg:px-24 xl:px-32 pt-32 pb-20 ">
      {/* Search bar */}
    <div className="flex justify-center mt-48 mb-12">
  <div className="relative w-full max-w-lg">
    {/* Input field */}
    <input
      type="text"
      placeholder="Ask anything"
      className="w-full h-11 px-10 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    />

    {/* Search icon on the left */}
    <img
      src="public/images/Vector.png"
      alt="Search"
      className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2"
    />

    {/* Custom cursor icon on the right */}
    <img
      src="public/images/Vector (1).png"
      alt="Cursor"
      className="w-5 h-5 absolute right-3 top-1/2 transform -translate-y-1/2"
    />
  </div>
</div>


      {/* Hero content */}
      <div className="mb-12">
        <div className="flex items-center justify-center gap-4">
          <img src="public\images\Union.png" alt="" />
          <p className="tracking-widest uppercase font-bold">
            <span className="bg-gradient-to-r from-[#615fff] to-[#AD46FF] bg-clip-text text-transparent">
              Welcome to EveryGPT
            </span>
          </p>
          <img
            src="/images/Image [absolute].png"
            alt="EveryGPT"
            className="w-24 h-24 object-contain"
          />
        </div>

        <h1 className="text-3xl md:text-5xl font-bold leading-snug mb-8">
          The Future of AI, <br /> All in One Platform
        </h1>

        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          EveryGPT.ai is the next-generation AI assistant platform, designed to
          empower developers, creators, educators, and businesses with seamless
          access to the most advanced language models, voice capabilities, and
          productivity tools.
        </p>

        <button className="bg-gradient-to-r from-[#615FFF] to-[#AD46FF] text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
          Try for free now
        </button>
      </div>

      {/* Models grid */}
      <div>
        <p className="text-sm font-semibold text-gray-500 mb-6">
          Switch Between Models Instantly
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 justify-items-center">
          <img
            src="/images/Div [flex].png"
            alt="Model"
            className="w-[56px] h-[56] rounded-[12px] object-contain"
          />
          <img
            src="/images/Div [flex] (1).png"
            alt="Model"
            className="w-[56px] h-[56] rounded-[12px]object-contain"
          />
          <img
            src="/images/Div [flex] (2).png"
            alt="Model"
            className="w-[56px] h-[56] rounded-[12px] object-contain"
          />
          <img
            src="/images/Div [flex] (3).png"
            alt="Model"
            className="w-[56px] h-[56] rounded-[12px] object-contain"
          />
          <img
            src="/images/Div [flex] (4).png"
            alt="Model"
            className="w-[56px] h-[56] rounded-[12px] object-contain"
          />
          <img
            src="/images/Div [flex] (5).png"
            alt="Model"
            className="w-[56px] h-[56] rounded-[12px] object-contain"
          />
          <img
            src="/images/Div [flex] (6).png"
            alt="Model"
            className="w-[56px] h-[56] rounded-[12px] object-contain"
          />
          <img
            src="/images/Div [flex] (7).png"
            alt="Model"
            className="w-[56px] h-[56] rounded-[12px] object-contain"
          />
          <img
            src="/images/Div [flex] (8).png"
            alt="Model"
            className="w-[56px] h-[56] rounded-[12px] object-contain"
          />
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
