import React from 'react';
import { FiCheck } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const PricingFeature = ({ included = true, text, subtext = '' }) => {
  return (
    <div className="flex items-start mb-4">
      <div className="mt-0.5 mr-3">
        {included ? (
          <span className="flex items-center justify-center w-5 h-5 bg-blue-50 rounded-full">
            <FiCheck className="text-blue-500" size={12} />
          </span>
        ) : (
          <span className="flex items-center justify-center w-5 h-5 bg-gray-100 rounded-full">
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
          </span>
        )}
      </div>
      <div>
        <p className="text-sm text-gray-800 font-medium">{text}</p>
        {subtext && <p className="text-xs text-gray-500 mt-0.5">{subtext}</p>}
      </div>
    </div>
  );
};

const PricingCard = ({ popular, title, description, price, period, features, buttonText, buttonLink }) => {
  return (
    <div className={`bg-white rounded-lg border ${popular ? 'border-gray-200 shadow-sm bg-blue-50/5' : 'border-gray-200'} relative flex flex-col h-full`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-violet-500 text-white text-xs px-3 py-1 rounded-full font-medium">
            Popular
          </span>
        </div>
      )}
      
      <div className="p-6">
        <h3 className="text-lg font-bold text-gray-900 mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-6 leading-relaxed">{description}</p>
      
        <div className="mb-6">
          <div className="flex items-baseline">
            <span className="text-3xl font-bold text-gray-900">{price}</span>
            {period && <span className="text-gray-600 ml-2 text-sm">{period}</span>}
          </div>
          {price !== 'Free' && <p className="text-xs text-gray-500 mt-1">Billed monthly, cancel anytime</p>}
          {price === 'Free' && <p className="text-xs text-gray-500 mt-1">No credit card required</p>}
        </div>
      </div>
      
      <div className="px-6">
        {features.map((feature, index) => (
          <PricingFeature 
            key={index}
            included={feature.included !== false}
            text={feature.text}
            subtext={feature.subtext}
          />
        ))}
      </div>
      
      <div className="px-6 pb-6 mt-auto">
        <Link 
          to={buttonLink}
          className={`w-full py-2.5 rounded-full text-center font-medium block ${
            popular
              ? 'bg-violet-500 text-white hover:bg-violet-600'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
          } transition-colors`}
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

const Pricing = ({hideHeader}) => {
  const freePlanFeatures = [
    {
      text: "10 daily prompt generations",
      subtext: "Generated with quick prompt or the builder"
    },
    {
      text: "Standard intelligence model",
      subtext: "Generate prompts with standard complexity"
    },
    {
      text: "Base context only",
      subtext: "Add personal details to guide prompter"
    },
    {
      text: "Standard templates",
      subtext: "Access to basic prompt templates"
    },
    {
      text: "Save your best prompt creations",
      subtext: "Easily access all of your best prompts"
    }
  ];

  const proPlanFeatures = [
    {
      text: "100 daily prompt generations",
      subtext: "Generated with quick prompt or the builder"
    },
    {
      text: "Highest intelligence model",
      subtext: "Generate prompts with higher detail"
    },
    {
      text: "Unlimited context with Projects",
      subtext: "Add personal details and project context to guide prompter"
    },
    {
      text: "Apply your context to templates",
      subtext: "Automatically customize any template with your personal or project context"
    },
    {
      text: "Save your best prompt creations",
      subtext: "Easily access all of your best prompts"
    }
  ];

  return (
    <div className="bg-white py-12 px-4 min-h-[calc(100vh-64px)] mt-15">
      <div className="container-custom mx-auto">
        {/* Header */}
        {!hideHeader && ( <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Pricing</h1>
          <p className="text-gray-600 max-w-md mx-auto text-sm">
            Start free, upgrade when you're ready. No hidden fees.
          </p>
        </div> )}
        
        {/* Pricing Cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <PricingCard
            title="Prompter Free"
            description="Explore AI with limited daily access — perfect for testing the waters."
            price="Free"
            features={freePlanFeatures}
            buttonText="Get Started Free"
            buttonLink="/auth/signup"
          />
          
          <PricingCard
            popular={true}
            title="Prompter Pro"
            description="High limit daily prompt generations, project context, and advanced features for everyday power users."
            price="$10"
            period="per month"
            features={proPlanFeatures}
            buttonText="Get Prompter Pro"
            buttonLink="/auth/signup?plan=pro"
          />
        </div>
      </div>
    </div>
  );
};

export default Pricing;