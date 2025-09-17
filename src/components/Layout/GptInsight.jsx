import React from "react";

const GptInsight = () => {
  return (
    <section className="w-full overflow-hidden">
      <div className="flex flex-col max-w-[1001px] h-auto items-center justify-center mx-auto my-20 px-4 sm:px-10">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center">
          <div className="flex w-[243px] h-[40px] border rounded-full bg-gradient-to-r from-[#DBEAFE] to-[#E0E7FF] items-center justify-center py-[9px] my-[8px]">
            <img src="/images/⚡.png" alt="" className="w-4 h-4 mr-1" />
            <p className="text-[14px] text-[#1447E6] leading-[20px] tracking-[-0.16px]">
              GPT insights
            </p>
          </div>
          <h1 className="font-inter font-bold text-[28px] sm:text-[36px] leading-[39.6px] tracking-[-0.9px] text-center my-3">
            Revolutionizing Learning with AI
          </h1>
          <p className="font-inter font-normal text-[16px] sm:text-[18px] leading-[150%] tracking-[-0.16px] text-center max-w-[700px]">
            Explore our specialized AI tools designed to enhance your writing
            experience
          </p>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 md:mt-20 gap-8 items-center">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="/images/Rectangle 1454.png"
              alt=""
              className="max-w-full h-auto rounded-lg"
            />
          </div>

          {/* Right Text */}
          <div className="grid gap-6">
            <p className="font-inter font-normal text-base leading-[150%] tracking-[-0.02em]">
              Leveraging GPT technology, our platform provides personalized,
              real-time assistance. Get instant feedback and tailored resources
              to enhance your learning experience.
            </p>

            {/* Features List */}
            <div className="flex flex-col">
              <span className="flex items-center gap-[12px] border border-purple-500 rounded-full px-[12px] py-[6px] mb-[6px]">
                <img src="/images/Vector (2).png" alt="" className="w-4 h-4" />
                <p className="text-sm">AI-Powered Conversations</p>
              </span>

              <div className="inline-flex items-center gap-[12px] border border-purple-500 rounded-full px-[12px] py-[6px] mb-[6px]">
                <img src="/images/Vector (2).png" alt="" className="w-4 h-4" />
                <p className="text-sm">Personalized Learning Paths</p>
              </div>

              <div className="inline-flex items-center gap-[12px] border border-purple-500 rounded-full px-[12px] py-[6px]">
                <img src="/images/Vector (2).png" alt="" className="w-4 h-4" />
                <p className="text-sm">Instant Feedback & Guidance</p>
              </div>
            </div>

            {/* Button */}
          <div className="flex justify-center md:justify-start">
  <button className="w-full sm:w-[180px] h-[40px] border rounded-[10px] px-4 sm:px-6 py-2 bg-gradient-to-r from-[#615FFF] to-[#AD46FF] text-white text-sm sm:text-base">
    Try for free now
  </button>
</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GptInsight;
