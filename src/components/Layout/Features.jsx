import React from "react";

const Features = () => {
  return (
    <section className="flex flex-col items-center justify-center">
      <div>
        <div
          className="w-[768px] h-[172px] gap-[30px] flex
      flex-col items-center justify-center"
        >
          <div className="flex w-[243px] h-[40px] border rounded-[33554428px] bg-gradient-to-r from-[#DBEAFE] to-[#E0E7FF] items-center justify-center">
            <img src="public\images\⚡.png" alt="" />
            <p>Features</p>
          </div>
          <div className=" w-[768px] h-[102px] gap-[8px] mb-[30px]">
            <h1 className="font-bold text-[36px] leading-[39.6px] tracking-[-0.9px] text-center ">
              Powerful{" "}
              <span className="bg-gradient-to-r from-[#155DFC] via-[#4F39F6] to-[#9810FA] bg-clip-text text-transparent font-bold text-3xl">
                AI Features
              </span>
            </h1>
            <p className="font-[400px] text-[18px] leading-[150%] tracking-[-0.16px] text-center">
              Discover the advanced capabilities of our Al assistant that help
              you work smarter, create better content, and solve complex
              problems.
            </p>
          </div>
        </div>
      </div>

      
 <div className="w-full max-w-[1120px] mx-auto grid gap-6">
  {/* First row - 3 cards */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Card 1 */}
    <div className="flex flex-col items-start border rounded-[10px] px-6 py-4 gap-3 bg-[#FBF6F6]">
      <div className="bg-[#F6339A] flex justify-center items-center w-10 h-10 rounded-full mb-6">
        <img className="w-[21px] h-[24px]" src="public/images/Security, Safety, Warranty, Guaranted.png" alt="" />
      </div>
      <h2 className="font-semibold">Smart Research Assistant</h2>
      <p>Access web search, PDF analysis, and solve complex problems with detailed explanations.</p>
    </div>

    {/* Card 2 */}
    <div className="flex flex-col items-start border rounded-[10px] px-6 py-4 gap-3 bg-[#FBF6F6]">
      <div className="bg-[#00bc7d] flex justify-center items-center w-10 h-10 rounded-full mb-6">
        <img className="w-[21px] h-[24px]" src="public/images/Security, Safety, Warranty, Guaranted (2).png" alt="" />
      </div>
      <h2 className="font-semibold">Undetectable AI Writing</h2>
      <p>Create human-like content with 0% AI detection score on academic integrity checks.</p>
    </div>

    {/* Card 3 */}
    <div className="flex flex-col items-start border rounded-[10px] px-6 py-4 gap-3 bg-[#FBF6F6]">
      <div className="bg-[#00A6F4] flex justify-center items-center w-10 h-10 rounded-full mb-6">
        <img className="w-[21px] h-[24px]" src="public/images/Security, Safety, Warranty, Guaranted (1).png" alt="" />
      </div>
      <h2 className="font-semibold">Creative & Technical Expert</h2>
      <p>Optimize code, and get guidance for creative and technical projects.</p>
    </div>
  </div>

  {/* Second row - 2 centered cards */}
  <div className="flex justify-center flex-wrap gap-6">
    {/* Card 4 */}
    <div className="flex flex-col items-start border rounded-[10px] px-6 py-4 gap-3 bg-[#FBF6F6] w-[356px]">
      <div className="bg-[#E3C208] flex justify-center items-center w-10 h-10 rounded-full mb-6">
        <img className="w-[21px] h-[24px]" src="public/images/zondicons_conversation.png" alt="" />
      </div>
      <h2 className="font-semibold">Real-Time Conversations</h2>
      <p>Engage with users instantly, providing accurate responses and solutions in real-time.</p>
    </div>

    {/* Card 5 */}
    <div className="flex flex-col items-start border rounded-[10px] px-6 py-4 gap-3 bg-[#FBF6F6] w-[356px]">
      <div className="bg-[#DA1D1D] flex justify-center items-center w-10 h-10 rounded-full mb-6">
        <img className="w-[21px] h-[24px]" src="public/images/qlementine-icons_swap-16.png" alt="" />
      </div>
      <h2 className="font-semibold">Personalized Interactions</h2>
      <p>Tailor responses based on user preferences, history, and context for a customized experience.</p>
    </div>
  </div>
</div>

    </section>
  );
};

export default Features;
