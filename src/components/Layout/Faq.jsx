import React, { useState } from "react";

const faqs = [
  {
    question: "What is Vliol AI?",
    answer:
      "Vliol AI Assistant is designed with a unique focus on creating human-like content. Unlike other AI tools that often produce robotic or formulaic text, Vliol incorporates nuance, variance, and authentic human touches to create content that truly connects with readers.",
  },
  {
    question: "How accurate is the AI Score detection?",
    answer:
      "Our AI score detection is built with advanced algorithms to ensure accuracy, though no system is 100% perfect. We continuously update our models to improve detection reliability.",
  },
  {
    question: "Can Vliol AI help with bypassing AI detection?",
    answer:
      "Yes. Vliol AI enhances your text to sound more natural and human-like, making it harder for AI detectors to flag your content.",
  },
  {
    question: "Do I need technical skills to use Vliol AI?",
    answer:
      "Not at all! Vliol AI is designed with a simple, user-friendly interface so anyone can get started without technical expertise.",
  },
  {
    question: "How does the Vliol AI Assistant differ from other AI tools?",
    answer:
      "Unlike other AI tools that often produce formulaic text, Vliol AI focuses on nuance and human-like writing that engages readers effectively.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-6 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <span className="px-4 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
          ⚡ FAQ
        </span>
        <h2 className="text-3xl md:text-4xl font-bold mt-4">
          Frequently Asked <span className="text-purple-600">Questions</span>
        </h2>
        <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
          Find answers to the most common questions about our platform and how
          it can help you succeed.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="max-w-3xl mx-auto divide-y divide-gray-200">
        {faqs.map((faq, index) => (
          <div key={index} className="py-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <span className="text-lg font-medium text-gray-800">
                {faq.question}
              </span>
              <span className="text-purple-600 text-xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {openIndex === index && (
              <p className="mt-3 text-gray-600">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
