import React from "react";

const Features = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 md:px-8 lg:px-12 py-12">
      <div className="flex flex-col items-center justify-center gap-[30px] w-full max-w-[768px]">
        {/* Section Badge */}
        <div className="flex w-[243px] h-[40px] border rounded-[33554428px] bg-gradient-to-r from-[#DBEAFE] to-[#E0E7FF] items-center justify-center">
          <img src="/images/⚡.png" alt="icon" className="w-5 h-5 mr-2" />
          <p className="text-sm font-medium">Features</p>
        </div>

        {/* Title + Subtitle */}
        <div className="w-full h-auto gap-[8px] mb-[30px] text-center">
          <h1 className="font-bold text-[28px] md:text-[36px] leading-[39.6px] tracking-[-0.9px]">
            Powerful{" "}
            <span className="bg-gradient-to-r from-[#155DFC] via-[#4F39F6] to-[#9810FA] bg-clip-text text-transparent font-bold">
              AI Features
            </span>
          </h1>
          <p className="font-normal text-[16px] md:text-[18px] leading-[150%] tracking-[-0.16px] mt-2">
            Discover the advanced capabilities of our AI assistant that help you
            work smarter, create better content, and solve complex problems.
          </p>
        </div>
      </div>

      {/* Features Grid */}
      <div className="w-full max-w-[1120px] mx-auto grid gap-6">
        {/* First row - 3 cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="flex flex-col items-start border rounded-[10px] px-6 py-4 gap-3 bg-[#FBF6F6]">
            <div className="bg-[#F6339A] flex justify-center items-center w-10 h-10 rounded-full mb-6">
              <img
                className="w-[21px] h-[24px]"
                src="/images/Security, Safety, Warranty, Guaranted.png"
                alt="icon"
              />
            </div>
            <h2 className="font-semibold">Smart Research Assistant</h2>
            <p>
              Access web search, PDF analysis, and solve complex problems with
              detailed explanations.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-start border rounded-[10px] px-6 py-4 gap-3 bg-[#FBF6F6]">
            <div className="bg-[#00bc7d] flex justify-center items-center w-10 h-10 rounded-full mb-6">
              <img
                className="w-[21px] h-[24px]"
                src="/images/Security, Safety, Warranty, Guaranted (2).png"
                alt="icon"
              />
            </div>
            <h2 className="font-semibold">Undetectable AI Writing</h2>
            <p>
              Create human-like content with 0% AI detection score on academic
              integrity checks.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-start border rounded-[10px] px-6 py-4 gap-3 bg-[#FBF6F6]">
            <div className="bg-[#00A6F4] flex justify-center items-center w-10 h-10 rounded-full mb-6">
              <img
                className="w-[21px] h-[24px]"
                src="/images/Security, Safety, Warranty, Guaranted (1).png"
                alt="icon"
              />
            </div>
            <h2 className="font-semibold">Creative & Technical Expert</h2>
            <p>
              Optimize code, and get guidance for creative and technical
              projects.
            </p>
          </div>
        </div>

        {/* Second row - 2 centered cards */}
        <div className="flex justify-center flex-wrap gap-6">
          {/* Card 4 */}
          <div className="flex flex-col items-start border rounded-[10px] px-6 py-4 gap-3 bg-[#FBF6F6] w-[356px]">
            <div className="bg-[#E3C208] flex justify-center items-center w-10 h-10 rounded-full mb-6">
              <img
                className="w-[21px] h-[24px]"
                src="/images/zondicons_conversation.png"
                alt="icon"
              />
            </div>
            <h2 className="font-semibold">Real-Time Conversations</h2>
            <p>
              Engage with users instantly, providing accurate responses and
              solutions in real-time.
            </p>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col items-start border rounded-[10px] px-6 py-4 gap-3 bg-[#FBF6F6] w-[356px]">
            <div className="bg-[#DA1D1D] flex justify-center items-center w-10 h-10 rounded-full mb-6">
              <img
                className="w-[21px] h-[24px]"
                src="/images/qlementine-icons_swap-16.png"
                alt="icon"
              />
            </div>
            <h2 className="font-semibold">Personalized Interactions</h2>
            <p>
              Tailor responses based on user preferences, history, and context
              for a customized experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
