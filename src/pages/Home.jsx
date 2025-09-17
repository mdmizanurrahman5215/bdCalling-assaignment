import React from "react";

import Hero from "../components/Layout/Hero";
import Features from "../components/Layout/Features";
import GptInsight from "../components/Layout/GptInsight";
import Works from "../components/Layout/Works";
import Pricing from "./Pricing";
import Feedback from "../components/Layout/FeedBack";
import Faq from "../components/Layout/Faq";

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features />
      <GptInsight />
      <Works />
      <Pricing />
      <Feedback />
      <Faq />
    </div>
  );
};

export default Home;
